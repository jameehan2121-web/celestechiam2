interface Env {
  RESEND_API_KEY: string;
  RECIPIENT_EMAIL?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  type: "lesson" | "playshop" | "creativity_coaching" | "teacher_training" | "general";
  message: string;
}

const inquiryTypeLabels: Record<ContactFormData["type"], string> = {
  lesson: "Piano Lessons",
  playshop: "Playshop / Workshop",
  creativity_coaching: "Creativity Consultation & Coaching",
  teacher_training: "Training for Music Teachers",
  general: "General Inquiry",
};

function validateContactForm(data: unknown): ContactFormData {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid request body");
  }

  const { name, email, type, message } = data as Record<string, unknown>;

  if (typeof name !== "string" || name.length < 2) {
    throw new Error("Name must be at least 2 characters");
  }

  if (typeof email !== "string" || !email.includes("@")) {
    throw new Error("Invalid email address");
  }

  const validTypes = ["lesson", "playshop", "creativity_coaching", "teacher_training", "general"];
  if (typeof type !== "string" || !validTypes.includes(type)) {
    throw new Error("Invalid inquiry type");
  }

  if (typeof message !== "string" || message.length < 10) {
    throw new Error("Message must be at least 10 characters");
  }

  return {
    name,
    email,
    type: type as ContactFormData["type"],
    message,
  };
}

async function sendEmailViaResend(
  env: Env,
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const recipientEmail = env.RECIPIENT_EMAIL || "celeste.pianist@gmail.com";

  const emailPayload = {
    from: "Contact Form <onboarding@resend.dev>",
    to: [recipientEmail],
    subject: `New ${inquiryTypeLabels[data.type]} Inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryTypeLabels[data.type]}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
    reply_to: data.email,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Resend API error:", errorData);
    return { success: false, error: "Failed to send email" };
  }

  return { success: true };
}

export async function handleContactRequest(
  requestBody: unknown,
  env: Env
): Promise<Response> {
  try {
    const validatedData = validateContactForm(requestBody);
    const result = await sendEmailViaResend(env, validatedData);

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error || "Failed to send email" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Invalid request";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await request.json();
    const response = await handleContactRequest(body, env);
    
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON body" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return onRequest({ request, env });
  },
};

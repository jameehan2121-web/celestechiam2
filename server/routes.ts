import type { Express } from "express";
import { createServer, type Server } from "http";
import { handleContactRequest } from "./email-handler";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const env = {
      RESEND_API_KEY: process.env.RESEND_API_KEY || "",
      RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL || "celeste.pianist@gmail.com",
    };

    const response = await handleContactRequest(req.body, env);
    const responseBody = await response.json();

    res.status(response.status).json(responseBody);
  });

  const httpServer = createServer(app);

  return httpServer;
}

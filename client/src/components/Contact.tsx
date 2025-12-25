import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Instagram, Linkedin, Phone, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  type: z.enum(["lesson", "playshop", "creativity_coaching", "teacher_training", "general"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "general",
      message: "",
    },
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('contact?type=')) {
        const typeParam = hash.split('type=')[1];
        const validTypes = ["lesson", "playshop", "creativity_coaching", "teacher_training", "general"];
        if (validTypes.includes(typeParam)) {
          form.setValue("type", typeParam as any);
        }
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [form]);

  const sendEmailMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. Celeste will get back to you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact directly via email.",
        variant: "destructive",
      });
      console.error("Email send error:", error);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmailMutation.mutate(values);
  }

  return (
    <section id="contact" className="py-24 bg-purple-100 text-foreground relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 text-foreground font-bold">Let's Connect</h2>
            <p className="text-foreground/80 text-lg font-light mb-12 max-w-md leading-relaxed">
              Whether you're looking to start piano lessons, join a Playshop, or collaborate on a creative project, I'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-300/40 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/60">Email</p>
                  <p className="text-lg font-serif text-foreground">celeste.pianist@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-300/40 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/60">Phone</p>
                  <p className="text-lg font-serif text-foreground">(650) 308-4981</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-300/40 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/60">Studio</p>
                  <p className="text-lg font-serif text-foreground">Mountain View, CA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-foreground/30 text-foreground hover:bg-purple-300 hover:text-purple-900">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-foreground/30 text-foreground hover:bg-purple-300 hover:text-purple-900">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="bg-background p-8 md:p-10 rounded-sm text-foreground">
            <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-muted/30 border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="bg-muted/30 border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inquiry Type</FormLabel>
                      <FormControl>
                        <select
                          className="flex h-9 w-full rounded-md border border-border bg-muted/30 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="lesson">Piano Lessons</option>
                          <option value="playshop">Playshop / Workshop</option>
                          <option value="creativity_coaching">Creativity Consultation & Coaching</option>
                          <option value="teacher_training">Training for Music Teachers</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can I help you?" className="min-h-[120px] bg-muted/30 border-border" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-purple-400 text-purple-900 hover:bg-purple-500 py-6 uppercase tracking-widest text-sm font-bold"
                  disabled={sendEmailMutation.isPending}
                  data-testid="button-send-contact"
                >
                  {sendEmailMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

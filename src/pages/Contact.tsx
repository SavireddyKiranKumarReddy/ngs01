import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-glow opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-primary text-glow">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our platform or services? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Let's Start a <span className="text-primary">Conversation</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in our training platform, need enterprise 
                security services, or want to partner with us, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:contact@nxtgensec.org" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@nxtgensec.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <span className="text-muted-foreground">+91 (800) 123-4567</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <span className="text-muted-foreground">
                      Bangalore, Karnataka, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Discord</h3>
                    <span className="text-muted-foreground">
                      Join our community for real-time support
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl bg-card border border-border/50">
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      required 
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      required 
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-secondary/50 border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help?" 
                    required 
                    className="bg-secondary/50 border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                    required 
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="neon" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

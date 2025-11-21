import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Thank you for reaching out! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-3 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">
            Let's connect
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 border border-border/30">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-foreground">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-border/30 focus:border-border transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-border/30 focus:border-border transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="border-border/30 focus:border-border transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-light tracking-wide py-5 transition-all duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

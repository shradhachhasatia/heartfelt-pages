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

    // Using mailto as a simple solution
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:draftsofheart@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast.success("Opening your email client...");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-center tracking-tight">
            contact
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-base font-light">
            let's connect
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card/80 backdrop-blur-sm p-10 md:p-12 border border-border/40 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-500">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-foreground font-light tracking-wide">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white dark:bg-white border border-muted-foreground/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground dark:text-black placeholder:text-muted-foreground dark:placeholder:text-gray-500 transition-all duration-300 h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-foreground font-light tracking-wide">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white dark:bg-white border border-muted-foreground/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground dark:text-black placeholder:text-muted-foreground dark:placeholder:text-gray-500 transition-all duration-300 h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-foreground font-light tracking-wide">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white dark:bg-white border border-muted-foreground/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground dark:text-black placeholder:text-muted-foreground dark:placeholder:text-gray-500 resize-none transition-all duration-300"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 text-primary-foreground font-light tracking-wide py-6 transition-all duration-300 mt-8"
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

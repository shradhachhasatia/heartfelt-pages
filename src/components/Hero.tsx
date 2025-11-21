import { Instagram, Music, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: BookOpen, href: "#", label: "Pinterest" },
    { icon: BookOpen, href: "#", label: "Goodreads" },
    { icon: Music, href: "#", label: "Music" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-medium mb-6 text-foreground">
            aaradhya
          </h1>
          <div className="h-1 w-24 bg-accent mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground font-light italic mb-12">
            lover of all things literary
          </p>
          
          <div className="flex gap-4" style={{ animationDelay: "0.4s" }}>
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-2 hover:bg-accent hover:border-accent transition-all duration-300"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-light tracking-wider">SCROLL</span>
          <div className="h-8 w-[1px] bg-muted-foreground/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

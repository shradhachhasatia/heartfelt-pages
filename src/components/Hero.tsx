import { Instagram, Music2, BookOpen, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", name: "instagram" },
    { icon: LinkIcon, href: "https://pinterest.com", label: "Pinterest", name: "pinterest" },
    { icon: BookOpen, href: "https://goodreads.com", label: "Goodreads", name: "goodreads" },
    { icon: Music2, href: "https://spotify.com", label: "Music", name: "music" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-2xl w-full text-center md:text-left">
        <h1 className="text-6xl md:text-7xl font-serif mb-3 text-foreground">
          aaradhya
        </h1>
        <div className="h-0.5 w-20 bg-foreground mb-6 mx-auto md:mx-0" />
        <p className="text-lg md:text-xl text-muted-foreground italic mb-8">
          lover of all things literary
        </p>
        
        <div className="flex gap-3 justify-center md:justify-start">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className="h-11 w-11 border-foreground/20 hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300"
              asChild
            >
              <a 
                href={social.href} 
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

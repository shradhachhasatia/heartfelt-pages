import { FaInstagram, FaPinterest, FaGoodreads, FaSpotify } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/draftsofheart?igsh=MTByeGc2dGkwZW8xeA==", label: "Instagram", name: "instagram" },
    { icon: FaPinterest, href: "https://pin.it/4dsSOfba5", label: "Pinterest", name: "pinterest" },
    { icon: FaGoodreads, href: "https://www.goodreads.com/user/show/194221783-aaradhya", label: "Goodreads", name: "goodreads" },
    { icon: SiSubstack, href: "https://substack.com/@draftsofheart?r=6a5tn9&utm_medium=ios&utm_source=profile", label: "Substack", name: "substack" },
    { icon: FaSpotify, href: "https://open.spotify.com/user/31j45xuugijhcgfa633t22ghqfge?si=vo_Dte0GS_GLiv_IICeZ4w", label: "Spotify", name: "spotify" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background px-6 py-20">
      <div className="max-w-2xl w-full text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-serif mb-6 text-foreground tracking-tight">
          aaradhya
        </h1>
        <div className="h-0.5 w-24 bg-foreground mb-8 mx-auto md:mx-0" />
        <p className="text-xl md:text-2xl text-muted-foreground italic mb-12 font-light">
          lover of all things literary
        </p>
        
        <div className="flex gap-4 justify-center md:justify-start">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className="h-12 w-12 border-foreground/20 hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300"
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

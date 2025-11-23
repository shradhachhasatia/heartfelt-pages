import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-serif text-sm md:text-base text-foreground/60 hover:text-foreground transition-colors duration-300"
        >
          drafts of heart
        </button>

        <div className="flex items-center gap-4 md:gap-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("excerpts")}
            className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors duration-300 px-4 md:px-6"
          >
            POETRY
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors duration-300 px-4 md:px-6"
          >
            ABOUT
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors duration-300 px-4 md:px-6"
          >
            CONTACT
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

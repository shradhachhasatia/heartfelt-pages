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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-serif text-2xl font-medium text-foreground hover:text-accent transition-colors duration-300"
        >
          drafts of heart
          <div className="h-[2px] w-16 bg-accent mt-1 rounded-full" />
        </button>

        <div className="flex items-center gap-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("excerpts")}
            className="font-light tracking-wide hover:text-accent transition-colors duration-300"
          >
            POETRY
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="font-light tracking-wide hover:text-accent transition-colors duration-300"
          >
            ABOUT
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="font-light tracking-wide hover:text-accent transition-colors duration-300"
          >
            CONTACT
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

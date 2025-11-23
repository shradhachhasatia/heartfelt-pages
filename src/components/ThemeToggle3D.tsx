import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle3D = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    if (newTheme === theme) return;
    
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="fixed top-24 right-6 z-50">
      <div className="relative flex items-center gap-1.5 bg-card/95 backdrop-blur-md border border-border/60 rounded-full p-1 shadow-lg">
        {/* Sliding background indicator */}
        <div
          className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-md transition-all duration-300 ease-out"
          style={{
            left: theme === "light" ? "4px" : "calc(50% + 0px)",
            transform: theme === "light" ? "none" : "translateX(0)",
          }}
        />

        <button
          onClick={() => toggleTheme("light")}
          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            theme === "light"
              ? "text-primary-foreground scale-105"
              : "text-muted-foreground hover:text-foreground hover:scale-105"
          }`}
          style={{
            transform: theme === "light" ? "translateZ(20px)" : "translateZ(0)",
            transformStyle: "preserve-3d",
          }}
          aria-label="Light mode"
        >
          <Sun className={`w-4 h-4 transition-all duration-300 ${theme === "light" ? "rotate-0" : "rotate-90"}`} />
        </button>
        
        <button
          onClick={() => toggleTheme("dark")}
          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            theme === "dark"
              ? "text-primary-foreground scale-105"
              : "text-muted-foreground hover:text-foreground hover:scale-105"
          }`}
          style={{
            transform: theme === "dark" ? "translateZ(20px)" : "translateZ(0)",
            transformStyle: "preserve-3d",
          }}
          aria-label="Dark mode"
        >
          <Moon className={`w-4 h-4 transition-all duration-300 ${theme === "dark" ? "rotate-0" : "-rotate-90"}`} />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle3D;

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="fixed top-24 right-6 z-50">
      <div className="flex items-center gap-3 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg">
        <button
          onClick={() => toggleTheme("light")}
          className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
            theme === "light"
              ? "bg-primary text-primary-foreground shadow-md scale-105"
              : "bg-transparent text-muted-foreground hover:bg-muted/50"
          }`}
          aria-label="Light mode"
        >
          <Sun className="w-5 h-5 transition-transform group-hover:rotate-12" />
          {theme === "light" && (
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          )}
        </button>
        
        <button
          onClick={() => toggleTheme("dark")}
          className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
            theme === "dark"
              ? "bg-primary text-primary-foreground shadow-md scale-105"
              : "bg-transparent text-muted-foreground hover:bg-muted/50"
          }`}
          aria-label="Dark mode"
        >
          <Moon className="w-5 h-5 transition-transform group-hover:-rotate-12" />
          {theme === "dark" && (
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Excerpts from "@/components/Excerpts";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-500">
      <Navbar />
      <ThemeToggle />
      <div id="hero">
        <Hero />
      </div>
      <Excerpts />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

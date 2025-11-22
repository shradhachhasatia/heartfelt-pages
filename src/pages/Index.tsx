import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PoetryCarousel from "@/components/PoetryCarousel";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle3D from "@/components/ThemeToggle3D";

const Index = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <ThemeToggle3D />
      <div id="hero">
        <Hero />
      </div>
      <PoetryCarousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

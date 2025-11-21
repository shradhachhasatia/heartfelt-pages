import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Excerpts from "@/components/Excerpts";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
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

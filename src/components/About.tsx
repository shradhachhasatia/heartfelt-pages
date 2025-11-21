import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-medium mb-16 text-center">
            About
          </h2>

          <Card className="p-8 md:p-12 bg-card border-2 border-border">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Welcome to my literary haven. Here, I capture fragments of emotion, 
                fleeting moments, and the quiet beauty found in everyday life.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Through poetry and prose, I explore the depths of human connection, 
                the ache of memory, and the tender spaces between words left unsaid.
              </p>
              <p className="text-lg text-muted-foreground italic text-center mt-8">
                ps i love you.
              </p>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground font-light tracking-wide">
              photograph here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

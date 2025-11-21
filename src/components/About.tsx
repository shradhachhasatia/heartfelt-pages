const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            About
          </h2>

          <div className="bg-card p-8 md:p-10 border border-border/30">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              add about
            </p>
            <p className="text-sm text-muted-foreground italic mt-6">
              ps i love you.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground">
              photograph here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

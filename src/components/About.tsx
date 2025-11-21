const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-16 tracking-tight">
            about
          </h2>

          <div className="bg-card p-10 md:p-12 border border-border/30">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-light">
              add about
            </p>
            <p className="text-base text-muted-foreground italic mt-8 font-light">
              ps i love you.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-sm text-muted-foreground font-light">
              photograph here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

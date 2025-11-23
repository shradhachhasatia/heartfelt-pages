const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-16 tracking-tight text-center">
            about
          </h2>

          <div className="grid md:grid-cols-[1fr,300px] gap-12 items-center">
            <div className="bg-card p-10 md:p-12 border border-border/30">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-light">
                add about
              </p>
              <p className="text-base text-muted-foreground italic mt-8 font-light">
                ps i love you.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-muted/20 border border-border/30 flex items-center justify-center overflow-hidden">
                <p className="text-sm text-muted-foreground font-light">
                  photograph here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

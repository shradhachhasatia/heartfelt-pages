import { Card } from "@/components/ui/card";

const excerpts = [
  {
    text: "i think i find god in groceries that we unpack and religion in the silence between us. i have a hundred speeches in my head that fail to come to words when you call me your love.",
    date: "may 2025",
    number: "01",
  },
  {
    text: "like a rogue river, our feelings unfold. it is messy and not designed in a way one would like. ferocious screams and muffled cries.",
    date: "sep 2023",
    number: "02",
  },
  {
    text: "you've painted all my skies a deep shade of blue and melancholy that doesn't wash away after eternal rain. i spite my nose, now that my friend says yours and mine are the same.",
    date: "aug 2025",
    number: "03",
  },
  {
    text: "in my peripheral vision, i can see us dancing on some jazz music you used to listen. the rear view mirror holds every memory of us. it haunts like a feverish dream.",
    date: "april 2025",
    number: "04",
  },
];

const Excerpts = () => {
  return (
    <section id="excerpts" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-medium mb-16 text-center">
            Excerpts
          </h2>

          <div className="space-y-8">
            {excerpts.map((excerpt, index) => (
              <Card
                key={index}
                className="group p-8 md:p-12 bg-card border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-serif text-muted-foreground/30 group-hover:text-accent transition-colors duration-300">
                    {excerpt.number}
                  </span>
                  <div className="flex-1 space-y-4">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                      "{excerpt.text}"
                    </p>
                    <p className="text-sm text-muted-foreground font-light tracking-wider uppercase">
                      {excerpt.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excerpts;

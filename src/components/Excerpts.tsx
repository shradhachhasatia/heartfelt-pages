import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const excerpts = [
  {
    text: "i think i find god in groceries that we unpack and religion in the silence between us. i have a hundred speeches in my head that fail to come to words when you call me your love.",
    date: "may 2025",
  },
  {
    text: "like a rogue river, our feelings unfold. it is messy and not designed in a way one would like. ferocious screams and muffled cries.",
    date: "sep 2023",
  },
  {
    text: "you've painted all my skies a deep shade of blue and melancholy that doesn't wash away after eternal rain. i spite my nose, now that my friend says yours and mine are the same.",
    date: "aug 2025",
  },
  {
    text: "in my peripheral vision, i can see us dancing on some jazz music you used to listen. the rear view mirror holds every memory of us. it haunts like a feverish dream.",
    date: "april 2025",
  },
];

const ExcerptCard = ({ excerpt, index }: { excerpt: typeof excerpts[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card p-8 md:p-10 border border-border/30 hover:border-border/60 transition-all duration-300"
    >
      <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
        "{excerpt.text}"
      </p>
      <p className="text-xs text-muted-foreground font-light tracking-wider uppercase">
        {excerpt.date}
      </p>
    </motion.div>
  );
};

const Excerpts = () => {
  return (
    <section id="excerpts" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif mb-20 text-center tracking-tight">
          poetry
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {excerpts.map((excerpt, index) => (
            <ExcerptCard key={index} excerpt={excerpt} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excerpts;

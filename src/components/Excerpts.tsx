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
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-card/50 backdrop-blur-sm p-8 md:p-10 border border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6 font-serif">
          "{excerpt.text}"
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground font-light tracking-wider uppercase">
            {excerpt.date}
          </p>
          <div className="w-8 h-px bg-gradient-to-r from-primary/0 to-primary/50 group-hover:to-primary transition-all duration-500" />
        </div>
      </div>
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

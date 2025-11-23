import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const PoetryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = excerpts.length - 1;
      if (nextIndex >= excerpts.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="excerpts" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif mb-20 text-center tracking-tight">
          poetry
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* 3D Carousel Container */}
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  rotateY: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="h-full bg-card/80 backdrop-blur-md border-2 border-border/50 rounded-lg p-10 md:p-16 shadow-2xl flex flex-col justify-center items-center relative overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <p className="text-xl md:text-2xl text-foreground leading-relaxed italic mb-8 font-serif">
                      {excerpts[currentIndex].text}
                    </p>
                    <p className="text-sm text-muted-foreground font-light tracking-wider uppercase">
                      {excerpts[currentIndex].date}
                    </p>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {excerpts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-primary"
                    : "w-3 h-3 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to excerpt ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoetryCarousel;

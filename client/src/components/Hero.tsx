import { motion } from "framer-motion";
import heroImage from "@assets/Screenshot 2025-11-24 at 3.07.59 PM_1764025683693.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-background/0 to-background/20 z-10" />
        <img
          src={heroImage}
          alt="Celeste Chiam"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>

      <div className="container relative z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 mt-80 md:mt-56 tracking-tight [text-shadow:_0_2px_10px_rgb(255_255_255_/_50%),_0_4px_20px_rgb(255_255_255_/_50%),_0_0_40px_rgb(255_255_255_/_45%)]">
            Dr. Celeste Chiam
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-muted-foreground font-normal leading-relaxed mb-8 mt-4 bg-white/60 backdrop-blur-sm p-3 rounded-xl">
            Exploring the intersection of sound, creativity, and human connection.
            Inviting you to listen deeply and play freely.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#playshop"
              className="px-6 py-2 md:px-8 md:py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 uppercase tracking-wider text-xs md:text-sm"
            >
              Discover Playshop
            </a>
            <a
              href="#piano"
              className="px-6 py-2 md:px-8 md:py-4 bg-white text-foreground font-bold rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-lg uppercase tracking-wider text-xs md:text-sm"
            >
              Piano Lessons
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

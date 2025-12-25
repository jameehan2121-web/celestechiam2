import { motion } from "framer-motion";
import portrait1 from "@assets/DB1BE4F6-71A7-42DE-B555-AC5E82E8C3D9_1764025113368.jpeg";
import portrait2 from "@assets/D7409145-0B4D-49B5-BA16-34EC241E56EB_4_5005_c_1764025120052.jpeg";
import portrait3 from "@assets/9A5332B3-C2A2-4D74-8236-F1593307128C_4_5005_c_1764025137370.jpeg";
import { Instagram } from "lucide-react";

export default function Media() {
  return (
    <section id="media" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Performance & Highlights</h2>
          <p className="text-muted-foreground">A Glimpse into the Artistic Journey</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/WVWr9uyrCfs" 
                  title="Celeste Chiam Performance" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 font-serif text-center text-sm italic text-muted-foreground">Music Video</p>
            </div>

            <div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/OiWxMQr5n04" 
                  title="Celeste Chiam Performance 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 font-serif text-center text-sm italic text-muted-foreground">Highlights</p>
            </div>

            <div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/7P3qErl3tkE" 
                  title="Celeste Chiam Performance 3" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 font-serif text-center text-sm italic text-muted-foreground">Highlights</p>
            </div>

            <div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ETUA7uT_y_o" 
                  title="Celeste Chiam Performance 4" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 font-serif text-center text-sm italic text-muted-foreground">Highlights</p>
            </div>

            <div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Ylzcg7GeZ_8" 
                  title="Celeste Chiam Performance 5" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 font-serif text-center text-sm italic text-muted-foreground">Performance</p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-sm text-center flex flex-col justify-center">
              <Instagram className="w-10 h-10 mx-auto mb-4 text-[#E4405F]" />
              <h3 className="font-serif text-lg mb-2">Follow</h3>
              <p className="text-muted-foreground text-sm mb-4">Latest updates & behind-the-scenes on Instagram</p>
              <a 
                href="https://www.instagram.com/p/CRj9VfZn7EJ/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-[#E4405F] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
              >
                View on Instagram
              </a>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl border border-border text-center max-w-2xl mx-auto">
            <p className="text-lg font-serif italic text-muted-foreground">
              "Music is the silence between the notes."
            </p>
            <p className="text-xs mt-2 uppercase tracking-widest text-primary">Claude Debussy</p>
          </div>
        </motion.div>

        {/* Gallery Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="aspect-[3/4] bg-muted overflow-hidden rounded-xl relative group">
               <img 
                 src={portrait1} 
                 alt="Celeste Portrait 1" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
             <div className="aspect-[3/4] bg-muted overflow-hidden rounded-xl relative group hidden md:block">
               <img 
                 src={portrait2} 
                 alt="Celeste Portrait 2" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
             <div className="aspect-[3/4] bg-muted overflow-hidden rounded-xl relative group hidden lg:block">
               <img 
                 src={portrait3} 
                 alt="Celeste Portrait 3" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
        </div>
      </div>
    </section>
  );
}

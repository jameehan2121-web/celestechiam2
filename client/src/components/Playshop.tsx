import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Sparkles, Lightbulb, Calendar, Mail, Clock, MessageCircle, Mic } from "lucide-react";
import playshopBg from "@assets/generated_images/abstract_creative_workshop_background.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CAL_BOOKING_URL = "https://cal.com/james-rxcvpp";

const quotes = [
  {
    text: "Odd how the creative power at once brings the whole universe to order.",
    author: "Virginia Woolf",
  },
  {
    text: "The true sign of intelligence is not knowledge, but imagination.",
    author: "Albert Einstein",
  },
  {
    text: "Creativity is the power to connect the seemingly unconnected.",
    author: "William Plomer",
  },
  {
    text: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    text: "Your mind, emotions, and body are instruments, and the way you align and tune them determines how well you play life.",
    author: "Harbhajan Singh/ Yogi Bhajan",
  },
  {
    text: "Wellness is a state of mind, body, and spirit. When the three are in alignment, you feel balanced and energized.",
    author: "Donna Karan",
  },
];

export default function Playshop() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="playshop" className="relative py-32 overflow-hidden bg-secondary/10">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={playshopBg} alt="Playshop Abstract" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">The Signature Experience</span>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground">
            Creative Rejuvenation Playshop
          </h2>
        </div>

        {/* Description Content */}
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-border shadow-sm mb-20 text-center">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium mb-6">
              Creativity and play connect us to ourselves; we flow and glow with vitality when body, mind & spirit are aligned.
            </p>
            <p className="mb-6">
              Creative Rejuvenation Playshop provides a fun immersive experience of life force activation, refreshing movements & dance, creative expressions & delightful live music, led by performing artists and coaches.
            </p>
            <p className="mb-8">
              Be it for wellness, relaxation or productivity, this is an invitation to awaken creativity, integrate masculine and feminine energies, and feel galvanized by the elevated vibrations of joyful, artistic flow!
            </p>
          </div>

          {/* Playshop Options */}
          <div className="bg-secondary/20 rounded-xl p-6 mt-8 text-left">
            <h4 className="font-serif text-xl mb-4 text-foreground text-center">Customized Playshop Experiences</h4>
            <p className="text-muted-foreground mb-4 text-center">
              Each playshop is tailored to your group's needs. Options include:
            </p>
            <ul className="space-y-2 mb-6 max-w-md mx-auto">
              <li className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Small Session (1-2 hours)
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Full Day Experience
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Full Day with Live Music
              </li>
            </ul>
            <div className="text-center">
              <a 
                href="#contact?type=playshop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors uppercase tracking-wider text-xs"
                data-testid="button-inquire-playshop"
              >
                <Mail className="w-4 h-4" />
                Email for Details & Booking
              </a>
            </div>
          </div>
        </div>

        {/* Creativity Consultation & Coaching */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/20 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-primary/20 shadow-lg mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">Creativity Consultation & Coaching</h3>
          </div>
          <div className="prose prose-lg text-muted-foreground leading-relaxed mb-6">
            <p className="mb-4">
              Unlock your creative potential through personalized one-on-one coaching sessions. Whether you're an artist seeking to break through creative blocks, a professional looking to integrate creativity into your work, or simply someone wanting to reconnect with your creative spirit, Celeste offers tailored guidance to help you flourish.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 list-none pl-0">
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Creative Block Resolution
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Artistic Vision Development
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Mindfulness & Flow States
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Work-Life Creative Balance
              </li>
            </ul>
          </div>

          {/* Getting Started */}
          <div className="bg-background/60 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-primary" />
              <h4 className="font-medium text-foreground">Getting Started</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Begin with a <strong>complimentary 15-minute introductory call</strong> to discuss your goals and ensure we're the right fit for each other.
            </p>
            <a 
              href="https://cal.com/celestechiam-rxcvpp/complimentary-intro-call-creativity-coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors uppercase tracking-wider text-xs"
              data-testid="button-book-intro-call"
            >
              <Calendar className="w-4 h-4" />
              Book Free Intro Call
            </a>
          </div>

          {/* Session Pricing */}
          <div className="bg-background/60 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h4 className="font-medium text-foreground">Session Options (After Intro Call)</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://cal.com/celestechiam-rxcvpp/quick-consult-creativity-coaching" target="_blank" rel="noopener noreferrer" className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
                <p className="font-medium text-foreground">Quick Consult</p>
                <p className="text-sm text-muted-foreground">30 minutes</p>
                <p className="text-xl font-serif text-foreground mt-2">$150</p>
              </a>
              <a href="https://cal.com/celestechiam-rxcvpp/comprehensive-session-creativity-coaching" target="_blank" rel="noopener noreferrer" className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
                <p className="font-medium text-foreground">Comprehensive Session</p>
                <p className="text-sm text-muted-foreground">1 hour</p>
                <p className="text-xl font-serif text-foreground mt-2">$300</p>
              </a>
              <a href="https://cal.com/celestechiam-rxcvpp/deep-dive-creativity-coaching" target="_blank" rel="noopener noreferrer" className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
                <p className="font-medium text-foreground">Deep Dive</p>
                <p className="text-sm text-muted-foreground">2 hours</p>
                <p className="text-xl font-serif text-foreground mt-2">$600</p>
              </a>
              <a href="https://cal.com/celestechiam-rxcvpp/5-session-package-creativity-coaching" target="_blank" rel="noopener noreferrer" className="p-4 border border-primary/30 rounded-lg bg-primary/5 hover:border-primary hover:bg-primary/10 transition-colors">
                <p className="font-medium text-foreground">Customized Package</p>
                <p className="text-sm text-muted-foreground">5 x 1-hour sessions</p>
                <p className="text-xl font-serif text-foreground mt-2">$1,500</p>
              </a>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/7azxBCx9VhQ" 
              title="Creative Playshop Trailer" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/HMsi2oMpfMg" 
              title="Creative Playshop First Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Podcast & Speaking */}
        <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-md p-8 rounded-2xl border border-border shadow-sm mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mic className="w-6 h-6 text-muted-foreground" />
            <h3 className="font-serif text-xl text-foreground">Podcast & Speaking</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Interested in having Dr. Celeste Chiam as a podcast guest or speaker at your event? We'd love to hear from you.
          </p>
          <a 
            href="mailto:celeste.pianist@gmail.com?subject=Podcast%20/%20Speaking%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors uppercase tracking-wider text-xs"
            data-testid="button-inquire-podcast"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>

        {/* Words of Inspiration Carousel */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl text-center mb-10 text-foreground">Words of Inspiration</h3>
          
          <div className="bg-background border border-primary/20 rounded-2xl p-10 shadow-lg relative min-h-[250px] flex flex-col justify-center items-center text-center">
            <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                  "{quotes[currentQuote].text}"
                </p>
                <p className="text-primary font-medium uppercase tracking-wider text-sm">
                  — {quotes[currentQuote].author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-4 mt-8 absolute -bottom-6 left-1/2 -translate-x-1/2">
              <Button
                variant="default"
                size="icon"
                onClick={prevQuote}
                className="rounded-full w-12 h-12 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                onClick={nextQuote}
                className="rounded-full w-12 h-12 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

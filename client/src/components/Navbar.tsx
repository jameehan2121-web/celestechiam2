import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Piano", href: "#studio-widmung" },
    { name: "Creativity", href: "#playshop" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Media", href: "#media" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl font-medium tracking-tight hover:text-primary transition-colors cursor-pointer">
          Dr. Celeste Chiam
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="font-serif ml-4" asChild>
             <a href="https://cal.com/james-rxcvpp" target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" className="w-32" onClick={() => setIsOpen(false)} asChild>
                <a href="https://cal.com/james-rxcvpp" target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

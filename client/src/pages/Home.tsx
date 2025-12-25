import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Playshop from "@/components/Playshop";
import Testimonials from "@/components/Testimonials";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Media />
        <Testimonials />
        <Playshop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

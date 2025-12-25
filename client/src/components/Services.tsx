import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, GraduationCap, Calendar, Users, Target, Video, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import pianoImage from "@assets/IMG_0731_1766432484455.jpeg";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CAL_BOOKING_URL = "https://cal.com/james-rxcvpp";

export default function Services() {
  const [pianoSlide, setPianoSlide] = useState(0);

  const nextPianoSlide = () => setPianoSlide(1);
  const prevPianoSlide = () => setPianoSlide(0);
  return (
    <section id="piano" className="py-24 bg-background relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        
        {/* Intro / Philosophy Section */}
        <div id="studio-widmung" className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span>Heart-Centered Education</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 text-foreground">Studio Widmung</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed italic mb-8">
            "Dedication"
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Inspired by Robert Schumann's song to his wife Clara, Celeste refers to her studio as <strong>Studio Widmung</strong>. Parallel to Schumann's declaration of love, Celeste is dedicated to her life's purpose of igniting creativity, awakening artistic spirits, and empowering people through music.
          </p>
        </div>

        {/* Private Piano Lessons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Private Piano Coaching
            </h3>
            
            {/* Carousel Container */}
            <div className="relative min-h-[420px]">
              <AnimatePresence mode="wait">
                {pianoSlide === 0 ? (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="prose prose-lg text-muted-foreground mb-6">
                      <p>
                        Dr. Celeste Chiam believes that <strong>all students, regardless of age and level, inherently possess musical potential</strong>. She coaches students towards excellence through a customized curriculum catered to each individual's unique capacity and pace.
                      </p>
                      <p>
                        By her warm engagement and matching individual learning styles, Celeste eases her students' assimilation into methodical music training, producing optimal results with a thoughtful dosage of healthy challenges.
                      </p>
                    </div>

                    <div className="bg-card border border-border p-6 rounded-xl shadow-sm mb-8">
                      <h4 className="font-serif text-xl mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        The Curriculum
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Piano lessons with Celeste encompass a comprehensive musical education:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <li className="flex items-center gap-2 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Keyboard Technique
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Music Theory & History
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Musicality
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Aural Training
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm text-muted-foreground italic mb-4">
                      Private lessons are offered <strong>by referral only</strong> as short-term, goal-driven coaching intensives.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="offerings"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-card border border-border p-6 rounded-xl shadow-sm mb-8">
                      <h4 className="font-serif text-xl mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Focused Offerings
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Goal-driven instruction tailored to your specific needs:
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">Performance Ready Coaching</span>
                            <span className="text-muted-foreground ml-2">$150/hour</span>
                            <p className="text-sm text-muted-foreground mt-1">Prepare for recitals, auditions, and competitions with intensive performance coaching.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">Technique Mastery</span>
                            <span className="text-muted-foreground ml-2">$180/hour</span>
                            <p className="text-sm text-muted-foreground mt-1">Advanced technical development for pianists seeking to refine their craft.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">Small Group Master Classes</span>
                            <span className="text-muted-foreground ml-2">$90/hour (up to 3 participants)</span>
                            <p className="text-sm text-muted-foreground mt-1">Collaborative learning environment with peer feedback and performance opportunities.</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <a 
                        href="#contact?type=lesson"
                        className="px-4 py-2 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors uppercase tracking-wider text-xs inline-flex items-center gap-2 whitespace-nowrap"
                        data-testid="button-inquire-piano-lesson"
                      >
                        <Mail className="w-4 h-4" />
                        Inquire About Lessons
                      </a>
                      <a href="https://share.google/b9ScORPM3nPhuRQHG" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors uppercase tracking-wider text-xs flex items-center gap-2 whitespace-nowrap">
                        <BookOpen className="w-4 h-4" />
                        Recommended Book
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Carousel Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevPianoSlide}
                  disabled={pianoSlide === 0}
                  className="rounded-full w-10 h-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex gap-2">
                  <div className={`w-2 h-2 rounded-full transition-colors ${pianoSlide === 0 ? 'bg-primary' : 'bg-border'}`} />
                  <div className={`w-2 h-2 rounded-full transition-colors ${pianoSlide === 1 ? 'bg-primary' : 'bg-border'}`} />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPianoSlide}
                  disabled={pianoSlide === 1}
                  className="rounded-full w-10 h-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
             <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
               <img src={pianoImage} alt="Piano Keys Artistic" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
               <div className="absolute bottom-8 left-8 text-cyan-100">
                 <p className="text-lg font-serif italic mb-2">"To send light into the darkness of men's hearts - such is the duty of the artist."</p>
                 <p className="text-xs opacity-90 uppercase tracking-widest">— Robert Schumann</p>
               </div>
             </div>
             {/* Decorative offset box */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-0" />
          </motion.div>
        </div>

        {/* Training for Music Teachers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/30 to-primary/10 p-8 md:p-12 rounded-2xl border border-border shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">Training for Music Educators</h3>
          </div>
          <div className="prose prose-lg text-muted-foreground leading-relaxed mb-8">
            <p className="mb-4">
              Elevate your instructional practice through specialized professional development for music educators. Drawing on her doctoral research and extensive teaching experience, Dr. Celeste Chiam provides mentorship and pedagogical training that empowers music teachers to cultivate artistry, technical excellence, and lasting musical engagement in their students.
            </p>
            
            <p className="font-medium text-foreground mb-4">Focus Areas Include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 list-none pl-0">
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Evidence-Informed Pedagogical Best Practices
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Student-Centered Engagement and Motivational Strategies
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Curriculum Design and Instructional Planning
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Performance Preparation and Artistic Coaching Techniques
              </li>
            </ul>
          </div>

          {/* Pricing Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-foreground" />
                <h4 className="font-medium text-foreground">In-Person Training</h4>
              </div>
              <p className="text-2xl font-serif text-foreground mb-4">$200<span className="text-sm text-muted-foreground">/hour</span></p>
              <p className="text-sm text-muted-foreground mb-4">Workshops and trainings for groups or individuals</p>
              <a 
                href="https://cal.com/celestechiam-rxcvpp/in-person-training-for-music-teachers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors uppercase tracking-wider text-xs"
                data-testid="button-book-in-person-training"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </a>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Video className="w-5 h-5 text-foreground" />
                <h4 className="font-medium text-foreground">Virtual Sessions</h4>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-foreground"><span className="font-serif text-xl">$100</span> <span className="text-sm text-muted-foreground">/ 60 minutes</span></p>
                <p className="text-foreground"><span className="font-serif text-xl">$50</span> <span className="text-sm text-muted-foreground">/ 30 minutes</span></p>
              </div>
              <a 
                href="https://cal.com/celestechiam-rxcvpp/virtual-training-for-music-teachers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors uppercase tracking-wider text-xs"
                data-testid="button-book-virtual-training"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

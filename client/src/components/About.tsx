import { motion } from "framer-motion";
import { Award, GraduationCap, Music, Heart, Brain, Sparkles, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import yellowDress from "@assets/00345243-26E2-42DD-B766-3E0D6252ABC7_4_5005_c_1764024477904.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="aspect-[3/4] max-w-md w-full bg-muted overflow-hidden rounded-2xl border-4 border-purple-300/50 relative z-10">
              <img
                src={yellowDress}
                alt="Celeste Chiam Portrait"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tabs defaultValue="biography" className="w-full">
              <TabsList className="mb-8 w-full justify-start bg-transparent p-0 border-b border-border rounded-none h-auto">
                <TabsTrigger 
                  value="biography" 
                  className="rounded-none border-b-2 border-transparent px-6 py-3 font-serif text-lg data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none transition-colors"
                >
                  Biography
                </TabsTrigger>
                <TabsTrigger 
                  value="philosophy" 
                  className="rounded-none border-b-2 border-transparent px-6 py-3 font-serif text-lg data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none transition-colors"
                >
                  Philosophy & Approach
                </TabsTrigger>
              </TabsList>

              <TabsContent value="biography" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Heart-Centered Artist</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-foreground">
                  Dr. Celeste Chiam
                </h2>
                
                <div className="prose prose-lg text-muted-foreground mb-8 leading-relaxed">
                  <p className="mb-4">
                    An enthusiastic coach, educator, and performing artist whose passion for creativity spans music, dance, early education, student development, acting, and humanistic endeavors.
                  </p>
                  <p className="mb-4">
                    Born in Malaysia, Celeste began her musical journey at age four. After earning her Licentiate Performer Diploma from Trinity London College, she moved to the United States on a full scholarship, where she has since cultivated a career defined by artistic freedom and expressive depth.
                  </p>
                  <p>
                    Beyond piano and music education, Celeste is a multi-disciplinary artist trained in violin, voice, and ballet. She is expanding her platform to include podcasting, creativity consulting and coaching, pedagogical development for music instructors, and facilitating creativity playshops and retreats—inviting others to explore the exhilarating field of creative expression.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border shadow-sm mb-8">
                  <h3 className="font-serif text-xl mb-4 flex items-center gap-2 text-foreground">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                      <span className="font-medium text-foreground">Doctor of Musical Arts</span>
                      <span className="text-sm text-muted-foreground text-right">Conservatory of Music, UMKC<br/><span className="text-xs opacity-70">Studied with Jane Solose</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                      <span className="font-medium text-foreground">Master of Music</span>
                      <span className="text-sm text-muted-foreground text-right">University of Albuquerque, NM<br/><span className="text-xs opacity-70">Studied with Falko Steinbach</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                      <span className="font-medium text-foreground">Bachelor of Music</span>
                      <span className="text-sm text-muted-foreground text-right">Ithaca College, NY<br/><span className="text-xs opacity-70">Studied with Phiroze Mehta</span></span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="philosophy" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                  <Brain className="w-4 h-4" />
                  <span>Future-Proof Skills</span>
                </div>

                <h3 className="font-serif text-3xl mb-6 text-foreground">
                  Creativity: The Most Vital Skill
                </h3>

                <div className="prose prose-lg text-muted-foreground mb-8 leading-relaxed">
                  <p className="mb-6">
                    Music, arts, and dance have evolved beyond mere enrichment; they now serve as essential tools for nurturing and enhancing CREATIVITY, recognized as the most vital "future-proof" skill in today's fast-paced, AI-driven world!
                  </p>
                  
                  <p className="mb-4 font-medium text-foreground">Through music and creativity sessions, you will discover:</p>
                  <ul className="space-y-3 mb-8 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Enjoyable & effective learning through association, creative thinking, and pattern recognition.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Development of multi-layered coordination, quick thought organization, focus, and resilience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Cultivation of flow state, poise, presence, and confidence.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Activation of imagination and exploration in authentic expressions.</span>
                    </li>
                  </ul>

                   <div className="bg-secondary/50 p-6 rounded-xl border border-secondary mb-8 relative overflow-hidden">
                     <p className="italic text-foreground/80 relative z-10">
                       "A creative brain is one that can put ideas to use in unexpected ways... When most people stand on a beach and look out to the sea at the horizon, they see the end. I see the beginning."
                     </p>
                     <p className="text-sm font-bold mt-4 text-primary">— Dr. Tara Swart, The Source</p>
                   </div>

                   <div className="space-y-2">
                     <h4 className="font-serif text-xl text-foreground">New Offerings</h4>
                     <p className="text-sm">✨ Creativity Consulting and Coaching</p>
                     <p className="text-sm">✨ Pedagogy Training for Music Instructors</p>
                     <p className="text-sm">✨ Creativity Playshop</p>
                   </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

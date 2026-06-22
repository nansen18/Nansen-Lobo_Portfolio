import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Trophy, Code2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageHeader from "@/components/PageHeader";
import { fadeUp, stagger } from "@/lib/motion";

const facts = [
  { icon: GraduationCap, label: "Education", value: "BE Computer Science Engineering" },
  { icon: Sparkles, label: "College", value: "Easwari Engineering College" },
  { icon: Code2, label: "Focus", value: "Frontend · Full-Stack · AI" },
  { icon: Trophy, label: "Hackathons", value: "Winner · Runner-up" },
];

const About = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="page-container">
        <div className="section-container">
          <PageHeader eyebrow="About me" title="A builder, learner, and quiet optimist." />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-5 gap-8 items-start"
          >
            <motion.div variants={fadeUp} className="lg:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                I'm <span className="gradient-text font-semibold">Nansen Lobo J</span>, a Computer
                Science Engineering student at Easwari Engineering College — someone who fell in
                love with software the moment I realized a few lines of code could solve a real
                person's problem.
              </p>
              <p className="text-muted-foreground">
                My world today sits at the intersection of <span className="text-foreground">frontend craft</span> and{" "}
                <span className="text-foreground">applied AI</span>. I obsess over fluid interfaces,
                accessible interactions, and stitching modern AI APIs into products that actually
                help — whether it's mental health, food waste, or guiding Gen-Z through tough
                decisions.
              </p>
              <p className="text-muted-foreground">
                Hackathons sharpened me. Shipping under pressure, debugging at 3 AM with teammates,
                presenting to judges — it taught me to design fast, simplify ruthlessly, and ship
                things people can hold. I'm still early in my journey, but I show up curious every
                day, build in public, and treat every project as a chance to level up.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="glass glass-hover rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl grid place-items-center mb-3"
                       style={{ background: "var(--gradient-primary)" }}>
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{f.label}</div>
                  <div className="text-sm font-medium text-foreground">{f.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;

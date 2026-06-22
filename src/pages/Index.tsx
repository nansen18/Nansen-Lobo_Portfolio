import { Link } from "react-router-dom";
import { ArrowDown, Download, FolderKanban, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { fadeUp, stagger } from "@/lib/motion";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="hero" particles={26} />
      <Navigation />

      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl w-full text-center"
        >
          {/* Avatar with glowing gradient border */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-70 animate-gradient"
                   style={{ background: "var(--gradient-primary)" }} />
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-[3px] animate-gradient"
                   style={{ background: "var(--gradient-primary)" }}>
                <div className="w-full h-full rounded-full bg-background grid place-items-center text-4xl md:text-5xl font-bold gradient-text">
                  NL
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-6">
            <Sparkles className="w-3 h-3 text-primary" />
            Available for internships & collaborations
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-5"
          >
            Hi, I'm <span className="gradient-text animate-gradient">Nansen Lobo J</span>{" "}
            <span className="inline-block animate-float">👋</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground mb-4">
            Computer Science Engineering Student · Frontend Developer · AI Enthusiast
          </motion.p>

          <motion.div variants={fadeUp} className="text-lg md:text-2xl font-medium mb-10 h-9 flex items-center justify-center">
            <span className="text-muted-foreground mr-2">I build with</span>
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  "React", 1600,
                  "TypeScript", 1600,
                  "Tailwind CSS", 1600,
                  "Python", 1600,
                  "AI APIs", 1600,
                  "clean code", 1600,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/projects" className="btn-primary">
              <FolderKanban className="w-4 h-4" />
              View Projects
            </Link>
            <a href="/resume.pdf" download className="btn-ghost">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <Link to="/contact" className="btn-ghost">
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#highlights"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center p-1.5"
          >
            <span className="w-1 h-2 rounded-full bg-foreground/60" />
          </motion.div>
        </motion.a>
      </main>

      {/* Quick highlights strip */}
      <section id="highlights" className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { k: "3+", v: "Live projects" },
            { k: "2", v: "Hackathon wins" },
            { k: "5+", v: "Certifications" },
            { k: "∞", v: "Curiosity" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-5 text-center">
              <div className="text-3xl md:text-4xl font-semibold gradient-text">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Learn more about me <ArrowDown className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

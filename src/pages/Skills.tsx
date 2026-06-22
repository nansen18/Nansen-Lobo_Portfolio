import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageHeader from "@/components/PageHeader";
import { fadeUp, stagger } from "@/lib/motion";

const skills = [
  { name: "HTML", level: 95, emoji: "🧱" },
  { name: "CSS", level: 92, emoji: "🎨" },
  { name: "JavaScript", level: 85, emoji: "⚡" },
  { name: "React", level: 82, emoji: "⚛️" },
  { name: "Python", level: 80, emoji: "🐍" },
  { name: "SQL", level: 70, emoji: "🗄️" },
  { name: "C++", level: 72, emoji: "💠" },
  { name: "Git & GitHub", level: 85, emoji: "🌿" },
  { name: "AI Tools", level: 88, emoji: "🤖" },
];

const Skills = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="page-container">
        <div className="section-container">
          <PageHeader
            eyebrow="Toolbox"
            title="Skills I build with"
            subtitle="A growing collection of languages, frameworks, and tools I use to ship real products."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, rotate: -0.5 }}
                className="skill-card group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="font-medium">{s.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Skills;

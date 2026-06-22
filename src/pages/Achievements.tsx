import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Brain, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageHeader from "@/components/PageHeader";

const timeline = [
  {
    year: "2025",
    icon: Trophy,
    title: "Winner — Codein Clash",
    tag: "National Hackathon",
    description: "Built MindMate, an AI-powered mental health support app, and took home the top prize.",
  },
  {
    year: "2025",
    icon: Award,
    title: "Runner-Up — KONE Elevate",
    tag: "National Hackathon",
    description: "Built SafeStep Lift, an AI-powered elevator door safety system using sensor fusion.",
  },
  {
    year: "2024",
    icon: Brain,
    title: "Career Essentials in Generative AI",
    tag: "Microsoft & LinkedIn",
    description: "Foundations of generative AI, responsible use, and integration into modern apps.",
  },
  {
    year: "2024",
    icon: GraduationCap,
    title: "Cisco Networking Certifications",
    tag: "Cisco Networking Academy",
    description: "Networking fundamentals, infrastructure, and cybersecurity essentials.",
  },
  {
    year: "2024",
    icon: BarChart3,
    title: "Power BI for Beginners",
    tag: "Data & Analytics",
    description: "Building interactive dashboards and data stories with Power BI.",
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="page-container">
        <div className="section-container">
          <PageHeader
            eyebrow="Highlights"
            title="Achievements & certifications"
            subtitle="Recognition, learning milestones, and moments worth marking."
          />

          <div className="relative pl-8 md:pl-12 max-w-3xl">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-8"
              >
                <span className="timeline-dot top-3" style={{ left: "-1.6rem" }} />
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                         style={{ background: "var(--gradient-primary)" }}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-primary/80 mb-2">{item.tag}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Achievements;

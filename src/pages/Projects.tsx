import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageHeader from "@/components/PageHeader";
import { fadeUp, stagger } from "@/lib/motion";

const projects = [
  {
    name: "MindMate",
    tagline: "Your AI mental health companion",
    description:
      "An AI-powered mental health companion with an empathetic chat buddy, mood tracking, and a reflection journal — built to make support more accessible and stigma-free.",
    tech: ["React", "AI API", "Tailwind", "Supabase"],
    live: "https://mindmate-glow-journey.vercel.app/",
    github: "https://github.com/nansen18",
    gradient: "linear-gradient(135deg, hsl(258 90% 60%), hsl(290 90% 60%))",
    initials: "MM",
  },
  {
    name: "Navyaa",
    tagline: "Gen-Z life decision GPS",
    description:
      "A personalized guidance platform that helps Gen-Z navigate big life decisions — careers, skills, mindset — with AI-powered conversations tailored to their context.",
    tech: ["React", "AI", "UX-first"],
    live: "#",
    github: "https://github.com/nansen18",
    gradient: "linear-gradient(135deg, hsl(222 90% 60%), hsl(200 90% 60%))",
    initials: "NV",
  },
  {
    name: "BazAIr",
    tagline: "AI for street food vendors",
    description:
      "An AI-powered platform for street food vendors with supplier matching, demand prediction, and inventory insights — reducing waste and boosting daily margins.",
    tech: ["AI Analytics", "Full Stack", "Business Tool"],
    live: "https://bazair-7z74bg6i6-nansens-projects.vercel.app/",
    github: "https://github.com/nansen18",
    gradient: "linear-gradient(135deg, hsl(280 90% 60%), hsl(258 90% 60%))",
    initials: "BA",
  },
  {
    name: "FreshTrack+",
    tagline: "Smart food expiry & nutrition",
    description:
      "A mobile-first food expiry and nutrition tracker that helps users manage their pantry, reduce food waste, and build healthier eating habits with smart reminders.",
    tech: ["Mobile-first", "Health Tech", "PWA"],
    live: "https://fresh-track-alpha.vercel.app/",
    github: "https://github.com/nansen18",
    gradient: "linear-gradient(135deg, hsl(160 70% 50%), hsl(200 90% 60%))",
    initials: "FT",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="page-container">
        <div className="section-container">
          <PageHeader
            eyebrow="Selected work"
            title="Projects"
            subtitle="A few things I've built recently — from AI companions to vendor tools."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((p, i) => (
              <motion.article
                key={p.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                className="project-card group flex flex-col"
              >
                {/* Banner */}
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 animate-gradient" style={{ background: p.gradient, backgroundSize: "200% 200%" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-6xl font-bold text-white/90 drop-shadow-lg">{p.initials}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold mb-1 group-hover:gradient-text transition-all">
                      {p.name}
                    </h3>
                    <p className="text-sm text-primary/80">{p.tagline}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {p.live !== "#" && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                         className="btn-primary !px-4 !py-2 text-xs">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live demo
                      </a>
                    )}
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className="btn-ghost !px-4 !py-2 text-xs">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

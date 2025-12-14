import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "MindMate",
    problem: "Mental health support is often inaccessible",
    description:
      "AI-powered mental health support application with intelligent chat, peer support, and mood tracking. Built to make mental health support more accessible.",
    tech: "AI Integration · Full Stack",
  },
  {
    name: "BazAIr",
    problem: "Food vendors struggle with waste and planning",
    description:
      "AI-driven platform to support food vendors. Focuses on reducing waste and improving planning using AI insights.",
    tech: "AI Analytics · Data-driven",
  },
  {
    name: "FreshTrack+",
    problem: "Food waste and poor nutrition tracking",
    description:
      "Smart food expiry and nutrition tracker. Encourages healthier habits and reduces food waste through intelligent reminders.",
    tech: "Mobile-first · Health Tech",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <article key={project.name} className="project-card group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {project.name}
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            
            <p className="text-sm text-primary/80 mb-3">
              {project.problem}
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">
              {project.tech}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

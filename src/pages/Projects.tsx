import { ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const projects = [
  {
    name: "MindMate",
    problem: "Mental health support is often inaccessible",
    description:
      "AI-powered mental health support application with intelligent chat, peer support, and mood tracking. Built to make mental health support more accessible and stigma-free.",
    tech: ["AI Integration", "Full Stack", "Health Tech"],
  },
  {
    name: "BazAIr",
    problem: "Food vendors struggle with waste and planning",
    description:
      "AI-driven platform to support food vendors with demand prediction and inventory management. Focuses on reducing waste and improving planning using intelligent analytics.",
    tech: ["AI Analytics", "Data-driven", "Business Tool"],
  },
  {
    name: "FreshTrack+",
    problem: "Food waste and poor nutrition tracking",
    description:
      "Smart food expiry and nutrition tracker that helps users manage their pantry, reduce food waste, and maintain healthier eating habits through intelligent reminders.",
    tech: ["Mobile-first", "Health Tech", "User-focused"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="page-container">
        <div className="section-container">
          <PageHeader 
            title="Projects" 
            subtitle="Applications I've built to solve real problems"
          />
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <article 
                key={project.name} 
                className="project-card group slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                
                <p className="text-sm text-primary/80 mb-3 font-medium">
                  {project.problem}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

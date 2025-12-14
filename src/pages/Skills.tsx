import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "Java", "Python"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Supabase", "GitHub", "VS Code", "AI Tools"],
  },
  {
    title: "AI & Development",
    skills: ["Prompt Engineering", "API Integration", "AI-powered Applications", "Full Stack Development"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="page-container">
        <div className="section-container">
          <PageHeader 
            title="Skills" 
            subtitle="Technologies and tools I work with"
          />
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-base font-medium text-foreground mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="skill-tag"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;

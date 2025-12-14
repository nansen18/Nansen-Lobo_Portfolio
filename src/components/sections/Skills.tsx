const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "Java", "Python"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Supabase", "GitHub", "AI Tools"],
  },
  {
    title: "AI & Development",
    skills: ["Prompt Engineering", "API Integration", "AI-powered Applications"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-medium text-foreground/80 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

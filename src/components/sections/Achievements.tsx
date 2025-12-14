const achievements = [
  {
    title: "Winner – Codein Clash",
    context: "National Level Hackathon",
    description: "Built MindMate, an AI-powered mental health support app",
  },
  {
    title: "Runner-Up – KONE Elevate",
    context: "National Level Hackathon",
    description:
      "Built SafeStep Lift, an AI-powered elevator door safety system using sensor fusion and real-time alerts",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Highlights</h2>
      
      <div className="space-y-6 max-w-2xl">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="border-l-2 border-border pl-5 py-1 hover:border-primary/50 transition-colors duration-200"
          >
            <h3 className="text-foreground font-medium mb-1">
              {achievement.title}
            </h3>
            <p className="text-sm text-muted-foreground/70 mb-2">
              {achievement.context}
            </p>
            <p className="text-sm text-muted-foreground">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

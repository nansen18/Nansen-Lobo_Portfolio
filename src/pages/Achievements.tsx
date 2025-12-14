import { Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const achievements = [
  {
    title: "Winner – Codein Clash",
    context: "National Level Hackathon",
    description: "Built MindMate, an AI-powered mental health support app that impressed judges with its practical approach to making mental health resources more accessible.",
    highlight: true,
  },
  {
    title: "Runner-Up – KONE Elevate",
    context: "National Level Hackathon",
    description: "Built SafeStep Lift, an innovative AI-powered elevator door safety system using sensor fusion and real-time alerts to prevent accidents.",
    highlight: false,
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="page-container">
        <div className="section-container">
          <PageHeader 
            title="Highlights" 
            subtitle="Recognition for work that matters"
          />
          
          <div className="space-y-6 max-w-2xl">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`p-6 rounded-xl border transition-all duration-300 slide-up ${
                  achievement.highlight 
                    ? "bg-accent/30 border-primary/30" 
                    : "bg-card border-border/50 hover:border-primary/30"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    achievement.highlight ? "bg-primary/20" : "bg-secondary"
                  }`}>
                    <Trophy className={`w-5 h-5 ${
                      achievement.highlight ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-primary/70 mb-3">
                      {achievement.context}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Achievements;

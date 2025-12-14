import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="page-container">
        <div className="section-container">
          <PageHeader 
            title="About Me" 
            subtitle="A bit about who I am and what drives me"
          />
          
          <div className="space-y-6 max-w-2xl slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-foreground/90 leading-relaxed text-lg">
              I'm a second-year Computer Science student with a genuine passion for 
              building things that matter. My focus lies in full-stack development 
              and AI-powered applications that solve real-world problems.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Hackathons have been instrumental in shaping my problem-solving approach. 
              They've taught me to think on my feet, collaborate effectively, and deliver 
              under pressure. Each competition is an opportunity to push my boundaries 
              and learn something new.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and improvement. Whether it's exploring 
              a new framework, diving into AI concepts, or refining my code, I'm always 
              looking for ways to grow as a developer. The journey matters as much as 
              the destination.
            </p>

            <div className="pt-6 border-t border-border/50 mt-8">
              <h3 className="text-sm font-medium text-foreground mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Second-year BE in Computer Science and Engineering, Easwari Engineering College
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Active hackathon participant
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Passionate about AI and full-stack development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

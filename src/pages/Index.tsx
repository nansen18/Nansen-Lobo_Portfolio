import { Link } from "react-router-dom";
import { User, Code, FolderKanban, Award, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";

const navItems = [
  { label: "About", href: "/about", icon: User, description: "Who I am" },
  { label: "Skills", href: "/skills", icon: Code, description: "What I use" },
  { label: "Projects", href: "/projects", icon: FolderKanban, description: "What I've built" },
  { label: "Highlights", href: "/achievements", icon: Award, description: "What I've achieved" },
  { label: "Contact", href: "/contact", icon: Mail, description: "Get in touch" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      
      <Navigation />
      
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-3xl w-full text-center fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Nansen Lobo J
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-3 max-w-xl mx-auto">
            Full Stack Developer building AI-powered applications for real-world problems.
          </p>
          <p className="text-base text-muted-foreground/60 mb-16">
            Focused on learning, building, and improving through real projects.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-card group slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <div className="text-center">
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 block">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground/60 hidden sm:block mt-1">
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/nansen18",
    icon: Github,
    description: "Check out my code",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nansen-lobo-j-a3282830a",
    icon: Linkedin,
    description: "Let's connect professionally",
  },
  {
    label: "Email",
    href: "mailto:nansenlobo80@gmail.com",
    icon: Mail,
    description: "Drop me a message",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="page-container">
        <div className="section-container">
          <PageHeader 
            title="Contact" 
            subtitle="Let's connect and build something together"
          />
          
          <div className="grid gap-4 max-w-md">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <link.icon className="w-5 h-5" />
                <div className="flex-1">
                  <span className="font-medium text-foreground block">{link.label}</span>
                  <span className="text-sm text-muted-foreground">{link.description}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-muted-foreground/60 text-sm">
              Open to opportunities, collaborations, and interesting conversations.
            </p>
            <p className="text-muted-foreground/40 text-sm mt-6">
              © {new Date().getFullYear()} Nansen Lobo J
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

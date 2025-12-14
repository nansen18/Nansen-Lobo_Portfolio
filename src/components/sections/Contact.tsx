import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact</h2>
      
      <div className="flex flex-wrap gap-8">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <link.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        ))}
      </div>
      
      <p className="text-muted-foreground/50 text-sm mt-16">
        © {new Date().getFullYear()} Nansen Lobo J
      </p>
    </section>
  );
};

export default Contact;

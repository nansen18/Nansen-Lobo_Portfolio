import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageHeader from "@/components/PageHeader";
import { toast } from "sonner";

const socials = [
  { label: "GitHub", href: "https://github.com/nansen18", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nansen-lobo-j-a3282830a", icon: Linkedin },
  { label: "Email", href: "mailto:nansenlobo80@gmail.com", icon: Mail },
];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message is a bit short").max(1000),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:nansenlobo80@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email client…");
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="page-container">
        <div className="section-container">
          <PageHeader
            eyebrow="Contact"
            title="Let's build something."
            subtitle="Have a project, an internship, or just a hello? My inbox is open."
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit(onSubmit)}
              className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-5"
            >
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                <input
                  {...register("email")}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your idea, role, or project…"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
                {sent ? <><CheckCircle2 className="w-4 h-4" /> Sent</> : <><Send className="w-4 h-4" /> Send message</>}
              </button>
            </motion.form>

            {/* Social card */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 glass rounded-3xl p-6 md:p-8 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-1">Find me online</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Prefer DMs? Reach out on any of these.
              </p>

              <div className="space-y-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition group"
                  >
                    <span className="w-10 h-10 rounded-lg grid place-items-center"
                          style={{ background: "var(--gradient-primary)" }}>
                      <s.icon className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-sm font-medium group-hover:gradient-text transition-all">{s.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 text-xs text-muted-foreground/60">
                © {new Date().getFullYear()} Nansen Lobo J — Crafted with care.
              </div>
            </motion.aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

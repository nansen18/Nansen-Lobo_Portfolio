import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mb-12 md:mb-16"
  >
    {eyebrow && (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-5">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gradient-primary)" }} />
        {eyebrow}
      </div>
    )}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
      <span className="gradient-text">{title}</span>
    </h1>
    {subtitle && (
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
    )}
  </motion.div>
);

export default PageHeader;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
          Nansen Lobo J
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
          Full Stack Developer building AI-powered applications for real-world problems.
        </p>
        <p className="text-base text-muted-foreground/70">
          Focused on learning, building, and improving through hands-on projects and hackathons.
        </p>
      </div>
    </section>
  );
};

export default Hero;

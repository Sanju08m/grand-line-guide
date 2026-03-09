import { Anchor, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/going_merry.mp4"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "var(--dark-overlay)" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Anchor className="w-5 h-5 text-primary" />
          <span className="text-primary tracking-[0.3em] text-sm font-semibold uppercase font-body">
            Set Sail for Innovation
          </span>
          <Anchor className="w-5 h-5 text-primary" />
        </div>

        <p className="text-foreground/60 tracking-[0.2em] uppercase text-sm mb-2 font-body">
          Asian College
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider leading-tight mb-2">
          <span className="text-gold-gradient">Grand Line</span>
        </h1>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-foreground mb-6">
          Tech Fest 2026
        </h2>

        <p className="text-foreground/50 tracking-[0.15em] uppercase text-xs mb-1 font-body">
          Proudly Presented by
        </p>
        <p className="text-primary tracking-[0.1em] uppercase text-sm font-semibold mb-8 font-body">
          Information Technology
        </p>

        <div className="flex items-center justify-center gap-6 text-foreground/60 text-sm mb-6 font-body">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            March 18, 2026
          </span>
          <a
            href="https://maps.app.goo.gl/eVAdYn1d2xc4XCUQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4" />
            The Grand Arena
          </a>
        </div>

        <p className="text-foreground/50 text-base max-w-xl mx-auto mb-10 font-body">
          An adventurous symposium inspired by the spirit of innovation and exploration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2Wxi3RSQhtzPoqHFi7r5bRFnuXKCnNQ55Zr-vFXK0jlhYUA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground font-display tracking-wider text-sm font-semibold rounded hover:brightness-110 transition-all"
          >
            Register Now
          </a>
          <a
            href="#events"
            className="px-8 py-3 border border-foreground/30 text-foreground font-display tracking-wider text-sm font-semibold rounded hover:border-primary hover:text-primary transition-all"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

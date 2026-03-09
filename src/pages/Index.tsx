import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import DevelopersSection from "@/components/DevelopersSection";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    // Autoplay is blocked by browsers until user interacts, so start muted
    const handleClick = () => {
      audio.play().catch(() => {});
      setMuted(false);
      document.removeEventListener("click", handleClick);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.muted = !audio.muted;
      setMuted(audio.muted);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <audio ref={audioRef} src="/audio/bg-music.mpeg" loop />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card border border-border text-foreground hover:border-primary/50 transition-all duration-300 shadow-lg"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ContactSection />
      <DevelopersSection />
      <footer className="py-8 text-center text-muted-foreground text-sm font-body border-t border-border">
        © 2026 Grand Line Tech Fest. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;

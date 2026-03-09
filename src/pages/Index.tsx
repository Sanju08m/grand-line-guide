import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import DevelopersSection from "@/components/DevelopersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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

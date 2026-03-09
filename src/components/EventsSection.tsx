import { useState } from "react";
import eventTechnical from "@/assets/event-technical.jpg";
import eventNontechnical from "@/assets/event-nontechnical.jpg";
import eventGroup from "@/assets/event-group.jpg";

const eventCategories = [
  {
    title: "Technical Events",
    emoji: "⚔️",
    image: eventTechnical,
    events: ["PPT Presentation", "Reverse Coding", "Brain Quiz", "Debugging", "UI Designing"],
  },
  {
    title: "Non-Technical Events",
    emoji: "🎭",
    image: eventNontechnical,
    events: ["Treasure Hunt", "Power Lift", "Logo Guess", "IPL Auction", "E-Sports"],
  },
  {
    title: "Group Events",
    emoji: "🏴‍☠️",
    image: eventGroup,
    events: ["Talent Show"],
  },
];

const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setActiveCategory((prev) => (prev === title ? null : title));
  };

  const activeEvents = eventCategories.find((c) => c.title === activeCategory)?.events ?? [];

  return (
    <section id="events" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-wider text-center">
          Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventCategories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => handleToggle(cat.title)}
              className={`group relative overflow-hidden rounded-lg border bg-card cursor-pointer transition-all duration-300 ${
                activeCategory === cat.title
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground tracking-wide">
                  {cat.emoji} {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 font-body">
                  {cat.events.length} {cat.events.length === 1 ? "event" : "events"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {activeCategory && (
          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 tracking-wide text-center">
              {activeCategory}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {activeEvents.map((event, i) => (
                <div
                  key={event}
                  className="rounded-lg border border-border bg-card p-5 text-center hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="text-2xl font-display text-primary">{i + 1}</span>
                  <h4 className="font-display text-sm font-semibold text-foreground mt-2 tracking-wide">
                    {event}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;

import eventTechnical from "@/assets/event-technical.jpg";
import eventNontechnical from "@/assets/event-nontechnical.jpg";
import eventGroup from "@/assets/event-group.jpg";

const events = [
  {
    title: "Technical Events",
    emoji: "⚔️",
    count: "5 events",
    image: eventTechnical,
  },
  {
    title: "Non-Technical Events",
    emoji: "🎭",
    count: "5 events",
    image: eventNontechnical,
  },
  {
    title: "Group Events",
    emoji: "🏴‍☠️",
    count: "1 event",
    image: eventGroup,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-wider text-center">
          Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground tracking-wide">
                  {event.emoji} {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 font-body">{event.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

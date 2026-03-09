import { useState } from "react";
import eventTechnical from "@/assets/event-technical.jpg";
import eventNontechnical from "@/assets/event-nontechnical.jpg";
import eventGroup from "@/assets/event-group.jpg";
import eventPpt from "@/assets/event-ppt.jpg";
import eventReverseCoding from "@/assets/event-reverse-coding.jpg";
import eventBrainQuiz from "@/assets/event-brain-quiz.jpg";
import eventDebugging from "@/assets/event-debugging.jpg";
import eventUiDesign from "@/assets/event-ui-design.jpg";
import eventTreasureHunt from "@/assets/event-treasure-hunt.jpg";
import eventPowerLift from "@/assets/event-power-lift.jpg";
import eventLogoGuess from "@/assets/event-logo-guess.jpg";
import eventIplAuction from "@/assets/event-ipl-auction.jpg";
import eventEsports from "@/assets/event-esports.jpg";
import eventTalentShow from "@/assets/event-talent-show.jpg";

interface SubEvent {
  name: string;
  image: string;
  description: string;
}

const eventCategories = [
  {
    title: "Technical Events",
    emoji: "⚔️",
    image: eventTechnical,
    events: [
      { name: "PPT Presentation", image: eventPpt, description: "Present your ideas like a captain rallying the crew. Craft compelling slides and deliver a winning presentation." },
      { name: "Reverse Coding", image: eventReverseCoding, description: "Decode the output and write the code that produces it. Think backwards like a true Grand Line navigator." },
      { name: "Brain Quiz", image: eventBrainQuiz, description: "Test your knowledge across tech and beyond. Only the sharpest minds will survive this rapid-fire quiz battle." },
      { name: "Debugging", image: eventDebugging, description: "Hunt down hidden bugs in broken code and fix them fast. Channel your inner shipwright to patch things up." },
      { name: "UI Designing", image: eventUiDesign, description: "Design stunning interfaces that capture the spirit of adventure. Creativity and aesthetics are your greatest weapons." },
    ] as SubEvent[],
  },
  {
    title: "Non-Technical Events",
    emoji: "🎭",
    image: eventNontechnical,
    events: [
      { name: "Treasure Hunt", image: eventTreasureHunt, description: "Follow cryptic clues across the venue to find the hidden treasure. Adventure awaits those who dare to explore." },
      { name: "Power Lift", image: eventPowerLift, description: "Show your raw strength in this ultimate endurance challenge. Only the mightiest pirates can conquer this trial." },
      { name: "Logo Guess", image: eventLogoGuess, description: "Identify famous logos from subtle hints and fragments. Prove your keen eye rivals that of a seasoned lookout." },
      { name: "IPL Auction", image: eventIplAuction, description: "Bid, strategize, and build the ultimate dream team. Manage your budget wisely like a pirate captain's treasure." },
      { name: "E-Sports", image: eventEsports, description: "Battle it out in competitive gaming tournaments. Dominate the digital seas and claim victory for your crew." },
    ] as SubEvent[],
  },
  {
    title: "Group Events",
    emoji: "🏴‍☠️",
    image: eventGroup,
    events: [
      { name: "Talent Show", image: eventTalentShow, description: "Showcase your crew's hidden talents on the grand stage. Sing, dance, act, or amaze — the spotlight is yours." },
    ] as SubEvent[],
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEvents.map((event) => (
                <div
                  key={event.name}
                  className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-base font-semibold text-foreground tracking-wide">
                      {event.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-2 font-body leading-relaxed">
                      {event.description}
                    </p>
                  </div>
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

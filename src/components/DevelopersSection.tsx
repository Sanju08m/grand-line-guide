import { Mail } from "lucide-react";

const developers = [
  {
    initials: "SK",
    name: "Sanjay Kumar G",
    email: "ksanjay14796@gmail.com",
  },
  {
    initials: "NK",
    name: "Nithish Kumar S",
    email: "nithishkumar080706@gmail.com",
  },
];

const DevelopersSection = () => {
  return (
    <section id="developers" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-wider text-center">
          Developers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-display font-bold text-sm shrink-0">
                {dev.initials}
              </div>
              <div className="font-body">
                <h4 className="text-foreground font-semibold">{dev.name}</h4>
                <a
                  href={`mailto:${dev.email}`}
                  className="text-muted-foreground text-sm flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  {dev.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;

import { Mail, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import sanjayImg from "@/assets/dev-sanjay.jpeg";
import nithishImg from "@/assets/dev-nithish.jpeg";

const developers = [
  {
    name: "Sanjay Kumar G",
    image: sanjayImg,
    email: "ksanjay14796@gmail.com",
    github: "https://github.com/Sanju08m",
    linkedin: "https://www.linkedin.com/in/sanju-m-2b176930b",
  },
  {
    name: "Nithish Kumar S",
    image: nithishImg,
    email: "nithishkumar080706@gmail.com",
    github: "https://github.com/Nithishkumar08072006",
    linkedin: "https://www.linkedin.com/in/nithish-kumar-19201430b",
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
            <Card key={dev.name} className="hover:border-primary/40 transition-colors">
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <img src={dev.image} alt={dev.name} className="w-16 h-16 rounded-full object-cover" />
                <h4 className="text-foreground font-semibold text-lg font-body">{dev.name}</h4>
                <div className="flex flex-col gap-2 font-body">
                  <a
                    href={`mailto:${dev.email}`}
                    className="text-muted-foreground text-sm flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {dev.email}
                  </a>
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;

import { Phone } from "lucide-react";

const contacts = {
  student: [
    { name: "Sarathi U", phone: "9025587886" },
    { name: "Keerthana G", phone: "8838570776" },
  ],
  staff: [
    { name: "Sneha N", phone: "8526382792" },
    { name: "Aravind S", phone: "9894304896" },
  ],
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-wider text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Student Coordinators */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-primary mb-6">
              Student Coordinator
            </h4>
            <div className="space-y-4">
              {contacts.student.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <div className="font-body">
                    <p className="text-foreground font-medium">{c.name}</p>
                    <p className="text-muted-foreground text-sm">{c.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Coordinators */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-primary mb-6">
              Staff Coordinator
            </h4>
            <div className="space-y-4">
              {contacts.staff.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <div className="font-body">
                    <p className="text-foreground font-medium">{c.name}</p>
                    <p className="text-muted-foreground text-sm">{c.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

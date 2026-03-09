import { useState } from "react";
import { Anchor, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
  { label: "Developers", href: "#developers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 text-primary font-display text-lg font-bold tracking-wider">
          <Anchor className="w-5 h-5" />
          GLTF 2026
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground/70 hover:text-primary transition-colors text-sm tracking-wide font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2Wxi3RSQhtzPoqHFi7r5bRFnuXKCnNQ55Zr-vFXK0jlhYUA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-primary text-primary text-sm font-semibold tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
          >
            REGISTER
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/70 hover:text-primary transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2Wxi3RSQhtzPoqHFi7r5bRFnuXKCnNQ55Zr-vFXK0jlhYUA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block px-5 py-2 rounded-full border border-primary text-primary text-sm font-semibold tracking-wider"
          >
            REGISTER
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

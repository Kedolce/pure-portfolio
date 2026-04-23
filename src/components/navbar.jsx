import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <nav className="fixed left-0 right-0 z-50 flex items-center justify-between max-w-4xl px-6 py-3 mx-auto text-white border rounded-full top-6 border-white/10 bg-black/20 backdrop-blur-md mix-blend-difference">
      
      <h1 className="text-sm font-black tracking-tighter uppercase">
        Kadek.dev
      </h1>

      <ul className="hidden gap-2 md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="px-4 py-1.5 text-[11px] uppercase tracking-widest hover:text-slate-400 transition-all">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <button 
        className="md:hidden flex flex-col gap-1.5" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 flex flex-col items-center gap-6 p-6 mt-4 border top-full bg-black/90 backdrop-blur-xl border-white/10 rounded-3xl md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-[0.3em]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

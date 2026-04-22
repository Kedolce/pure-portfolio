import Section from "../components/Section";

function Contact() {
  return (
    <Section id="contacts">
      <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-500 mb-10 md:mb-16">
        // (04)
      </p>

      <div className="flex flex-col items-start">
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-slate-400 mb-4">
          Next Step
        </h2>
        
        <a 
          href="mailto:Kedolcegocek@gmail.com" 
          className="text-5xl font-black leading-none tracking-tighter transition-all duration-500 group sm:text-7xl md:text-8xl lg:text-9xl text-slate-50 hover:text-slate-400"
        >
          GET IN <br /> 
          TOUCH <span className="transition-all group-hover:ml-4">→</span>
        </a>
      </div>

      <div className="flex flex-col justify-between gap-8 pt-10 mt-32 border-t md:flex-row border-slate-800">
        <div className="flex gap-8">
          <a href="#" className="text-xs tracking-widest uppercase transition-all text-slate-500 hover:text-slate-50 hover:scale-110">LinkedIn</a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/Kedolce" className="text-xs tracking-widest uppercase transition-all hover:scale-110 text-slate-500 hover:text-slate-50">GitHub</a>
          <a href="#" className="text-xs tracking-widest uppercase transition-all text-slate-500 hover:text-slate-50 hover:scale-110">Instagram</a>
        </div>
        
        <p className="text-[10px] font-mono text-slate-600">
          © 2026 — ALL RIGHTS RESERVED
        </p>
      </div>
    </Section>
  );
}

export default Contact;

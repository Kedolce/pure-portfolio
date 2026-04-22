import Section from "../components/Section";

function Hero() {
  return (
    <Section id="home">
      <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-500 mb-10 md:mb-16">
        // (01)
      </p>

      <h1 className="font-black leading-[0.85] tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-50 mb-10">
        LESS BUT <br />
        BETTER
      </h1>

      <div className="flex flex-row items-center max-w-6xl gap-4 leading-relaxed">
        <div className="h-[1px] w-8 md:w-10 bg-slate-400 shrink-0"></div>
        <p className="text-sm tracking-widest md:text-base text-slate-400">
          Creating meaningful web experiences through minimalist design.
        </p>
      </div>
    </Section>
  );
}

export default Hero;
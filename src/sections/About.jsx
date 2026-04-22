import aboutSection from "../assets/aboutSection.jpg"
import Section from "../components/Section";

function About() {
  return (
    <Section id="about">
      
      <div className="flex flex-col items-start w-full">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-16">
          // (02)
        </p>
        <h2 className="text-6xl font-bold tracking-tighter uppercase text-slate-50">
          Frontend Dev.
        </h2>
        <p className="mt-2 text-xs tracking-widest uppercase text-slate-400">
          Based In Indonesia
        </p>
      </div>
      
      <div className="flex justify-center my-16">
        <div className="w-full transition-all duration-700 md:w-4/5 grayscale hover:grayscale-0">
          <img 
            src={aboutSection} 
            alt="01" 
            className="object-cover w-full h-auto border border-slate-800"
          />
        </div>
      </div>
      
      <div className="flex flex-col items-end w-full">
        <div className="flex flex-col">
        <h2 className="text-5xl font-black leading-none tracking-tighter md:text-7xl text-slate-50">
          I CODE THE <br /> INVISIBLE.
        </h2>
        <p className="mt-6 font-medium tracking-widest text-slate-400">
          Minimalist by choice. <br /> 
          <span className="text-slate-600">Developer by trade.</span>
        </p>
        </div>
      </div>

    </Section>
  );
}

export default About;
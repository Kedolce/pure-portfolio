import aboutSection from "../assets/aboutSection.jpg";
import Section from "../components/Section";

const logoSkill = [
  { name: "HTML", src: "src/assets/html.svg", alt: "HTML logo" },
  { name: "CSS", src: "src/assets/css.svg", alt: "CSS logo" },
  { name: "JavaScript", src: "src/assets/js.svg", alt: "JavaScript logo" },
  { name: "React", src: "src/assets/react.png", alt: "React logo" },
  {name: "Tailwind", src: "src/assets/tailwind.png", alt: "Tailwind CSS logo"},
  {name: "Git", src: "src/assets/github.png", alt: "Git logo"},
  {name: "Figma", src: "src/assets/figma.svg", alt: "Figma logo"},
  {name: "VS Code", src: "src/assets/vscode.png", alt: "VS Code logo"},
  {name: "mySQL", src: "src/assets/mysql.svg", alt: "MySQL logo"},
  {name: "laravel", src: "src/assets/laravel.png", alt: "Laravel logo"},
  {name: "PHP", src: "src/assets/php.png", alt: "PHP logo"},
];

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

      <div className="flex flex-wrap justify-center max-w-6xl gap-6 p-10 mt-20 ">
        {logoSkill.map((logo) => (
          <div
            key={logo.name}
            className="flex flex-col items-center justify-center p-4 transition-all duration-200 border cursor-pointer w-36 rounded-xl border-white/10 bg-white/10 hover:-translate-y-1 hover:bg-white/20"
          >
            <img src={logo.src} alt={logo.alt} className="w-12 h-12 mb-4" />
            <p className="font-bold text-white/50 ">{logo.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default About;

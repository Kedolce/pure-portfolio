import Section from "../components/Section";

function Project() {
  const projectList = [
    { title: "TaskZen", year: "2026", tech: "Tailwind", url: "https://kedolce.github.io/TaskZen-Saas-/" },
    { title: "Absensi Kantor", year: "2026", tech: "Tailwind - Laravel", url: "https://github.com/Kedolce/Sistem_Absensi_Pegawai_Kantor" },
    { title: "Gradien, Coming Soon", year: "2026", tech: "ReactJS - Tailwind", url: "" }
  ];

  return (
    <Section id="projects">
      <h2 className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-16">
        Selected Works / (0{projectList.length})
      </h2>

      <div className="border-t border-slate-800">
        {projectList.map((project, index) => (
          
          <a href={project.url} target="_blank" rel="noreferrer noopener" key={index} className="flex flex-col justify-between py-12 transition-all border-b cursor-pointer group md:flex-row md:items-center border-slate-800 hover:bg-slate-50/5">
            
            <div className="flex items-center gap-6">
              <span className="font-mono text-sm text-slate-600">0{index + 1}</span>
              <h3 className="text-5xl font-bold tracking-tighter transition-all duration-500 md:text-7xl text-slate-50 group-hover:translate-x-6">
                {project.title}
              </h3>
            </div>
            
            <div className="mt-4 text-right md:mt-0">
              <p className="text-sm tracking-widest uppercase text-slate-400">
                {project.tech}
              </p>
              <p className="mt-1 font-mono text-xs italic text-slate-600">
                {project.year}
              </p>
            </div>

          </a>

        ))}
      </div>
    </Section>
  );
}

export default Project;
  
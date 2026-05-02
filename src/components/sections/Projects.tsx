import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Residencial",
    description: "Soluções sob medida para residências, reduzindo a conta de luz familiar.",
    image: "/images/project-1.png",
    color: "from-blue-500/80 to-blue-700/80",
  },
  {
    title: "Indústrias",
    description: "Alta capacidade instalada para reduzir os custos operacionais de grandes plantas.",
    image: "/images/project-2.png",
    color: "from-slate-700/80 to-slate-900/80",
  },
  {
    title: "Comércio",
    description: "Projetos para lojas, clínicas e escritórios com retorno rápido do investimento.",
    image: "/images/project-3.png",
    color: "from-yellow-600/80 to-orange-700/80",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-28 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Portfólio
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Projetos Realizados
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Atendemos todos os perfis. Confira nossas áreas de atuação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover-lift cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 lg:opacity-70 group-hover:opacity-85 transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 lg:text-white/80 text-sm leading-relaxed max-w-[200px] lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 lg:translate-y-4 lg:group-hover:translate-y-0">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 lg:translate-x-4 lg:group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

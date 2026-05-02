import { Sun, Zap, Home, RefreshCcw } from "lucide-react";

const steps = [
  {
    title: "Captação Solar",
    description: "Painéis fotovoltaicos captam a energia do sol e convertem em eletricidade através do efeito fotovoltaico.",
    icon: Sun,
    color: "bg-blue-600",
  },
  {
    title: "Conversão",
    description: "Inversores convertem a energia solar (corrente contínua) em energia elétrica utilizável (corrente alternada).",
    icon: Zap,
    color: "bg-blue-600",
  },
  {
    title: "Distribuição",
    description: "A energia é distribuída para todos os equipamentos da sua casa ou empresa, reduzindo o consumo da rede elétrica.",
    icon: Home,
    color: "bg-blue-600",
  },
  {
    title: "Compensação",
    description: "O excesso de energia é injetado na rede elétrica, gerando créditos para usar quando não há sol.",
    icon: RefreshCcw,
    color: "bg-blue-600",
  },
];

const stats = [
  { value: "25+", label: "Anos de Garantia" },
  { value: "95%", label: "Redução na Conta" },
  { value: "30", label: "Dias para Instalar" },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Como Funciona a <span className="text-blue-600">Energia Solar</span>?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Entenda o processo simples e eficiente que transforma a luz do sol em economia para você
          </p>
        </div>

        {/* Main content: steps left + images right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">

          {/* Left: step list */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-5 group">
                  <div className={`w-12 h-12 shrink-0 ${step.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: two images stacked */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/project-1.png"
                alt="Painéis solares fotovoltaicos em residência"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/solar-technician.png"
                alt="Técnico instalando painéis solares"
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="rounded-2xl bg-blue-600 p-8 grid grid-cols-3 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl lg:text-4xl font-black text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

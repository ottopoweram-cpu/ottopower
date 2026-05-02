import { TrendingDown, Leaf, TrendingUp, Shield, Clock, Award } from "lucide-react";

const benefits = [
  {
    title: "Economia Imediata",
    description: "Reduza até 95% da sua conta de luz desde o primeiro mês",
    icon: TrendingDown,
    color: "bg-green-500",
  },
  {
    title: "Sustentabilidade",
    description: "Energia limpa e renovável, contribuindo para um futuro melhor",
    icon: Leaf,
    color: "bg-emerald-500",
  },
  {
    title: "Valorização do Imóvel",
    description: "Sua propriedade fica mais moderna e valorizada no mercado",
    icon: TrendingUp,
    color: "bg-blue-500",
  },
  {
    title: "Proteção contra Aumentos",
    description: "Não sofra mais com os reajustes nas tarifas de energia",
    icon: Shield,
    color: "bg-purple-500",
  },
  {
    title: "Retorno Garantido",
    description: "Investimento se paga em 4-6 anos, depois é lucro puro",
    icon: Clock,
    color: "bg-orange-500",
  },
  {
    title: "Qualidade Certificada",
    description: "Equipamentos com certificação INMETRO classe A",
    icon: Award,
    color: "bg-yellow-500",
  },
];

const financialStats = [
  { value: "R$ 50mil+", label: "Economia em 25 anos" },
  { value: "4-6", label: "Anos para se pagar" },
  { value: "20+", label: "Anos de lucro puro" },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Benefícios da <span className="text-blue-600">Energia Solar</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Descubra como a energia solar pode transformar sua vida e seu bolso
          </p>
        </div>

        {/* Main content: benefits grid left + images right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">

          {/* Left: 2x3 benefits grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 group hover-lift"
                >
                  <div className={`w-10 h-10 ${benefit.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{benefit.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right: two images */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/solar-family.png"
                alt="Família economizando com energia solar"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/solar-city.png"
                alt="Painéis solares em prédio comercial"
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Financial stats bar (green) */}
        <div className="rounded-2xl bg-green-600 p-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-sm font-bold text-white uppercase tracking-wide col-span-3 mb-2 opacity-80">
            Retorno Financeiro Garantido
          </div>
          {financialStats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl lg:text-4xl font-black text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-green-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

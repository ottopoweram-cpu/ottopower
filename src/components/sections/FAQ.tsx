import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto custa para instalar energia solar?",
    answer: "O custo varia de acordo com o consumo da sua residência ou empresa e a complexidade da instalação. O importante é saber que o retorno do investimento acontece em média de 3 a 5 anos, e oferecemos financiamentos que muitas vezes ficam no mesmo valor que sua conta de luz atual."
  },
  {
    question: "A manutenção do sistema é cara?",
    answer: "A manutenção é baixíssima! Consiste basicamente na limpeza dos painéis de 1 a 2 vezes por ano, dependendo da quantidade de chuva e poeira na região. Não há peças móveis que se desgastam facilmente."
  },
  {
    question: "O que acontece em dias de chuva ou nublados?",
    answer: "Os painéis solares continuam gerando energia, porém em menor capacidade comparado a um dia ensolarado. Durante a noite, você utiliza a energia da concessionária que foi acumulada como crédito durante o dia."
  },
  {
    question: "Os equipamentos têm garantia?",
    answer: "Sim! Os painéis solares possuem garantia de performance de até 25 anos, e os inversores possuem garantia de 5 a 10 anos dependendo do fabricante. Nós também garantimos o serviço de instalação."
  },
  {
    question: "Qual é o prazo de instalação após a aprovação do projeto?",
    answer: "Em média, a instalação leva de 1 a 3 dias para residências e de 3 a 7 dias para projetos comerciais ou industriais. A homologação pela concessionária pode levar de 15 a 60 dias."
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">

          {/* Left: header */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
              <HelpCircle className="w-4 h-4" /> FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Ainda tem dúvidas? Confira as respostas para as perguntas mais comuns dos nossos clientes.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
            >
              Tenho outra dúvida →
            </a>
          </div>

          {/* Right: accordion */}
          <div>
            <Accordion type="single" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border border-slate-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-800 py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

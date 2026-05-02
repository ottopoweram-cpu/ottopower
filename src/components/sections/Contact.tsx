"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: siteConfig.contact.address, color: "text-blue-400" },
  { icon: Phone, label: "Telefone / WhatsApp", value: siteConfig.contact.phone, color: "text-green-400" },
  { icon: Mail, label: "E-mail", value: siteConfig.contact.email, color: "text-yellow-400" },
  { icon: Clock, label: "Horário de Atendimento", value: siteConfig.contact.hours, color: "text-purple-400" },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const type = formData.get("type") as string;
    const message = formData.get("message") as string;

    const projectTypes: Record<string, string> = {
      residencial: "Residencial",
      comercial: "Comércio",
      industrial: "Indústria",
      rural: "Rural / Agronegócio"
    };
    
    const typeDisplay = type ? projectTypes[type] : "Não especificado";

    let text = `Olá! Gostaria de solicitar um orçamento para energia solar.%0A%0A`;
    text += `*Nome:* ${name}%0A`;
    text += `*Telefone:* ${phone}%0A`;
    text += `*E-mail:* ${email}%0A`;
    text += `*Tipo de Projeto:* ${typeDisplay}`;
    
    if (message) {
      text += `%0A*Mensagem:* ${message}`;
    }

    const whatsappUrl = `${siteConfig.links.whatsapp}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 6000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Fale Conosco
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Solicite seu Orçamento{" "}
            <span className="text-yellow-400">Gratuito</span>
          </h2>
          <p className="text-lg text-blue-200 leading-relaxed">
            Preencha o formulário e nossa equipe de especialistas entrará em contato
            para criar o projeto ideal para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* Form */}
          <div className="lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-20 h-20 rounded-full bg-green-400/10 flex items-center justify-center animate-fade-in-up">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white animate-fade-in-up delay-100">Mensagem Enviada!</h3>
                <p className="text-blue-200 animate-fade-in-up delay-200">Nossa equipe entrará em contato em breve. Obrigado pelo interesse!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-100 font-medium">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="João da Silva"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/60 focus:border-yellow-400 focus:ring-yellow-400/20 transition-colors rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-100 font-medium">Telefone / WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      placeholder="(92) 90000-0000"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/60 focus:border-yellow-400 focus:ring-yellow-400/20 transition-colors rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-100 font-medium">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="joao@exemplo.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/60 focus:border-yellow-400 focus:ring-yellow-400/20 transition-colors rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type" className="text-blue-100 font-medium">Tipo de Projeto</Label>
                  <select
                    id="type"
                    name="type"
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white focus:border-yellow-400 outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-slate-900">Selecione o tipo...</option>
                    <option value="residencial" className="bg-slate-900">Residencial</option>
                    <option value="comercial" className="bg-slate-900">Comércio</option>
                    <option value="industrial" className="bg-slate-900">Indústria</option>
                    <option value="rural" className="bg-slate-900">Rural / Agronegócio</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-100 font-medium">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Gostaria de saber mais sobre..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-300/60 focus:border-yellow-400 focus:ring-yellow-400/20 transition-colors rounded-xl min-h-[120px] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] lg:hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blue-900/30 border-t-blue-900 rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Solicitação de Orçamento
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info cards */}
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors group">
                  <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-medium leading-relaxed text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp direct card */}
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] active:scale-95"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 group-hover:bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-[#25D366] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <p className="text-[#25D366] group-hover:text-white font-bold">Falar no WhatsApp</p>
                <p className="text-blue-300 group-hover:text-white/80 text-sm">Resposta imediata</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

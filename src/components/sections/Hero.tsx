import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 min-h-[92vh] flex items-center"
    >
      {/* Animated sun decoration */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-yellow-400/10 animate-spin-slow" />
      <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-yellow-400/10 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Gradient blob bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/80 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="flex flex-col items-center text-center">
            {/* Logo — bigger and centered */}
            <div className="mb-8 animate-fade-in-up">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-transparent.png"
                alt="OTTO POWER Energia Solar"
                className="h-52 md:h-64 w-auto object-contain drop-shadow-2xl animate-float mx-auto"
              />
            </div>

            {/* Badge */}
            <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Sua conta de luz até <strong>95% mais barata</strong>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-200 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Transforme o Sol em{" "}
              <span className="text-shimmer">Economia Real</span>{" "}
              para sua Casa ou Empresa
            </h1>

            <p className="animate-fade-in-up delay-300 text-lg text-blue-100 max-w-xl mb-10 leading-relaxed">
              Projetos personalizados de energia solar fotovoltaica em Manaus com as
              melhores condições de financiamento do mercado.
            </p>

            {/* CTA Buttons — both go to WhatsApp */}
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-yellow-400 text-blue-950 font-bold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105 text-base animate-pulse-glow"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="glass text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/15 text-base"
              >
                Como Funciona
              </a>
            </div>

            {/* Social proof stats */}
            <div className="animate-fade-in-up delay-500 flex gap-8 mt-12 pt-8 border-t border-white/10 justify-center">
              {[
                { value: "500+", label: "Instalações" },
                { value: "95%", label: "Satisfação" },
                { value: "25 anos", label: "de Garantia" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-yellow-400">{stat.value}</div>
                  <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image — no floating card */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-right delay-300">
            <div className="relative w-full max-w-lg">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-3xl scale-95" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-float">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero.png"
                  alt="Instalação de Energia Solar"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

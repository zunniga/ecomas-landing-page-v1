import React from "react"
import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/graduates-view"
import WhyChooseUsSection from "@/components/home/courses-view"
import TestimonialsSection from "@/components/home/testimonials-section"
import FirstSection from "@/components/home/first-section"
import CounterNumbers from "@/components/home/counter-number"
import ContactView from "@/components/home/contact-view"

export const metadata: Metadata = {
  title: "ECOMAS DEV",
  description:
    "Somos una empresa especializada en crear software a medida para empresas y organizaciones. Ofrecemos soluciones tecnologicas innovadoras y personalizadas para ayudar a nuestros clientes a alcanzar sus objetivos de negocio. ",
}

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-tl from-black to-black overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculo decorativo superior izquierdo */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-indigo-700/15 rounded-full blur-3xl"></div>

          {/* Círculo decorativo superior derecho */}
          <div className="absolute -top-20 -right-32 w-64 h-64 bg-gradient-to-bl from-slate-600/25 to-blue-700/20 rounded-full blur-2xl"></div>

          {/* Forma geométrica central */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-800/15 to-indigo-900/10 rounded-full blur-3xl"></div>

          {/* Círculo decorativo inferior derecho */}
          <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-gradient-to-tl from-blue-700/20 to-gray-800/15 rounded-full blur-3xl"></div>

          {/* Círculo decorativo inferior izquierdo */}
          <div className="absolute -bottom-20 -left-32 w-56 h-56 bg-gradient-to-tr from-indigo-700/25 to-slate-700/15 rounded-full blur-2xl"></div>

          {/* Líneas decorativas sutiles */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent"></div>

          {/* Puntos decorativos */}
          <div className="absolute top-1/5 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-indigo-400/40 rounded-full"></div>
          <div className="absolute top-2/5 right-1/3 w-1.5 h-1.5 bg-blue-500/35 rounded-full"></div>

          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-slate-400/25 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-blue-400/30 rounded-full"></div>
          <div className="absolute bottom-2/5 left-1/3 w-1.5 h-1.5 bg-indigo-400/25 rounded-full"></div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10">
          <HeroSection />
          <FirstSection />
          <ServicesOverview />
          <TestimonialsSection />
          <WhyChooseUsSection />
          <CounterNumbers />
          <ContactView />
        </div>
      </main>
    </>
  )
}

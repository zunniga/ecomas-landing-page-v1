import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-view";
// import WhyChooseUsSection from "@/components/home/courses-view";
import TestimonialsSection from "@/components/home/testimonials-section";
import FirstSection from "@/components/home/first-section";
// import CounterNumbers from "@/components/home/counter-number";
import ContactView from "@/components/home/contact-view";
import SkillsInformation from "@/components/home/skills-information";


export const metadata: Metadata = {
  title: "ECOMAS DEV",
  description:
    "Somos una empresa especializada en crear software a medida para empresas y organizaciones. Ofrecemos soluciones tecnologicas innovadoras y personalizadas para ayudar a nuestros clientes a alcanzar sus objetivos de negocio. ",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsInformation />
      <FirstSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* <WhyChooseUsSection /> */}
      {/* <CounterNumbers /> */}
      <ContactView />
    </>
  );
}

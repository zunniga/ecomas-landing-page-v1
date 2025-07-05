"use client"
import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import FloatingBubbles from "./utils/FloatingBubbles"

// Importar todas las animaciones (asumiendo que tienes este archivo)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition : { duration: 0.8 } },
  exit: { x: -100, opacity: 0, transition: { duration: 0.5 } },
}

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
}

const titleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
}

const letterVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
}

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.4 } },
}

const descriptionVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
}

const buttonVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } },
}

const indicatorVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
}

const imageFloatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

const imageFloatingTransition = {
  duration: 6,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
}

// Datos del carrusel
const carouselData = [
  {
    id: 1,
    image: "/image/background/bg-hero.png",
    title: "Impulsa tu",
    highlight: "Negocio",
    subtitle: "con Tecnología",
    description: "Desarrollamos soluciones digitales a medida que optimizan tus procesos y potencian tu crecimiento.",
    accent: "¡Innovación que transforma!",
    buttonText: "Descubre Nuestros Servicios →",
  },
  {
    id: 2,
    image: "/image/background/bg-laptop.png",
    title: "Construye tu",
    highlight: "Plataforma",
    subtitle: "con Expertos",
    description: "Creamos aplicaciones web y móviles escalables con tecnologías modernas y eficientes.",
    accent: "¡Lleva tu idea al siguiente nivel!",
    buttonText: "Ver Proyectos →",
  },
  {
    id: 3,
    image: "/image/background/bg-hero3.png",
    title: "Acelera tu",
    highlight: "Transformación",
    subtitle: "Digital",
    description: "Impulsamos tu evolución tecnológica con soluciones seguras, ágiles y sostenibles.",
    accent: "¡Tecnología a tu medida!",
    buttonText: "Comenzar Proyecto →",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [])

  const currentData = carouselData[currentSlide]

  // Helper to determine if image is an icon component or a string path
  const isIconComponent = typeof currentData.image === "function"
  const IconComponent = isIconComponent ? currentData.image : null

  // Función para dividir texto en palabras para animación
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span key={`${currentSlide}-${index}`} variants={letterVariants} className="inline-block mr-2">
        {word}
      </motion.span>
    ))
  }

  return (
    <motion.div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 mt-5 opacity-25">
        <Image src="/image/utils/qq.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="absolute inset-0 opacity-25 hidden md:block">
        <Image src="/image/utils/wwe.png" alt="" fill className="object-cover animate-pulse" priority />
      </div>
      {/* Burbujas flotantes reemplazando los elementos decorativos */}
      <FloatingBubbles />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Contenido de texto */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="text-white order-2 lg:order-1"
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="text-4xl text-center lg:text-left md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6"
                variants={titleVariants}
              >
                {splitText(currentData.title)}
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#3b82f6] dark:from-[#2563eb] dark:to-[#3b82f6]"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {currentData.highlight}
                </motion.span>
                <br />
                <motion.span className="text-white" variants={letterVariants}>
                  {splitText(currentData.subtitle)}
                </motion.span>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-center lg:text-left lg:text-2xl mb-8 text-slate-100 leading-relaxed"
                variants={descriptionVariants}
              >
                {currentData.description}{" "}
                <motion.span
                  className="text-[#2563eb] text-center lg:text-left font-semibold"
                  whileHover={{
                    scale: 1.05,
                    color: "#3b82f6",
                    transition: { duration: 0.2 },
                  }}
                >
                  {currentData.accent}
                </motion.span>
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start"
                variants={buttonVariants}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(30, 41, 59, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8 py-4 bg-gradient-to-b from-[#2563eb] to-[#3b82f6] dark:from-[#2563eb]/90 dark:to-[#2563eb]/40 dark:hover:shadow-[#2563eb]/30 text-white border-0 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-800/25 rounded-lg hover:from-slate-700 hover:to-indigo-800"
                  >
                    <Link href="/courses">{currentData.buttonText}</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Indicadores del carrusel */}
              <motion.div className="flex justify-center lg:justify-start gap-2 mb-4" variants={indicatorVariants}>
                {carouselData.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-slate-800 w-8" : "bg-slate-400 hover:bg-slate-600"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Área con imagen */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            variants={slideInRight}
          >
            <div className="relative w-full max-w-3xl">
              <motion.div
                className="relative z-10"
                animate={imageFloatingAnimation}
                transition={imageFloatingTransition}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="relative"
                    >
                      {IconComponent ? (
                        <IconComponent />
                      ) : (
                        <Image
                          src={currentData.image || "/placeholder.svg"}
                          alt={currentData.title}
                          width={500}
                          height={400}
                          className="drop-shadow-2xl object-contain w-full h-auto max-w-lg"
                          priority
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

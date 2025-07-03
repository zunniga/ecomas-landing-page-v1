"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import React from "react"

const FirstSection = () => {
  const mainContentRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)

  const mainContentInView = useInView(mainContentRef, {
    once: true,
    margin: "-100px",
  })

  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="py-16 lg:py-24 bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#1e40af]/5 dark:via-[#3b82f6]/5 dark:to-[#1e40af]/5 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-[#1e40af]/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-[#1d4ed8]/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
          {/* Main Content Section */}
          <motion.div
            ref={mainContentRef}
            initial="hidden"
            animate={mainContentInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Side - Content */}
            <motion.div
              ref={contentRef}
              variants={contentVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="space-y-4 order-2 lg:order-1 "
            >
              <div className="w-full flex justify-center lg:justify-start">
                <div className="inline-flex items-center">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#1e40af] dark:to-[#60a5fa]"></div>
                  <span className="mx-4 text-[#1e40af] dark:text-[#60a5fa] font-bold text-sm tracking-[0.2em] uppercase">
                    NOSOTROS
                  </span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#1e40af] dark:to-[#60a5fa]"></div>
                </div>
              </div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
              >
                Aprendé Algo Sobre{" "}
                <span className="bg-gradient-to-r font-bold from-[#2563eb] to-[#3b82f6] dark:from-[#2563eb] dark:to-[#3b82f6] hover:bg-[#1e40af]/90 dark:hover:bg-[#1d4ed8]/90 bg-clip-text text-transparent">
                  PROMÁS
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 text-center lg:text-left text-lg sm:text-lg leading-relaxed max-w-lg"
              >
                Promás es una empresa especializada en ofrecer diplomados y cursos de alta calidad, diseñados para
                impulsar tu desarrollo profesional y personal.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex justify-center lg:justify-start">
                <motion.button
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-[#2563eb] to-[#3b82f6] dark:from-[#2563eb]/90 dark:to-[#2563eb]/40 hover:shadow-2xl hover:shadow-[#1e40af]/30 dark:hover:shadow-[#2563eb]/30 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex  items-center space-x-2">
                    <span>Ver Más</span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Statistics */}
              <motion.div
                ref={statsRef}
                variants={containerVariants}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 lg:pt-8"
              >
                <motion.div variants={statsVariants} className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    6 +
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Años de Experiencia</div>
                </motion.div>

                <motion.div variants={statsVariants} className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    99%
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Estudiantes Felices</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Image and Card */}
            <motion.div ref={imageRef} variants={imageVariants} className="relative order-1 lg:order-2">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Student with laptop"
                    width={500}
                    height={500}
                    className="w-[450px] max-w-lg mx-auto lg:max-w-none lg:ml-auto"
                    priority
                  />
                </div>

                {/* Floating Card */}
                <motion.div
                  variants={cardVariants}
                  className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12 z-50
  bg-gradient-to-br from-white/80 to-[#f8fafc] dark:from-[#1e40af]/70 dark:to-[#060717]/70
  backdrop-blur-sm rounded-2xl
  border border-[#2563eb]/40 dark:border-[#60a5fa]/40
  p-4 sm:p-6 shadow-2xl max-w-xs"
                >
                  <div className="text-gray-500 dark:text-gray-100 text-xs sm:text-sm mb-2">Más de</div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#2563eb] mb-1">+100</div>
                  <div className="text-gray-600 dark:text-gray-100 text-sm sm:text-base">Cursos de Calidad</div>
                </motion.div>

                {/* Background decorative shapes */}
                <motion.div
                  className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#2563eb]/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#1d4ed8]/30 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection

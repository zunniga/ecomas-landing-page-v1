"use client"
import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Rocket, Headphones, Check, ArrowRight } from "lucide-react"


// 🎨 CONFIGURACIÓN CENTRALIZADA DE ESTILOS Y COLORES
const THEME_CONFIG = {
  // Colores principales del tema
  colors: {
    primary: {
      from: "transparent",
      to: "#0b1f61",
      light: "#60a5fa",
      dark: "#1e40af",
    },
    secondary: {
      from: "#1d4ed8",
      to: "#2563eb",
    },
    accent: {
      from: "#1e40af",
      to: "#1d4ed8",
    },


    
    success: "#25eb3f",
  },

  // Estilos de las cards
  card: {
    // Fondo base
    background: "bg-white/10 dark:bg-transparent backdrop-blur-sm",

    // Bordes
    border: "border border-gray-200/50 dark:border-gray-700/50",

    // Sombras
    shadow: "shadow-lg group-hover:shadow-2xl",
    shadowColor: "group-hover:shadow-[#2563eb]/10",

    // Efectos de hover
    hoverTransform: "group-hover:-translate-y-2",

    // Transiciones
    transition: "transition-all duration-500 ease-out",

    // Padding y bordes redondeados
    spacing: "p-8 rounded-2xl",
  },

  // Estilos de iconos
  icon: {
    size: "w-16 h-16",
    iconSize: "w-8 h-8",
    background: "bg-gradient-to-r",
    shadow: "shadow-lg group-hover:shadow-xl",
    transition: "transition-all duration-300",
    spacing: "rounded-full mb-6 flex items-center justify-center",
  },

  // Estilos de botones
  button: {
    base: "w-full py-3 px-4 rounded-lg font-semibold text-white border border-gray-50/20",
    background: "bg-transparent",
    effects: "opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0",
    transition: "transition-all duration-300 ease-out",
    hover: "hover:shadow-lg hover:shadow-[#2563eb]/30",
    layout: "flex items-center justify-center space-x-2",
  },

  // Animaciones
  animations: {
    cardHover: {
      y: -8,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    iconHover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 },
    },
    buttonHover: {
      scale: 1.02,
    },
    buttonTap: {
      scale: 0.98,
    },
  },
}

const InteractiveServices = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const sectionInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  })

  const cardsInView = useInView(cardsRef, {
    once: true,
    margin: "-50px",
  })

  // Función helper para generar gradientes
  const getGradient = (from: string, to: string) => `from-[${from}] to-[${to}]`

  // Función helper para generar colores de fondo con opacidad
  const getBgWithOpacity = (from: string, to: string, opacity = 5) =>
    `from-[${from}]/${opacity} to-[${to}]/${opacity * 2}`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
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

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  }

  // Datos de servicios (solo contenido, sin estilos)
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Desarrollo a Medida",
      description:
        "Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
      features: ["Código limpio y optimizado", "Tecnologías modernas", "Escalabilidad garantizada"],
    },
    {
      id: 2,
      icon: Rocket,
      title: "Optimización de Procesos",
      description: "Automatizamos y mejoramos los procesos de tu empresa para aumentar la eficiencia y reducir costos.",
      features: ["Análisis de flujos de trabajo", "Automatización inteligente", "Reportes y métricas en tiempo real"],
    },
    {
      id: 3,
      icon: Headphones,
      title: "Soporte Continuo",
      description:
        "Ofrecemos acompañamiento y soporte técnico para garantizar el funcionamiento óptimo de tus soluciones.",
      features: ["Atención personalizada", "Mantenimiento preventivo", "Actualizaciones periódicas"],
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden py-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* <div className="absolute inset-0 opacity-30">
          <Image src="/image/utils/foot.png" alt="" fill className="object-cover" priority />
        </div> */}
        <motion.div
          className={`absolute top-20 left-10 w-60 h-60 bg-[#2563eb]/50 rounded-full blur-xl`}
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
          className={`absolute bottom-20 right-10 w-40 h-40 bg-[#2563eb]/50 rounded-full blur-xl`}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={sectionRef}
          variants={headerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div className="inline-flex items-center mb-6" whileHover={{ scale: 1.05 }}>
            <div
              className={`bg-gradient-to-r ${getBgWithOpacity(THEME_CONFIG.colors.primary.from, THEME_CONFIG.colors.primary.to, 20)} dark:${getBgWithOpacity(THEME_CONFIG.colors.primary.from, THEME_CONFIG.colors.primary.to, 30)} px-4 py-2 rounded-full border border-[${THEME_CONFIG.colors.primary.from}]/30`}
            >
              <span
                className={`text-[${THEME_CONFIG.colors.primary.dark}] dark:text-[${THEME_CONFIG.colors.primary.light}] font-semibold text-sm`}
              >
                ¿Por qué elegirnos?
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            variants={headerVariants}
          >
            Soluciones tecnológicas que marcan la{" "}
            <span
              className="text-[#2563eb]"
            >
              diferencia
            </span>
          </motion.h2>

          <motion.p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto" variants={headerVariants}>
            Nos destacamos por ofrecer servicios de alta calidad, personalizados y orientados a resultados.
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative"
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={THEME_CONFIG.animations.cardHover}
              >
                <div
                  className={`
                    relative h-full
                    ${THEME_CONFIG.card.spacing}
                    ${THEME_CONFIG.card.border}
                    ${THEME_CONFIG.card.background}
                    bg-gradient-to-br ${getBgWithOpacity(THEME_CONFIG.colors.primary.from, THEME_CONFIG.colors.primary.to)}
                    group-hover:bg-gradient-to-br group-hover:${getBgWithOpacity(THEME_CONFIG.colors.primary.from, THEME_CONFIG.colors.primary.to, 10)}
                    ${THEME_CONFIG.card.transition}
                    ${THEME_CONFIG.card.shadow} ${THEME_CONFIG.card.shadowColor}
                    overflow-hidden
                  `}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[${THEME_CONFIG.colors.primary.from}] to-transparent rounded-full transform translate-x-16 -translate-y-16`}
                    />
                    <div
                      className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[${THEME_CONFIG.colors.primary.from}]/80 to-transparent rounded-full transform -translate-x-12 translate-y-12`}
                    />
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    className={`
                      relative z-10 border border-[#2563eb]/80
                      ${THEME_CONFIG.icon.size}
                      ${THEME_CONFIG.icon.spacing}
                      ${THEME_CONFIG.icon.background} ${getGradient(THEME_CONFIG.colors.primary.from, THEME_CONFIG.colors.primary.to)}
                      ${THEME_CONFIG.icon.shadow}
                      ${THEME_CONFIG.icon.transition}
                    `}
                    whileHover={THEME_CONFIG.animations.iconHover}
                  >
                    <IconComponent className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className={`text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[${THEME_CONFIG.colors.success}] dark:group-hover:text-[${THEME_CONFIG.colors.primary.light}] transition-colors duration-300`}
                      layoutId={`title-${service.id}`}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                      layoutId={`description-${service.id}`}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: hoveredCard === service.id ? 1 : 0.7,
                            x: hoveredCard === service.id ? 0 : -10,
                          }}
                          transition={{
                            delay: featureIndex * 0.1,
                            duration: 0.3,
                          }}
                        >
                          <motion.div
                            className={`
                              w-5 h-5 rounded-full 
                              ${THEME_CONFIG.icon.background} ${getGradient(THEME_CONFIG.colors.primary.from, THEME_CONFIG.colors.primary.to)}
                              flex items-center justify-center flex-shrink-0
                            `}
                            whileHover={{ scale: 1.2 }}
                          >
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </motion.div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA Button */}
                    <motion.button
                      className={`
                        ${THEME_CONFIG.button.base}
                        ${THEME_CONFIG.button.background} ${getGradient(THEME_CONFIG.colors.primary.from, THEME_CONFIG.colors.primary.to)}
                        ${THEME_CONFIG.button.effects}
                        ${THEME_CONFIG.button.transition}
                        ${THEME_CONFIG.button.layout}
                        ${THEME_CONFIG.button.hover}
                      `}
                      whileHover={THEME_CONFIG.animations.buttonHover}
                      whileTap={THEME_CONFIG.animations.buttonTap}
                    >
                      <span>Saber más</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${THEME_CONFIG.colors.primary.from}, ${THEME_CONFIG.colors.primary.to})`,
                      filter: "blur(20px)",
                      transform: "scale(1.1)",
                      zIndex: -1,
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveServices

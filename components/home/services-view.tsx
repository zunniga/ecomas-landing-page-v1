"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Bot, Headphones, Zap, Mail } from "lucide-react";
import Image from "next/image";

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
};

// Utilidad para crear un gradiente con opacidad personalizada
function getBgWithOpacity(from: string, to: string, opacity: number) {
  // opacity: 0-100
  const op = Math.max(0, Math.min(100, opacity)) / 100;
  // Si el color es 'transparent', lo dejamos como está
  const fromColor =
    from === "transparent" ? "rgba(0,0,0,0)" : hexToRgba(from, op);
  const toColor = hexToRgba(to, op);
  return `bg-[linear-gradient(to_right,${fromColor},${toColor})]`;
}

// Convierte un color HEX a RGBA con opacidad
function hexToRgba(hex: string, alpha: number) {
  let c = hex.replace("#", "");
  if (c.length === 3) {
    c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  }
  const num = Number.parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

const services = [
  {
    title: "Desarrollo Web Personalizado",
    description:
      "Creamos sitios web únicos y funcionales adaptados a las necesidades específicas de tu negocio.",
    icon: Code2,
  },
  {
    title: "Aplicaciones Móviles",
    description:
      "Desarrollamos apps nativas e híbridas para iOS y Android con la mejor experiencia de usuario.",
    icon: Smartphone,
  },
  {
    title: "Chatbots Inteligentes con IA",
    description:
      "Automatiza la atención al cliente y mejora la experiencia de tus usuarios con chatbots personalizados impulsados por inteligencia artificial.",
    icon: Bot,
  },

  {
    title: "Mantenimiento y Soporte",
    description:
      "Soporte técnico continuo y actualizaciones para mantener tus proyectos funcionando perfectamente.",
    icon: Headphones,
  },
  {
    title: "Soluciones con Zoho (CRM, Inventory, Creator)",
    description:
      "Implementamos y personalizamos Zoho CRM, Inventory y Creator para optimizar la gestión y automatización de tu negocio.",
    icon: Mail,
  },
  {
    title: "Integración de APIs",
    description:
      "Conectamos tus sistemas con servicios externos para automatizar y optimizar procesos.",
    icon: Zap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export default function ServicesSection() {
  return (
    <div id="services" className="min-h-screen bg-black py-16 px-4 relative">
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/image/utils/py2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Primera fila - 2 tarjetas superiores */}
          <motion.div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ServiceCard service={services[0]} index={0} />
            <ServiceCard service={services[1]} index={1} />
          </motion.div>

          {/* Segunda fila - Tarjeta izquierda, Título central, Tarjeta derecha */}
          <motion.div>
            <ServiceCard service={services[2]} index={2} />
          </motion.div>

          {/* Título central */}
          <motion.div
            className="text-center py-4 lg:py-8"
            variants={titleVariants}
          >
            <motion.div
              className="inline-flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`bg-gradient-to-r ${getBgWithOpacity(
                  THEME_CONFIG.colors.primary.from,
                  THEME_CONFIG.colors.primary.to,
                  20
                )} dark:${getBgWithOpacity(
                  THEME_CONFIG.colors.primary.from,
                  THEME_CONFIG.colors.primary.to,
                  30
                )} px-4 py-2 rounded-full border border-[${
                  THEME_CONFIG.colors.primary.from
                }]/30`}
              >
                <span
                  className={`text-[${THEME_CONFIG.colors.primary.dark}] dark:text-[${THEME_CONFIG.colors.primary.light}] font-semibold text-sm`}
                >
                  Nuestros Servicios
                </span>
              </div>
            </motion.div>
            <motion.h2
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              variants={titleVariants}
            >
              <span className="block">Servicios que</span>
              <span className="block text-[#2563eb]">ofrecemos</span>
            </motion.h2>
          </motion.div>

          <motion.div>
            <ServiceCard service={services[3]} index={3} />
          </motion.div>

          {/* Tercera fila - 2 tarjetas inferiores */}
          <motion.div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <ServiceCard service={services[4]} index={4} />
            <ServiceCard service={services[5]} index={5} />
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-full transition-colors cursor-pointer duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotización
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      {/* Card con los nuevos estilos aplicados */}
      <div className="relative bg-white/10 dark:bg-transparent backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#2563eb]/10 group-hover:-translate-y-2 transition-all duration-500 ease-out p-8 rounded-2xl h-full">
        <div className="absolute inset-0 opacity-25 rounded-2xl overflow-hidden">
          <Image
            src="/image/utils/tu.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          className="mb-4 relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.2 + index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
        >
          <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        <motion.h3
          className="text-white text-xl font-bold mb-3 transition-colors duration-300 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {service.description}
        </motion.p>

        {/* Decorative element */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-[#2563eb] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
        />
      </div>
    </motion.div>
  );
}

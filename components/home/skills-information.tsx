"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const technologies = [
  { image: "/image/logo/skills/java.svg" },
  { image: "/image/logo/skills/react.svg" },
  { image: "/image/logo/skills/node.svg" },
  { image: "/image/logo/skills/php.svg" },
  { image: "/image/logo/skills/python.svg" },
  { image: "/image/logo/skills/unity.svg" },
  { image: "/image/logo/skills/docker.svg" },
  { image: "/image/logo/skills/figmaa.svg" },
];

export default function SkillsInformation() {
  const [currentTechs, setCurrentTechs] = useState(technologies.slice(0, 6));
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % technologies.length;
        const newTechs = [];

        // Seleccionar 6 tecnologías consecutivas con wrap-around
        for (let i = 0; i < 6; i++) {
          newTechs.push(technologies[(newIndex + i) % technologies.length]);
        }

        setCurrentTechs(newTechs);
        return newIndex;
      });
    }, 3500); // Cambiar cada 2.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 relative">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/image/utils/true.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Desarrollo web e ingeniería de software
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desde startups de próxima generación hasta empresas establecidas.
        </motion.p>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {currentTechs.map((tech, index) => {
              return (
                <motion.div
                  key={`${tech.image}-${techIndex}-${index}`}
                  className="flex flex-col items-center justify-center group cursor-pointer"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotateY: -90,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    rotateY: 90,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                  }}
                >
                  {/* Contenedor del icono */}
                  <motion.div
                    className="relative p-6 rounded-full bg-transparent  group-hover:border-gray-600 transition-colors duration-300"
                    whileHover={{
                      boxShadow: "0 20px 40pxrgba(59, 130, 246, 1)",
                    }}
                  >
                    <img
                      src={tech.image}
                      width={108}
                      height={108}
                      className="text-white group-hover:text-transparent transition-colors duration-300"
                    />

                    {/* Efecto de brillo */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>

                
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicador de progreso */}
        <motion.div
          className="flex justify-center mt-12 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {Array.from({ length: Math.ceil(technologies.length / 6) }).map(
            (_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(techIndex / 6) === index
                    ? "bg-blue-500"
                    : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}

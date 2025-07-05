"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

interface FloatingBubble {
  id: number
  size: number
  x: string
  y: string
  image: string
  delay: number
  duration: number
}

const bubbles: FloatingBubble[] = [

  {
    id: 1,
    size: 70,
    x: "90%",
    y: "60%",
    image: "/image/logo/react.svg",
    delay: 1.5,
    duration: 9,
  },
  {
    id: 2,
    size: 60,
    x: "55%",
    y: "75%",
    image: "/image/logo/bd.svg",
    delay: 2,
    duration: 6.5,
  },
  {
    id: 3,
    size: 70,
    x: "75%",
    y: "25%",
    image: "/image/logo/next.svg",
    delay: 0.8,
    duration: 8.5,
  },
]

export default function FloatingBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
          }}
          initial={{
            scale: 0,
            opacity: 0,
            y: 20,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: bubble.delay,
            duration: 1,
            ease: "easeOut",
          }}
        >
          {/* Burbuja flotante */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* Contenedor de la burbuja con sombra azul */}
            <div className="relative w-full h-full">
              {/* Sombra azul de fondo */}
              <div className="absolute inset-0 bg-transparent rounded-full blur-md transform scale-110" />

              {/* Burbuja principal */}
              <motion.div
                className="relative w-full h-full bg-transparent backdrop-blur-sm rounded-full border border-white/40 shadow-lg shadow-blue-500/45 flex items-center justify-center overflow-hidden "
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Efecto de brillo interno */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full" />

                {/* Imagen dentro de la burbuja */}
                <div className="relative z-10 w-1/2 h-1/2">
                  <Image
                    src={bubble.image || "/placeholder.svg"}
                    alt={`Burbuja ${bubble.id}`}
                    fill
                    className="object-contain filter drop-shadow-sm"
                  />
                </div>

                {/* Partículas flotantes dentro de la burbuja */}
                <motion.div
                  className="absolute top-2 right-2 w-1 h-1 bg-blue-400/60 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: bubble.delay,
                  }}
                />
                <motion.div
                  className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-blue-300/80 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: bubble.delay + 1,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "./utils/testimonials";

const testimonialVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    rotateY: direction < 0 ? 45 : -45,
    transition: { duration: 0.6 },
  }),
};

const quoteVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.3,
    },
  },
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const profileVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.7,
    },
  },
};

function NavButton({
  onClick,
  direction,
}: {
  onClick: () => void;
  direction: "prev" | "next";
}) {
  return (
    <motion.button
      onClick={onClick}
      className="w-12 h-12 rounded-lg border border-white/60 flex items-center justify-center hover:bg-[#2563eb] hover:text-black transition-all duration-300 text-[##2563eb] group"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform" />
      ) : (
        <ChevronRight className="w-6 h-6 group-hover:translate-x-[2px] transition-transform" />
      )}
    </motion.button>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const changeTestimonial = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      changeTestimonial(nextIndex);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNavigation = (dir: "prev" | "next") => {
    const newIndex =
      dir === "prev"
        ? (currentIndex - 1 + testimonials.length) % testimonials.length
        : (currentIndex + 1) % testimonials.length;
    changeTestimonial(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-black py-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/20 via-transparent to-[#2563eb]/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[##2563eb] font-bold text-sm tracking-[0.3em] uppercase">
              TESTIMONIOS
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-white">CLIENTES FELICES </span>
            <span className="text-[#2563eb]">DICEN</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Estas son algunas de las experiencias de quienes confiaron en
            nuestro equipo para desarrollar sus soluciones digitales.
          </motion.p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-8 right-8 flex space-x-4 z-20">
          <NavButton
            onClick={() => handleNavigation("prev")}
            direction="prev"
          />
          <NavButton
            onClick={() => handleNavigation("next")}
            direction="next"
          />
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center"
            >
              {/* Quote Icon */}
              <motion.div
                variants={quoteVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-center mb-8"
              >
                <div className="w-16 h-16 text-[#2563eb]">
                  <svg
                    className="w-full h-full"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </motion.div>

              {/* Testimonial Text */}
              <motion.blockquote
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-white text-2xl lg:text-3xl font-bold leading-relaxed mb-12 uppercase tracking-wide"
              >
                {currentTestimonial.quote}
              </motion.blockquote>

              {/* Profile */}
              <motion.div
                variants={profileVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center space-x-4"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#2563eb]">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-400">{currentTestimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-3 mt-16">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => changeTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#2563eb]"
                  : "w-2 bg-gray-600 hover:bg-[#2563eb]"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

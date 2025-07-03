"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
  Clock,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const diplomados = [
  {
    id: 1,
    title: "Diplomado en Marketing Digital",
    description: "Estrategias avanzadas para el mundo digital",
    image: "/placeholder.svg?height=300&width=200",
    price: 450,
    originalPrice: 600,
    category: "Marketing",
    rating: 4.8,
    reviews: 156,
    badge: "Oferta",
    badgeColor: "bg-gradient-to-r from-[#CF0072] to-[#E82769]",
    duration: "12 semanas",
    students: 1250,
  },
  {
    id: 2,
    title: "Diplomado en Gestión de Proyectos",
    description: "Metodologías ágiles y tradicionales",
    image: "/placeholder.svg?height=300&width=200",
    price: 520,
    originalPrice: 650,
    category: "Gestión",
    rating: 4.9,
    reviews: 203,
    badge: "Popular",
    badgeColor: "bg-gradient-to-r from-[#90007e] to-[#CF0072]",
    duration: "16 semanas",
    students: 980,
  },
  {
    id: 3,
    title: "Diplomado en Inteligencia Artificial",
    description: "Machine Learning y Deep Learning aplicado",
    image: "/placeholder.svg?height=300&width=200",
    price: 680,
    originalPrice: 850,
    category: "Tecnología",
    rating: 4.7,
    reviews: 89,
    badge: "Nuevo",
    badgeColor: "bg-gradient-to-r from-[#680080] to-[#90007e]",
    duration: "20 semanas",
    students: 567,
  },
  {
    id: 4,
    title: "Diplomado en Finanzas Corporativas",
    description: "Análisis financiero y toma de decisiones",
    image: "/placeholder.svg?height=300&width=200",
    price: 590,
    originalPrice: 750,
    category: "Finanzas",
    rating: 4.6,
    reviews: 124,
    badge: "Destacado",
    badgeColor: "bg-gradient-to-r from-[#360b7f] to-[#680080]",
    duration: "14 semanas",
    students: 834,
  },
  {
    id: 5,
    title: "Diplomado en Recursos Humanos",
    description: "Gestión del talento humano y liderazgo",
    image: "/placeholder.svg?height=300&width=200",
    price: 480,
    originalPrice: 620,
    category: "RRHH",
    rating: 4.5,
    reviews: 98,
    badge: "Trending",
    badgeColor: "bg-gradient-to-r from-[#E82769] to-[#CF0072]",
    duration: "10 semanas",
    students: 692,
  },
  {
    id: 6,
    title: "Diplomado en Transformación Digital",
    description: "Innovación y cambio organizacional",
    image: "/placeholder.svg?height=300&width=200",
    price: 650,
    originalPrice: 800,
    category: "Innovación",
    rating: 4.8,
    reviews: 167,
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-[#CF0072] to-[#90007e]",
    duration: "18 semanas",
    students: 1156,
  },
];

export default function DiplomadosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Número de tarjetas visibles según el tamaño de pantalla
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // lg: 4 tarjetas
      if (window.innerWidth >= 768) return 2; // md: 2 tarjetas
      return 1; // sm: 1 tarjeta
    }
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, diplomados.length - visibleCards);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
    // Reanudar auto-play después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    // Reanudar auto-play después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <motion.section
      className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#360b7f]/5 dark:via-[#90007e]/5 dark:to-[#360b7f]/5 text-gray-900 dark:text-white py-20 px-4 transition-all duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header con diseño moderno */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center justify-center mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
            <span className="mx-4 text-[#360b7f] dark:text-[#E82769] font-bold text-sm tracking-[0.2em] uppercase">
              DIPLOMADOS
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Diplomados{" "}
            <span className="bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#CF0072] dark:to-[#90007e] bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforma tu futuro profesional con programas de vanguardia
            diseñados por líderes de la industria
          </p>
        </motion.div>

        {/* Controles modernos */}
        <motion.div
          className="flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center gap-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-12 h-12 bg-gradient-to-r from-[#680080] to-[#90007e] dark:from-[#CF0072] dark:to-[#E82769] text-white hover:shadow-lg hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Indicadores circulares */}
            <div className="flex gap-3">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#360b7f] to-[#680080] dark:from-[#CF0072] dark:to-[#E82769] scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-12 h-12 bg-gradient-to-r from-[#680080] to-[#90007e] dark:from-[#CF0072] dark:to-[#E82769] text-white hover:shadow-lg hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
              onClick={goToNext}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Carrusel con nueva estructura */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {diplomados.map((diplomado, index) => (
              <motion.div
                key={diplomado.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCards}%` }}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="group relative bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
                  {/* Header de la tarjeta */}
                  <div className="relative overflow-hidden">
                    {/* Badge flotante */}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge
                        className={`${diplomado.badgeColor} text-white font-semibold px-3 py-1 rounded-full shadow-lg`}
                      >
                        {diplomado.badge}
                      </Badge>
                    </div>

                    {/* Botón favorito */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-600 hover:text-[#CF0072] dark:hover:text-[#E82769] hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>

                    {/* Imagen con overlay gradiente */}
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                      <Image
                        src={"image/graduates/tt.png"}
                        alt={diplomado.title}
                        width={200}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-6">
                    {/* Categoría */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-[#360b7f] dark:text-[#E82769] bg-[#360b7f]/10 dark:bg-[#E82769]/10 px-3 py-1 rounded-full">
                        {diplomado.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{diplomado.students.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="font-bold text-xl mb-3 line-clamp-2 text-gray-900 dark:text-white group-hover:text-[#360b7f] dark:group-hover:text-[#E82769] transition-colors duration-300">
                      {diplomado.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {diplomado.description}
                    </p>

                    {/* Duración */}
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{diplomado.duration}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(diplomado.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300 dark:text-gray-500"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {diplomado.rating}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          ({diplomado.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Botón de acción */}
                    <Button
                      asChild
                      className={`
    w-full h-12
    text-white dark:text-white
    bg-[#CF0072]/90 hover:bg-[#680080]/90
    dark:bg-[#b40264] dark:hover:bg-[#680080]/90
    font-semibold rounded-xl

  `}
                    >
                      <Link href={`/diplomados/${diplomado.id}`}>
                        Inscribirse Ahora
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.button
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-[#CF0072] to-[#90007e] dark:from-[#CF0072]/90 dark:to-[#CF0072]/40 hover:shadow-2xl hover:shadow-[#360b7f]/30 dark:hover:shadow-[#CF0072]/30 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex font-semibold items-center space-x-2">
              <Link href="/graduates">Explorar Todos los Diplomados</Link>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

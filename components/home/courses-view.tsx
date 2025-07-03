"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  BookOpen,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { courses } from "@/components/home/utils/courses";

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      setCardsPerView(
        width >= 1280
          ? 4
          : // xl: 4 cards
          width >= 1024
          ? 3
          : // lg: 3 cards
          width >= 768
          ? 2
          : // md: 2 cards
            1 // sm: 1 card
      );
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  return cardsPerView;
}

export default function ModernCourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const cardsPerView = useCardsPerView();
  const maxIndex = Math.max(0, courses.length - cardsPerView);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  useEffect(() => setCurrentIndex(0), [cardsPerView]);

  const navigate = (direction: "prev" | "next") => {
    setCurrentIndex(
      direction === "prev"
        ? currentIndex === 0
          ? maxIndex
          : currentIndex - 1
        : currentIndex >= maxIndex
        ? 0
        : currentIndex + 1
    );
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#360b7f]/5 dark:via-[#90007e]/5 dark:to-[#360b7f]/5 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#360b7f] to-[#CF0072] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E82769] to-[#680080] rounded-full blur-3xl"></div>
      </div>

      <div className="text-center mb-12 md:mb-16 px-4 sm:px-6 md:px-8 relative z-10">
        <div className="inline-flex items-center justify-center mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
          <span className="mx-4 text-[#360b7f] dark:text-[#E82769] font-bold text-sm tracking-[0.2em] uppercase">
            CURSOS
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Transforma Tu{" "}
          <span className="bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#CF0072] dark:to-[#90007e] hover:bg-[#360b7f]/90 dark:hover:bg-[#680080]/90 bg-clip-text text-transparent">
            Futuro
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto px-4">
          Descubre cursos diseñados por expertos que te llevarán al siguiente
          nivel profesional
        </p>
      </div>

      <div
        className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-800 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4 hover:-translate-y-2 transition-transform duration-300"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="group bg-white dark:bg-[#101424] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/image/courses/course2.jpg"
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 `}
                    ></div>
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${course.categoryColor} text-white text-xs font-semibold shadow-lg`}
                    >
                      {course.category}
                    </div>
                  
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#360b7f] group-hover:to-[#360b7f] group-hover:text-[#360b7f] dark:group-hover:text-[#E82769] transition-all duration-300">
                      {course.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-2">
                      {course.description}
                    </p>

                   

                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#360b7f] hover:to-[#680080] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
            onClick={() => navigate("prev")}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {[...Array(Math.ceil(courses.length / cardsPerView))].map(
              (_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    Math.floor(currentIndex / cardsPerView) === index
                      ? "w-8 h-3 bg-gradient-to-r from-[#360b7f] to-[#CF0072]"
                      : "w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-gradient-to-r hover:from-[#680080] hover:to-[#90007e]"
                  }`}
                  onClick={() => setCurrentIndex(index * cardsPerView)}
                />
              )
            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#680080] hover:to-[#CF0072] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
            onClick={() => navigate("next")}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

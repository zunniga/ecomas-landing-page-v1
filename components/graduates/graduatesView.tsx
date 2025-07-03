"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Filter, Grid3X3, List, Bookmark, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Estudios de Hidrología e hidráulica en puentes",
    rating: 4,
    students: 120,
    lessons: 15,
    instructor: "Dr. María González",
  },
  {
    id: 2,
    title: "Calidad de agua para riego",
    rating: 5,
    students: 85,
    lessons: 12,
    instructor: "Ing. Carlos Ruiz",
  },
  {
    id: 3,
    title: "Diseño de Sistemas de Concreto para Contención de Taludes",
    rating: 4,
    students: 95,
    lessons: 18,
    instructor: "Ing. Ana Torres",
  },
  {
    id: 4,
    title: "Gestión Integral de Recursos Hídricos",
    rating: 5,
    students: 110,
    lessons: 20,
    instructor: "Dr. Luis Mendoza",
  },
  {
    id: 5,
    title: "Análisis Sísmico de Estructuras",
    rating: 4,
    students: 75,
    lessons: 16,
    instructor: "Ing. Patricia Silva",
  },
  {
    id: 6,
    title: "Pavimentos y Diseño Vial",
    rating: 5,
    students: 130,
    lessons: 14,
    instructor: "Ing. Roberto Vega",
  },
];

const gradients = {
  primary: " from-[#360b7f] to-[#90007e]",
  accent: "from-[#CF0072] to-[#E82769]",
};

function CourseImage({ index, title }: { index: number; title: string }) {
  return (
    <div
      className={`relative h-48 md:h-full bg-gradient-to-br ${gradients.primary} overflow-hidden`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients.accent}/20`}
      ></div>
      <Badge
        className={`absolute top-4 right-4 bg-gradient-to-r ${gradients.accent} text-white border-0 z-10`}
      >
        Curso
      </Badge>
      <div className="absolute top-4 left-4 text-white/80 font-bold text-lg">
        #{index + 1}
      </div>
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt={title}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function CourseCard({
  course,
  index,
  isListView = false,
}: {
  course: (typeof courses)[0];
  index: number;
  isListView?: boolean;
}) {
  const imageWidth = isListView ? "md:w-96" : "";
  const imageHeight = isListView ? "h-64" : "h-48";

  return (
    <Card className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 hover:scale-105">
      <div className={isListView ? "flex flex-col md:flex-row" : ""}>
        <div
          className={`relative ${imageWidth} ${imageHeight} ${
            isListView ? "flex-shrink-0" : ""
          }`}
        >
          <CourseImage index={index} title={course.title} />
        </div>

        <CardContent className={isListView ? "flex-1 p-8" : "p-6"}>
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-gradient-to-r from-[#360b7f]/10 to-[#680080]/10 text-white dark:text-white border border-[#360b7f]/20">
              DESTACADO
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[#E82769] text-[#E82769]" />
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-400 hover:text-[#CF0072] p-1"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <h3
            className={`font-bold text-gray-800 dark:text-gray-100 mb-3 line-clamp-2 leading-tight ${
              isListView ? "text-2xl" : "text-lg"
            }`}
          >
            {course.title}
          </h3>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < course.rating
                    ? "fill-[#E82769] text-[#E82769]"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
              ({course.rating}.0)
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>📚 {course.lessons} Lecciones</span>
            <span>👥 {course.students} Estudiantes</span>
          </div>

          <div
            className={isListView ? "flex items-center justify-between" : ""}
          >
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Instructor:{" "}
              <span className="font-medium text-[#680080] dark:text-[#CF0072]">
                {course.instructor}
              </span>
            </div>

            {isListView && (
              <Button
                className={`bg-gradient-to-r ${gradients.accent} hover:from-[#360b7f] hover:to-[#90007e] text-white px-8 rounded-xl shadow-lg`}
              >
                Ver Curso
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default function CoursesPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#360b7f]/5 dark:via-[#90007e]/5 dark:to-[#360b7f]/5">
      <div className="container mx-auto px-4 py-8">
        <div className="relative w-full h-[400px] mb-12 mt-20 overflow-hidden rounded-2xl">
          <Image
            src="image/background/graduate-bg.png"
            alt="Graduados"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0  bg-gradient-to-b from-[#080717]/70 to-[#680080]/90 dark:from-[#080717]/70 dark:to-[#360b7f]/90"></div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Diplomados con
            </motion.div>

            <motion.div
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#CF0072] to-[#E82769] bg-clip-text text-[#DF196D]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              enfoque profesional
            </motion.div>

            <motion.p
              className="text-lg text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explora nuestra completa oferta educativa diseñada para impulsar
              tu carrera profesional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.9,
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Toolbar */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/90 dark:bg-slate-800/90 rounded-xl p-1 shadow-lg">
              <div></div>
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? `bg-gradient-to-r ${gradients.primary} text-white`
                    : ""
                }
              >
                <Grid3X3 className="w-4 h-4" />
                <span className="ml-2">Rejilla</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={
                  viewMode === "list"
                    ? `bg-gradient-to-r ${gradients.primary} text-white`
                    : ""
                }
              >
                <List className="w-4 h-4" />
                <span className="ml-2">Lista</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
              <Input
                placeholder="Busca tu diplomado..."
                className="pl-10 pr-4 py-2 w-64 bg-white/90 dark:bg-slate-800/90 rounded-xl"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 rounded-xl"
            >
              <Filter className="w-4 h-4" />
              Filtro
            </Button>
          </div>
        </motion.div>

        {/* Courses */}
        <motion.div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <CourseCard
                course={course}
                index={index}
                isListView={viewMode === "list"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

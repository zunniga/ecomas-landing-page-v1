"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Facebook, Twitter, Dribbble, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div id="contacts" className="min-h-screen bg-black relative overflow-hidden py-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#1e40af] to-[#2563eb] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Centered Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left side - Contact Information */}
          <motion.div
            className="space-y-8 lg:space-y-10"
            variants={itemVariants}
          >
            {/* Phone Section */}
            <div className="space-y-4">
              <motion.div
                className="text-3xl lg:text-5xl font-bold"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
                  +51 984 040 264
                </span>
              </motion.div>
            </div>

            {/* Address Section */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-white text-xl font-semibold">Dirección</h3>
              <div className="text-gray-300 space-y-1">
                <p>Av. Javier Prado Este 4200,</p>
                <p>Santiago de Surco, Lima, Perú</p>
              </div>
            </motion.div>

            {/* Email Section */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-white text-xl font-semibold">
                Correo Electrónico
              </h3>
              <p className="text-gray-300">contacto@ecomas-edu.com</p>
            </motion.div>

            {/* Schedule Section */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-white text-xl font-semibold">
                Horario de Atención
              </h3>
              <div className="text-gray-300 space-y-1">
                <p>Lun-Dom: 8:00-18:30</p>
                <p className="text-[#2563eb]">Miércoles cerrado</p>
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Dribbble className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            {/* Form Header */}
            <div className="space-y-4">
              <motion.p
                className="text-[#2563eb] text-sm font-semibold tracking-[0.2em] uppercase"
                variants={itemVariants}
              >
                CONVERSEMOS
              </motion.p>
              <motion.h2
                className="text-white text-3xl lg:text-4xl font-bold"
                variants={itemVariants}
              >
                ENVÍA UN{" "}
                <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
                  MENSAJE
                </span>
              </motion.h2>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-14 bg-gray-900/50 border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] backdrop-blur-sm"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-14 bg-gray-900/50 border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] backdrop-blur-sm"
                    required
                  />
                </motion.div>
              </div>

              {/* Subject field */}
              <motion.div variants={itemVariants}>
                <Select
                  onValueChange={(value) => handleInputChange("subject", value)}
                >
                  <SelectTrigger className="h-14 bg-gray-900/50 border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] backdrop-blur-sm">
                    <SelectValue
                      placeholder="Asunto"
                      className="text-gray-400"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem
                      value="general"
                      className="text-white hover:bg-gray-800"
                    >
                      Consulta General
                    </SelectItem>
                    <SelectItem
                      value="support"
                      className="text-white hover:bg-gray-800"
                    >
                      Soporte Técnico
                    </SelectItem>
                    <SelectItem
                      value="project"
                      className="text-white hover:bg-gray-800"
                    >
                      Cotización de Proyecto
                    </SelectItem>
                    <SelectItem
                      value="integration"
                      className="text-white hover:bg-gray-800"
                    >
                      Integraciones y APIs
                    </SelectItem>
                    <SelectItem
                      value="maintenance"
                      className="text-white hover:bg-gray-800"
                    >
                      Mantenimiento de Software
                    </SelectItem>
                    <SelectItem
                      value="partnership"
                      className="text-white hover:bg-gray-800"
                    >
                      Alianzas o Colaboraciones
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Message field */}
              <motion.div variants={itemVariants}>
                <Textarea
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-32 bg-gray-900/50 border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] backdrop-blur-sm resize-none"
                  required
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#2563eb]/25"
                >
                  Enviar Mensaje
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

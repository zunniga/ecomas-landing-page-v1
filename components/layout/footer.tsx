"use client";

import Link from "next/link";
import React from "react";
import { Phone, Mail, FileText } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ModernFooter() {
  const { theme, systemTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/image/logo/referencia-color.png");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Esperar a que el componente esté montado para evitar problemas de hidratación
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setLogoSrc("/image/logo/promas_logo_dark.png");
    } else {
      setLogoSrc("/image/logo/referencia-color.png");
    }
  }, [theme, systemTheme]);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#360b7f]/5 dark:via-[#90007e]/5 dark:to-[#360b7f]/5 py-16 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#CF0072] to-[#E82769] rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-[#680080] to-[#90007e] rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center mb-6">
                <Image
                  src={logoSrc}
                  alt="Corporación Inalta"
                  width={200}
                  height={32}
                  priority
                  className=""
                />
              </div>
            </div>

            <div
              className={`text-sm leading-relaxed ${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              &quot;Gracias por visitarnos. En PROMÁS, estamos comprometidos con tu
              desarrollo profesional. ¡Esperamos verte pronto!&quot;
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone
                  className={`h-4 w-4 ${
                    currentTheme === "dark"
                      ? "text-pink-400"
                      : "text-purple-600"
                  }`}
                />
                <span
                  className={`text-sm ${
                    currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  +51 984 040 264
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  className={`h-4 w-4 ${
                    currentTheme === "dark"
                      ? "text-pink-400"
                      : "text-purple-600"
                  }`}
                />
                <span
                  className={`text-sm ${
                    currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  contacto@promas.edu.pe
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                currentTheme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              NAVEGACIÓN
            </h3>
            <ul className="space-y-3">
              {[
                "Inicio",
                "Nosotros",
                "Certificados",
                "Diplomados",
                "Cursos",
                "Contáctanos",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-sm transition-colors hover:text-pink-500 ${
                      currentTheme === "dark"
                        ? "text-gray-300 hover:text-pink-400"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                currentTheme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              LEGALIDAD
            </h3>
            <ul className="space-y-3">
              {[
                "Términos de servicio",
                "Política de privacidad",
                "Configuración de Cookies",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-sm transition-colors hover:text-pink-500 ${
                      currentTheme === "dark"
                        ? "text-gray-300 hover:text-pink-400"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Libro de Reclamaciones */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                currentTheme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              LIBRO DE RECLAMACIONES
            </h3>

            <div
              className={`p-4 rounded-lg border-2 border-dashed mb-4 ${
                currentTheme === "dark"
                  ? "border-pink-400/50 bg-white/5"
                  : "border-purple-300 bg-purple-50/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <FileText
                  className={`h-5 w-5 ${
                    currentTheme === "dark"
                      ? "text-pink-400"
                      : "text-purple-600"
                  }`}
                />
                <span
                  className={`font-medium ${
                    currentTheme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Presenta tu reclamo
                </span>
              </div>
              <p
                className={`text-xs mb-4 ${
                  currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Registra tu queja o sugerencia de manera oficial
              </p>
              <div className="bg-gradient-to-b from-[#CF0072] to-[#90007e] dark:from-[#CF0072]/90 dark:to-[#CF0072]/40 hover:shadow-2xl hover:shadow-[#360b7f]/30 dark:hover:shadow-[#CF0072]/30"></div>
              <button
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-[#CF0072]/90 to-[#CF0072]/40 text-white hover:shadow-2xl dark:hover:shadow-[#CF0072]/30"
                    : "bg-gradient-to-r from-[#CF0072] to-[#90007e] text-white hover:shadow-2xl hover:shadow-[#360b7f]/30"
                }`}
              >
                Acceder al Libro
              </button>
            </div>

            {/* Social Media */}
            <div>
              <h4
                className={`text-sm font-medium mb-3 ${
                  currentTheme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
               REDES SOCIALES
              </h4>
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebookF, href: "https://facebook.com" },
                  { icon: FaTwitter, href: "https://twitter.com" },
                  { icon: FaInstagram, href: "https://instagram.com" },
                  { icon: FaLinkedinIn, href: "https://linkedin.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      currentTheme === "dark"
                        ? "bg-white/10 text-gray-300 hover:bg-[#E42569] hover:text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-purple-500 hover:text-white"
                    }`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t text-center ${
            currentTheme === "dark"
              ? "border-white/20 text-gray-400"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <p className="text-sm">
           © 2025 - Todos los derechos reservados.{" "}
            <span
              className={`font-medium ${
                currentTheme === "dark" ? "text-pink-400" : "text-purple-600"
              }`}
            >
              PROMÁS
            </span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

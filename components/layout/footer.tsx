"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
// import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ModernFooter() {
  // const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {

  //   setLogoSrc("/image/logo/logo_main_ecomas.png")
  // }, [theme, systemTheme])

  if (!mounted) return null;

  return (
    <footer className="bg-black py-16 px-6 relative overflow-hidden">
       <div className="absolute inset-0 opacity-25">
             <Image
               src="/image/utils/skills3.png"
               alt=""
               fill
               className="object-cover"
               priority
             />
           </div>
          
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Image
                src="/image/logo/logo_main_ecomas.png"
                alt="Logo ECOMAS"
                width={200}
                height={32}
                priority
                className="brightness-0 invert"
              />
            </div>

            <div className="text-sm leading-relaxed text-gray-300">
              Soluciones de software personalizadas para impulsar el crecimiento
              de tu empresa. Desarrollo web, aplicaciones móviles y sistemas a
              medida con tecnología de vanguardia.
            </div>

            {/* Social Media */}
            <div>
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 bg-gray-800 text-gray-300 hover:bg-[#2563eb] hover:text-white"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              {[
                "Desarrollo Web Personalizado",
                "Aplicaciones Móviles",
                "Chatbots Inteligentes con IA",
                "Mantenimiento y Soporte",
                "Soluciones con Zoho (CRM, Inventory, Creator)",
                "Integración de APIs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors text-gray-300 hover:text-[#2563eb] flex items-start group"
                  >
                    <span className="text-[#2563eb] mr-2 mt-1 group-hover:translate-x-1 transition-transform">
                      ▶
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {["Inicio", "Nosotros", "Servicios", "Proyectos" , "Contáctanos"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm transition-colors text-gray-300 hover:text-[#2563eb] flex items-center group"
                  >
                    <span className="text-[#2563eb] mr-2 group-hover:translate-x-1 transition-transform">
                      ▶
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contacto</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-[#2563eb] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-sm text-white">
                    contacto@ecomassystems.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-[#2563eb] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Teléfono</p>
                  <p className="text-sm text-white">+51 994946573</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-[#2563eb] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                  <p className="text-sm text-white">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Ecomás Systems. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "INICIO", href: "/#hero", section: "hero" },
  { name: "NOSOTROS", href: "/#about", section: "about" },
  {
    name: "CERTIFICADOS",
    href: "https://www.verycerts.com/certs",
    target: "_blank",
    section: null,
  },
  { name: "DIPLOMADOS", href: "/graduates", section: null },
  { name: "CURSOS", href: "/courses", section: null },
  { name: "CONTÁCTANOS", href: "/#contacts", section: "contacts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Scroll spy para detectar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Solo aplicar scroll spy en la página principal
      if (pathname === "/") {
        const sections = ["hero", "about", "contacts"];

        // Si estamos muy arriba, activar hero
        if (window.scrollY < 50) {
          setActiveSection("hero");
          return;
        }

        let newActiveSection = "";
        let minDistance = Number.POSITIVE_INFINITY;

        // Encontrar la sección más cercana al centro de la pantalla
        const viewportCenter = window.scrollY + window.innerHeight / 2;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + window.scrollY + rect.height / 2;
            const distance = Math.abs(viewportCenter - elementCenter);

            if (distance < minDistance) {
              minDistance = distance;
              newActiveSection = sectionId;
            }
          }
        }

        if (newActiveSection && newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, activeSection]);

  // Detectar cambios de ruta para resetear el estado
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
    } else {
      // No establecer "hero" automáticamente, dejar que el scroll spy lo detecte
      const timer = setTimeout(() => {
        if (window.scrollY < 100) {
          setActiveSection("hero");
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Función para determinar si un enlace está activo
  const isLinkActive = (item: (typeof navItems)[0]) => {
    // Para enlaces externos
    if (item.target === "_blank") {
      return false;
    }

    // Para páginas diferentes (no one-page)
    if (
      item.href.startsWith("/") &&
      !item.href.includes("#") &&
      item.href !== "/"
    ) {
      return pathname === item.href;
    }

    // Para enlaces de sección en one-page (solo cuando estamos en la página principal)
    if (pathname === "/" && item.section) {
      return activeSection === item.section;
    }

    // Para cualquier otro caso
    return false;
  };

  // Función para manejar clics en enlaces de sección
  const handleSectionClick = (
    e: React.MouseEvent,
    item: (typeof navItems)[0]
  ) => {
    if (item.section && pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection(item.section);
      }
    }
    closeMobileMenu();
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#03060C]/95 backdrop-blur-xl shadow-lg border-b border-gray-700/30"
            : "bg-[#03060C]"
        }`}
      >
        {/* Main Header */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/image/logo/logo_main_ecomas.png"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </Link>
            </motion.div>

            {/* Navegación Central - Solo Desktop */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.target}
                    onClick={(e) => handleSectionClick(e, item)}
                    className={`text-sm font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg overflow-hidden ${
                      isLinkActive(item)
                        ? "text-[#111827] bg-white font-semibold shadow-md"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {!isLinkActive(item) && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-gray-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg" />
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Botón Contactar - Desktop */}
            <div className="hidden lg:flex items-center">
              <Button
                size="sm"
                className="text-sm bg-white text-[#111827] hover:bg-blue-600 hover:scale-105 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 px-6 font-semibold"
                asChild
              >
                <Link
                  href="/contacto"
                  className="bg-[#2563eb] text-white flex items-center gap-2"
                >
                  <Phone size={18} className="text-white" />{" "}
                  {/* Icono de llamada */}
                  Contactar
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 h-screen bg-[#111827] z-[70] lg:hidden shadow-2xl overflow-hidden"
          >
            {/* Mobile Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between p-4 border-b border-gray-700"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#111827] font-bold text-lg">E</span>
                </div>
                <span className="text-white font-bold text-xl">ECOMAS</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="text-white"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </Button>
            </motion.div>

            {/* Mobile Navigation */}
            <motion.div className="p-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Botón de contacto móvil */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pb-4 border-b border-gray-700"
              >
                <Button
                  className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  asChild
                  onClick={closeMobileMenu}
                >
                  <Link href="/contacto" className="flex items-center gap-2">
                    📞 Contactar
                  </Link>
                </Button>
              </motion.div>

              {/* Enlaces de navegación */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    target={item.target}
                    onClick={(e) => handleSectionClick(e, item)}
                    className={`
                      block px-6 py-3 rounded-2xl text-lg font-medium transition-all duration-300
                      transform hover:scale-105 hover:shadow-lg text-center border relative overflow-hidden group
                      ${
                        isLinkActive(item)
                          ? "text-[#111827] bg-white border-white shadow-md"
                          : "text-white border-gray-600 hover:border-white"
                      }
                    `}
                  >
                    {item.name}
                    {!isLinkActive(item) && (
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type NavItem = {
  name: string;
  href: string;
  section: string | null;
  target?: string;
};

const navItems: NavItem[] = [
  { name: "INICIO", href: "/#hero", section: "hero" },
  { name: "NOSOTROS", href: "/#about", section: "about" },
  { name: "SERVICIOS", href: "/#services", section: "services" },
  { name: "PROYECTOS", href: "/#projects", section: null },
  { name: "CONTÁCTANOS", href: "/#contacts", section: "contacts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Fix hydration issues
  useEffect(() => {
    setIsClient(true);
    // Set initial scroll state
    setIsScrolled(window.scrollY > 10);
  }, []);

  // Scroll spy para detectar la sección activa
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Solo aplicar scroll spy en la página principal
      if (pathname === "/") {
        const sections = ["hero", "services", "about", "contacts"];

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, activeSection, isClient]);

  // Detectar cambios de ruta para resetear el estado
  useEffect(() => {
    if (!isClient) return;

    if (pathname !== "/") {
      setActiveSection("");
    } else {
      const timer = setTimeout(() => {
        if (window.scrollY < 100) {
          setActiveSection("hero");
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, isClient]);

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
    if (item.target === "_blank") {
      return false;
    }

    if (
      item.href.startsWith("/") &&
      !item.href.includes("#") &&
      item.href !== "/"
    ) {
      return pathname === item.href;
    }

    if (pathname === "/" && item.section) {
      return activeSection === item.section;
    }

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

  // Prevent rendering until client-side hydration is complete
  if (!isClient) {
    return (
      <header className="fixed w-full z-50 bg-[#03060C] h-[80px]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="w-[200px] h-[48px]" /> {/* Logo placeholder */}
            <div className="hidden lg:flex flex-1" /> {/* Nav placeholder */}
            <div className="hidden lg:flex w-[120px]" />{" "}
            {/* Button placeholder */}
            <div className="lg:hidden w-[40px]" />{" "}
            {/* Mobile button placeholder */}
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6,
        }}
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
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/image/logo/logo_main_ecomas.png"
                  alt="Logo"
                  width={200}
                  height={48}
                  priority
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "200px",
                    maxHeight: "48px",
                  }}
                />
              </Link>
            </motion.div>

            {/* Navegación Central - Solo Desktop */}
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden lg:flex items-center justify-center flex-1"
            >
              <div className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  >
                    <Link
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
                  </motion.div>
                ))}
              </div>
            </motion.nav>

            {/* Botón Contactar - Desktop */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden lg:flex items-center"
            >
              <Button
                size="sm"
                className="text-sm bg-[#2563eb] text-white hover:bg-blue-600 hover:scale-105 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 px-6 font-semibold"
                asChild
              >
                <Link href="/contacto" className="flex items-center gap-2">
                  <Phone size={18} />
                  Contactar
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center lg:hidden"
            >
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

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
                    <Phone size={18} />
                    Contactar
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

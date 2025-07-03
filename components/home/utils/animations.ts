// Variantes de animación para el Hero Section
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

export const slideInLeft = {
  hidden: {
    x: -120,
    opacity: 0,
    scale: 0.7,
    rotateY: -15,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 1.2,
    },
  },
  exit: {
    x: -120,
    opacity: 0,
    scale: 0.7,
    rotateY: 15,
    transition: {
      duration: 0.5,
    },
  },
}

export const slideInRight = {
  hidden: {
    x: 120,
    opacity: 0,
    scale: 0.7,
    rotateY: 15,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 90,
      duration: 1.4,
    },
  },
  exit: {
    x: 120,
    opacity: 0,
    scale: 0.7,
    rotateY: -15,
    transition: {
      duration: 0.5,
    },
  },
}

export const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

export const letterVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -90,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
}

export const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
    y: -50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      delay: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    rotate: 180,
    y: 50,
    transition: {
      duration: 0.4,
    },
  },
}

export const floatingVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: 1.5,
    },
  },
}

export const descriptionVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 1.2,
    },
  },
}

export const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: 1.8,
    },
  },
}

export const indicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2.2 },
  },
}

// Animaciones de elementos flotantes
export const floatingAnimation1 = {
  y: [0, -20, 0],
  x: [0, 10, 0],
  scale: [1, 1.1, 1],
}

export const floatingAnimation2 = {
  y: [0, 15, 0],
  x: [0, -8, 0],
  rotate: [0, 180, 360],
}

export const floatingAnimation3 = {
  y: [0, -25, 0],
  x: [0, 12, 0],
  scale: [1, 0.8, 1],
}

export const imageFloatingAnimation = {
  y: [0, -15, 0],
  rotate: [0, 1, -1, 0],
}

export const shadowAnimation = {
  boxShadow: [
    "0 25px 50px -12px rgba(30, 41, 59, 0.25)",
    "0 35px 60px -12px rgba(30, 41, 59, 0.35)",
    "0 25px 50px -12px rgba(30, 41, 59, 0.25)",
  ],
}

// Configuraciones de transición
export const floatingTransition1 = {
  duration: 6,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
}

export const floatingTransition2 = {
  duration: 4,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
  delay: 1,
}

export const floatingTransition3 = {
  duration: 5,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
  delay: 2,
}

export const imageFloatingTransition = {
  duration: 6,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
  delay: 1,
}

export const shadowTransition = {
  duration: 3,
  repeat: Number.POSITIVE_INFINITY,
}

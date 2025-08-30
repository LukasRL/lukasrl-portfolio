// Configuración del sitio - Single Responsibility Principle

export const siteConfig = {
  // Información básica del sitio
  name: "Lukas Riveros - Portafolio",
  description: "Desarrollador Front-End y Mobile con 9 años de experiencia",
  url: "https://lukasrl-portfolio.vercel.app",
  ogImage: "/og-image.jpg",

  // Configuración de navegación
  navigation: {
    main: [
      { name: "Sobre Mí", href: "#about" },
      { name: "Experiencia", href: "#experience" },
      { name: "Habilidades", href: "#skills" },
      { name: "Proyectos", href: "#projects" },
      { name: "Certificaciones", href: "#certifications" },
      { name: "Educación", href: "#education" },
      { name: "Contacto", href: "#contact" },
    ],
  },

  // Configuración de redes sociales
  social: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-perfil",
    email: "Luk.riveros@gmail.com",
  },

  // Configuración de contacto
  contact: {
    email: "Luk.riveros@gmail.com",
    location: "Chile",
    available: true,
  },

  // Configuración de SEO
  seo: {
    titleTemplate: "%s | Lukas Riveros",
    defaultTitle: "Lukas Riveros - Desarrollador Front-End y Mobile",
    defaultDescription:
      "Portafolio profesional de Lukas Riveros, desarrollador con experiencia en React, React Native y tecnologías web modernas.",
    siteUrl: "https://lukasrl-portfolio.vercel.app",
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: "https://lukasrl-portfolio.vercel.app",
      siteName: "Lukas Riveros - Portafolio",
    },
    twitter: {
      handle: "@tu-usuario",
      site: "@tu-usuario",
      cardType: "summary_large_image",
    },
  },

  // Configuración de tema
  theme: {
    defaultTheme: "dark",
    themes: ["dark", "light"],
    colorScheme: "dark",
  },
} as const;

// Tipos para la configuración
export type SiteConfig = typeof siteConfig;
export type NavigationItem = (typeof siteConfig.navigation.main)[0];
export type SocialLink = keyof typeof siteConfig.social;

// Importar todas las imágenes de proyectos
import mobileApp from "./mobile-app.svg";
import webApp from "./web-app.svg";
import dashboard from "./dashboard.svg";
import ecommerce from "./ecommerce.svg";
import system from "./system.svg";
import heroAvatar from "./hero-avatar.png";

// Mapeo de tipos de proyecto a imágenes
export const projectImages = {
  mobile: mobileApp,
  web: webApp,
  dashboard: dashboard,
  ecommerce: ecommerce,
  system: system,
} as const;

// Imagen del hero
export const heroImage = heroAvatar;

export type ProjectImageType = keyof typeof projectImages;

# 🚀 Portafolio de Lukas Riveros - Astro

Un portafolio profesional desarrollado en **Astro** siguiendo principios **SOLID** y **Clean Code**.

## ✨ Características

- **🚀 Astro**: Framework moderno para sitios estáticos
- **🎨 Tailwind CSS**: Sistema de diseño utilitario
- **📱 Responsive**: Diseño adaptativo para todos los dispositivos
- **🎯 SOLID**: Arquitectura limpia y mantenible
- **⚡ Performance**: Sitio estático optimizado
- **🌙 Dark Theme**: Paleta de colores Catppuccin Frappé
- **🔗 Enlaces Sociales**: GitHub y LinkedIn integrados

## 🏗️ Arquitectura SOLID

### Single Responsibility Principle (SRP)

- Cada componente tiene una responsabilidad específica
- Separación clara entre datos, presentación y lógica

### Open/Closed Principle (OCP)

- Fácil extensión sin modificar código existente
- Sistema de tipos TypeScript para validación

### Dependency Inversion Principle (DIP)

- Componentes desacoplados y reutilizables
- Datos centralizados en archivos separados

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Componentes de layout (Header, Footer)
│   ├── sections/       # Secciones del portafolio (Hero, About, etc.)
│   └── ui/            # Componentes de interfaz básicos
├── data/               # Datos del portafolio
├── layouts/            # Layouts de Astro
├── pages/              # Páginas de la aplicación
└── types/              # Definiciones de tipos TypeScript
```

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd lukasrl-portfolio

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build

# Preview de producción
pnpm preview
```

## 🎨 Personalización

### Colores

El proyecto usa la paleta **Catppuccin Frappé**:

- **Base**: #303446 (Fondo principal)
- **Mantle**: #292c3c (Fondo secundario)
- **Text**: #c6d0f5 (Texto principal)
- **Maroon**: #ea999c (Acentos e iconos)
- **Mauve**: #ca9ee6 (Gradientes)
- **Lavender**: #babbf1 (Efectos)

### Datos del Portafolio

Edita `src/data/portfolio.ts` para personalizar:

- Información personal
- Experiencia laboral
- Proyectos
- Habilidades
- Certificaciones

## 🔧 Tecnologías Utilizadas

- **Astro 5.13.5**: Framework principal
- **Tailwind CSS 3.4.0**: Sistema de estilos
- **TypeScript**: Tipado estático
- **Vercel**: Deployment y hosting
- **pnpm**: Gestor de paquetes

## 📱 Secciones del Portafolio

1. **Header**: Navegación y logo con botón de idioma
2. **Hero**: Presentación principal con avatar y enlaces sociales
3. **About**: Información personal y profesional
4. **Experience**: Timeline de experiencia laboral con acordeón
5. **Skills**: Categorías de habilidades técnicas con iconos
6. **Projects**: Proyectos destacados con tecnologías
7. **Education**: Formación académica y certificaciones
8. **Footer**: Información de contacto y enlaces sociales

## 🎨 Características Técnicas

- **Componentes Astro**: Arquitectura modular y reutilizable
- **Tailwind CSS**: Sistema de diseño utilitario y responsive
- **Iconos SVG**: Iconografía personalizada para tecnologías
- **Acordeón interactivo**: Experiencia laboral expandible
- **Navegación suave**: Scroll automático entre secciones
- **Optimización**: Build estático para máxima performance

## 🎯 Principios Clean Code Aplicados

- **Nombres descriptivos**: Variables y funciones con nombres claros
- **Funciones pequeñas**: Cada función tiene una responsabilidad
- **Comentarios útiles**: Solo donde es necesario
- **Estructura clara**: Organización lógica de archivos
- **Consistencia**: Patrones uniformes en todo el código
- **Componentes modulares**: Separación clara de responsabilidades
- **Tipos TypeScript**: Validación estática de datos

## 🚀 Deployment

El proyecto está configurado para deployment en **Vercel**:

- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Framework**: Astro
- **Deploy automático** desde GitHub

### Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📝 Licencia

MIT License - Libre para uso personal y comercial.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto

- **Email**: Luk.riveros@gmail.com
- **GitHub**: [@LukasRL](https://github.com/LukasRL)
- **LinkedIn**: [Lukas Riveros Letelier](https://www.linkedin.com/in/lukas-riveros-letelier-79375712b/)

---

Desarrollado con ❤️ usando Astro y principios SOLID

# 🚀 Portafolio de Lukas Riveros - Astro

Un portafolio profesional desarrollado en **Astro** siguiendo principios **SOLID** y **Clean Code**.

## ✨ Características

- **🚀 Astro**: Framework moderno para sitios estáticos
- **🎨 Tailwind CSS**: Sistema de diseño utilitario
- **📱 Responsive**: Diseño adaptativo para todos los dispositivos
- **🎯 SOLID**: Arquitectura limpia y mantenible
- **⚡ Performance**: Sitio estático optimizado
- **🌙 Dark Theme**: Paleta de colores Catppuccin Frappé

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
├── types/              # Definiciones de tipos TypeScript
├── utils/              # Utilidades y helpers
└── styles/             # Estilos globales
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

- `--color-primary`: #babbf1 (Lavender)
- `--color-secondary`: #ca9ee6 (Mauve)
- `--color-accent`: #ea999c (Red)
- `--color-success`: #a6e3a1 (Green)

### Datos del Portafolio

Edita `src/data/portfolio.ts` para personalizar:

- Información personal
- Experiencia laboral
- Proyectos
- Habilidades
- Certificaciones

## 🔧 Tecnologías Utilizadas

- **Astro 5.13.5**: Framework principal
- **Tailwind CSS 3.4.17**: Sistema de estilos
- **TypeScript**: Tipado estático
- **Vercel**: Deployment y hosting

## 📱 Secciones del Portafolio

1. **Header**: Navegación y logo
2. **Hero**: Presentación principal con avatar
3. **About**: Información personal y profesional
4. **Experience**: Timeline de experiencia laboral
5. **Skills**: Categorías de habilidades técnicas
6. **Projects**: Proyectos destacados
7. **Footer**: Información de contacto

## 🎯 Principios Clean Code Aplicados

- **Nombres descriptivos**: Variables y funciones con nombres claros
- **Funciones pequeñas**: Cada función tiene una responsabilidad
- **Comentarios útiles**: Solo donde es necesario
- **Estructura clara**: Organización lógica de archivos
- **Consistencia**: Patrones uniformes en todo el código

## 🚀 Deployment

El proyecto está configurado para deployment en **Vercel**:

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
- **GitHub**: [Tu usuario]
- **LinkedIn**: [Tu perfil]

---

Desarrollado con ❤️ usando Astro y principios SOLID

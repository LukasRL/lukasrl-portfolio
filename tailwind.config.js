/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#babbf1",
        secondary: "#ca9ee6",
        accent: "#ea999c",
        success: "#a6e3a1",
        background: "#303446",
        surface: "#292c3c",
        card: "#414559",
        border: "#51576d",
        text: "#c6d0f5",
        "text-secondary": "#a5adce",
        "text-muted": "#b5bfe2",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

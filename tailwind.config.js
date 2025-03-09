/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundColor: {
        'custom-white': 'rgb(236, 237, 241)',
        'hero-logo-dark': 'rgb(32, 33, 36)',
      },
      boxShadow: {
        'hero-box-shadow': '0 0.6021px 1.8065px -0.8333px #007dfc0d, 0 2.2885px 6.8655px -1.6666px #007dfc0d, 0 10px 30px -2.5px #007dfc0d',
        'hero-btn': '-3px -3px 6px 0px rgb(250, 251, 255), 3px 3px 6px 0px rgba(0, 125, 252, 0.15)',
        'hero-logo': '-5.92901px -5.92901px 11.85802px 0px rgb(250, 251, 255), inset -2.96451px -2.96451px 5.92901px 0px rgb(250, 251, 255), 5.92901px 5.92901px 11.85802px 0px rgba(0, 125, 252, 0.15), inset 2.96451px 2.96451px 5.92901px 0px rgba(0, 125, 252, 0.15)',
        'section-title': '-3px -3px 6px 0px rgb(250, 251, 255), inset -3px -3px 6px 0px rgb(250, 251, 255), 3px 3px 6px 0px rgba(0, 125, 252, 0.15), inset 3px 3px 6px 0px rgba(0, 125, 252, 0.15)',
        'section-title-inside': '-2px -2px 4px 0px  rgb(250, 251, 255), 2px 2px 4px 0px  rgba(0, 125, 252, 0.15)',
        'benefit': 'rgba(0, 125, 252, 0.05) 0px 0.602187px 1.80656px -0.833333px, rgba(0, 125, 252, 0.05) 0px 2.28853px 6.8656px -1.66667px, rgba(0, 125, 252, 0.05) 0px 10px 30px -2.5px',
        'benefit-image': '-3px -3px 6px 0px rgb(250, 251, 255), 3px 3px 6px 0px rgba(0, 125, 252, 0.15)',
        'benefit-image-box': '-3px -3px 6px 0px rgb(250, 251, 255), inset -3px -3px 6px 0px rgb(250, 251, 255), 3px 3px 6px 0px rgba(0, 125, 252, 0.15), inset 3px 3px 6px 0px rgba(0, 125, 252, 0.15)',
        'faq-box': '-3px -3px 6px 0px rgb(250, 251, 255), 3px 3px 6px 0px rgba(0, 125, 252, 0.15)',
        'faq-open': 'inset -3px -3px 6px 0px rgb(250, 251, 255), inset 3px 3px 6px 0px rgba(0, 125, 252, 0.15)',
        'input-shadow': '-2px -2px 4px 0 rgba(250, 251, 255, 1), 2px 2px 4px 0 rgba(0, 125, 252, 0.15)',
        'inside-input-shadow': 'inset -2px -2px 4px 0px rgba(250, 251, 255, 1), inset 2px 2px 4px 0px rgba(0, 125, 252, 0.15)',
        'social-icons': '-2px -2px 4px 0px rgb(250, 251, 255), 2px 2px 4px 0px rgba(0, 125, 252, 0.15)',
        'header-testimonials': '-3px -3px 6px 0px  rgb(250, 251, 255), 3px 3px 6px 0px  rgba(0, 125, 252, 0.15)',
        
        // Dark Shadows
        'hero-box-shadow-dark': '0 0.6021px 1.8065px -0.8333px rgba(0, 125, 252, 0.2), 0 2.2885px 6.8655px -1.6666px rgba(0, 125, 252, 0.2), 0 10px 30px -2.5px rgba(0, 125, 252, 0.2)',
        'hero-btn-dark': '-1px -1px 4px 0px rgba(250, 251, 255, 0.2), 1px 1px 4px 0px rgba(250, 251, 255, 0.2)',
        'section-title-dark': '-3px -3px 4px 0px rgba(0, 125, 252, 0.2), inset -3px -3px 4px 0px rgba(0, 125, 252, 0.2), 3px 3px 4px 0px rgba(0, 125, 252, 0.15), inset 3px 3px 4px 0px rgba(0, 125, 252, 0.15)',
        'section-title-inside-dark': '-2px -2px 4px 0px rgba(0, 125, 252, 0.2), 2px 2px 4px 0px rgba(0, 125, 252, 0.2)',
        'benefit-image-dark': '-3px -3px 6px 0px rgba(250, 251, 255, 0.2), 3px 3px 6px 0px rgba(0, 125, 252, 0.1)',
        'benefit-image-box-dark': '-3px -3px 6px 0px rgba(250, 251, 255, 0.2), inset -3px -3px 6px 0px rgba(250, 251, 255, 0.2), 3px 3px 6px 0px rgba(0, 125, 252, 0.1), inset 3px 3px 6px 0px rgba(0, 125, 252, 0.1)',
        'faq-box-dark': '-3px -3px 6px 0px rgba(250, 251, 255, 0.2), 3px 3px 6px 0px rgba(0, 125, 252, 0.25)',
        'faq-open-dark': 'inset -3px -3px 6px 0px rgba(250, 251, 255, 0.2), inset 3px 3px 6px 0px rgba(0, 125, 252, 0.25)',
        'input-shadow-dark': '-2px -2px 4px 0 rgba(250, 251, 255, 0.2), 2px 2px 4px 0 rgba(0, 125, 252, 0.25)',
        'inside-input-shadow-dark': 'inset -2px -2px 4px 0px rgba(250, 251, 255, 0.2), inset 2px 2px 4px 0px rgba(0, 125, 252, 0.25)',
        'social-icons-dark': '-2px -2px 4px 0px rgba(250, 251, 255, 0.2), 2px 2px 4px 0px rgba(0, 125, 252, 0.25)',
      },
      blur: {
        'sm': '2px',
        'xs': '1px',
      },
      colors: {
        dark: {
          background: '#121212',
          text: '#ffffff',
          primary: '#bb86fc',
        },
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#6200ee',
        }
      }
    },
  },
  plugins: [],
}
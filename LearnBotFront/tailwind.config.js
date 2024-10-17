/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/src/assets/Ilustração_Sem_Título (8).png')",
        'green': "url('/src/assets/IMG_5705.PNG')",
        'purple': "url('/src/assets/IMG_5704.PNG')",
        'yellow': "url('/src/assets/Ilustração_Sem_Título (5).png')",
        'pink': "url('/src/assets/Ilustração_Sem_Título (4).png')", 
      }
    },
  },
  plugins: [],
}


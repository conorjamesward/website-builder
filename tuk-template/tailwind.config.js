/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: '#f3f4f6',
      primaryLight: '#f9fafb',
      primaryDark: '#e5e7eb',
      secondary: '#1f2937',
      secondaryLight: '#374151',
      secondaryDark: '#111827',
      tertiary: '#4b5563',
      tertiaryLight: '#6b7280',
      tertiaryDark: '#374151',
      textColor: '#030918',
      textColorLight: '#3B4866',
      textColorDark: '#000',
      backgroundColor: '#fff',
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs"], // Adjust based on your EJS file locations
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      extend: {
        colors: {
          red: "#A04F4F",
          blue: "#142B4D"
        }
      },
    },
    plugins: [],
  };
  
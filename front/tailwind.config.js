module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3f58',
        green: '#1b9889',
        red: '#ea5353',
        orange: '#ff8052',
      },
      spacing: {
        128: '32rem',
      },
      screens: {
        xs: '320px', // Extra small devices (portrait phones, less than 576px)
        sm: '576px', // Small devices (landscape phones, 576px and up)
        md: '768px', // Medium devices (tablets, 768px and up)
        lg: '992px', // Large devices (desktops, 992px and up)
        xl: '1280px', // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px', // 2K monitors (1536px and up)
        '3xl': '1920px', // Full HD monitors (1920px and up)
        '4xl': '2560px', // 4K monitors (2560px and up)
      },
    },
  },
  plugins: [],
};

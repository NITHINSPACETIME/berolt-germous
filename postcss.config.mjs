/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // This is the line that has changed
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;

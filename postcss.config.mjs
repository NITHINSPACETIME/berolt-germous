/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // This is the line that has changed
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;

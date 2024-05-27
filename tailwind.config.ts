import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login-bg": "url('/LoginPage.svg')",
        "register-bg": "url('/RegisterPage.svg')",
      }),
    },
  },
  plugins: [],
};
export default config;

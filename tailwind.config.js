/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        header: "calc(100vw - 280px)",
      },
      backgroundColor: {
        sidebar: "#0E294B",
      },
      colors: {
        primary: "#023E8A",
        danger: "#B42318",
        subtext: "#57585B",
        "danger-light": "#FEF3F2",
        "success-light": "#ECFDF3",
        green100: "#ABEFC6",
        red100: "#FECDCA",
        success: "#067647",
        black100: "#0A0700",
        black200: "#101828",
        black300: "#1B1C1E",
        black400: "#4F4F4F",
        black500: "#222222",
        gray400: "#475467",
        gray500: "#667085",
        gray600: "#475467",
        gray700: "#344054",
        gray800: "#EAECF0",
        gray900: "#F8F5FF",
      },
      boxShadow: {
        "auth-container": "0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        "container": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "menu": "0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
      },
      borderColor: {
        danger: "#EA1212",
      },
    },
  },
  plugins: [],
};

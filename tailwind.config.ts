import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E2024",
        primary: "#4A34C7",
        primaryHover: "#372697",
        primaryTint: "#EDEBFA",
        primaryTintText: "#372697",
        primaryBorder: "#DAD5F6",
        primarySoft: "#F7F6FE",
        bodyGray: "#585C64",
        mutedGray: "#868B94",
        borderGray: "#E1E3E7",
        surfaceGray: "#F4F5F6",
        surfaceGrayAlt: "#FBFBFC",
        dark: "#14161A",
        darkCard: "#1A1D22",
        darkPanel: "#22262C",
        darkPanelAlt: "#252A33",
        darkBorder: "#26292F",
        darkBorderAlt: "#2E323A",
        darkText: "#9AA0AA",
        darkTextLight: "#E7E9EE",
        accentOnDark: "#A99BF0",
        statusRed: "#E2483D",
        statusAmber: "#D97706",
        statusGreen: "#16A34A",
        priorityHigh: "#B42318",
        priorityMedium: "#B45309",
        successBg: "#EEF9F0",
        successText: "#166534",
        marqueeGray: "#B7BAC1",
        navText: "#33363C",
      },
      fontFamily: {
        sans: [
          "var(--font-ibm-plex-sans)",
          "ui-sans-serif",
          "system-ui",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        spinStack: {
          from: { transform: "rotateX(56deg) rotateZ(0deg)" },
          to: { transform: "rotateX(56deg) rotateZ(360deg)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(16px,-20px,0) rotate(14deg)" },
        },
        driftB: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(-20px,16px,0) rotate(-16deg)" },
        },
        cubeSpin: {
          from: { transform: "rotateX(-20deg) rotateY(0deg)" },
          to: { transform: "rotateX(-20deg) rotateY(360deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.8)", opacity: "0.5" },
          "80%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        scanLine: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(188px)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fabFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
        fabRing: {
          "0%": { transform: "scale(.9)", opacity: "0.6" },
          "80%": { transform: "scale(1.35)", opacity: "0" },
          "100%": { transform: "scale(1.35)", opacity: "0" },
        },
        statusCycle: {
          "0%, 4%": { opacity: "0", transform: "translateY(6px)" },
          "8%, 28%": { opacity: "1", transform: "translateY(0)" },
          "32%, 100%": { opacity: "0", transform: "translateY(-6px)" },
        },
        dotCycle: {
          "0%, 30%": { background: "#E2483D" },
          "34%, 63%": { background: "#D97706" },
          "67%, 96%": { background: "#16A34A" },
          "100%": { background: "#E2483D" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        spinStack: "spinStack 26s linear infinite",
        floatY: "floatY 8s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        drift: "drift 20s ease-in-out infinite",
        driftB: "driftB 20s ease-in-out infinite",
        cubeSpin: "cubeSpin 18s linear infinite",
        pulseRing: "pulseRing 4.5s ease-out infinite",
        scanLine: "scanLine 3.6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        fabFloat: "fabFloat 3.2s ease-in-out infinite",
        fabRing: "fabRing 2.6s ease-out infinite",
        statusCycle: "statusCycle 7.5s ease-in-out infinite",
        dotCycle: "dotCycle 7.5s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

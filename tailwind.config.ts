import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";
import { CSSProperties } from "react";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      pretendard: [
        "Pretendard",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      // container: {
      //   center: true,
      //   padding: "16px",
      //   screens: "var(--content-container-width)",
      // },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(utilClasses as CSSRuleObject);
    }),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;

/**
 * @description title : t*-*
 * @description body : b*-*
 * @description caption : c*-*
 */
const utilClasses = {
  // body
  ".b1-400": {
    fontSize: "24px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "32px",
  },

  ".b1-500": {
    fontSize: "24px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "32px",
  },
  ".b1-700": {
    fontSize: "24px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "32px",
  },
  ".b2-400": {
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "28px",
  },
  ".b2-500": {
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "28px",
  },
  ".b2-700": {
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "28px",
  },
  ".b3-400": {
    fontSize: "18px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "26px",
  },
  ".b3-500": {
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "26px",
  },
  ".b3-700": {
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "26px",
  },
  ".b4-400": {
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "24px",
  },
  ".b4-500": {
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "24px",
  },
  ".b4-700": {
    fontSize: "16px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "24px",
  },
  // caption
  ".c1-400": {
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "22px",
  },
  ".c1-500": {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "22px",
  },
  ".c1-700": {
    // fontFamily: 'NotoSansKR-Bold',
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "22px",
  },
  ".c2-400": {
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "20px",
  },
  ".c2-500": {
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "20px",
  },
  ".c2-700": {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "20px",
  },
  ".c3-400": {
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "19px",
  },
  ".c3-500": {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "19px",
  },
  ".c3-700": {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "19px",
  },

  // title
  ".t1-400": {
    fontSize: "40px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "48px",
  },
  ".t1-500": {
    fontSize: "40px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "48px",
  },
  ".t1-700": {
    fontSize: "40px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "48px",
  },
  ".t2-400": {
    fontSize: "36px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "44px",
  },
  ".t2-500": {
    fontSize: "36px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "44px",
  },
  ".t2-700": {
    fontSize: "36px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "44px",
  },
  ".t3-400": {
    fontSize: "32px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "40px",
  },
  ".t3-500": {
    fontSize: "32px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "40px",
  },
  ".t3-700": {
    fontSize: "32px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "40px",
  },
  ".t4-400": {
    fontSize: "28px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
    lineHeight: "36px",
  },
  ".t4-500": {
    fontSize: "28px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
    lineHeight: "36px",
  },
  ".t4-700": {
    fontSize: "28px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
    lineHeight: "36px",
  },
} as { [key: string]: CSSProperties };

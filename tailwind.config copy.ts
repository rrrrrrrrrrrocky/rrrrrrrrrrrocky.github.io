import { CSSProperties } from "react";
import { type Config } from "tailwindcss";
import { current, inherit, transparent } from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(utilClasses as CSSRuleObject);
    }),
    require("tailwindcss-animate"),
  ],
  prefix: "",
  theme: {
    /**
     * @description theme.colors에 넣으면 기본 제공 컬러들이 사라짐
     * @description theme.extend.colors는 기본 컬러 유지
     * */
    colors: {
      // accent: {
      //   DEFAULT: 'hsl(var(--accent))',
      //   foreground: 'hsl(var(--accent-foreground))',
      // },
      // background: 'hsl(var(--background))',
      // border: 'hsl(var(--border))',
      // card: {
      //   DEFAULT: 'hsl(var(--card))',
      //   foreground: 'hsl(var(--card-foreground))',
      // },
      // destructive: {
      //   DEFAULT: 'hsl(var(--destructive))',
      //   foreground: 'hsl(var(--destructive-foreground))',
      // },
      // foreground: 'hsl(var(--foreground))',
      // input: 'hsl(var(--input))',
      // muted: {
      //   DEFAULT: 'hsl(var(--muted))',
      //   foreground: 'hsl(var(--muted-foreground))',
      // },
      // popover: {
      //   DEFAULT: 'hsl(var(--popover))',
      //   foreground: 'hsl(var(--popover-foreground))',
      // },
      // primary: {
      //   DEFAULT: 'hsl(var(--primary))',
      //   foreground: 'hsl(var(--primary-foreground))',
      // },
      // ring: 'hsl(var(--ring))',
      // secondary: {
      //   DEFAULT: 'hsl(var(--secondary))',
      //   foreground: 'hsl(var(--secondary-foreground))',
      // },
      r: {
        black: "#000000",
        blue: {
          1: "#F2FBFE",
          10: "#276FDE",
          12: "#0E4E97",
          2: "#ECF6FF",
          9: {
            DEFAULT: "#2F80ED",
            disabled: "#97BFF6",
          },
          // DEFAULT: '#2F80ED',
        },
        current,
        gray: {
          1: {
            DEFAULT: "#F7F8F9",
            disabled: "#FBFBFC",
          },
          10: {
            DEFAULT: "#383B3E",
            disabled: "#9B9D9E",
          },
          11: "#26282B",
          12: "#1A1B1E",
          2: "#F3F3F3",
          3: {
            DEFAULT: "#E8EBED",
            disabled: "#F3F5F6",
          },
          4: "#C9CDD2",
          5: "#9FA4AA",
          6: "#8A8D90",
          7: "#72787F",
          8: "#616569",
          9: "#464C53",
          // DEFAULT: '#26282B',
        },
        inherit,
        red: {
          1: "#FFF3F5",
          10: "#D62525",
          11: "#B32424",
          12: "#990505",
          2: "#FEE7E6",
          3: "#FFDDDD",
          4: "#FFD2D8",
          5: "#FFB5BE",
          6: "#FF9595",
          7: "#FE7474",
          8: "#EB5757",
          9: "#F43636",
          DEFAULT: "#EB5757",
        },
        transparent,
        white: "#FFFFFF",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "16px",
        md: "8px",
        sm: "4px",
      },
      colors: {},
      // colors: {
      //   accent: {
      //     DEFAULT: 'hsl(var(--accent))',
      //     foreground: 'hsl(var(--accent-foreground))',
      //   },
      //   background: 'hsl(var(--background))',
      //   border: 'hsl(var(--border))',
      //   card: {
      //     DEFAULT: 'hsl(var(--card))',
      //     foreground: 'hsl(var(--card-foreground))',
      //   },
      //   destructive: {
      //     DEFAULT: 'hsl(var(--destructive))',
      //     foreground: 'hsl(var(--destructive-foreground))',
      //   },
      //   foreground: 'hsl(var(--foreground))',
      //   input: 'hsl(var(--input))',
      //   muted: {
      //     DEFAULT: 'hsl(var(--muted))',
      //     foreground: 'hsl(var(--muted-foreground))',
      //   },
      //   popover: {
      //     DEFAULT: 'hsl(var(--popover))',
      //     foreground: 'hsl(var(--popover-foreground))',
      //   },
      //   primary: {
      //     DEFAULT: 'hsl(var(--primary))',
      //     foreground: 'hsl(var(--primary-foreground))',
      //   },
      //   ring: 'hsl(var(--ring))',
      //   secondary: {
      //     DEFAULT: 'hsl(var(--secondary))',
      //     foreground: 'hsl(var(--secondary-foreground))',
      //   },
      // },
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
    },
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
    // fontSize: {
    //   'body1': ['16px', { fontWeight: '400', lineHeight: '20px' }],
    //   'body1-bold': ['16px', { fontWeight: '500', lineHeight: '20px' }],
    //   'body2': ['16px', { fontWeight: '400', lineHeight: '24px' }],
    //   'body2-bold': ['16px', { fontWeight: '500', lineHeight: '24px' }],
    //   'caption1': ['14px', { fontWeight: '400', lineHeight: '20px' }],
    //   'caption1-bold': ['14px', { fontWeight: '500', lineHeight: '20px' }],
    //   'caption2': ['12px', { fontWeight: '400', lineHeight: '18px' }],
    //   'caption2-bold': ['12px', { fontWeight: '600', lineHeight: '18px' }],
    //   'caption3': ['11px', { fontWeight: '400', lineHeight: '14px' }],
    //   'head': ['24px', { fontWeight: '500', lineHeight: '33px' }],
    //   'head-bold': ['24px', { fontWeight: '600', lineHeight: '33px' }],
    //   'head-extra-bold': ['24px', { fontWeight: '700', lineHeight: '33px' }],
    //   'number': ['18px', { fontWeight: '400', lineHeight: '20px' }],
    //   'number-bold': ['18px', { fontWeight: '500', lineHeight: '20px' }],
    //   'number-extra-bold': ['18px', { fontWeight: '600', lineHeight: '20px' }],
    //   'subTitle': ['18px', { fontWeight: '500', lineHeight: '26px' }],
    //   'subTitle-bold': ['18px', { fontWeight: '600', lineHeight: '26px' }],
    //   'title': ['21px', { fontWeight: '500', lineHeight: '30px' }],
    //   'title-bold': ['21px', { fontWeight: '600', lineHeight: '30px' }],
    //   'title-extra-bold': ['21px', { fontWeight: '700', lineHeight: '30px' }],
    // },
  },
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

// import type { Config } from "tailwindcss"

// const config = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//   ],
//   prefix: "r",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config

// export default config

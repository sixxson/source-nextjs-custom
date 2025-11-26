import plugin from "tailwindcss/plugin";

function setClamp(min, max = min) {
  const minPx = parseFloat(min);
  const maxPx = parseFloat(max);
  const maxValue = (maxPx / 1920) * 100 + "rem";
  return `clamp(${minPx}px, ${maxValue}, ${maxValue})`;
}
function r(value) {
  return (value / 1920) * 100 + "rem";
}
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}", // App Router (Next 13+)
  "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  aspectRatio: {
    auto: "auto",
    square: "1 / 1",
    video: "16 / 9",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
  },
  screens: {
    xs: "320px",
    // => @media (min-width: 320px) { ... }
    sm: "576px",
    // => @media (min-width: 576px) { ... }
    md: "768px",
    // => @media (min-width: 960px) { ... }
    lg: "1024px",
    // => @media (min-width: 1440px) { ... }
    xl: "1200px",
    // => @media (min-width: 1440px) { ... }
    "-xs": {
      max: "409.98px",
    },
    "-sm": {
      max: "575.98px",
    },
    "-md": {
      max: "767.98px",
    },
    "-lg": {
      max: "1023.98px",
    },
    "-xl": {
      max: "1199.98px",
    },
  },
  borderWidth: {
    DEFAULT: "1px",
    0: "0px",
    2: "calc(2/1920*100rem)",
    3: "calc(3/1920*100rem)",
    4: "calc(4/1920*100rem)",
    8: "calc(8/1920*100rem)",
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "15px",
      md: "30px",
      xl: "calc(20/1920*100rem)",
    },
    screens: {
      xs: "100vw",
      sm: "100vw",
      md: "100vw",
      lg: "1024px",
      xl: "calc(1440/1920*100rem)",
    },
  },
  fontFamily: {
    primary: ['SVN-Gilroy', "sans-serif"],
    goldman: ["Goldman", "sans-serif"],
    awesome: ['"Font Awesome 6 Pro"'],
    awesomeSharp: ['"Font Awesome 6 Sharp"'],
  },
  fontSize: {
    0: ["0", { lineHeight: "0" }],
    xs: [
      "clamp(10px,calc(12/1920*100rem),calc(12/1920*100rem))",
      ,

      { lineHeight: "1.2" },
    ],
    sm: [
      "clamp(14px,calc(14/1920*100rem),calc(14/1920*100rem))",
      ,

      { lineHeight: "1.2" },
    ],
    base: [
      "clamp(14px,calc(16/1920*100rem),calc(16/1920*100rem))",
      ,

      { lineHeight: "1.2" },
    ],
    "15px": [
      "clamp(15px,calc(15/1920*100rem),calc(15/1920*100rem))",
      ,

      { lineHeight: "1.2" },
    ],
    lg: ["calc(18/1920*100rem)", , { lineHeight: "1.2" }],
    xl: ["calc(20/1920*100rem)", , { lineHeight: "1.2" }],
    "2xl": ["clamp(18px,calc(24/1920*100rem),calc(24/1920*100rem))"],
    "3xl": ["calc(30/1920*100rem)"],
    "4xl": ["calc(36/1920*100rem)"],
    "5xl": ["calc(40/1920*100rem)"],
    "6xl": ["calc(48/1920*100rem)"],
    "7xl": ["calc(72/1920*100rem)", { lineHeight: "1" }],
    "8xl": ["calc(84/1920*100rem)", { lineHeight: "1" }],
    "9xl": ["calc(96/1920*100rem)", { lineHeight: "1" }],
    28: ["calc(28/1920*100rem)", { lineHeight: 1.5 }],
    30: ["calc(30/1920*100rem)", { lineHeight: "calc(38/1920*100rem)" }],
    38: ["calc(38/1920*100rem)", { lineHeight: "calc(46/1920*100rem)" }],
    32: ["calc(32/1920*100rem)"],
    40: ["calc(40/1920*100rem)"],
    42: ["calc(42/1920*100rem)"],
    64: ["calc(64/1920*100rem)"],
  },
  spacing: {
    0: "0px",
    0.25: "calc(1/1920*100rem) /* 1px */",
    0.5: "calc(2/1920*100rem) /* 2px */",
    0.75: "calc(3/1920*100rem) /* 3px */",
    1: "calc(4/1920*100rem) /* 4px */",
    1.25: "calc(5/1920*100rem) /* 5px */",
    1.5: "calc(6/1920*100rem) /* 6px */",
    1.75: "calc(7/1920*100rem) /* 7px */",
    2: "calc(8/1920*100rem) /* 8px */",
    2.25: "calc(9/1920*100rem) /* 9px */",
    2.5: "calc(10/1920*100rem) /* 10px */",
    2.75: "calc(11/1920*100rem) /* 11px */",
    3: "calc(12/1920*100rem) /* 12px */",
    3.25: "calc(13/1920*100rem) /* 13px */",
    3.5: "calc(14/1920*100rem) /* 14px */",
    3.75: "calc(15/1920*100rem) /* 15px */",
    4: "calc(16/1920*100rem) /* 16px */",
    4.25: "calc(17/1920*100rem) /* 17px */",
    4.5: "calc(18/1920*100rem) /* 18px */",
    4.75: "calc(19/1920*100rem) /* 19px */",
    5: "calc(20/1920*100rem) /* 20px */",
    5.5: "calc(22/1920*100rem) /* 22px */",
    6: "calc(24/1920*100rem) /* 24px */",
    6.5: "calc(26/1920*100rem) /* 26px */",
    7: "calc(28/1920*100rem) /* 28px */",
    7.5: "calc(30/1920*100rem) /* 30px */",
    8: "calc(32/1920*100rem) /* 32px */",
    8.5: "calc(34/1920*100rem) /* 34px */",
    8.75: "calc(35/1920*100rem) /* 35px */",
    9: "calc(36/1920*100rem) /* 36px */",
    9.5: "calc(38/1920*100rem) /* 38px */",
    10: "calc(40/1920*100rem) /* 40px */",
    11: "calc(44/1920*100rem) /* 44px */",
    12: "calc(48/1920*100rem) /* 48px */",
    12.5: "calc(50/1920*100rem) /* 50px */",
    13: "calc(52/1920*100rem) /* 52px */",
    14: "calc(56/1920*100rem) /* 56px */",
    15: "calc(60/1920*100rem) /* 60px */",
    16: "calc(64/1920*100rem) /* 64px */",
    17: "calc(68/1920*100rem) /* 68px */",
    17.5: "calc(70/1920*100rem) /* 70px */",
    18: "calc(72/1920*100rem) /* 72px */",
    19: "calc(76/1920*100rem) /* 76px */",
    20: "calc(80/1920*100rem) /* 80px */",
    22.5: "calc(90/1920*100rem) /* 90px */",
    23: "calc(94/1920*100rem) /* 94px */",
    24: "calc(96/1920*100rem) /* 96px */",
    25: "calc(100/1920*100rem) /* 100px */",
    27.5: "calc(110/1920*100rem) /* 110px */",
    28: "calc(112/1920*100rem) /* 112px */",
    30: "calc(120/1920*100rem) /* 120px */",
    32: "calc(128/1920*100rem) /* 128px */",
    36: "calc(144/1920*100rem) /* 144px */",
    40: "calc(160/1920*100rem) /* 160px */",
    42: "calc(160/1920*100rem) /* 168px */",
    44: "calc(176/1920*100rem) /* 176px */",
    48: "calc(192/1920*100rem) /* 192px */",
    48: "calc(192/1920*100rem) /* 192px */",
    50: "calc(200/1920*100rem) /* 200px */",
    56: "calc(224/1920*100rem) /* 224px */",
    60: "calc(240/1920*100rem) /* 240px */",
    full: "100%",
    screen: "100vw",
    "2full": "200%",

    //   custom spacing
    mobile: "15px",
    md: "calc(28/1920*100rem)",
    lg: "calc(40/1920*100rem)",
    "md-24": "calc(24/1920*100rem)",
  },
  scale: {
    0: "0",
    50: ".5",
    70: ".70",
    75: ".75",
    80: ".8",
    85: ".85",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    115: "1.15",
    120: "1.2",
    125: "1.25",
    150: "1.5",
    200: "2",
  },
  opacity: {
    0: "0",
    10: "0.1",
    15: "0.15",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    35: "0.35",
    40: "0.4",
    45: "0.45",
    50: "0.5",
    55: "0.55",
    60: "0.6",
    65: "0.65",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    85: "0.85",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  outlineOffset: {
    0: "0px",
    1: "1px",
    2: "calc(2/1920*100rem)",
    3: "calc(3/1920*100rem)",
    4: "calc(4/1920*100rem)",
    5: "calc(5/1920*100rem)",
    8: "calc(8/1920*100rem)",
  },
  extend: {
    colors: {
      transparent: "transparent",
      primary: {
        1: "#b0001f",
        2: "#ffffff",
        3: "#000000"
      },
      secondary: {
        "primary-2-10": "#ffffff",
        "primary-3-50": "#000000",
      },
      utility: {
        white: "#ffffff",
        "gray-50": "#f6f6f6",
        "gray-100": "#efefef",
        "gray-200": "#dcdcdc",
        "gray-300": "#bdbdbd",
        "gray-400": "#989898",
        "gray-500": "#818181",
        "gray-600": "#656565",
        "gray-700": "#525252",
        "gray-800": "#464646",
        "gray-900": "#3d3d3d",
        "gray-950": "#292929",
        black: "#000000",
        "error-1": "#e30e00",
        "error-2": "#e30e00",
        "error-3": "#e30e00",
        "correct-1": "#0079d5",
        "correct-2": "#0079d5",
        "correct-3": "#0079d5",
      },
    },
    animation: {
      "spin-circle": "rotateCircle 20s linear infinite",
      "fade-in": "fadeIn 2s linear infinite",
      spin: "spin 2s linear infinite",
    },
    backgroundImage: ({ theme }) => ({
      "linear-1": `linear-gradient(90deg, #181830 -0.01%, #1D1D38 19.26%, #141228 40.12%, #2C223A 75.47%, #231B33 99.98%)`,
    }),
    backgroundPosition: {
      "pos-100-0": "100% 0%",
    },
    backgroundSize: {
      "0-100": "0 100%",
      "100-100": "100% 100%",
      "200-100": "200% 100%",
    },
    blur: {
      DEFAULT: "12.5px",
    },
    borderRadius: {
      1: "calc(4/1920*100rem) /* 4px */",
      2: "calc(8/1920*100rem) /* 8px */",
      3: "calc(12/1920*100rem) /* 12px */",
      4: "calc(16/1920*100rem) /* 16px */",
      5: "calc(20/1920*100rem) /* 20px */",
      6: "calc(24/1920*100rem) /* 24px */",
      7: "calc(28/1920*100rem) /* 28px */",
      8: "calc(32/1920*100rem) /* 32px */",
      9: "calc(36/1920*100rem) /* 36px */",
      10: "calc(40/1920*100rem) /* 40px */",
      11: "calc(44/1920*100rem) /* 44px */",
      12: "calc(48/1920*100rem) /* 48px */",
      13: "calc(52/1920*100rem) /* 52px */",
      14: "calc(56/1920*100rem) /* 56px */",
      15: "calc(60/1920*100rem) /* 60px */",
      16: "calc(64/1920*100rem) /* 64px */",
      17: "calc(68/1920*100rem) /* 68px */",
      18: "calc(72/1920*100rem) /* 72px */",
      19: "calc(76/1920*100rem) /* 76px */",
      20: "calc(80/1920*100rem) /* 80px */",
    },
    typography: {
      DEFAULT: {
        css: {
          // "--tw-prose-headings": 'theme("colors.primary.2")',
          "--tw-prose-body": "inherit",
          "h1,h2,h3,h4,h5,h6": {
            fontSize: setClamp(18, 20),
            fontWeight: "700",
            lineHeight: 1.3,
            color: "theme('colors.primary.1')",
            // "@media (min-width: theme('screens.xl'))": {
            // 	fontSize: r(20),
            // },
          },
          strong: {
            color: "inherit",
            fontWeight: "700",
          },
          blockquote: {
            color: "#white",
          },
          figcaption: {
            fontSize: r(15),
          },
          fontSize: "inherit",
          lineHeight: "inherit",
          "*": { margin: `${r(20)} 0` },
          "> *:first-child": { marginTop: 0 },
          "> *:last-child": { marginBottom: 0 },
          div: { margin: `${r(20)} 0` },
          margin: 0,
          maxWidth: "unset",
          blockquote: {
            borderInlineStartColor: "theme('colors.primary.1')",
            backgroundColor: "theme('colors.secondary.1')",
            paddingTop: r(12, 16),
            paddingBottom: r(12, 16),
            fontStyle: "normal",
          },
          a: {
            color: "theme('colors.primary.2')",
            textDecoration: "underline",
            "&:hover": {
              color: "#EE0000",
            },
            "&:visited": {
              color: "#551A8B",
            },
          },
          ul: {
            "padding-left": "calc(24/1920*100rem)",
            li: {
              paddingLeft: 0,
              margin: "0 0",
              "&::marker": {
                color: "theme('colors.neutral.950')",
              },
            },
          },
          table: {
            td: {
              border: "thin solid #e8e8e8",
              padding: "0.5rem",
            },
          },
        },
      },
      "white-marker": {
        css: {
          ul: {
            li: {
              "&::marker": {
                color: "#fff",
              },
            },
          },
        },
      },
      "no-space": {
        css: {
          "*": { margin: `0 0` },
          div: { margin: `0 0` },
        },
      },
      "space-y-3": {
        css: {
          "*": { margin: `${r(12)} 0` },
          div: { margin: `${r(12)} 0` },
          "> *:first-child": { marginTop: 0 },
          "> *:last-child": { marginBottom: 0 },
        },
      },
      "space-y-6": {
        css: {
          "*": { margin: `${r(24)} 0` },
          div: { margin: `${r(24)} 0` },
          "> *:first-child": { marginTop: 0 },
          "> *:last-child": { marginBottom: 0 },
        },
      },
    },
    boxShadow: {
      "shadow 1": "0px 4px 4px 0px rgba(31,34,39,0.08)",
      "shadow 2": "0px 4px 8px 0px rgba(31,34,39,0.08)",
      "shadow 3": "0px 8px 16px 0px rgba(31,34,39,0.08)",
      "shadow 4": "0px 16px 24px 0px rgba(31,34,39,0.06)",
    },
    lineClamp: {
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
    },
    lineHeight: {
      1.125: "1.125",
      1.3: "1.3",
      1.33: "1.33",
      1.4: "1.4",
      1.44: "1.44",
    },
    keyframes: {
      bgGradient: {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "50%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
      rotateCircle: {
        "0%": { transform: "translate(-50%, -50%) rotate(0)" },
        "100%": {
          transform: "translate(-50%, -50%) rotate(360deg)",
        },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    zIndex: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      11: "11",
      12: "12",
      100: "100",
      999: "999",
      1000: "1000",
    },
  },
};
export const corePlugins = {
  aspectRatio: true,
};
export const variants = {
  aspectRatio: ["responsive", "hover"],
  lineClamp: ["responsive", "hover"],
};
export const plugins = [
  plugin(function ({
    addBase, addComponents, addVariant, matchUtilities, addUtilities, theme,
  }) {
    addBase({});
    addComponents({
      // heading
      ".heading-1": {
        fontSize: "calc(36/1920*100rem)",
        lineHeight: "1.4",
      },
      ".heading-2": {
        fontSize: "calc(24/1920*100rem)",
        lineHeight: "1.35",
      },
      ".heading-3": {
        fontSize: "calc(48/1920*100rem)",
        lineHeight: "1.25",
      },
      ".heading-4": {
        fontSize: "calc(20/1920*100rem)",
        lineHeight: "1.4",
      },
      ".heading-5": {
        fontSize: "calc(18/1920*100rem)",
        lineHeight: "1.4",
      },
      ".heading-5-2": {
        fontSize: "calc(60/1920*100rem)",
        lineHeight: "1.3",
      },

      // text-body
      ".body-1": {
        fontSize: "calc(18/1920*100rem)",
        lineHeight: "1.4",
      },
      ".body-2": {
        fontSize: "calc(20/1920*100rem)",
        lineHeight: "1.4",
      },
      ".body-3": {
        fontSize: "calc(16/1920*100rem)",
        lineHeight: "1.4",
      },
      ".body-4": {
        fontSize: "clamp(14px,calc(14/1920*100rem),calc(14/1920*100rem))",
        lineHeight: "1.4",
      },
      ".body-5": {
        fontSize: "clamp(12px,calc(12/1920*100rem),calc(12/1920*100rem))",
        lineHeight: "1.4",
      },

      ".title-64": {
        fontWeight: "700",
        fontSize: "calc(36/1920*100rem)", // 4xl
        [`@media (min-width: ${theme("screens.md")})`]: {
          fontSize: "calc(40/1920*100rem)", // 5xl
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          fontSize: "calc(48/1920*100rem)", // 6xl
        },
        [`@media (min-width: ${theme("screens.xl")})`]: {
          fontSize: "calc(64/1920*100rem)", // 64
        },
      },
      ".title-48": {
        fontWeight: "600",
        lineHeight: "1.18",
        fontSize: "calc(36/1920*100rem)", // 4xl
        [`@media (min-width: ${theme("screens.md")})`]: {
          fontSize: "calc(36/1920*100rem)", // still 4xl
        },
        [`@media (min-width: ${theme("screens.xl")})`]: {
          fontSize: "calc(48/1920*100rem)", // 6xl
        },
      },
      ".title-40": {
        fontWeight: "700",
        fontSize: "calc(36/1920*100rem)", // 4xl
        [`@media (min-width: ${theme("screens.lg")})`]: {
          fontSize: "calc(40/1920*100rem)", // 5xl
        },
      },
      ".title-32": {
        fontSize: "22px",
        lineHeight: "1.1",
      },
      ".title-28": {
        fontSize: "20px",
        [`@media (min-width: ${theme("screens.lg")})`]: {
          fontSize: `${28 / 19.2}rem`, // rem:text-[28px]
        },
      },
      ".title-24": {
        fontSize: "18px",
        [`@media (min-width: ${theme("screens.lg")})`]: {
          fontSize: "clamp(18px,calc(24/1920*100rem),calc(24/1920*100rem))", // 2xl
        },
      },
      ".title-20": {
        fontSize: "16px",
        [`@media (min-width: ${theme("screens.lg")})`]: {
          fontSize: "calc(20/1920*100rem)", // xl
        },
      },
      ".body-14": {
        "font-size": "calc(14/1920*100rem)",
      },
      ".body-16": {
        "font-size": "calc(16/1920*100rem)",
      },
      ".body-18": {
        "font-size": "calc(18/1920*100rem)",
      },
      ".absolute-center-y": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      },
      ".absolute-center-x": {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      },
      ".absolute-center": {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
      // gap base
      ".gap-base": {
        gap: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          gap: "theme('spacing.md')",
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          gap: "theme('spacing.lg')",
        },
      },

      // gap base 24
      ".gap-base-24": {
        gap: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          gap: "theme('spacing.md-24')",
        },
      },

      // padding base
      ".pr-base": {
        paddingRight: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          paddingRight: "theme('spacing.md')",
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          paddingRight: "theme('spacing.lg')",
        },
      },
      ".pl-base": {
        paddingLeft: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          paddingLeft: "theme('spacing.md')",
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          paddingLeft: "theme('spacing.lg')",
        },
      },
      ".pt-base": {
        paddingTop: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          paddingTop: "theme('spacing.md')",
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          paddingTop: "theme('spacing.lg')",
        },
      },
      ".px-container": {
        padding: "0 15px",
        [`@media (min-width: ${theme("screens.md")})`]: {
          padding: "0 30px",
        },
        [`@media (min-width: ${theme("screens.xl")})`]: {
          padding: "0 calc(20/1920*100rem)",
        },
      },
      ".mx-container": {
        margin: "0 15px",
        [`@media (min-width: ${theme("screens.md")})`]: {
          margin: "0 30px",
        },
        [`@media (min-width: ${theme("screens.xl")})`]: {
          margin: "0 calc(20/1920*100rem)",
        },
      },

      // padding base 24
      ".pr-base-24": {
        paddingRight: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          paddingRight: "theme('spacing.md-24')",
        },
      },
      ".pl-base-24": {
        paddingLeft: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          paddingLeft: "theme('spacing.md-24')",
        },
      },

      // margin base
      ".mb-base": {
        marginBottom: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          marginBottom: "theme('spacing.md')",
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          marginBottom: "theme('spacing.lg')",
        },
      },
      ".mt-base": {
        marginTop: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          marginTop: "theme('spacing.md')",
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          marginTop: "theme('spacing.lg')",
        },
      },
      ".mt-base-24": {
        marginTop: "theme('spacing.mobile')",
        [`@media (min-width: ${theme("screens.md")})`]: {
          marginTop: "theme('spacing.md-24')",
        },
      },
      ".section-py": {
        paddingTop: "calc(40/1920*100rem)",
        paddingBottom: "calc(40/1920*100rem)",
        [`@media (min-width: ${theme("screens.lg")})`]: {
          paddingTop: "calc(60/1920*100rem)",
          paddingBottom: "calc(60/1920*100rem)",
        },
        [`@media (min-width: ${theme("screens.xl")})`]: {
          paddingTop: "calc(80/1920*100rem)",
          paddingBottom: "calc(80/1920*100rem)",
        },
      },
      ".transition-all": {
        transition: "all 200ms ease",
      },
      ".transition-all-linear-300": {
        transition: "all .3s linear",
      },
      ".transition-all-linear-500": {
        transition: "all .5s linear",
      },
      ".transition-300": {
        transition: "all .3s ease",
      },
      ".transition-500": {
        transition: "all .5s ease",
      },
      ".transition-ease-in-quad": {
        transition: "all 200ms cubic-bezier(.55, .085, .68, .53)",
      },
      ".transition-ease-in-cubic": {
        transition: "all 200ms cubic-bezier(.550, .055, .675, .19)",
      },
      ".transition-ease-in-quart": {
        transition: "all 200ms cubic-bezier(.895, .03, .685, .22)",
      },
      ".transition-ease-in-quint": {
        transition: "all 200ms cubic-bezier(.755, .05, .855, .06)",
      },
      ".transition-ease-in-expo": {
        transition: "all 200ms cubic-bezier(.95, .05, .795, .035)",
      },
      ".transition-ease-in-circ": {
        transition: "all 200ms cubic-bezier(.6, .04, .98, .335)",
      },
      ".transition-ease-out-quad": {
        transition: "all 200ms cubic-bezier(.25, .46, .45, .94)",
      },
      ".transition-ease-out-cubic": {
        transition: "all 200ms cubic-bezier(.215, .61, .355, 1)",
      },
      ".transition-ease-out-quart": {
        transition: "all 200ms cubic-bezier(.165, .84, .44, 1)",
      },
      ".transition-ease-out-quint": {
        transition: "all 200ms cubic-bezier(.23, 1, .32, 1)",
      },
      ".transition-ease-out-expo": {
        transition: "all 200ms cubic-bezier(.19, 1, .22, 1)",
      },
      ".transition-ease-out-circ": {
        transition: "all 200ms cubic-bezier(.075, .82, .165, 1)",
      },
      ".transition-ease-in-out-quad": {
        transition: "all 200ms cubic-bezier(.455, .03, .515, .955)",
      },
      ".transition-ease-in-out-cubic": {
        transition: "all 200ms cubic-bezier(.645, .045, .355, 1)",
      },
      ".transition-ease-in-out-quart": {
        transition: "all 200ms cubic-bezier(.77, 0, .175, 1)",
      },
      ".transition-ease-in-out-quint": {
        transition: "all 200ms cubic-bezier(.86, 0, .07, 1)",
      },
      ".transition-ease-in-out-expo": {
        transition: "all 200ms cubic-bezier(1, 0, 0, 1)",
      },
      ".transition-ease-in-out-circ": {
        transition: "all 200ms cubic-bezier(.785, .135, .15, .86)",
      },
      ".flex-center": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".flex-between": {
        display: "flex",
        justifyContent: "space-between",
      },
      ".flex-between-center": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      ".overflow-overlay": {
        overflowY: "overlay",
      },
      ".absolute-full": {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      },
      ".filter-white": {
        filter: "brightness(0) invert(1)",
        transition: "all .3s ease",
      },
    });
    matchUtilities(
      {
        sq: (value) => ({
          height: value,
          width: value,
        }),
      },
      { values: theme("spacing") }
    );
    const newUtilities = {
      ".horizontal-tb": {
        writingMode: "horizontal-tb",
      },
      ".vertical-rl": {
        writingMode: "vertical-rl",
      },
      ".vertical-lr": {
        writingMode: "vertical-lr",
      },
    };
    addUtilities(newUtilities);
    addVariant("optional", "&:optional");
    addVariant("hocus", ["&:hover", "&:focus"]);
    addVariant("supports-grid", "@supports (display: grid)");
  }),
  plugin(({ addVariant, e }) => {
    addVariant("rem", ({ container, separator }) => {
      const rootFontSize = 19.2; // This is your HTML root font-size
      container.walkRules((rule) => {
        rule.selector = `.${e(`rem${separator}`)}${rule.selector.slice(1)}`;
        rule.walkDecls((decl) => {
          if (decl.value.includes("px")) {
            // Convert the pixel number to rem
            const value = decl.value.replace(
              /(\d+)px/g,
              (match, p1) => `${p1 / rootFontSize}rem`
            );
            decl.value = value;
          }
        });
      });
    });
  }),
  plugin(({ addVariant, e }) => {
    addVariant("clampRem", ({ container, separator }) => {
      const rootFontSize = 19.2; // This is your HTML root font-size
      container.walkRules((rule) => {
        rule.selector = `.${e(`clampRem${separator}`)}${rule.selector.slice(
          1
        )}`;
        rule.walkDecls((decl) => {
          const ratioValues = decl.value.split(" ");
          if (ratioValues.length === 2) {
            const num1 = parseInt(ratioValues[0]);
            const num2 = parseInt(ratioValues[1]);
            if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
              const valRem = num2 / rootFontSize;
              const maxRem = valRem;
              const value = `clamp(${num1}px, ${valRem}rem, ${maxRem}rem)`;
              decl.value = value;
            }
          } else {
            const valRem = 40 / rootFontSize;
            const maxRem = valRem;
            const num1 = parseInt(ratioValues[0]);
            const value = `clamp(${num1}px, ${valRem}rem, ${maxRem}rem)`;
            decl.value = value;
          }
        });
      });
    });
  }),
  plugin(({ addVariant, e }) => {
    addVariant("ratio", ({ container, separator }) => {
      container.walkRules((rule) => {
        rule.selector = `.${e(`ratio${separator}`)}${rule.selector.slice(1)}`;
        rule.walkDecls((decl) => {
          const ratioValues = decl.value.split(" ");
          if (ratioValues.length === 2) {
            const num1 = parseInt(ratioValues[0]);
            const num2 = parseInt(ratioValues[1]);
            if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
              const percentage = `${(num1 / num2) * 100}%`;
              decl.value = `${percentage}`;
            }
          }
        });
      });
    });
  }),
  plugin(function ({ addUtilities, theme }) {
    const breakpoints = ["sm", "md", "lg", "xl"];
    const columns = 12;

    // Generate column utilities for autocomplete
    const columnUtilities = {};

    // Base columns (col-1 through col-12)
    for (let i = 1; i <= columns; i++) {
      columnUtilities[`.col-${i}`] = {};
    }

    // Responsive columns
    breakpoints.forEach((bp) => {
      for (let i = 1; i <= columns; i++) {
        columnUtilities[`.col-${bp}-${i}`] = {};
      }
      columnUtilities[`.col-${bp}-auto`] = {};
    });

    // Add row and helper classes
    columnUtilities[".row"] = {};
    columnUtilities[".col-auto"] = {};

    addUtilities(columnUtilities);
  }),
];

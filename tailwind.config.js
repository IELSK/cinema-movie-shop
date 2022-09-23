const colors = {
  CMSPurple: "#6558f5",
  CMSYellow: "#fbe192",
  CMSGray: "#4b5c6b",
  CMSLightBlack: "#2f3d4a",
  CMSMonteCarlo: "#8dd7cf",
  CMSWhite: "#ffffff",
  CMSMountainMeadow: "#1aae9f",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    extend: {
      width: {
        128: "32rem",
        110: "28rem",
      },
      height: {
        "partial-screen": "89.7vh",
        "11/12" : "91.6vh"
      },
      colors: {
        "CMS-light-black": colors.CMSLightBlack,
        "CMS-purple": colors.CMSPurple,
        "CMS-yellow": colors.CMSYellow,
        "CMS-gray": colors.CMSGray,
        "CMS-monte-carlo": colors.CMSMonteCarlo,
        "CMS-white": colors.CMSWhite,
        "CMS-mountain-meadow": colors.CMS
      },
    },
  },
  plugins: [],
};

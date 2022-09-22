const colors = {
  CMSPurple: "#6558f5",
  CMSYellow: "#fbe192",
  CMSGray: "#4b5c6b",
  CMSMonteCarlo: "#8dd7cf",
  CMSWhite: "#ffffff",
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
      colors: {
        "CMS-purple": colors.CMSPurple,
        "CMS-yellow": colors.CMSYellow,
        "CMS-gray": colors.CMSGray,
        "CMS-monte-carlo": colors.CMSMonteCarlo,
        "CMS-white": colors.CMSWhite,
      },
    },
  },
  plugins: [],
};

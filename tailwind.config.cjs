module.exports = {
  content: ["./src/routes/**/*.{svelte,js,ts}"],
  daisyui: {
    themes: [
      {
        mishi: {
          "primary": "#009a8a",
          "secondary": "#3d1e04",
          "accent": "#37CDBE",
          "neutral": "#009a8a",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272"
        }
      },
    ]
  },
  plugins: [require("daisyui")]
};

const plugin = require("tailwindcss/plugin");
const { parseFontNextString } = require("../helpers");


module.exports = plugin(function ({ matchUtilities, theme, e }) {
  matchUtilities(
    {
      font: (val) => {
        const parsedFonts = parseFontNextString(val);
        return parsedFonts;
      },
    },
    {
      values: theme("fontFamily"),
    }
  );
});

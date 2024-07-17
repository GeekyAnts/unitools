const plugin = require("tailwindcss/plugin");

function splitFontWeight(fontWeight) {
  const regex = /^([1-9]00)([a-zA-Z]+)$/;
  const match = fontWeight.match(regex);

  if (match) {
    return {
      numericWeight: match[1],
      textWeight: match[2],
    };
  }
}

function parseFontString(fontString) {
  if (typeof fontString !== "string") return fontString;

  const regex = /^([^_]+)(?:_([^_]+))?(?:_([^_]+))?$/;
  const match = fontString.match(regex);

  if (match) {
    let fontConfiguration = {};
    if (match[1]) {
      fontConfiguration.fontFamily = `var(--${match[1].replace(" ", "-").toLowerCase()})`;
    }
    if (match[2]) {
      const splittedFontWeight = splitFontWeight(match[2]);
      fontConfiguration.fontWeight = splittedFontWeight.numericWeight;
    }
    if (match[3]) {
      fontConfiguration.fontStyle = match[3].toLowerCase();
    }
    return fontConfiguration;
  }
}

module.exports = plugin(function ({ matchUtilities, theme, e }) {
  matchUtilities(
    {
      font: (val) => {
        const parsedFonts = parseFontString(val);

        return parsedFonts;
      },
    },
    {
      values: theme("fontFamily"),
    }
  );
});

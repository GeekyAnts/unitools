const plugin = require("tailwindcss/plugin");
const { parseFontExpoString } = require("../helpers");


module.exports = plugin(function ({ matchUtilities, theme, e }) {
    matchUtilities(
        {
            font: (val) => {
                const parsedFonts = parseFontExpoString(val)
                return parsedFonts;
            },
        },
        {
            values: theme("fontFamily"),
        }
    );
});

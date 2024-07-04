const plugin = require("tailwindcss/plugin");

const fff = plugin(function ({ addUtilities, theme, e }) {
  const fonts = theme("fontFamily");
  const ogFontWeight = theme("fontWeight");

  let modifiedFontFamily = {};

  Object.keys(ogFontWeight).forEach((fw) => {
    let updatedFw = fw;

    if (ogFontWeight[fw] === "400") updatedFw = "regular";
    modifiedFontFamily[fw] =
      `${ogFontWeight[fw]}${updatedFw.charAt(0).toUpperCase()}${updatedFw.slice(1)}`;
  });

  const combinedUtilities = {};

  const fontStyles = {
    italic: "Italic",
  };

  Object.entries(fonts).forEach(([fontName, fontValue]) => {
    const capitalizedFontName =
      fontValue.charAt(0).toUpperCase() + fontValue.slice(1);
    const defaultClassName = `.${e(`font-${fontName}`)}`;
    combinedUtilities[defaultClassName] = {
      fontFamily: `${capitalizedFontName}_400Regular`,
    };
    const italicDefaultClassName = `.${e(`font-${fontName}`)}.${e(`font-${fontStyles["italic"]}`)}`;
    combinedUtilities[italicDefaultClassName] = {
      fontFamily: `${capitalizedFontName}_400Regular_Italic`,
    };
    Object.entries(modifiedFontFamily).forEach(
      ([weightValue, weightSuffix]) => {
        Object.entries(fontStyles).forEach(([styleName, styleSuffix]) => {
          const className = `.${e(`font-${fontName}`)}.${e(`font-${weightValue}`)}.${e(`font-${styleName}`)}`;
          combinedUtilities[className] = {
            fontFamily: `${capitalizedFontName}_${weightSuffix}_${styleSuffix}`,
          };

          const regularClassName = `.${e(`font-${fontName}`)}.${e(`font-${weightValue}`)}`;
          combinedUtilities[regularClassName] = {
            fontFamily: `${capitalizedFontName}_${weightSuffix}`,
          };
        });
      }
    );
  });

  addUtilities(combinedUtilities);
});

export default fff;

export const useFonts = (params) => {
  let loaded = true;
  let error = false
  let variableString = "";

  params.forEach((font) => {
    variableString = variableString + " " + font?.variable;
  });

  return {
    loaded,
    error,
    variables: variableString
  };
};



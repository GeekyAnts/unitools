var Platform: "unknown" | "next" | "expo" = "unknown";

try {
  const platform = require("./platform.js");
  Platform = platform.value;
} catch (e) {
  console.error(e);
}

export { Platform };

module.exports = function override(config, env) {
    // Exclude source-map-loader for @mediapipe/tasks-vision
    config.module.rules.forEach((rule) => {
      if (
        Array.isArray(rule.use) &&
        rule.use.find((loader) => loader.loader && loader.loader.includes("source-map-loader"))
      ) {
        rule.exclude = /@mediapipe\/tasks-vision/;
      }
    });
  
    return config;
  };
  
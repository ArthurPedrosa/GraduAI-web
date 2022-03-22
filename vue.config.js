const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src"),
        $modules: resolve("src/modules"),
        $shared: resolve("src/shared"),
      },
    },
  },
};

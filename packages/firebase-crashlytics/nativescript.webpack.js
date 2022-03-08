module.exports = webpack => {
  webpack.chainWebpack((config) => {
    // fix import path for stacktrace-js
    config.resolve.alias.set(
      "stacktrace-js",
      "stacktrace-js/dist/stacktrace.js"
    );
  });
}

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xax999',
  e2e: {
    baseUrl: "http://localhost:1234",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

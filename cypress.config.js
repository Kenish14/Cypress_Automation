const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 7000,
  env: {
    // set common environment variables here
    url : "https://rahulshettyacademy.com",
  },
  projectId: "5s2e7k",
  //npx cypress run --record --key add553fe-ae6a-4677-8385-cf791bc440c1 (record key)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

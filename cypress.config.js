const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  defaultCommandTimeout:6000,
  reporter:'cypress-mochawesome-reporter',  
  env: {
    url : "https://rahulshettyacademy.com"
  },
  projectId: "xsiiz5",
  retries: {
    runMode: 1,
   
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
     
    },
    specPattern: 'cypress/integration/*/*.js',  // lire l'ensemble des fichiers de test dans ce dossier§
    
  },
});

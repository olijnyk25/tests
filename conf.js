exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444s/wd/hub',
    specs: ['spec.js', './tests/*spec.js'],
    getPageTimeout: 40000,
    allScriptsTimeout: 45000,
    
    capabilities: {
        browserName: 'firefox',
        maxInstances: 1,
        'moz:firefoxOptions': {
         args: ['--safe-mode']
        },
       // chromeOptions: {
         //   args: ['--disable-browser-side-navigation','--no-sandbox'] 
         // } ,
    noGlobals: false
    },
    onPrepare: function() {
      let AllureReporter = require('./node_modules/jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
    },

    jasmineNodeOpts: {
        showColors: true,
        //defaultTimeoutInterval: 120000
        //allScriptsTimeout: 550000
      }
}
//This header is for jasmine reports
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['NonAngular.js'],

 // Running Tests in Headless mode, ie: we will not see browser UI, runs in background
 
  capabilities: {
	  browserName: 'chrome',

	  chromeOptions: {
	     args: [ "--headless"]
	   }
	},

	  
// Below code is for jasmine reports  
onPrepare: function() {
  // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
  jasmine.getEnv().addReporter(new HtmlReporter({
     baseDirectory: 'tmp/screenshots'
  }).getJasmine2Reporter());
}
};
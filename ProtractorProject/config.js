//This header is for jasmine reports
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['MyfirstTest.js'],
  
// Below code is for jasmine reports  
onPrepare: function() {
  // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
  jasmine.getEnv().addReporter(new HtmlReporter({
     baseDirectory: 'tmp/screenshots'
  }).getJasmine2Reporter());
}
};
// Working with Non Angular applications by making small changes in script

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
	  
	  browser.ignoreSynchronization = true;
	  
	browser.get('https://tsrtconline.in/oprs-web/login/show.do');
	
	element(by.name('userName')).sendKeys("shiva808");
	element(by.name('password')).sendKeys("Shiva@689");
	element(by.id('submitBtn')).click();
 
  });
});
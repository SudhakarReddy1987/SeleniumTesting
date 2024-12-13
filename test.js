// Import selenium-webdriver
const { Builder, By, until } = require('selenium-webdriver');

// Set up the Selenium WebDriver
let driver = new Builder().forBrowser('chrome').build();

async function testJavaScript() {
    try {
        // Open the simple HTML page
        await driver.get('file:///path/to/your/simplePage.html');  // Make sure to replace this with the actual path

        // Find the button and click it
        let button = await driver.findElement(By.xpath("//button[text()='Click Me']"));
        await button.click();

        // Wait for the text to change in the paragraph
        let message = await driver.findElement(By.id('message'));
        await driver.wait(until.elementTextIs(message, 'Hello, Selenium Test Passed!'), 10000);

        // Log success message if the test passes
        console.log('Test Passed: The text has been changed.');
    } catch (err) {
        // Log error if something goes wrong
        console.log('Test Failed:', err);
    } finally {
        // Quit the WebDriver
        await driver.quit();
    }
}

// Execute the test
testJavaScript();

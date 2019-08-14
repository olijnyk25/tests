let LoginPage = require('../page_objects/loginPage');
browser.waitForAngular(false);

describe("Rozetka login suite", function()  {
    const loginPage = new LoginPage();
    it("Pass login test", async function()  { 
        loginPage.open();
        const myCabinet = await loginPage.login('smithjohn2406@gmail.com', 'Test1234');
        await browser.sleep(3000);
        expect(await myCabinet.getUsernameInHeader().getText()).toEqual('John Smith');

    });

});

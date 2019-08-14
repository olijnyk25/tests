const MyCabinetPage = require("./myCabinetPage")

const emailFieldLocator = '[name="login"]';
const passwdFieldLocator = '[name="password"]';
const loginBtnLocator = 'span.btn-link-i';
const errorMessage = "[class='pos-fix sprite-side message code5']";



class LoginPage {
    constructor () {};

    async open () {
        await browser.get("https://my.rozetka.com.ua/signin/");
    }

    getEmailField () {
        return element(by.css(emailFieldLocator));
    } 
    getPasswdField () {
        return element(by.css(passwdFieldLocator));
    }
    getLoginBtn () {
        return element(by.css(loginBtnLocator));
    }
    getErrorMessage (){
        return element(by.css(errorMessage));
    }

    async login (email, pass) {
        await this.getEmailField().click().sendKeys(email);
        await this.getPasswdField().click().sendKeys(pass);
        await this.getLoginBtn().click();
        
        return  new MyCabinetPage();
    }
}

module.exports = LoginPage;

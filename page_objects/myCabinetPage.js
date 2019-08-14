const cityLocator = "[class='xhr bold']";
const usernameInHeaderLocator = '#header_user_menu_parent'

class MyCabinetPage {
    constructor () {};

    getUsernameInHeader () {
        return element(by.css(usernameInHeaderLocator))
    }

    getCityName () {
        return  element(by.css(cityLocator));
    } 
}

module.exports = MyCabinetPage;

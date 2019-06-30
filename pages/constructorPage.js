const bs = require( "./shared/BrowserSession" )

export default class ConstructorPage {

    constructor(page) {
        this.page = page;
    }

    async fillableField(fieldType) {
       	const [field] = this.page.$x(`//ul[@class = 'menu__list']//span[contains(text(),${fieldType})]`);
       	return field;
    }


}
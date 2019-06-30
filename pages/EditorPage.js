
class EditorPage {

  	rightSideBarEl(page, element) {
	  	const [button] = page.$x(`//ul[@class = 'menu__list']//span[contains(text(),${element})]`)
 	  	return button;
  	}
}

module.exports = new EditorPage();

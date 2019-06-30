const puppeteer = require('puppeteer');
const editorPage = require('./pages/EditorPage');
const bs = require( "./shared/BrowserSession" ),
	{ BASE_URL} = require("./shared/constants");

beforeAll(async () => {
	await bs.setup();
    await bs.page.goto( BASE_URL, { waitUntil: "networkidle2" } );
    await bs.page.click('.fp-form-c2a__submit-btn');
    await bs.page.waitFor(".modal-alert__title");

});

afterAll(async () => {
  await bs.teardown();
});

describe("Open constructor", ()=> {
	test("User can open constructor", async () => {
		editorPage.rightSideBarEl(bs.page,'ADD FILLABLE FIELDS').click();
	})
})

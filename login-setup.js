const { expect, chromium, FullConfig } = require('@playwright/test');
const LoginPage = require('./page/login.page');

async function loginSetup (FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const baseURL = FullConfig.projects[0].use.baseURL
    var email = "johndoe19";
    var password = "supersecret";

    let loginPage = new LoginPage(page);

    await loginPage.page.goto(baseURL+'/login');
    await loginPage.fillEmailTxt(email);
    await loginPage.fillPasswordTxt(password);
    await loginPage.clickLoginBtn();
    
    console.log("Creation Login Storage");
    await loginPage.page.context().storageState(
      { path: 'login_storage.json' }
    );
    await browser.close();
};

module.exports = loginSetup;
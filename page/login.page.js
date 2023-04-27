const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);
    }

    async fillEmailTxt(email){
        await this.page.fill('id=username', email);
    }

    async fillPasswordTxt(password){
        await this.page.fill('id=password', password);
    }

    async clickLoginBtn(){
        await this.page.click('id=signin-button');
    }

    getWrongCredentialsTxt(){
      return this.page.locator('id=signin-button');
   }
    
    async navigate(){
        await super.navigate('');
    }
}
module.exports = LoginPage;
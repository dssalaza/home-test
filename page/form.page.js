const BasePage = require('./Base.page');
class FormPage extends BasePage {
    constructor(page){
        super(page);
    }

    async fillFullNameTxt(name){
        await this.page.fill('id=fname', name);
    }

    async fillNameCardTxt(cardname){
        await this.page.fill('id=cname', cardname);
    }

    async fillEmailTxt(email){
      await this.page.fill('id=email', email);
    }

    async fillCreditCardNumberTxt(ccnum){
      await this.page.fill('id=ccnum', ccnum);
    }

    async fillAddressTxt(address){
      await this.page.fill('id=adr', address);
    }

    async selectExpMonthCbo(month){
      await this.page.getByPlaceholder('Month').selectOption(month);
    }

    async fillCityTxt(city){
      await this.page.fill('id=city', city);
    }

    async fillExpYearTxt(expyear){
      await this.page.fill('id=expyear', expyear);
    }

    async fillCvvTxt(cvv){
      await this.page.fill('id=cvv', cvv);
    }

    async fillStateTxt(state){
      await this.page.fill('id=state', state);
    }

    async fillZipTxt(zip){
      await this.page.fill('id=zip', zip);
    }

    async checkShippingAddressCb(){
      let verifyShipping = await this.page.locator(`xpath=//input[@type='checkbox']`)
      try{
          await verifyShipping.check(); 
      }catch{
          await verifyShipping.evaluate(node => node.checked = true);
      }
    }

    async unCheckShippingAddressCb(){
      let unVerifyShipping = await this.page.locator(`xpath=//input[@type='checkbox']`)
      try{
          await unVerifyShipping.uncheck();
      }catch{
          await unVerifyShipping.evaluate(node => node.checked = false);
      }
    }

    async clickContinueCheckoutBtn(){
      await this.page.locator('button', { hasText: 'Continue to checkout' }).click();
    }

    getPriceProductTxt(position){
      return this.page.locator(`xpath=//span[@class='price']`).nth(position);
    }
    
    async navigate(){
      await this.page.goto('/checkout');
    }
}
module.exports = FormPage;
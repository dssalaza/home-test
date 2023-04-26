const BasePage = require('./Base.page');
class HomePage extends BasePage {
    constructor(page){
        super(page);
    }
    
   getHomeLoginHeader(){
      return this.page.getByText('johndoe19');
   }

   getOrderNumberHeader(){
      return this.page.locator(`xpath=//p[@data-id='ordernumber']`);
   }

    async navigate(){
       await super.navigate('');
    }
}
module.exports = HomePage;
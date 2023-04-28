const BasePage = require('./Base.page');
class HomePage extends BasePage {
    constructor(page){
        super(page);
    }
    
   getWelcomeMessage(){
      return this.page.getByTestId('username');
   }

   getOrderNumberHeader(){
      return this.page.getByTestId('ordernumber');
   }

    async navigate(){
       await super.navigate('');
    }
}
module.exports = HomePage;
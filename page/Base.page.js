class BasePage{
   constructor(page){
       this.page = page;
   }

   async navigate(){
       await this.page.goto('/home');
   }
}

module.exports = BasePage;
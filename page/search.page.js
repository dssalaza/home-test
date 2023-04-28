const BasePage = require('./Base.page');
class SearchPage extends BasePage {
    constructor(page){
        super(page);
    }

    async fillSearchWordBar(word){
      let searchBar = await this.getSearchWordBar();
      await searchBar.fill(word);
      await searchBar.press('Enter');
    }

    async getSearchWordBar(){
      return  this.page.getByPlaceholder('Search..');
    }

    getResultContainerTxt(){
      return this.page.locator('id=result');
   }
    
    async navigate(){
      await this.page.goto('/search');
    }
}
module.exports = SearchPage;
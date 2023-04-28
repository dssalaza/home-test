const BasePage = require('./Base.page');
class GridPage extends BasePage {
    constructor(page){
        super(page);
    }

    getImageByName(name){
      return this.page.locator(`xpath=//img[@src='images/${name}.png']`);
    }

    getCardNumberByIndex(index){
      return this.page.locator('data-test-id=card-number').nth(index);
    }

    getCardNameByIndex(index){
      return this.page.locator('data-test-id=item-name').nth(index);
    }

    getCardPriceByIndex(index){
      return this.page.locator('id=item-price').nth(index);
    }

    getAddOrderBtnByIndex(index){
      return this.page.locator('button', { hasText: 'Add to Order' }).nth(index);
    }
    
    async navigate(){
      await this.page.goto('/grid');
    }
}
module.exports = GridPage;
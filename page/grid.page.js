const BasePage = require('./Base.page');
class GridPage extends BasePage {
    constructor(page){
        super(page);
    }

    getImagePositionOne(){
      return this.page.locator(`xpath=//img[@src='images/classic.png']`);
    }

    getImagePositionTwo(){
      return this.page.locator(`xpath=//img[@src='images/bacon.png']`);
    }

    getImagePositionThree(){
      return this.page.locator(`xpath=//img[@src='images/roll.png']`);
    }

    getImagePositionFour(){
      return this.page.locator(`xpath=//img[@src='images/garlicmix.png']`);
    }

    getImagePositionFive(){
      return this.page.locator(`xpath=//img[@src='images/margarita.png']`);
    }

    getImagePositionSix(){
      return this.page.locator(`xpath=//img[@src='images/veggie.png']`);
    }

    getImagePositionSeven(){
      return this.page.locator(`xpath=//img[@src='images/extrapeperoni.png']`);
    }

    getImagePositionEight(){
      return this.page.locator(`xpath=//img[@src='images/evergreen.png']`);
    }

    getImagePositionNine(){
      return this.page.locator(`xpath=//img[@src='images/bbqcheese.png']`);
    }

    getNumberPositionTxt(position){
      return this.page.locator('data-test-id=card-number').nth(position);
    }

    getNamePositionTxt(position){
      return this.page.locator('data-test-id=item-name').nth(position);
    }

    getPricePositionTxt(position){
      return this.page.locator('id=item-price').nth(position);
    }

    getAddOrderPositionBtn(position){
      return this.page.locator('button', { hasText: 'Add to Order' }).nth(position);
    }
    
    async navigate(){
        super.navigate('');
    }
}
module.exports = GridPage;
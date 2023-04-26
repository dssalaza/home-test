const BasePage = require('./Base.page');
class GridPage extends BasePage {
    constructor(page){
        super(page);
    }

    getTitlePositionOneTxt(){
      return this.page.getByText('Classic Muzzarella');
    }

    getImagePositionOne(){
      return this.page.locator(`xpath=//img[@src='images/classic.png']`);
    }

    getTitlePositionTwoTxt(){
      return this.page.getByText('Crispy Bacon');
    }

    getImagePositionTwo(){
      return this.page.locator(`xpath=//img[@src='images/bacon.png']`);
    }

    getTitlePositionThreeTxt(){
      return this.page.getByText('Baked Rolls x 8');
    }

    getImagePositionThree(){
      return this.page.locator(`xpath=//img[@src='images/roll.png']`);
    }

    getTitlePositionFourTxt(){
      return this.page.getByText('Garlic Mix');
    }

    getImagePositionFour(){
      return this.page.locator(`xpath=//img[@src='images/garlicmix.png']`);
    }

    getTitlePositionFiveTxt(){
      return this.page.getByText('Margarita');
    }

    getImagePositionFive(){
      return this.page.locator(`xpath=//img[@src='images/margarita.png']`);
    }

    getTitlePositionSixTxt(){
      return this.page.getByText('Veggie');
    }

    getImagePositionSix(){
      return this.page.locator(`xpath=//img[@src='images/veggie.png']`);
    }

    getPositionSevenTxt(){
      return this.page.locator(`xpath=(//label[@data-test-id='card-number'])[7]`);
    }

    getTitlePositionSevenTxt(){
      return this.page.getByText('Super Pepperoni');
    }

    getImagePositionSeven(){
      return this.page.locator(`xpath=//img[@src='images/extrapeperoni.png']`);
    }

    getTitlePositionEightTxt(){
      return this.page.getByText('Evergreen Cream');
    }

    getImagePositionEight(){
      return this.page.locator(`xpath=//img[@src='images/evergreen.png']`);
    }

    getTitlePositionNineTxt(){
      return this.page.getByText('Muzzarella BBQ');
    }

    getImagePositionNine(){
      return this.page.locator(`xpath=//img[@src='images/bbqcheese.png']`);
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
import { test, expect} from '@playwright/test';
import LoginPage from '.././page/login.page';
import HomePage from '.././page/home.page';
import FormPage from '.././page/form.page';
import Chance from 'chance';

let loginPage, homePage, formPage;
var chance = new Chance();


test.describe('Checkout', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      formPage = new FormPage(page);
      homePage = new HomePage(page);

      await formPage.navigate();
   });

   test('4. Checkout Form Order Success', async () => {

      await formPage.fillFullNameTxt(chance.name());
      await formPage.fillEmailTxt(chance.email());
      await formPage.fillAddressTxt(chance.address());
      await formPage.fillCityTxt(chance.city());
      await formPage.fillStateTxt(chance.state());
      await formPage.fillZipTxt(chance.zip());
      await formPage.fillNameCardTxt(chance.first() + ' ' + chance.last());
      await formPage.fillCreditCardNumberTxt(chance.cc());
      await formPage.selectExpMonthCbo(chance.month());
      await formPage.fillExpYearTxt(chance.exp_year());
      await formPage.fillCvvTxt(chance.integer({ min: 0, max: 999 }).toString());
      await formPage.checkShippingAddressCb();
      await formPage.clickContinueCheckoutBtn();

      await expect (homePage.getOrderNumberHeader()).toBeVisible();

   });

   test('5. Checkout Form Alert', async () => {
      
      await formPage.fillFullNameTxt(chance.name());
      await formPage.fillEmailTxt(chance.email());
      await formPage.fillAddressTxt(chance.address());
      await formPage.fillCityTxt(chance.city());
      await formPage.fillStateTxt(chance.state());
      await formPage.fillZipTxt(chance.zip());
      await formPage.fillNameCardTxt(chance.first() + ' ' + chance.last());
      await formPage.fillCreditCardNumberTxt(chance.cc());
      await formPage.selectExpMonthCbo(chance.month());
      await formPage.fillExpYearTxt(chance.exp_year());
      await formPage.fillCvvTxt(chance.integer({ min: 0, max: 999 }).toString());
      await formPage.unCheckShippingAddressCb(); 

      await formPage.page.on('dialog', async dialog => {           
         expect(dialog.message()).toContain('Shipping address same as billing checkbox must be selected.');    
         await dialog.accept();
     });

     await formPage.clickContinueCheckoutBtn();
     
   });

   test('6. Cart Total Test', async () => {
 
      await expect (formPage.getPriceProductTxt(1)).toHaveText('$15');
      await expect (formPage.getPriceProductTxt(2)).toHaveText('$5');
      await expect (formPage.getPriceProductTxt(3)).toHaveText('$8');
      await expect (formPage.getPriceProductTxt(4)).toHaveText('$2');

      await expect (formPage.getPriceProductTxt(5)).toHaveText('$30');

   });
});

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
   });

   test('4. Checkout Form Order Success', async () => {

   await loginPage.page.goto('/checkout');

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
   
      await loginPage.page.goto('/checkout');
   
      await formPage.fillFullNameTxt('Mark');
      await formPage.fillEmailTxt('mark2023@gmail.com');
      await formPage.fillAddressTxt('Calanda');
      await formPage.fillCityTxt('Orlando');
      await formPage.fillStateTxt('Florida');
      await formPage.fillZipTxt('32789');
      await formPage.fillNameCardTxt('Mark');
      await formPage.fillCreditCardNumberTxt('77777777777777');
      await formPage.selectExpMonthCbo('January');
      await formPage.fillExpYearTxt('2024');
      await formPage.fillCvvTxt('123');
      await formPage.unCheckShippingAddressCb();
   
      await formPage.clickContinueCheckoutBtn();

      // console.log('prueba', msg)
      await formPage.page.on('dialog', async dialog => {
             
         // Verify Dialog Message
         expect(dialog.message()).toContain('Shipping address same as billing checkbox must be selected.');
             
         //Click on OK Button
         await dialog.accept();
     });

   });

   test('6. Cart Total Test', async () => {

      await loginPage.page.goto('/checkout');
   
      await expect (formPage.getPriceProductOneTxt()).toBeVisible();
      await expect (formPage.getPriceProductTwoTxt()).toBeVisible();
      await expect (formPage.getPriceProductThreeTxt()).toBeVisible();
      await expect (formPage.getPriceProductFourTxt()).toBeVisible();
   
      await expect (formPage.getPriceProductTotalTxt()).toHaveText('$30'); 
   });
});

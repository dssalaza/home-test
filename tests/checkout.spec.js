// @ts-check
//require ('dotenv').config();

const { test, expect } = require('@playwright/test');
const LoginPage = require('.././page/login.page');
const HomePage = require('.././page/home.page');
const FormPage = require('.././page/form.page');

let loginPage, homePage, formPage;

test.describe('Checkout', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      formPage = new FormPage(page);
      homePage = new HomePage(page);
   });

   test('Checkout Form Order Success', async ({ page }) => {

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
   await formPage.checkShippingAddressCb();

   await formPage.clickContinueCheckoutBtn();

   await expect (homePage.getOrderNumberHeader()).toBeVisible();

   });

   test('Checkout Form Alert', async ({ page }) => {
   
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

      // const msg = await formPage.dialogAlertMsg(page);
      // console.log('prueba', msg)
      await page.on('dialog', async dialog => {
             
         // Verify Dialog Message
         expect(dialog.message()).toContain('Shipping address same as billing checkbox must be selected.');
             
         //Click on OK Button
         await dialog.accept();
     });

   });

   test('Cart Total Test', async ({ page }) => {

      await loginPage.page.goto('/checkout');
   
      await expect (formPage.getPriceProductOneTxt()).toBeVisible();
      await expect (formPage.getPriceProductTwoTxt()).toBeVisible();
      await expect (formPage.getPriceProductThreeTxt()).toBeVisible();
      await expect (formPage.getPriceProductFourTxt()).toBeVisible();
   
      await expect (formPage.getPriceProductTotalTxt()).toHaveText('$30'); 
   });
});

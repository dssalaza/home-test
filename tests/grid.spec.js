// @ts-check
//require ('dotenv').config();

const { test, expect } = require('@playwright/test');
const LoginPage = require('../page/login.page');
const GridPage = require('../page/grid.page');

let loginPage, gridPage;

test.describe('Grid ', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      gridPage = new GridPage(page);
   });

   test('7. Grid Item Test', async ({ page }) => {

      await loginPage.page.goto('/grid');

      await expect (gridPage.getPositionSevenTxt()).toHaveText('7');
      await expect (gridPage.getTitlePositionSevenTxt()).toHaveText('Super Pepperoni');
      await expect (gridPage.getPricePositionTxt(6)).toHaveText('$10');
   
   });

   test('8. Grid All Items Test', async ({ page }) => {
   
      await loginPage.page.goto('/grid');
   
      await expect (gridPage.getTitlePositionOneTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(0)).toBeVisible();
      await expect (gridPage.getImagePositionOne()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(0)).toBeVisible();

      await expect (gridPage.getTitlePositionTwoTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(1)).toBeVisible();
      await expect (gridPage.getImagePositionTwo()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(1)).toBeVisible();

      await expect (gridPage.getTitlePositionThreeTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(2)).toBeVisible();
      await expect (gridPage.getImagePositionThree()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(2)).toBeVisible();

      await expect (gridPage.getTitlePositionFourTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(3)).toBeVisible();
      await expect (gridPage.getImagePositionFour()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(3)).toBeVisible();

      await expect (gridPage.getTitlePositionFiveTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(4)).toBeVisible();
      await expect (gridPage.getImagePositionFive()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(4)).toBeVisible();

      await expect (gridPage.getTitlePositionSixTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(5)).toBeVisible();
      await expect (gridPage.getImagePositionSix()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(5)).toBeVisible();

      await expect (gridPage.getTitlePositionSevenTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(6)).toBeVisible();
      await expect (gridPage.getImagePositionSeven()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(6)).toBeVisible();

      await expect (gridPage.getTitlePositionEightTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(7)).toBeVisible();
      await expect (gridPage.getImagePositionEight()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(7)).toBeVisible();
      
      await expect (gridPage.getTitlePositionNineTxt()).toBeVisible();
      await expect (gridPage.getPricePositionTxt(8)).toBeVisible();
      await expect (gridPage.getImagePositionNine()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(8)).toBeVisible();
   });
});
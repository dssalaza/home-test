import { test, expect} from '@playwright/test';
import LoginPage from '.././page/login.page';
import GridPage from '../page/grid.page';

let loginPage, gridPage;

test.describe('Grid ', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      gridPage = new GridPage(page);
   });

   test('7. Grid Item Test', async ({ page }) => {

      await loginPage.page.goto('/grid');

      await expect (gridPage.getNumberPositionTxt(6)).toHaveText('7');
      await expect (gridPage.getNamePositionTxt(6)).toHaveText('Super Pepperoni');
      await expect (gridPage.getPricePositionTxt(6)).toHaveText('$10');
   
   });

   test('8. Grid All Items Test', async ({ page }) => {
   
      await loginPage.page.goto('/grid');
   
      await expect (gridPage.getNamePositionTxt(0)).toHaveText('Classic Muzzarella');
      await expect (gridPage.getPricePositionTxt(0)).toBeVisible();
      await expect (gridPage.getImagePositionOne()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(0)).toBeVisible();

      await expect (gridPage.getNamePositionTxt(1)).toHaveText('Crispy Bacon');
      await expect (gridPage.getPricePositionTxt(1)).toBeVisible();
      await expect (gridPage.getImagePositionTwo()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(1)).toBeVisible();

      await expect (gridPage.getNamePositionTxt(2)).toHaveText('Baked Rolls x 8');
      await expect (gridPage.getPricePositionTxt(2)).toBeVisible();
      await expect (gridPage.getImagePositionThree()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(2)).toBeVisible();

      await expect (gridPage.getNamePositionTxt(3)).toHaveText('Garlic Mix');
      await expect (gridPage.getPricePositionTxt(3)).toBeVisible();
      await expect (gridPage.getImagePositionFour()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(3)).toBeVisible();

      await expect (gridPage.getNamePositionTxt(4)).toHaveText('Margarita');
      await expect (gridPage.getPricePositionTxt(4)).toBeVisible();
      await expect (gridPage.getImagePositionFive()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(4)).toBeVisible();

      await expect (gridPage.getNamePositionTxt(5)).toHaveText('Veggie');
      await expect (gridPage.getPricePositionTxt(5)).toBeVisible();
      await expect (gridPage.getImagePositionSix()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(5)).toBeVisible();

      await expect (gridPage.getNamePositionTxt(6)).toHaveText('Super Pepperoni');
      await expect (gridPage.getPricePositionTxt(6)).toBeVisible();
      await expect (gridPage.getImagePositionSeven()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(6)).toBeVisible();

      await expect (gridPage.getNamePositionTxt(7)).toHaveText('Evergreen Cream');
      await expect (gridPage.getPricePositionTxt(7)).toBeVisible();
      await expect (gridPage.getImagePositionEight()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(7)).toBeVisible();
      
      await expect (gridPage.getNamePositionTxt(8)).toHaveText('Muzzarella BBQ');
      await expect (gridPage.getPricePositionTxt(8)).toBeVisible();
      await expect (gridPage.getImagePositionNine()).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(8)).toBeVisible();
   });
});
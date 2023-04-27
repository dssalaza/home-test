import { test, expect} from '@playwright/test';
import LoginPage from '.././page/login.page';
import GridPage from '../page/grid.page';

let loginPage, gridPage;

test.describe('Grid ', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      gridPage = new GridPage(page);

      await gridPage.navigate();
   });

   test('7. Grid Item Test', async () => {

      await expect (gridPage.getCardNumberByIndex(6)).toHaveText('7');
      await expect (gridPage.getCardNameByIndex(6)).toHaveText('Super Pepperoni');
      await expect (gridPage.getCardPriceByIndex(6)).toHaveText('$10');
   
   });

   test.only('8. Grid All Items Test', async () => {
    
      await expect (gridPage.getCardNameByIndex(0)).toHaveText('Classic Muzzarella');
      await expect (gridPage.getCardPriceByIndex(0)).toBeVisible();
      await expect (gridPage.getImageByName('classic')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(0)).toBeVisible();

      await expect (gridPage.getCardNameByIndex(1)).toHaveText('Crispy Bacon');
      await expect (gridPage.getCardPriceByIndex(1)).toBeVisible();
      await expect (gridPage.getImageByName('bacon')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(1)).toBeVisible();

      await expect (gridPage.getCardNameByIndex(2)).toHaveText('Baked Rolls x 8');
      await expect (gridPage.getCardPriceByIndex(2)).toBeVisible();
      await expect (gridPage.getImageByName('roll')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(2)).toBeVisible();

      await expect (gridPage.getCardNameByIndex(3)).toHaveText('Garlic Mix');
      await expect (gridPage.getCardPriceByIndex(3)).toBeVisible();
      await expect (gridPage.getImageByName('garlicmix')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(3)).toBeVisible();

      await expect (gridPage.getCardNameByIndex(4)).toHaveText('Margarita');
      await expect (gridPage.getCardPriceByIndex(4)).toBeVisible();
      await expect (gridPage.getImageByName('margarita')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(4)).toBeVisible();

      await expect (gridPage.getCardNameByIndex(5)).toHaveText('Veggie');
      await expect (gridPage.getCardPriceByIndex(5)).toBeVisible();
      await expect (gridPage.getImageByName('veggie')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(5)).toBeVisible();

      await expect (gridPage.getCardNameByIndex(6)).toHaveText('Super Pepperoni');
      await expect (gridPage.getCardPriceByIndex(6)).toBeVisible();
      await expect (gridPage.getImageByName('extrapeperoni')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(6)).toBeVisible();

      await expect (gridPage.getCardNameByIndex(7)).toHaveText('Evergreen Cream');
      await expect (gridPage.getCardPriceByIndex(7)).toBeVisible();
      await expect (gridPage.getImageByName('evergreen')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(7)).toBeVisible();
      
      await expect (gridPage.getCardNameByIndex(8)).toHaveText('Muzzarella BBQ');
      await expect (gridPage.getCardPriceByIndex(8)).toBeVisible();
      await expect (gridPage.getImageByName('bbqcheese')).toBeVisible();
      await expect (gridPage.getAddOrderPositionBtn(8)).toBeVisible();
   });
});
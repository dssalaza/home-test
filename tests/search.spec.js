import { test, expect} from '@playwright/test';
import LoginPage from '.././page/login.page';
import SearchPage from '.././page/search.page';
import Chance from 'chance';

let loginPage, searchPage;
var chance = new Chance();

test.describe('Search ', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      searchPage = new SearchPage(page);
   });

   test('9. Search Success', async () => {

      var word = chance.word();

      await loginPage.page.goto('/search');
      await searchPage.fillSearchWordBar(word);

      await searchPage.page.waitForLoadState('networkidle');
      await expect(searchPage.getResultContainerTxt()).toHaveText(`Found one result for ${word}`);
   
   });

   test('10. Search Empty', async () => {
   
      var word = "";

      await loginPage.page.goto('/search');
      await searchPage.fillSearchWordBar(word);

      await searchPage.page.waitForLoadState('networkidle');
      await expect(searchPage.getResultContainerTxt()).toHaveText('Please provide a search word.');
   ;
   });
});
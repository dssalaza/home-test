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

      await searchPage.navigate();
   });

   test('9. Search Success', async () => {

      var searchWord = chance.word();

      await searchPage.fillSearchWordBar(searchWord);
      await searchPage.page.waitForLoadState('networkidle');

      await expect(searchPage.getResultContainerTxt()).toHaveText(`Found one result for ${searchWord}`);
   
   });

   test('10. Search Empty', async () => {
   
      var searchWord = "";

      await searchPage.fillSearchWordBar(searchWord);
      await searchPage.page.waitForLoadState('networkidle');

      await expect(searchPage.getResultContainerTxt()).toHaveText('Please provide a search word.');
   ;
   });
});
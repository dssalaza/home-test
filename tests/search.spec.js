// @ts-check
//require ('dotenv').config();

const { test, expect } = require('@playwright/test');
const LoginPage = require('../page/login.page');
const SearchPage = require('../page/search.page');

let loginPage, searchPage;

test.describe('Search ', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      searchPage = new SearchPage(page);
   });

   test('9. Search Success', async ({ page }) => {

      var word = "automation";

      await loginPage.page.goto('/search');
      await searchPage.fillSearchWordBar(word);

      await searchPage.page.waitForLoadState('networkidle');
      await expect(searchPage.getResultContainerTxt()).toHaveText(`Found one result for ${word}`);
   
   });

   test('10. Search Empty', async ({ page }) => {
   
      var word = "";

      await loginPage.page.goto('/search');
      await searchPage.fillSearchWordBar(word);

      await searchPage.page.waitForLoadState('networkidle');
      await expect(searchPage.getResultContainerTxt()).toHaveText('Please provide a search word.');
   ;
   });
});
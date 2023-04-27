import { test, expect} from '@playwright/test';
import LoginPage from '.././page/login.page';
import HomePage from '.././page/home.page';
import Chance from 'chance';

let loginPage, homePage;
var chance = new Chance();

test.describe('Login', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      homePage = new HomePage(page);
   });

   test('1. Login Success', async ({ page }) => {

    await loginPage.navigate();
  
    await expect (homePage.getWelcomeMessage()).toHaveText('johndoe19');

   });

});

test.describe('Login Failure', () => {

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
   });

   test('2. Login Failure A', async ({ page }) => {
      
      //Usig chance to generate random data
      var username = chance.first();
      var pasword = chance.string();
   
      await loginPage.page.goto('/login');
      await loginPage.fillEmailTxt(username);
      await loginPage.fillPasswordTxt(pasword);
      await loginPage.clickLoginBtn();
      
      await expect (loginPage.getWrongCredentialsTxt()).toBeVisible();
   });

   test('3. Login Failure B', async ({ page }) => {
      
      var user = "";
      var pasw = "";
   
      await loginPage.page.goto('/login');
      await loginPage.fillEmailTxt(user);
      await loginPage.fillPasswordTxt(pasw);
      await loginPage.clickLoginBtn();
      
      await expect (loginPage.getWrongCredentialsTxt()).toBeVisible();
   });

});

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

      await homePage.navigate();
   });

   test('1. Login Success', async () => {
  
    await expect (homePage.getWelcomeMessage()).toHaveText('johndoe19');

   });

});

test.describe('Login Failure', () => {

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);

      await loginPage.navigate();
   });

   test('2. Login Failure A', async () => {
      
      var username = chance.first();
      var pasword = chance.string();
   
      await loginPage.fillEmailTxt(username);
      await loginPage.fillPasswordTxt(pasword);
      await loginPage.clickLoginBtn();
      
      await expect (loginPage.getLoginMessageTxt()).toHaveText('Wrong credentials');

   });

   test('3. Login Failure B', async () => {
      
      var user = "";
      var pasw = "";
   
      await loginPage.fillEmailTxt(user);
      await loginPage.fillPasswordTxt(pasw);
      await loginPage.clickLoginBtn();
      
      await expect (loginPage.getLoginMessageTxt()).toHaveText('Fields can not be empty');
      
   });

});

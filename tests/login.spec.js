// @ts-check
//require ('dotenv').config();

const { test, expect } = require('@playwright/test');
const LoginPage = require('.././page/login.page');
const HomePage = require('.././page/home.page');

let loginPage, homePage;

test.describe('Login', () => {
   test.use({ storageState: 'login_storage.json' });

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      homePage = new HomePage(page);
   });

   test('Login Success', async ({ page }) => {

    await loginPage.navigate();
  
    await expect (homePage.getHomeLoginHeader()).toBeVisible();
   });

});

test.describe('Login Failure', () => {

   test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
   });

   test('Login Failure A', async ({ page }) => {
      
      var user = "User";
      var pasw = "pasw";
   
      await loginPage.page.goto('/login');
      await loginPage.fillEmailTxt(user);
      await loginPage.fillPasswordTxt(pasw);
      await loginPage.clickLoginBtn();
      
      await expect (loginPage.getWrongCredentialsTxt()).toBeVisible();
   });

   test('Login Failure B', async ({ page }) => {
      
      var user = "";
      var pasw = "";
   
      await loginPage.page.goto('/login');
      await loginPage.fillEmailTxt(user);
      await loginPage.fillPasswordTxt(pasw);
      await loginPage.clickLoginBtn();
      
      await expect (loginPage.getWrongCredentialsTxt()).toBeVisible();
   });

});

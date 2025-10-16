import { verify } from "../../../helper/helper.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import allureReporter from '@wdio/allure-reporter'
import HomePage from "../../pageObjectModel/home.page.js"
describe('Login',() => { 
    beforeEach(() => {
        allureReporter.addEpic("NOKI Android Automation");
        allureReporter.addOwner('Mobile Team');
        allureReporter.addParentSuite('Login');
      });
    it('Verify error message for email is not provided', async() => {
        await LoginPage.restartApp()
        await LoginPage.clickLogin();
        await verify(LoginPage.emailError);
    });
    it('Verify error message for password is not provided', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.clickLogin();
        await verify(LoginPage.passwordError);
    });
    it('Verify error message for invalid emai;l', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.')
        await LoginPage.clickLogin();
        await verify(LoginPage.invalidEmailError);
    });
    it('Verify error message for select the ID', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail(process.env.Email)
        await LoginPage.enterPassword(process.env.Password)
        await LoginPage.clickLogin();
        await verify(LoginPage.selectIdError);
    });

    it('Verify perfect login', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail(process.env.Email)
        await LoginPage.enterPassword(process.env.Password)
        await LoginPage.selectMultiTenant()
        await LoginPage.clickLogin();
        await verify(HomePage.homeScreenAnimation);
    });
   
    
})
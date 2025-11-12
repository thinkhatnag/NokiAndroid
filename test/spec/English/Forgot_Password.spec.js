import { verify } from "../../../helper/helper.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import allureReporter from '@wdio/allure-reporter'
describe('Forgot Password',() => {

  beforeEach(() => {
    allureReporter.addEpic("NOKI Android Automation");
    allureReporter.addOwner('Mobile Team');
    allureReporter.addParentSuite('Forgot Password');
  });
  beforeEach(async() => {
    await LoginPage.restartApp()
  })
  it('Verify error message entering not registered email in forgot password screen', async() => {
  await verifyAndClick(LoginPage.forgotPasswordBtn)
  await LoginPage.enterForgotPasswordEmail('nag.subbarayudu@gmail.com')
  await verify(LoginPage.emailError)
});
it('Verify error message entering incorrect email in forgot password screen', async() => {
  await verifyAndClick(LoginPage.forgotPasswordBtn)
  await LoginPage.enterForgotPasswordEmail('nag.subbarayudu@')
  await verify(LoginPage.invalidEmailError)
  await verifyAndClick(LoginPage.loginLink)
});

it('Verify error message not entering email in forgot password screen', async() => {
  await verifyAndClick(LoginPage.forgotPasswordBtn)
  await LoginPage.enterForgotPasswordEmail(' ')
  await verify(LoginPage.emailError)
});
it('Verify success message for entering correct email in forgot password screen', async() => {
  await verifyAndClick(LoginPage.forgotPassword)
  await LoginPage.enterForgotPasswordEmail('nag.subbarayudu@thinkhat.ai')
  await verify(LoginPage.successMessageForResetLink)
  await verifyAndClick(LoginPage.continueToLogin)

});

})

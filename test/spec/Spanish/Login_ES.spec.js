import allureReporter from "@wdio/allure-reporter";
import { verify, verifyAndClick, validate } from "../../../helper/helper.js";
import HomePage from "../../pageObjectModel/home.page.js";
import LoginPage from "../../pageObjectModel/spanish/loginScreen.js";
describe("Login screen ", () => {
  before(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addOwner("Mobile Team");
  });
  beforeEach(async () => {
    await LoginPage.clearTextFields();
    await LoginPage.restartApp();
  });

  it("Verify error message when password is not provided -Es", async () => {
    await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
    await LoginPage.selectMultiTenant();
    await LoginPage.clickLogin();
    await verify(LoginPage.passwordRequiredError);
  });

  it("Verify error message when an incorrect password is entered -Es", async () => {
    await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
    await LoginPage.enterPassword("123456");
    await LoginPage.selectMultiTenant();
    await LoginPage.clickLogin();
    await verify(LoginPage.forgotPasswordBtn);
  });

  it("Verify error message when email is not provided -Es", async () => {
    await LoginPage.enterEmail(" ");
    await LoginPage.clickLogin();
    await verify(LoginPage.emailError);
  });

  it("Verify error message when an incorrectly formatted email is entered -Es", async () => {
    await LoginPage.enterEmail("nag.subbarayudu@");
    await LoginPage.clickLogin();
    await verify(LoginPage.invalidEmailError);
  });

  it("Verify error message when the email is not registered -Es", async () => {
    await LoginPage.enterEmail("vqejvcievciye@gmail.com");
    await verify(LoginPage.emailRequiredError);
  });

  it("Verify  message when the password is wrong -Es", async () => {
    await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
    await LoginPage.enterPassword("Welcome@124dwdfsscawd");
    await LoginPage.selectMultiTenant();
    await LoginPage.clickLogin();
    await verify(LoginPage.WrongPassword);
  });
  it("Verify successful login -Es", async () => {
    await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
    await LoginPage.enterPassword("Welcome@123");
    await LoginPage.selectMultiTenant();
    await LoginPage.clickLogin();
    await verify(LoginPage.homescreenAnimation);
  });
  it.only("Verify successful login -Es", async () => {
    await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
    await LoginPage.enterPassword("Welcome@123");
    await LoginPage.selectMultiTenant();
    await LoginPage.clickLogin();
    await verify(HomePage.homeScreenAnimation);
  });
});

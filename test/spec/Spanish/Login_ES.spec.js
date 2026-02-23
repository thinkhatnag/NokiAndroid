import allureReporter from "@wdio/allure-reporter";
import { verify, verifyAndClick, validate } from "../../../helper/helper.js";
import HomePage from "../../pageObjectModel/home.page.js";
import LoginPage from "../../pageObjectModel/spanish/loginScreen.js";
before(() => {
  allureReporter.addEpic("NOKI Android Automation");
  allureReporter.addOwner("Mobile Team");
});

beforeEach(async () => {
  await LoginPage.clearTextFields();
  await LoginPage.restartApp();
});

it('Login Error message verification: "Email is not Provided" -Es', async () => {
  await LoginPage.enterEmail(" ");
  await LoginPage.clickLogin();
  await verify(LoginPage.emailRequiredError);
});

it('Login Error message verification: "Password not Provided" -Es', async () => {
  await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
  await LoginPage.selectMultiTenant();
  await LoginPage.clickLogin();
  await verify(LoginPage.passwordRequiredError);
});

it('Login Error message verification: "Invalid Email" -Es', async () => {
  await LoginPage.enterEmail("nag.subbarayudu@");
  await LoginPage.clickLogin();
  await verify(LoginPage.invalidEmailError);
});
it('Login Error message verification: "Select the ID"', async () => {
  await LoginPage.enterEmail(process.env.Email);
  await LoginPage.enterPassword(process.env.Password);
  await LoginPage.clickLogin();
  await verify(LoginPage.multiTenantError);
});

it("Verify successful login -Es", async () => {
  await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
  await LoginPage.enterPassword("Welcome@123");
  await LoginPage.selectMultiTenant();
  await LoginPage.clickLogin();
  await verify(LoginPage.homeScreenAnimation);
});

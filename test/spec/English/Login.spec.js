import { verify } from "../../../helper/helper.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import allureReporter from "@wdio/allure-reporter";
import HomePage from "../../pageObjectModel/home.page.js";

before(() => {
  allureReporter.addEpic("NOKI Android Automation");
  allureReporter.addOwner("Mobile Team");
});
beforeEach(async () => {
  await LoginPage.clearTextFields();
  await LoginPage.restartApp();
});

it('Login Error message verification: "Email is not Provided"', async () => {
  await LoginPage.clickLogin();
  await verify(LoginPage.emailError);
});
it('Login Error message verification: "Password not Provided"', async () => {
  await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
  await LoginPage.clickLogin();
  await verify(LoginPage.passwordError);
});
it('Login Error message verification: "Invalid Email"', async () => {
  await LoginPage.enterEmail("nag.subbarayudu@thinkhat.");
  await LoginPage.clickLogin();
  await verify(LoginPage.invalidEmailError);
});
it('Login Error message verification: "Select the ID"', async () => {
  await LoginPage.enterEmail(process.env.Email);
  await LoginPage.enterPassword(process.env.Password);
  await LoginPage.clickLogin();
  await verify(LoginPage.multiTenantError);
});

it("Verify successful login", async () => {
  await LoginPage.enterEmail(process.env.Email);
  await LoginPage.enterPassword(process.env.Password);
  await LoginPage.selectMultiTenant();
  await LoginPage.clickLogin();
  await verify(HomePage.homeScreenAnimation);
});

import LoginPage from "../../pageObjectModel/login.page.js";
import HomePage from "../../pageObjectModel/home.page.js";
import {
  verify,
  verifyAndClick,
} from "../../helpers/helper.js";
import SettingsPage from "../../pageObjectModel/setting.page.js";
import adapterFactory from "@wdio/mocha-framework";
import allureReporter from "@wdio/allure-reporter";
import SpanishLanguage from "../../pageObjectModel/spanishLanguage.js";
describe("English", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addOwner("Mobile Team");
    allureReporter.addParentSuite("English");
  });
  describe("setting screen ", () => {
  
    it.skip("Verify Settings screen Profille Edit #Skipped:-proffile edit is skipped due to Known Issue, related to Api change", async () => {
      await LoginPage.restartApp();
      await verifyAndClick(HomePage.settings);
      await SettingsPage.profile_Settings_Verification();
    });
    it("Verify Settings screen support_VerifiCation ", async () => {
      await SettingsPage.support_VerifiCation();
    });

    it("Verify Settings screen launguage", async () => {
      await SettingsPage.launguage_Chanage_Verification();
    });
    it("Verify Settings screen launguage", async () => {
      await SettingsPage.general_Settings_Verification();
    });
  });
});

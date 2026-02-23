import allureReporter from "@wdio/allure-reporter";
import SpanishLanguage from "../../pageObjectModel/spanishLanguage.js";
describe("Setting screen", () => {
  before(() => {
    allureReporter.addEpic("NOKI Android Automation");
    allureReporter.addOwner("Mobile Team");
  });
  it.skip("Verify Settings screen Profille Edit #Skipped:-proffile edit is skipped due to Known Issue, related to Api change -Es", async () => {
    await SpanishLanguage.profileSettingScreen();
  });
  it("Verify Settings screen support_VerifiCation -Es", async () => {
    await SpanishLanguage.support_VerifiCation();
  });
  it("Verify Settings screen Launguage Change -Es", async () => {
    await SpanishLanguage.laungugeChageVerification();
  });
  it("Verify Settings screen general settings -Es", async () => {
    await SpanishLanguage.generalSettingsUpdate();
  });
});

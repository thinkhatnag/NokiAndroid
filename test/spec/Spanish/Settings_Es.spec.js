
import allureReporter from "@wdio/allure-reporter";
import SpanishLanguage from "../../pageObjectModel/spanishLanguage.js";
describe("Setting screen", () => {
  before(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addOwner("Mobile Team");
  });
  describe("setting screen -Es", () => {
    it("Verify Settings screen Profille Edit -Es", async () => {
      await SpanishLanguage.profileSettingScreen();
    });
    it("Support verification -Es", async () => {
      await SpanishLanguage.support_VerifiCation();
    });
    it("Launguage Change Verification -Es", async () =>{
      await SpanishLanguage.laungugeChageVerification()
    })
    it("General settings -Es", async () => {
      await SpanishLanguage.generalSettingsUpdate();
    });
  });
});

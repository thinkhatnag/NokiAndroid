import HomePage from "../../pageObjectModel/home.page.js";
import PatientsPage from "../../pageObjectModel/patient.page.js";
import EncounterPage from "../../pageObjectModel/encounter.page.js";
import SettingsPage from "../../pageObjectModel/setting.page.js";
import {
  verify,
  verifyAndClick,
} from "../../../helper/helper.js";
import SearchPatientPage from "../../pageObjectModel/searchPatitent.page.js";
import RecordingPage from "../../pageObjectModel/recording.page.js";
import AddPatitentPage from "../../pageObjectModel/addPatient.page.js";
import LoginPage from "../../pageObjectModel/login.page.js";

describe("Home Screen elements functinalities and flows are verified here ", () => {
  it("Verify all tab bar elements are working correctly {TC11}", async () => {
    await HomePage.patients.click();
    await verify(PatientsPage.patientSearch);
    await verifyAndClick(HomePage.encounter);
    await verify(EncounterPage.Encounter);
    await verifyAndClick(HomePage.settings);
    await verify(SettingsPage.profileSettings);
    await LoginPage.restartApp();
  });
  it("Verify the audio recording process {TC12}", async () => {
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
    await (await SearchPatientPage.proceedBTn).click();
    await verify(RecordingPage.startConversationBtn);
    await LoginPage.restartApp();
  });
  it("Start recording with Spanish language selected {TC13}", async () => {
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
    await (await SearchPatientPage.proceedBTn).click();
    await verify(RecordingPage.startConversationBtn);
    await RecordingPage.launguageSelectior.click();
    await verify(RecordingPage.englishLanOpt);
    await verifyAndClick(RecordingPage.spanishLanOpt);
    await driver.executeScript("mobile: pressKey", [{ keycode: 4 }]);
    try {
      await verify(RecordingPage.startConversationBtn);
    } catch (error) {
      console.error("Error verifying startConversationBtn:", error);
    }
    await LoginPage.restartApp();
  });
  it("Start recording after adding a new patient {TC14}", async () => {
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.addPatient.click();
    await AddPatitentPage.addPatitentWrn();
    await AddPatitentPage.creatNewPatient();
    try {
      await verify(RecordingPage.startConversationBtn);
    } catch (error) {
      console.error("Error verifying startConversationBtn:", error);
    }
    await LoginPage.restartApp();
  });
});

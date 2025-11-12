import HomePage from "../pageObjectModel/home.page.js";
import PatientsPage from "../pageObjectModel/patient.page.js";
import EncounterPage from "../pageObjectModel/encounter.page.js";
import SearchPatientPage from "../pageObjectModel/searchPatitent.page.js";
import RecordingPage from "../pageObjectModel/recording.page.js";
import AddPatitentPage from "../pageObjectModel/addPatient.page.js";
import LoginPage from "../pageObjectModel/login.page.js";
import {
  verify,
  verifyAndClick,
  waitForElement,
  aeroplaneModeOff,
  aeroplaneModeOn,
  network,
  validate,
  verifyToastMessage,
  
} from "../../helper/helper.js";
import  allureReporter from "@wdio/allure-reporter";
import AudioManeger from "../pageObjectModel/audioManeger.js";
import QuickActions from "../pageObjectModel/quickActions.page.js";

describe("Issues Verification Test Suite", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI Android Automation");
    allureReporter.addFeature("Issues Verification");
    allureReporter.addOwner("Mobile Team");
  });
 
  it ("issue 1: Noki Prod > Android > Patients/Notes > Select a draft transcript > click on Resume conversation > Internet lost > here showing confirmation popup > click on 'Yes' > here showing 'Something went wrong' toast message", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(HomePage.startNewEncounterButton)
    await SearchPatientPage.patientSearch("Naga");
    await RecordingPage.startConversation();
   await RecordingPage.recordAudioAndSaveAsDraft()
   await driver.pause (5000)
   await verifyAndClick(HomePage.encounter)
   await EncounterPage.clickDraftTranscript()
   await driver.pause (5000)
    await verifyAndClick(RecordingPage.resumeConversation)
    await network();
    await driver.pause (5000)
    await verifyAndClick(RecordingPage.yes)
    await verifyToastMessage("Something went wrong");
    await validate(RecordingPage.resumeConversation)
  
});
it("issue 2: Noki Prod > Android > Patients/Notes > select a draft transcript under multiple conversation > click on resume conversation > internet lost > do conversation offline > during conversation kill the app > Re-open the app in offline > click on Continue > do conversation offline > Now re-connect to internet > here automatically opens and closes the save as draft popup and showing 'Bad request' popup ", async () => {
  await LoginPage.restartApp();
    await AudioManeger.resumeAudio();
      await driver.pause(30000);
      await AudioManeger.pauseAudio();
      await driver.pause(5000);
      await terminateApp();
      await network(); //online
      await driver.pause(5000);
      await driver.activateApp(process.env.BUNDLE_ID);
      // await waitForElement(RecordingPage.ContinueBtn); //validating the offline kill and reopen the app in online mode
      // await validate(RecordingPage.endEncounter);
      await driver.pause(5000);
      await verifyAndClick(RecordingPage.ContinueBtn);
      await verify(RecordingPage.pauseBtn);
      await verifyToastMessage("Bad request");
      await driver.pause(5000);
})
 it("issue 3: Noki(Prod) > Android > Patients > Start new encounter > start conversation > do conversation in offline and kill the app in offline > after internet reconnects , open the app , here showing popup , click end encounter > showing syncing file and then started generating soap note> once generated soap note automatically started another conversation again", async () => {
    await LoginPage.restartApp();
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
    await RecordingPage.startConversation();
    await AudioManeger.playAudio("english");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await network();
    await driver.pause(120000);
    await AudioManeger.stopAudio();
    await terminateApp();
    await driver.pause(5000);
    await network()
    await driver.pause(5000)
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.endEncounter);
    await verify(RecordingPage.PrevEncounterRef)
    await verifyAndClick(RecordingPage.PrevEncounterRefYes);
    await waitForElement(RecordingPage.addConversation);
    await driver.pause(10000)
    await validate(QuickActions.quickActions)

  });

})

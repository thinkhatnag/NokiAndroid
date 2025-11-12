import HomePage from "../../pageObjectModel/home.page.js";
import PatientsPage from "../../pageObjectModel/patient.page.js";
import EncounterPage from "../../pageObjectModel/encounter.page.js";
import SearchPatientPage from "../../pageObjectModel/searchPatitent.page.js";
import RecordingPage from "../../pageObjectModel/recording.page.js";
import AddPatitentPage from "../../pageObjectModel/addPatient.page.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import {
  verify,
  verifyAndClick,
  waitForElement,
  aeroplaneModeOff,
  aeroplaneModeOn,
  network,
} from "../../../helper/helper.js";
import allureReporter from "";
import AudioManeger from "../../pageObjectModel/audioManeger.js";
import QuickActions from "../../pageObjectModel/quickActions.page.js";
describe("Existing patient E2E flow -English ", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addFeature("Existing patient E2E -En");
    allureReporter.addOwner("Mobile Team");
  });

  it("Creating a new Patient", async () => {
    await waitForElement(HomePage.startNewEncounterButton);
    await HomePage.startNewEncounterButton.click();
    await verifyAndClick(SearchPatientPage.addPatient);
    await AddPatitentPage.addPatientWrn();
    await AddPatitentPage.createNewPatient();
  });
  it("Automatic sync verification when offline to online", async () => {
    await RecordingPage.startConversation();
    await AudioManeger.playAudio("english");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await RecordingPage.recordAudioforOfflineModeMT();
    await driver.pause(10000);
    await verifyAndClick(RecordingPage.pauseBtn);
    await AudioManeger.pauseAudio();
    console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
    await driver.pause(20000);
    await waitForElement(RecordingPage.playBtn);
    await verifyAndClick(RecordingPage.playBtn);
  });
  it("App Killed in Offline Mode verification", async () => {
    await AudioManeger.resumeAudio();
    console.log("Audio resumed:", AudioManeger.currentAudioFile);
    await driver.pause(30000);
    await AudioManeger.pauseAudio();
    await network();
    await driver.pause(5000);
    await terminateApp();
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await waitForElement(RecordingPage.ContinueBtn);
    await validate(RecordingPage.endEncounter);
    await verifyAndClick(RecordingPage.ContinueBtn);
  });
  it("App offline kill and reopen the app in online mode verifiction", async () => {
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
  });
  it("Offline mode stop and app kill Verification", async () => {
    await network();
    await AudioManeger.resumeAudio();
    await driver.pause(30000);
    await AudioManeger.stopAudio();
    await verifyAndClick(RecordingPage.stopBtn);
    console.log(
      "Here after app got closed while recording automatically again resumed the audio"
    );
    await driver.pause(5000);
    await verify(RecordingPage.offlineConversationSaved);
    await terminateApp();
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await waitForElement(RecordingPage.offlineConversationSaved);
    await validate(RecordingPage.offlineConversationSaved);
    await network();
    console.log(
      "Here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
 
  });
  it("SoapNote and Transcript verification for the First conversation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it("Add Conversation  ", async () => {
    await waitForElement(RecordingPage.addConversation);
    await verifyAndClick(RecordingPage.addConversation);
    await verifyAndClick(RecordingPage.yes);
    await AudioManeger.playAudio("english");
    await driver.pause(60000);
    await network();
    await driver.pause(5000);
    await AudioManeger.stopAudio();
    await terminateApp();
    await driver.pause(5000);
    await network();
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(5000);

  });
  it("SoapNote and Transcript verification for the second Conversation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it("Third Conversation {making the conversation as draft and completing the draft Transcript }", async () => {
     await waitForElement(RecordingPage.addConversation);
       await verifyAndClick(RecordingPage.addConversation);
       await verifyAndClick(RecordingPage.yes);
       await verify(RecordingPage.pauseBtn);
       await RecordingPage.recordAudioAndSaveAsDraft();
       await HomePage.encounter.click();
       await EncounterPage.clickDraftTranscript();
       await RecordingPage.finaliseEncounter.click();
       await RecordingPage.Ok.click();
       await RecordingPage.resumeConversation.click();
       await RecordingPage.yes.click();
       await AudioManager.playAudio("english");
       await driver.pause(5000);
       await network()
       await driver.pause(100000);
       await AudioManager.stopAudio();
       await terminateApp();
       await driver.pause(5000);
       await network();
       await driver.pause(5000);
       await driver.activateApp(process.env.BUNDLE_ID);
       await driver.pause(5000)
       await verifyAndClick(RecordingPage.endEncounter)

  });
  it("SOAP NOTE  & Transcript Verification for the Third Conversation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });

  it("ICD & CPT Codes Generation and Regeneration", async () => {
    await QuickActions.Icd_Cpt();
  });

  it("Care Plan generation and Regeneration ", async () => {
    await QuickActions.care_plan();
  });

  it("Feed back on the doctor genaration and Regenaration ", async () => {
    await QuickActions.feed_back();
  });
  it("Referall leter genaration and Regenaration", async () => {
    await QuickActions.referalLetter();
  });
  it("Regenerate SOAP Note verification", async () => {
    await QuickActions.SOAPNote();
    await RecordingPage.UpdatePatientInfo();
  });
  it("Manual update verification", async () => {
    await RecordingPage.manualUpdate();
  });
  it("HayNoki update verification", async () => {
    await RecordingPage.hayNoki();
  });

  it("Finalizing the encounter", async () => {
    await RecordingPage.finalize_Encounter();
  });
});

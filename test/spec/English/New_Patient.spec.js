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
  network,
  terminateApp,
} from "../../../helper/helper.js";
import allureReporter from "@wdio/allure-reporter";
import AudioManager from "../../pageObjectModel/audioManeger.js";
import QuickActions from "../../pageObjectModel/quickActions.page.js";
before(() => {
  allureReporter.addEpic("NOKI Android Automation");
  allureReporter.addOwner("Mobile Team");
});

it("Patient Creation", async () => {
  await waitForElement(HomePage.startNewEncounterButton);
  await HomePage.startNewEncounterButton.click();
  await verifyAndClick(SearchPatientPage.addPatient);
  await AddPatitentPage.addPatitentWrn();
  await AddPatitentPage.creatNewPatient();
});

it("Automatic Sync Verification (Offline to Online and Vice Versa) for the First Encounter", async () => {
  await RecordingPage.startConversation();
  await AudioManager.playAudio("english");
  console.log("Audio started:", AudioManager.currentAudioFile);
  await RecordingPage.recordAudioforOfflineModeMT();
  await driver.pause(10000);
  await verifyAndClick(RecordingPage.pauseBtn);
  await AudioManager.pauseAudio();
  console.log("Audio paused at:", AudioManager.playedTime, "seconds");
  await driver.pause(20000);
  await waitForElement(RecordingPage.playBtn);
  await verifyAndClick(RecordingPage.playBtn);
});
it("App Killed and Reopened (Offline Mode Verification) for the First Encounter", async () => {
  await AudioManager.resumeAudio();
  console.log("Audio resumed:", AudioManager.currentAudioFile);
  await driver.pause(30000);
  await AudioManager.pauseAudio();
  await network();
  await driver.pause(5000);
  await verifyAndClick(RecordingPage.pauseBtn); // POP up Issue fix
  await terminateApp();
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(RecordingPage.ContinueBtn);
  await validate(RecordingPage.endEncounter);
  await verifyAndClick(RecordingPage.ContinueBtn);
});
it("App Killed in Offline and Reopened in Online Mode Verification for the First Encounter", async () => {
  await AudioManager.resumeAudio();
  await driver.pause(30000);
  await AudioManager.pauseAudio();
  await driver.pause(5000);
  await terminateApp();
  await network(); //online
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await driver.pause(5000);
  await verifyAndClick(RecordingPage.ContinueBtn);
});
it("Offline Mode Stop and App Kill Verification for the First Encounter", async () => {
  await network(); // offline mode
  await AudioManager.resumeAudio();
  await driver.pause(30000);
  await AudioManager.stopAudio();
  await verifyAndClick(RecordingPage.stopBtn);
  await driver.pause(5000);
  await verify(RecordingPage.offlineConversationSaved);
  await terminateApp(); // app kill
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(RecordingPage.offlineConversationSaved);
  await validate(RecordingPage.offlineConversationSaved);
  await network(); // online mode
});
it("SOAP Note Generation for the First Encounter", async () => {
  await RecordingPage.SOAPNote_Verification();
});
it("Transcript Verification for the First Encounter", async () => {
  await RecordingPage.Transcript_Verification();
});

it("Second Conversation for the First Encounter", async () => {
  await waitForElement(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.yes);
  await AudioManager.playAudio("english");
  await driver.pause(60000);
  await network();
  await driver.pause(5000);
  await AudioManager.stopAudio();
  await verifyAndClick(RecordingPage.pauseBtn);
  await driver.pause(2000);
  await terminateApp(); // kill app in offline mode
  await driver.pause(5000);
  await network(); // online mode
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID); // reope app with online mode
  await driver.pause(5000);
  await verifyAndClick(RecordingPage.endEncounter); // end encounter after reopening the app
});
it("SOAP Note Generation for the Second Conversation in the First Encounter", async () => {
  await RecordingPage.SOAPNote_Verification();
});
it("Transcript Verification for the Second Conversation in the First Encounter", async () => {
  await RecordingPage.Transcript_Verification();
});

it("Third Conversation (Draft Creation and Completion of Draft Transcript) for the First Encounter", async () => {
  await waitForElement(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.yes);
  await verify(RecordingPage.pauseBtn);
  await AudioManager.playAudio("english");
  await driver.pause(60000);
  await AudioManager.pauseAudio();
  await driver.pause(3000);
  await verifyAndClick(RecordingPage.back);
  await verifyAndClick(RecordingPage.saveAsDraftBtn);
  await driver.pause(5000);
  await verifyAndClick(HomePage.encounter);
  await driver.pause(5000);
  await EncounterPage.clickDraftTranscript();
  await RecordingPage.finaliseEncounter.click();
  await RecordingPage.Ok.click();
  await RecordingPage.resumeConversation.click();
  await RecordingPage.yes.click();
  await AudioManager.resumeAudio();
  await driver.pause(5000);
  await network(); //Offline mode
  await driver.pause(60000);
  await AudioManager.stopAudio();
  await verifyAndClick(RecordingPage.pauseBtn);
  await driver.pause(2000);
  await terminateApp();
  await driver.pause(5000);
  await network(); //online mode
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await verifyAndClick(RecordingPage.endEncounter);
  await driver.pause(3000);
});

it("SOAP Note Generation for the Draft Conversation in the First Encounter", async () => {
  await RecordingPage.SOAPNote_Verification();
});
it("Transcript verification for the Third Conversation in First Encounter", async () => {
  await RecordingPage.Transcript_Verification();
});

it("ICD-CPT Codes Generation and Regeneration", async () => {
  await QuickActions.Icd_Cpt();
});
it("Care plan Generation and Regeneration", async () => {
  await QuickActions.care_plan();
});
it("Feedback Generation and Regeneration", async () => {
  await QuickActions.feed_Back();
});
it("Referral Generation and Regeneration", async () => {
  await QuickActions.referal_Letter();
});
it("SOAP Note Regeneration", async () => {
  await QuickActions.soap_note();
});
it("Patient Info Update", async () => {
  await RecordingPage.UpdatePatientInfo();
});
it("Patient Info Manual Update", async () => {
  await RecordingPage.manualUpdate();
});
it("HayNoki Update", async () => {
  await RecordingPage.hayNoki();
});
it("Finalize Encounter for the First Encounter", async () => {
  await RecordingPage.finalizeEncounter();
});

import HomePage from "../../pageObjectModel/home.page.js";
import SearchPatientPage from "../../pageObjectModel/searchPatitent.page.js";
import RecordingPage from "../../pageObjectModel/recording.page.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import EncounterPage from "../../pageObjectModel/encounter.page.js";

import SettingsPage from "../../pageObjectModel/setting.page.js";
import {
  verify,
  verifyAndClick,
  waitForElement,
  network,
  terminateApp,
  validate,
  verifyToastMessage,
} from "../../../helper/helper.js";
import allureReporter from "@wdio/allure-reporter";
import AudioManeger from "../../pageObjectModel/audioManeger.js";
import QuickActions from "../../pageObjectModel/quickActions.page.js";
import { net } from "appium/support.js";
import SpanishLanguage from "../../pageObjectModel/spanishLanguage.js";
before(() => {
  allureReporter.addEpic("NOKI Android Automation");
  allureReporter.addOwner("Mobile Team");
});
// it("Offline Functinality verification", async () => {
//   await LoginPage.restartApp();
//   await HomePage.startNewEncounterButton.click();
//   await SearchPatientPage.patientSearch("Naga");
//   await RecordingPage.startConversation();
//   await AudioManeger.playAudio("english");
//   await driver.pause(5000);
//   // offline mode
//   await network();
//   for (let i = 0; i < 3; i++) {
//     await verifyAndClick(RecordingPage.pauseBtn);
//     await driver.pause(3000);
//     await verifyAndClick(RecordingPage.playBtn);
//     await driver.pause(3000);
//   }
//   await driver.pause(5000);
//   await AudioManeger.pauseAudio();
//   await terminateApp();
//   await driver.pause(5000);
//   await driver.activateApp(process.env.BUNDLE_ID);
//   await driver.pause(5000);
//   await verifyAndClick(RecordingPage.ContinueBtn);
//   await AudioManeger.resumeAudio();
//   await network(); // online mode
//   await driver.pause(30000);
//   for (let i = 0; i < 3; i++) {
//     await verifyAndClick(RecordingPage.pauseBtn);
//     await driver.pause(3000);
//     await verifyAndClick(RecordingPage.playBtn);
//     await driver.pause(3000);
//   }
//   await driver.pause(5000);
//   await network(); // offline mode
//   await driver.pause(5000);
//   await AudioManeger.stopAudio();
//   await terminateApp();
//   await driver.pause(5000);
//   await network(); //online mode
//   await driver.pause(5000);
//   await driver.activateApp(process.env.BUNDLE_ID);
//   await driver.pause(5000);
//   await verifyAndClick(RecordingPage.discardBtn);
//   await driver.pause(5000);
//   await LoginPage.restartApp();
//   await HomePage.startNewEncounterButton.click();
//   await SearchPatientPage.patientSearch("Naga");
//   await RecordingPage.startConversation();
//   await driver.pause(5000);
//   await network(); // offline mode
//   await terminateApp();
//   await driver.pause(5000);
//   await network();
//   await driver.pause(5000);
//   await driver.activateApp(process.env.BUNDLE_ID);
//   await driver.pause(5000);
//   await verifyAndClick(RecordingPage.discardBtn);
//   await driver.pause(5000);
//   await validate(HomePage.startNewEncounterButton);
// });
it("New Encounter Creation", async () => {
  await LoginPage.restartApp();
  await HomePage.startNewEncounterButton.click();
  await SearchPatientPage.patientSearch("Naga");
});
it("Automatic Sync Verification (Offline to Online and Vice Versa)", async () => {
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
  await driver.pause(2000);
  await verifyAndClick(RecordingPage.playBtn);
});
it("App Killed and Reopened (Offline Mode Verification)", async () => {
  await AudioManeger.resumeAudio();
  console.log("Audio resumed:", AudioManeger.currentAudioFile);
  await driver.pause(30000);
  await AudioManeger.pauseAudio();
  await network();
  await driver.pause(5000);
  await verifyAndClick(RecordingPage.pause); // POP up Issue fix
  await terminateApp();
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(RecordingPage.ContinueBtn);
  await verifyAndClick(RecordingPage.ContinueBtn);
  await driver.pause(5000);
});
it("App Killed in Offline and Reopened in Online Mode Verification", async () => {
  await AudioManeger.resumeAudio();
  await driver.pause(30000);
  await AudioManeger.pauseAudio();
  await driver.pause(5000);
  await terminateApp();
  await network(); //online
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await driver.pause(5000);
  await verifyAndClick(RecordingPage.ContinueBtn);
});
it("Offline Mode Stop and App Kill Verification", async () => {
  await network(); // offline mode
  await AudioManeger.resumeAudio();
  await driver.pause(30000);
  await AudioManeger.stopAudio();
  await verifyAndClick(RecordingPage.stopBtn);
  await driver.pause(5000);
  await verify(RecordingPage.offlineConversationSaved);
  await terminateApp(); // app kill
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(RecordingPage.offlineConversationSaved);
  await validate(RecordingPage.offlineConversationSaved);
  await network(); // online mode
  await waitForElement(RecordingPage.PrevEncounterRefNo);
  await verifyAndClick(RecordingPage.PrevEncounterRefNo);
});
it("SOAP Note Generation For New Encounter", async () => {
  await RecordingPage.SOAPNote_Verification();
});
it("Transcript Verification for the First Conversation", async () => {
  await RecordingPage.Transcript_Verification();
});

it("Second Conversation for the New Encounter", async () => {
  await waitForElement(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.yes);
  await AudioManeger.playAudio("english");
  await driver.pause(60000);
  await network();
  await driver.pause(5000);
  await AudioManeger.stopAudio();
  await verifyAndClick(RecordingPage.pauseBtn);
  await driver.pause(2000);
  await terminateApp(); // kill app in offline mode
  await driver.pause(5000);
  await network(); // online mode
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID); // reopen app with online mode
  await driver.pause(5000);
  await verifyAndClick(RecordingPage.endEncounter); // end encounter after reopening the app
  await verifyAndClick(RecordingPage.PrevEncounterRefYes);
});
it("SOAP Note generation for the Second Conversation", async () => {
  await RecordingPage.SOAPNote_Verification();
});
it("Transcript Verification for the Second Conversation", async () => {
  await RecordingPage.Transcript_Verification();
});

// it("SoapNote Tab Missing issue verification", async () => {
//   await waitForElement(RecordingPage.addConversation);
//   await verifyAndClick(RecordingPage.addConversation);
//   await verifyAndClick(RecordingPage.yes);
//   await verify(RecordingPage.pauseBtn);
//   await AudioManeger.playAudio("english");
//   await driver.pause(60000);
//   await network(); //Offline mode
//   await driver.pause(60000);
//   await AudioManeger.stopAudio();
//   await verifyAndClick(RecordingPage.stopBtn);
//   await driver.pause(2000);
//   await network(); //online mode
//   await driver.pause(7000);
//   await verifyAndClick(RecordingPage.yes);
//   await driver.pause(4000);
//   await network(); //offline mode
//   await validate(RecordingPage.somethingWentWrongToast);
//   await verifyAndClick(RecordingPage.Ok);
//   await network(); //online mode
//   await driver.pause(5000);
//   await verifyAndClick(RecordingPage.PrevEncounterRefYes);
//   await driver.pause(3000);
//   await network(); //Offline mode
//   await validate(RecordingPage.somethingWentWrongToast); //verifying somthing went wrong popup
//   await verifyAndClick(RecordingPage.Ok);
//   await driver.pause(3000);
//   await network(); //online mode
//   await driver.pause(5000);
//   await verifyAndClick(RecordingPage.PrevEncounterRefYes);
//   await driver.pause(3000);
//   await waitForElement(QuickActions.quickActions);
//   await validate(RecordingPage.SoapNoteBtn);
// });

it("Third Conversation (Draft Creation and Completion of Draft Transcript)", async () => {
  await waitForElement(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.yes);
  await verify(RecordingPage.pauseBtn);
  await AudioManeger.playAudio("english");
  await driver.pause(100000);
  await AudioManeger.pauseAudio();
  await driver.pause(3000);
  await verifyAndClick(RecordingPage.back);
  await verifyAndClick(RecordingPage.saveAsDraftBtn);
  await driver.pause(5000);
  await EncounterPage.clickDraftTranscript();
  await RecordingPage.finaliseEncounter.click();
  await RecordingPage.Ok.click();
  await RecordingPage.resumeConversation.click();
  await RecordingPage.yes.click();
  await AudioManeger.resumeAudio();
  await driver.pause(5000);
  await network(); //Offline mode
  await driver.pause(60000);
  await AudioManeger.stopAudio();
  await verifyAndClick(RecordingPage.pauseBtn);
  await driver.pause(2000);
  await terminateApp();
  await driver.pause(5000);
  await network(); //online mode
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(RecordingPage.endEncounter);
  await verifyAndClick(RecordingPage.endEncounter);
  await verifyAndClick(RecordingPage.PrevEncounterRefYes);
  // await driver.pause(3000);
  // await network(); //Offline mode
  // await verify(RecordingPage.somethingWentWrongToast); //verifying somthing went wrong popup
  // await verifyAndClick(RecordingPage.Ok);
  // await terminateApp();
  // await driver.pause(5000);
  // await network(); //online mode
  // await driver.pause(5000);
  // await driver.activateApp(process.env.BUNDLE_ID);
  // await driver.pause(2000);
  // await verifyAndClick(RecordingPage.endEncounter);
  // await network(); //offline mode
  // await verify(RecordingPage.somethingWentWrongToast); //verifying somthing went wrong popup
  // await verifyAndClick(RecordingPage.Ok);
  // await network(); //online mode
  // await driver.pause(2000);
  // await network(); //offline mode
  // await driver.pause(2000);
  // await network(); //online mode
  // await verifyAndClick(RecordingPage.endEncounter);
  // await validate(RecordingPage.PrevEncounterRef);
  // await verifyAndClick(RecordingPage.PrevEncounterRefYes);
});

it("SOAP Note Generation for the Draft Conversation", async () => {
  await RecordingPage.SOAPNote_Verification();
});
it("Transcript Verification for the Draft Conversation", async () => {
  await RecordingPage.Transcript_Verification();
});

it("ICD-CPT codes Generation and Regeneration", async () => {
  await QuickActions.Icd_Cpt();
});
it("Care plan Generation and Regeneration", async () => {
  await QuickActions.care_plan();
});
it("Feedback Generation and Regeneration", async () => {
  await QuickActions.feed_Back();
});
it("Referal Generation and Regeneration", async () => {
  await QuickActions.referal_Letter();
});
it("SoapNote Regeneration", async () => {
  await QuickActions.soap_note();
});
it("Patient Info Update", async () => {
  await RecordingPage.UpdatePatientInfo();
});
it("Patient Info ManualUpdate", async () => {
  await RecordingPage.manualUpdate();
});
it("HayNoki Info Update", async () => {
  await RecordingPage.hayNoki();
});
it("Finalize Encounter", async () => {
  await RecordingPage.finalizeEncounter();
});
it("Logout", async () => {
  await LoginPage.restartApp();
  await HomePage.settings.click();
  await verifyAndClick(SettingsPage.launguage);
  await verifyAndClick(SettingsPage.spanish);
  await verifyAndClick(SpanishLanguage.logoutBtn);
  await verifyAndClick(SpanishLanguage.logoutConformationBtn);
});

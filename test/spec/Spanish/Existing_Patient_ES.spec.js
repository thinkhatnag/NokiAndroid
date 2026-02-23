import {
  Network,
  validate,
  verify,
  verifyAndClick,
  network,
  terminateApp,
  waitForElement,
} from "../../../helper/helper.js";
import SpanishLanguage from "../../pageObjectModel/spanishLanguage.js";
import AudioManeger from "../../pageObjectModel/audioManeger.js";
import allureReporter from "@wdio/allure-reporter";
import EncounterPage from "../../pageObjectModel/encounter.page.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import RecordingPage from "../../pageObjectModel/recording.page.js";
import SettingPage from "../../pageObjectModel/setting.page.js";
before(() => {
  allureReporter.addEpic("NOKI Android Automation");
  allureReporter.addOwner("Mobile Team");
});
// it("offline/online app kill verification with play pause", async () => {
//   await LoginPage.restartApp();
//   await SpanishLanguage.startNewEncounter.click();
//   await SpanishLanguage.patientSearch("Naga");
//   await SpanishLanguage.startConversation();
//   await AudioManeger.playAudio("Spanish");
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
//   await verifyAndClick(SpanishLanguage.continueBtn);
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
//   await verifyAndClick(SpanishLanguage.discardBtn);
//   await driver.pause(5000);
//   await LoginPage.restartApp();
//   await SpanishLanguage.startNewEncounter.click();
//   await SpanishLanguage.patientSearch("Naga");
//   await SpanishLanguage.startConversation();
//   await driver.pause(5000);
//   await network(); // offline mode
//   await terminateApp();
//   await driver.pause(5000);
//   await network();
//   await driver.pause(5000);
//   await driver.activateApp(process.env.BUNDLE_ID);
//   await driver.pause(5000);
//   await verifyAndClick(SpanishLanguage.discardBtn);
//   await driver.pause(5000);
//   await validate(SpanishLanguage.startNewEncounter);
// });
it("New Encounter Creation -Es", async () => {
  await LoginPage.restartApp();
  await SpanishLanguage.startNewEncounter.click();
  await SpanishLanguage.patientSearch("Naga");
});
it("Automatic Sync Verification (Offline to Online and Vice Versa) -Es", async () => {
  await SpanishLanguage.startConversation();
  await AudioManeger.playAudio("Spanish");
  console.log("Audio started:", AudioManeger.currentAudioFile);
  await SpanishLanguage.recordAudioforOfflineModeMT();
  await driver.pause(10000);
  await verifyAndClick(RecordingPage.pauseBtn);
  await AudioManeger.pauseAudio();
  console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
  await driver.pause(20000);
  await waitForElement(RecordingPage.playBtn);
  await driver.pause(2000);
  await verifyAndClick(RecordingPage.playBtn);
});
it("App Killed and Reopened (Offline Mode Verification) -Es", async () => {
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
  await waitForElement(SpanishLanguage.continueBtn);
  await validate(SpanishLanguage.endEncounter);
  await verifyAndClick(SpanishLanguage.continueBtn);
  await driver.pause(5000);
});
it("App Killed in Offline and Reopened in Online Mode Verification -Es", async () => {
  await AudioManeger.resumeAudio();
  await driver.pause(30000);
  await AudioManeger.pauseAudio();
  await driver.pause(5000);
  await terminateApp();
  await network(); //online
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await driver.pause(5000);
  await verifyAndClick(SpanishLanguage.continueBtn);
});
it("Offline Mode Stop and App Kill Verification -Es", async () => {
  await network(); // offline mode
  await AudioManeger.resumeAudio();
  await driver.pause(30000);
  await AudioManeger.stopAudio();
  await verifyAndClick(RecordingPage.stopBtn);
  await driver.pause(5000);
  await verify(SpanishLanguage.offlineConversationSaved);
  await terminateApp(); // app kill
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(SpanishLanguage.offlineConversationSaved);
  await validate(SpanishLanguage.offlineConversationSaved);
  await network(); // online mode
  await waitForElement(SpanishLanguage.PrevEncounterRefNo);
  await verifyAndClick(SpanishLanguage.PrevEncounterRefNo);
});
it("SOAP Note Generation For New Encounter -Es", async () => {
  await SpanishLanguage.SOAPNOTE_Verification();
});
it("Transcript Verification for the First Conversation -Es", async () => {
  await SpanishLanguage.Transcript_Verification();
});

it("Second Conversation for the New Encounter -Es", async () => {
  await waitForElement(SpanishLanguage.addConversation);
  await verifyAndClick(SpanishLanguage.addConversation);
  await verifyAndClick(SpanishLanguage.yes);
  await AudioManeger.playAudio("Spanish");
  await driver.pause(30000);
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
  await verifyAndClick(SpanishLanguage.endEncounter); // end encounter after reopening the app
  await verifyAndClick(SpanishLanguage.PrevEncounterRefYes);
});
it("SOAP Note generation for the Second Conversation -Es", async () => {
  await SpanishLanguage.SOAPNOTE_Verification();
});
it("Transcript Verification for the Second Conversation -Es", async () => {
  await SpanishLanguage.Transcript_Verification();
});
// it("SoapNote Tab Missing issue verification", async () => {
//   await waitForElement(RecordingPage.addConversation);
//   await verifyAndClick(RecordingPage.addConversation);
//   await verifyAndClick(RecordingPage.yes);
//   await verify(RecordingPage.pauseBtn);
//   await AudioManeger.playAudio("Spanish");
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
//   await verifyAndClick(SpanishLanguage.PrevEncounterRefYes);
//   await driver.pause(3000);
//   await network(); //Offline mode
//   await validate(RecordingPage.somethingWentWrongToast); //verifying somthing went wrong popup
//   await verifyAndClick(RecordingPage.Ok);
//   await driver.pause(3000);
//   await network(); //online mode
//   await driver.pause(5000);
//   await verifyAndClick(SpanishLanguage.PrevEncounterRefYes);
//   await driver.pause(3000);
//   await waitForElement(QuickActions.quickActions);
//   await validate(RecordingPage.SoapNoteBtn);
// });

it("Third Conversation (Draft Creation and Completion of Draft Transcript) -Es", async () => {
  await waitForElement(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.addConversation);
  await verifyAndClick(RecordingPage.yes);
  await verify(RecordingPage.pauseBtn);
  await AudioManeger.playAudio("Spanish");
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
  await verifyAndClick(SpanishLanguage.endEncounter);
  await verifyAndClick(SpanishLanguage.PrevEncounterRefYes);
});

it("SOAP Note Generation for the Draft Conversation -Es", async () => {
  await SpanishLanguage.SOAPNOTE_Verification();
});
it("Transcript Verification for the Draft Conversation -Es", async () => {
  await SpanishLanguage.Transcript_Verification();
});

it("ICD-CPT codes Generation and Regeneration -Es", async () => {
  await SpanishLanguage.Icd_cpt();
});
it("Care plan Generation and Regeneration -Es", async () => {
  await SpanishLanguage.care_plan();
});
it("Feedback Generation and Regeneration -Es", async () => {
  await SpanishLanguage.feed_Back();
});
it("Referal Generation and Regeneration -Es", async () => {
  await SpanishLanguage.referal_Letter();
});
it("SoapNote Regeneration -Es", async () => {
  await SpanishLanguage.Soap_Note_Regeneration();
});
it("Patient Info Update -Es", async () => {
  await SpanishLanguage.UpdatePatientInfo();
});
it("Patient Info Manual Update -Es", async () => {
  await SpanishLanguage.manualUpdate();
});
it("HayNoki Info Update -Es", async () => {
  await SpanishLanguage.hayNoki();
});
it("Finalize Encounter -Es", async () => {
  await SpanishLanguage.finalizeEncounter();
});
it("Logout -Es", async () => {
  await LoginPage.restartApp();
  await HomePage.settings.click();
  await verifyAndClick(SpanishLanguage.Idioma);
  await verifyAndClick(SpanishLanguage.Inglish);
  await verifyAndClick(SettingPage.logoutBtn);
  await verifyAndClick(SettingPage.logoutConformationBtn);
  await validate(LoginPage.loginButton);
});

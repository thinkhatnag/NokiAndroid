import {
  verify,
  verifyAndClick,
  waitForElement,
  Network,
  network,
  terminateApp,
} from "../../../helper/helper.js";
import allureReporter from "@wdio/allure-reporter";
import AudioManeger from "../../pageObjectModel/audioManeger.js";
import SpanishLanguage from "../../pageObjectModel/spanishLanguage.js";

before(() => {
  allureReporter.addEpic("NOKI Android Automation");
  allureReporter.addOwner("Mobile Team");
});

it("Patient Creation-Es", async () => {
  await waitForElement(SpanishLanguage.startNewEncounter);
  await SpanishLanguage.startNewEncounter.click();
  await verifyAndClick(SpanishLanguage.addPatient);
  await SpanishLanguage.addPatitentWrn();
  await SpanishLanguage.createNewPatient();
});
it("Automatic Sync Verification (Offline to Online and Vice Versa) for the First Encounter -Es", async () => {
  await SpanishLanguage.startConversation();
  await AudioManeger.playAudio("spanish");
  console.log("Audio started:", AudioManeger.currentAudioFile);
  await SpanishLanguage.recordAudioforOfflineModeMT();
  await driver.pause(10000);
  await verifyAndClick(SpanishLanguage.pauseBtn);
  await AudioManeger.pauseAudio();
  console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
  await driver.pause(20000);
  await waitForElement(SpanishLanguage.playBtn);
  await verifyAndClick(SpanishLanguage.playBtn);
});
it("App Killed and Reopened (Offline Mode Verification) for the First Encounter -Es", async () => {
  await AudioManeger.resumeAudio();
  console.log("Audio resumed:", AudioManeger.currentAudioFile);
  await driver.pause(30000);
  await AudioManeger.pauseAudio();
  await network();
  await driver.pause(5000);
  await verifyAndClick(SpanishLanguage.pauseBtn); // POP up Issue fix
  await terminateApp();
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(SpanishLanguage.continueBtn);
  await validate(SpanishLanguage.endEncounter);
  await verifyAndClick(SpanishLanguage.continueBtn);
});
it("App Killed in Offline and Reopened in Online Mode Verification for the First Encounter -Es", async () => {
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
it("Offline Mode Stop and App Kill Verification for the First Encounter", async () => {
  await network(); // offline mode
  await AudioManeger.resumeAudio();
  await driver.pause(30000);
  await AudioManeger.stopAudio();
  await verifyAndClick(SpanishLanguage.stopBtn);
  await driver.pause(5000);
  await verify(SpanishLanguage.offlineConversationSaved);
  await terminateApp(); // app kill
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await waitForElement(SpanishLanguage.offlineConversationSaved);
  await validate(SpanishLanguage.offlineConversationSaved);
  await network(); // online mode
});
it("SOAP Note Generation for the First Encounter -Es", async () => {
  await SpanishLanguage.SOAPNOTE_Verification();
});
it("Transcript Verification for the First Encounter -Es", async () => {
  await SpanishLanguage.Transcript_Verification();
});

it("Second Conversation for the First Encounter -Es", async () => {
  await waitForElement(SpanishLanguage.addConversation);
  await verifyAndClick(SpanishLanguage.addConversation);
  await verifyAndClick(SpanishLanguage.yes);
  await AudioManeger.playAudio("spanish");
  await driver.pause(60000);
  await network();
  await driver.pause(5000);
  await AudioManeger.stopAudio();
  await verifyAndClick(SpanishLanguage.pauseBtn);
  await driver.pause(2000);
  await terminateApp(); // kill app in offline mode
  await driver.pause(5000);
  await network(); // online mode
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID); // reope app with online mode
  await driver.pause(5000);
  await verifyAndClick(SpanishLanguage.endEncounter); // end encounter after reopening the app
});
it("SOAP Note Generation for the Second Conversation in the First Encounter  -Es", async () => {
  await SpanishLanguage.SOAPNOTE_Verification();
});
it("Transcript Verification for the Second Conversation in the First Encounter -Es", async () => {
  await SpanishLanguage.Transcript_Verification();
});
// it("SoapNote Tab Missing issue verification -Es", async () => {
//   await waitForElement(SpanishLanguage.addConversation);
//   await verifyAndClick(SpanishLanguage.addConversation);
//   await verifyAndClick(SpanishLanguage.yes);
//   await verify(SpanishLanguage.pauseBtn);
//   await AudioManeger.playAudio("spanish");
//   await driver.pause(60000);
//   await network(); //Offline mode
//   await driver.pause(60000);
//   await AudioManeger.stopAudio();
//   await verifyAndClick(SpanishLanguage.stopBtn);
//   await driver.pause(2000);
//   await network(); //online mode
//   await driver.pause(7000);
//   await verifyAndClick(SpanishLanguage.PrevEncounterRefYes);
//   await driver.pause(4000);
//   await network(); //offline mode
//   await validate(SpanishLanguage.somethingWentWrongToast);
//   await verifyAndClick(SpanishLanguage.ok);
//   await network(); //online mode
//   await driver.pause(5000);
//   await verifyAndClick(SpanishLanguage.PrevEncounterRefYes);
//   await driver.pause(3000);
//   await network(); //Offline mode
//   await validate(SpanishLanguage.somethingWentWrongToast); //verifying somthing went wrong popup
//   await verifyAndClick(SpanishLanguage.ok);
//   await driver.pause(3000);
//   await network(); //online mode
//   await driver.pause(5000);
//   await waitForElement(SpanishLanguage.quickActions);
//   await validate(SpanishLanguage.SoapNoteBtn);
// });

it("Third Conversation (Draft Creation and Completion of Draft Transcript) for the First Encounter -Es", async () => {
  await waitForElement(SpanishLanguage.addConversation);
  await verifyAndClick(SpanishLanguage.addConversation);
  await verifyAndClick(SpanishLanguage.yes);
  await verify(SpanishLanguage.pauseBtn);
  await AudioManeger.playAudio("spanish");
  await driver.pause(100000);
  await AudioManeger.pauseAudio();
  await driver.pause(3000);
  await verifyAndClick(SpanishLanguage.back);
  await verifyAndClick(SpanishLanguage.saveAsDraftBtn);
  await driver.pause(5000);
  await verifyAndClick(HomePage.encounter);
  await driver.pause(5000);
  await EncounterPage.clickDraftTranscript();
  await SpanishLanguage.finaliseEncounter.click();
  await SpanishLanguage.ok.click();
  await SpanishLanguage.resumeConversation.click();
  await SpanishLanguage.yes.click();
  await AudioManeger.resumeAudio();
  await driver.pause(5000);
  await network(); //Offline mode
  await driver.pause(60000);
  await AudioManeger.stopAudio();
  await verifyAndClick(SpanishLanguage.pauseBtn);
  await driver.pause(2000);
  await terminateApp();
  await driver.pause(5000);
  await network(); //online mode
  await driver.pause(5000);
  await driver.activateApp(process.env.BUNDLE_ID);
  await verifyAndClick(SpanishLanguage.endEncounter);
  await driver.pause(3000);
});

it("SOAP Note Generation for the Draft Conversation in the First Encounter -Es", async () => {
  await SpanishLanguage.SOAPNOTE_Verification();
});
it("Transcript verification for the Third Conversation in First Encounter -Es", async () => {
  await SpanishLanguage.Transcript_Verification();
});

it("ICD-CPT Codes Generation and Regeneration -Es", async () => {
  await SpanishLanguage.Icd_cpt();
});
it("Care plan Generation and Regeneration -Es", async () => {
  await SpanishLanguage.care_plan();
});
it("Feedback Generation and Regeneration-Es", async () => {
  await SpanishLanguage.feed_Back();
});
it("Referral Generation and Regeneration -Es", async () => {
  await SpanishLanguage.referal_Letter();
});
it("SOAP Note Regeneration -Es", async () => {
  await SpanishLanguage.soap_note();
});

it("Patient Info Update -Es", async () => {
  await SpanishLanguage.UpdatePatientInfo();
});
it("Patient Info Manual Update -Es", async () => {
  await SpanishLanguage.manualUpdate();
});
it("HayNoki Update -Es", async () => {
  await SpanishLanguage.hayNoki();
});
it("Finalize Encounter for the First Encounter -Es", async () => {
  await SpanishLanguage.finalizeEncounter();
});

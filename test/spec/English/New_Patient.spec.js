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
  terminateApp,
} from "../../../helper/helper.js";
import allureReporter from "@wdio/allure-reporter";
import AudioManeger from "../../pageObjectModel/audioManeger.js";
import QuickActions from "../../pageObjectModel/quickActions.page.js";
import audioManeger from "../../pageObjectModel/audioManeger.js";
describe("Existing patient E2E flow - English ", () => {
  before(() => {
    allureReporter.addEpic("NOKI IOS Automation");
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
    await driver.pause(4000);
    await network(); //offline mode
    await driver.pause(5000);
    await AudioManeger.playAudio("english");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await driver.pause(60000);
    await AudioManeger.pauseAudio();
    await terminateApp();
    await driver.pause(3000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(5000);
    await verify(RecordingPage.endEncounter);
    await verifyAndClick(RecordingPage.ContinueBtn);
    await AudioManeger.resumeAudio();
    await driver.pause(20000);
    await AudioManeger.pauseAudio();
    await terminateApp();
    await driver.pause(3000);
    await network(); //online
    await driver.pause(3000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await verify(RecordingPage.ContinueBtn);
    await verify(RecordingPage.discardBtn);
    await verifyAndClick(RecordingPage.endEncounter);
  });
  it("First Conversation and SOAP Note Generation for the First Encounter", async () => {
    await RecordingPage.SOAPNote_Verification();
  });
  it("Transcript Verification for the First Conversation for the First Encounter", async () => {
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
    await driver.activateApp(process.env.BUNDLE_ID); // reope app with online mode
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.endEncounter); // end encounter after reopening the app
  });
  it("SOAP Note Verification for the Second Conversation for the First Encounter", async () => {
    await RecordingPage.SOAPNote_Verification();
  });
  it("Transcript Verification for the Second Conversation for the First Encounter", async () => {
    await RecordingPage.Transcript_Verification();
  });

  it("Third Conversation {Draft Creation and Completion of Draft Transcript) for the First Encounter}", async () => {
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
    await verifyAndClick(HomePage.encounter);
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
    await verifyAndClick(RecordingPage.endEncounter);
    await driver.pause(3000);
  });

  it("SOAP Note Generation and Verification for the Draft Conversation for the First Encounter", async () => {
    await RecordingPage.SOAPNote_Verification();
  });
  it("Transcript Verification for the Draft Conversation for the First Encounter", async () => {
    await RecordingPage.Transcript_Verification();
  });

  it("Generation and Regeneration of Quick Action Templates {ICD & CPT, Care Plan, Feedback, Referral) for the First Encounter}", async () => {
    await QuickActions.Icd_cpt();
    await QuickActions.care_plan();
    await QuickActions.feed_Back();
    await QuickActions.referal_Letter();
    await QuickActions.soap_note();
  });
  it("Patient Info Update", async () => {
    await RecordingPage.UpdatePatientInfo();
    await RecordingPage.manualUpdate();
    await RecordingPage.hayNoki();
  });
  it("Finalize Encounter for the First Encounter", async () => {
    await RecordingPage.finalizeEncounter();
  });
});

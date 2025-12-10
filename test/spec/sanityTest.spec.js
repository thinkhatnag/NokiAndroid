import HomePage from "../pageObjectModel/home.page.js";
import PatientsPage from "../pageObjectModel/patient.page.js";
import EncounterPage from "../pageObjectModel/encounter.page.jsx";
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
  validate,
} from "../../helper/helper.js";
import allureReporter from "@wdio/allure-reporter";
import AudioManeger from "../pageObjectModel/audioManeger.js";
import QuickActions from "../pageObjectModel/quickActions.page.jsx";
import SettingsPage from "../pageObjectModel/setting.page.js";
import SpanishLanguage from "../pageObjectModel/spanishLanguage.js";
describe("Sanity Test Suite", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI Android Automation");
    allureReporter.addOwner("Mobile Team");
    allureReporter.addParentSuite("Sanity Test Suite");
  });

  it("Login In", async () => {
    await LoginPage.restartApp();
    await LoginPage.enterEmail(process.env.Email);
    await LoginPage.enterPassword(process.env.Password);
    await LoginPage.selectMultiTenant();
    await LoginPage.clickLogin();
    await validate(HomePage.homeScreenAnimation);
  });
  it("Create New Patient", async () => {
    await verifyAndClick(HomePage.startNewEncounterButton);
    await verifyAndClick(SearchPatientPage.addPatient);
    await AddPatitentPage.addPatitentWrn();
    await AddPatitentPage.creatNewPatient();
    await validate(RecordingPage.startConversationBtn);
  });
  it("First Convesation With Offline recording and app kill Verification", async () => {
    await RecordingPage.startConversation();
    await RecordingPage.recordAudioforOfflineModeMT();
    await aeroplaneModeOn();
    await verifyAndClick(RecordingPage.stopBtn);
    await verify(RecordingPage.offlineConversationSaved);
    await LoginPage.restartApp();
    await validate(RecordingPage.offlineConversationSaved);
  });
  it("SoapNoten & transcript verification for first Encounter with offline functinality validation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });

  it("Second conversation with offline recording and app reopened in online functinality validation", async () => {
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
    await verifyAndClick(RecordingPage.PrevEncounterRefYes);
  });
  it("SoapNote aand transcript validation for second convesation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it("Third conversation along with Draft Completion", async () => {
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
  });
  it("SoapNote aand transcript validation for Third convesation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it("Generation and Regenretion of Quick Action Templates (ICD&CPT, Care Plan, Feedback, Referral)", async () => {
    await QuickActions.Icd_Cpt();
    await QuickActions.care_plan();
    await QuickActions.feed_Back();
    await QuickActions.referal_Letter();
    await QuickActions.soap_note();
  });
  it("Patient Info Update", async () => {
    await RecordingPage.UpdatePatientInfo();
    await RecordingPage.manualUpdate();
    await RecordingPage.hayNoki();
    await RecordingPage.finalizeEncounter();
  });
  it("Seeting screen Verification & launguage change", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(HomePage.settings);
    await SettingsPage.support_VerifiCation();
    await verifyAndClick(SettingsPage.launguage);
    await verifyAndClick(SettingsPage.spanish);
    await validate(SettingsPage.Idioma);
  });
  it("create a new patient -es", async () => {
    await LoginPage.restartApp();
    await SpanishLanguagestartNewEncounterButton;
    await verifyAndClick(SpanishLanguage.addPatient);
    await SpanishLanguage.addPatitentWrn();
    await SpanishLanguage.createNewPatient();
    await validate(SpanishLanguage.startConversationBtn);
  });
  it("First Convesation With Offline recording and app kill Verification -es", async () => {
    await SpanishLanguage.startConversation();
    await SpanishLanguage.recordAudioforOfflineModeMT();
    await aeroplaneModeOn();
    await verifyAndClick(SpanishLanguage.stopBtn);
    await verify(SpanishLanguage.offlineConversationSaved);
    await LoginPage.restartApp();
    await validate(SpanishLanguage.offlineConversationSaved);
  });
  it("SoapNoten & transcript verification for first Encounter with offline functinality validation -es", async () => {
    await SpanishLanguage.SOAPNOTE_Verification();
    await SpanishLanguage.Transcript_Verification();
  });

  it("Second conversation with offline recording and app reopened in online functinality validation -es", async () => {
    await waitForElement(SpanishLanguage.addConversation);
    await verifyAndClick(SpanishLanguage.addConversation);
    await verifyAndClick(SpanishLanguage.yes);
    await AudioManeger.playAudio("english");
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
    await verifyAndClick(SpanishLanguage.PrevEncounterRefYes);
  });
  it("SoapNote aand transcript validation for second convesation -es", async () => {
    await SpanishLanguage.SOAPNOTE_Verification();
    await SpanishLanguage.Transcript_Verification();
  });
  it("Third conversation along with Draft Completion", async () => {
    await waitForElement(SpanishLanguage.addConversation);
    await verifyAndClick(SpanishLanguage.addConversation);
    await verifyAndClick(SpanishLanguage.yes);
    await verify(SpanishLanguage.pauseBtn);
    await AudioManeger.playAudio("english");
    await driver.pause(100000);
    await AudioManeger.pauseAudio();
    await driver.pause(3000);
    await verifyAndClick(SpanishLanguage.back);
    await verifyAndClick(SpanishLanguage.saveAsDraftBtn);
    await driver.pause(5000);
    await verifyAndClick(HomePage.encounter);
    await driver.pause(5000);
    await SpanishLanguage.clickDraftTranscript();
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
  });
  it("SoapNote aand transcript validation for Third convesation -es", async () => {
    await SpanishLanguage.SOAPNote_Verification();
    await SpanishLanguage.Transcript_Verification();
  });
  it("Generation and Regenretion of Quick Action Templates (ICD&CPT, Care Plan, Feedback, Referral) -es", async () => {
    await SpanishLanguage.Icd_cpt();
    await SpanishLanguage.care_plan();
    await SpanishLanguage.feed_Back();
    await SpanishLanguage.referal_Letter();
    await SpanishLanguage.soap_note();
  });
  it("Patient Info Update -es", async () => {
    await SpanishLanguage.UpdatePatientInfo();
    await SpanishLanguage.manualUpdate();
    await SpanishLanguage.hayNoki();
    await SpanishLanguage.finalizeEncounter();
  });
});

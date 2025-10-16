import HomePage from "../../pageObjectModel/home.page.js";
import EncounterPage from "../../pageObjectModel/encounter.page.js";
import SearchPatientPage from "../../pageObjectModel/searchPatitent.page.js";
import RecordingPage from "../../pageObjectModel/recording.page.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import {
  verify,
  verifyAndClick,
  waitForElement,
  network,
  Network,
  terminateApp,
} from "../../../helper/helper.js";
import allureReporter from "@wdio/allure-reporter";
import AudioManeger from "../../pageObjectModel/audioManeger.js";
import QuickActions from "../../pageObjectModel/quickActions.page.js";
describe("Existing patient E2E flow in English", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI Android Automation");
    allureReporter.addOwner("Mobile Team");
    allureReporter.addParentSuite("");
  });

  it("", async () => {
    await LoginPage.restartApp();
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
  });
  it("", async () => {
    await RecordingPage.startConversation();
    await AudioManeger.playAudio("english");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await RecordingPage.recordAudioforOfflineModeMT();
    await driver.pause(10000);
    // await verifyAndClick(RecordingPage.pauseBtn);
    await AudioManeger.pauseAudio();
    console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
    await driver.pause(20000);
    // await verifyAndClick(RecordingPage.playBtn);
  });
  it("", async () => {
    await AudioManeger.resumeAudio();
    console.log("Audio resumed:", AudioManeger.currentAudioFile);
    await driver.pause(30000);
    await AudioManeger.pauseAudio();
    await Network();
    await driver.pause(5000);
    await terminateApp();
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await waitForElement(RecordingPage.ContinueBtn);
    await verifyAndClick(RecordingPage.ContinueBtn);
    console.log(
      "Here app got restarted the app while it is in the recording screen and we verified with the app still in that page"
    );
  });
  it("", async () => {
    await AudioManeger.resumeAudio();
    await driver.pause(30000);
    await AudioManeger.stopAudio();
    await verifyAndClick(RecordingPage.stopBtn);
    console.log(
      "here after app got closed while recording we magaing automatically again resumed the audio"
    );
    await driver.pause(5000);
    await verify(RecordingPage.offlineConversationSaved);
    await Network();
    console.log(
      "here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
    await waitForElement(RecordingPage.PrevEncounterRefNo);
    await verifyAndClick(RecordingPage.PrevEncounterRefNo);
  });
  it("", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it("", async () => {
    RecordingPage.second_Conversation_For_Existing_Patient();
  });
  it("", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it("", async () => {
    await RecordingPage.third_Conversation_For_Existing_Patient();
  });
  it("SOAP NOTE  & Transcript Verification for the second conversation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it.skip("Thiord Conversation {makingh the converastion as draft and completing the draft Transcript }", async () => {
    await RecordingPage.third_Conversation_For_Existing_Patient();
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
    await QuickActions.feed_Back();
  });
  it("Referall leter genaration and Regenaration", async () => {
    await QuickActions.referal_Letter();
  });
  it("Regenerate SOAP Note verification", async () => {
    await QuickActions.soap_note();
    await RecordingPage.UpdatePatientInfo();
  });
  it.skip(" HayNoki update verification", async () => {
    await RecordingPage.manualUpdate();
  });
  it.skip("update and HayNoki update verification", async () => {
    await RecordingPage.hayNoki();
  });

  it("Finalizing the encounter", async () => {
    await RecordingPage.finalizeEncounter();
  });
});

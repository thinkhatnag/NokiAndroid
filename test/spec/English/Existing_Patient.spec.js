import HomePage from "../../pageObjectModel/home.page.js";
import SearchPatientPage from "../../pageObjectModel/searchPatitent.page.js";
import RecordingPage from "../../pageObjectModel/recording.page.js";
import LoginPage from "../../pageObjectModel/login.page.js";
import EncounterPage from "../../pageObjectModel/encounter.page.js";
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
describe("Existing patient E2E flow in English", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI Android Automation");
    allureReporter.addOwner("Mobile Team");
    allureReporter.addParentSuite("English");
  });
  it("offline/online app kill verification with play pause", async () => {
    await LoginPage.restartApp();
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
    await RecordingPage.startConversation();
    await AudioManeger.playAudio("english");
    await driver.pause(5000);
    // offline mode
    await network();
    for (let i = 0; i < 3; i++) {
      await verifyAndClick(RecordingPage.pauseBtn);
      await driver.pause(3000);
      await verifyAndClick(RecordingPage.playBtn);
      await driver.pause(3000);
    }
    await driver.pause(5000);
    await AudioManeger.pauseAudio();
    await terminateApp();
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.ContinueBtn)
    await AudioManeger.resumeAudio();
    await network(); // online mode
    await driver.pause(30000);
    for (let i = 0; i < 3; i++) {
      await verifyAndClick(RecordingPage.pauseBtn);
      await driver.pause(3000);
      await verifyAndClick(RecordingPage.playBtn);
      await driver.pause(3000);
    }
    await driver.pause(5000);
    await network(); // offline mode
    await driver.pause(5000);
    await AudioManeger.stopAudio();
    await terminateApp();
    await driver.pause(5000);
    await network();  //online mode
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.discardBtn);
    await driver.pause(5000);
    await LoginPage.restartApp();
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
    await RecordingPage.startConversation();
    await driver.pause(5000);
    await network()
    await terminateApp()
    await driver.pause(5000);
    await network();
    await driver.pause(5000)
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(5000)
    await verifyAndClick(RecordingPage.discardBtn)
    await driver.pause(5000)
    await HomePage.home.click();
    await validate(HomePage.startNewEncounterButton);
  });
    it("Search patient", async () => {
    await LoginPage.restartApp();
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
  });
  it("Automatic sync verification when offline to online", async () => {
    await RecordingPage.startConversation();
    await driver.pause(1000);
    await network();
    await verifyAndClick(RecordingPage.Ok);     // POP up Issue fix
    await driver.pause(5000);
    await network();
    await driver.pause(5000);
    await RecordingPage.startConversationBtn.click()
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
    await verifyAndClick(RecordingPage.pause); // POP up Issue fix
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
    await waitForElement(RecordingPage.PrevEncounterRefNo);
    await verifyAndClick(RecordingPage.PrevEncounterRefNo);
  });
  it("SoapNote and Transcript verification for the First conversation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  });
  it("Add Conversation for Existing Encounter ", async () => {
    await waitForElement(RecordingPage.addConversation);
    await verifyAndClick(RecordingPage.addConversation);
    await verifyAndClick(RecordingPage.yes);
    await AudioManeger.playAudio("english");
    await driver.pause(60000);
    await network();
    await driver.pause(5000);
    await AudioManeger.stopAudio();
    await terminateApp(); // kill app in offline mode
    await driver.pause(5000);
    await network(); // online mode
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID); // reope app with online mode
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.endEncounter); // end encounter after reopening the app
    await verifyAndClick(RecordingPage.PrevEncounterRefYes);
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
    await AudioManeger.playAudio("english");
    await driver.pause(5000);
    await network();  //Offline mode
    await driver.pause(100000);
    await AudioManeger.stopAudio();
    await verifyAndClick(RecordingPage.pauseBtn);
    await driver.pause(2000);
    await terminateApp()
    await driver.pause(5000);
    await network();   //online mode
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await verifyAndClick(RecordingPage.endEncounter)
    await verifyAndClick(RecordingPage.PrevEncounterRefYes)
    await driver.pause(3000);
    await network();  //Offline mode
    await verify(RecordingPage.somethingWentWrongToast); //verifying somthing went wrong popup
    await terminateApp(); 
    await driver.pause(5000);
    await network();            //online mode
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(2000)
    await verifyAndClick(RecordingPage.endEncounter)
    await network()          //offline mode  
    await verify(RecordingPage.somethingWentWrongToast); //verifying somthing went wrong popup
    await verifyAndClick(RecordingPage.Ok)
    await terminateApp()
    await network();      //online moded
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.endEncounter)
    await validate(RecordingPage.PrevEncounterRef);
    await verifyAndClick(RecordingPage.PrevEncounterRefYes);
  });
  it("SOAP NOTE  & Transcript generation and verify for the draft Conversation", async () => {
    await RecordingPage.SOAPNote_Verification();
    await RecordingPage.Transcript_Verification();
  })
  it("ICD & CPT Codes generation and regeneration", async () => {
    await QuickActions.Icd_Cpt();
  });

  it("Care Plan generation and regeneration ", async () => {
    await QuickActions.care_plan();
  });

  it('"Feed back on the doctor"genaration and regenaration', async () => {
    await QuickActions.feed_Back();
  });
  it("Referall leter genaration and regenaration", async () => {
    await QuickActions.referal_Letter();
  });
  it("Regenerate SOAP Note ", async () => {
    await QuickActions.soap_note();
  });
  it("Patient Info Update ", async () => {
    await RecordingPage.UpdatePatientInfo();
  });
  it("Manual update ", async () => {
    await RecordingPage.manualUpdate();
  });
  it("HayNoki update ", async () => {
    await RecordingPage.hayNoki();
  });
  it("Finalizing the encounter", async () => {
    await RecordingPage.finalizeEncounter();
  });
});

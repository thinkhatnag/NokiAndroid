
import {
  verify,
  verifyAndClick,
  waitForElement,
  Network,
  network
} from '../../../helper/helper.js';
import allureReporter from '@wdio/allure-reporter';
import AudioManeger from '../../pageObjectModel/audioManeger.js';
import SpanishLanguage from '../../pageObjectModel/spanishLanguage.js';
describe('Existing patient E2E flow -Spnish', () => {
  beforeEach(() => {
    allureReporter.addEpic('NOKI IOS Automation');
    allureReporter.addFeature('Existing patient E2E -Es');
    allureReporter.addOwner('Mobile Team');

});

  it('Creating a new Patient', async() => {
    await waitForElement(SpanishLanguage.startNewEncounter);
    await SpanishLanguage.startNewEncounter.click();
    await verifyAndClick(SpanishLanguage.addPatient);
    await SpanishLanguage.addPatitentWrn();
    await SpanishLanguage.createNewPatient();
  });
it("automatic sync verification when offline to online", async () => {
    await SpanishLanguage.startConversation();
    await AudioManeger.playAudio("spanish");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await SpanishLanguage.recordAudioforOfflineModeMT();
    await driver.pause(5000);
    await verifyAndClick(SpanishLanguage.pauseBtn);
    await AudioManeger.pauseAudio();
    console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
    await driver.pause(10000);
    await verifyAndClick(SpanishLanguage.PlayBtn);
  });
  it("Offline mode app kill state verification", async () => {
    await AudioManeger.resumeAudio();
    console.log("Audio resumed:", AudioManeger.currentAudioFile);
    await driver.pause(30000);
    await AudioManeger.pauseAudio();
    await network();
    await driver.pause(5000);
    await terminateApp();
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_Id);
    await waitForElement(SpanishLanguage.continueBtn);
    await validate(SpanishLanguage.continueBtn);
    await verifyAndClick(SpanishLanguage.continueBtn);
    console.log(
      "Here app got restarted the app while it is in the recording screen and we verified with the app still in that page"
    );
  });
  it("App offline kill and reopen the app in online mode verifiction", async () => {
    await AudioManeger.resumeAudio();
    await driver.pause(30000);
    await AudioManeger.pauseAudio();
    await driver.pause(5000);
    await terminateApp();
    await Network(); //online
    await driver.activateApp(process.env.BUNDLE_ID);
    // await waitForElement(RecordingPage.ContinueBtn); //validating the offline kill and reopen the app in online mode    
    // await validate(RecordingPage.endEncounter);
    await verifyAndClick(RecordingPage.ContinueBtn);
    await verify(RecordingPage.pauseBtn);
  });
  it("Offline mode stop Option Verification", async () => {
    await Network();
    await driver.pause(30000);
    await AudioManeger.stopAudio();
    await verifyAndClick(SpanishLanguage.stopBtn);
    console.log(
      "here after app got closed while recording we magaing automatically again resumed the audio"
    );
    await Network(); // device come to online
    await driver.pause(5000);
    console.log(
      "here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
  });
  it("SOAP NOTE  & Transcript Verification for the First conversation", async () => {
    await SpanishLanguage.SOAPNOTE_Verification();
    await SpanishLanguage.Transcript_Verification();
  });
 it("Add Conversation for Existing Encounter ", async () => {
      await waitForElement(SpanishLanguage.addConversation);
      await verifyAndClick(SpanishLanguage.addConversation);
      await verifyAndClick(SpanishLanguage.AddConversationConfirmationYes);
      await AudioManeger.playAudio("english");
      await driver.pause(60000);
      await network()
      await driver.pause(5000)
      await AudioManeger.stopAudio()
      await driver.terminateApp(process.env.BUNDLE_ID);
      await driver.pause(5000);
      await network();
      await driver.pause(5000);
      await driver.activateApp(process.env.BUNDLE_ID);
      await driver.pause(5000)
      await verifyAndClick(SpanishLanguage.endEncunter)
    });
  it('SOAP NOTE  & Transcript Verification for the second conversation', async() => {
    await SpanishLanguage.SOAPNOTE_Verification()
    await SpanishLanguage.Transcript_Verification()

  });
  it('Thiord Conversation {makingh the converastion as draft and completing the draft Transcript }', async() => {
    await SpanishLanguage.third_Conversation_For_New_Encounter()
  });
  it('SOAP NOTE  & Transcript Verification for the Third Conversation', async() => {
    await SpanishLanguage.SOAPNOTE_Verification()
    await SpanishLanguage.Transcript_Verification()
  });

  it('ICD & CPT Codes Generation and Regeneration', async() => {
    await SpanishLanguage.Icd_Cpt()
  });

  it('Care Plan generation and Regeneration ', async() => {
    await SpanishLanguage.care_plan()
  });

  it('Feed back on the doctor genaration and Regenaration ', async() => {
    await SpanishLanguage.feed_Back()
  });
  it('Referall leter genaration and Regenaration', async() => {
    await SpanishLanguage.referal_Letter()
  });
  it('Regenerate SOAP Note and update Patient-info verification', async() => {
    await SpanishLanguage.Soap_Note_Regeneration()
    await SpanishLanguage.UpdatePatientInfo()
  });
  it('manual Update verification', async() => {
    await SpanishLanguage.manualUpdate()
  });
  it('HayNoki update verification', async() => {
    await SpanishLanguage.hayNoki()
  });

  it('Finalizing the encounter', async() => {
    await SpanishLanguage.finalize_Encounter()
  });

})
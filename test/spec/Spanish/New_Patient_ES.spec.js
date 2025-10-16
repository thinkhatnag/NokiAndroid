
import {
  verify,
  verifyAndClick,
  waitForElement,
  Network
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

  it('Intiating the conversation for a Newly created Patient', async() => {
    await waitForElement(SpanishLanguage.startNewEncounter);
    await SpanishLanguage.startNewEncounter.click();
    await verifyAndClick(SpanishLanguage.addPatient);
    await SpanishLanguage.addPatitentWrn();
    await SpanishLanguage.createNewPatient();
  });
  it('Recording the conversation for multiple times offline ', async() => {
    await SpanishLanguage.startConversation();
    await AudioManeger.playAudio("spanish");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await SpanishLanguage.recordAudioforOfflineModeMT();
    await driver.pause(5000);
    // await verifyAndClick(SpanishLanguage.pauseBtn);
    await AudioManeger.pauseAudio();
    console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
    await driver.pause(10000);
    // await SpanishLanguage.PlayBtn.click();
    await AudioManeger.resumeAudio();  //correct
    console.log("Audio resumed:", AudioManeger.currentAudioFile);
    await driver.pause(30000); //again playing audio for 1 min in online
    await AudioManeger.pauseAudio(); 
    await driver.pause(2000);
  });
  it('Offline mode app kill state verification', async() => {
    await Network()
    await driver.pause(5000);
    await AudioManeger.pauseAudio();
    await driver.terminateApp(process.env.BUNDLE_ID); // step verifying the app screen to be in recording screen only even in offline
    await driver.pause(5000);
    await driver.activateApp(process.env.BUNDLE_ID);
    await verifyAndClick(SpanishLanguage.ok)
    await waitForElement(SpanishLanguage.continueBtn);
    await verifyAndClick(SpanishLanguage.continueBtn);
    console.log(
      "Here app got restarted the app while it is in the recording screen and we verified with the app still in that page"
    );
  })
  it('Offline mode app pause/Stop buttons verification', async() => {

    await AudioManeger.resumeAudio();
    await driver.pause(30000);
    await AudioManeger.stopAudio();
    await verifyAndClick(SpanishLanguage.stopBtn);
    console.log(
      "here after app got closed while recording we magaing automatically again resumed the audio"
    );
    await driver.pause(5000);
    await verify(SpanishLanguage.offlineConversationSaved);
    await Network()
    await driver.pause(5000);
    console.log(
      "here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
  });
  it('SOAP NOTE  & Transcript Verification for the First conversation', async() => {
    await SpanishLanguage.SOAPNOTE_Verification()
    await SpanishLanguage.Transcript_Verification()
  });
  it('Second Conversation Intiation ', async() => {
    await SpanishLanguage.second_Conversation_For_New_Encounter()
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
import HomePage from '../../pageObjectModel/home.page.js';
import PatientsPage from '../../pageObjectModel/patient.page.js';
import EncounterPage from '../../pageObjectModel/encounter.page.js';
import SearchPatientPage from '../../pageObjectModel/searchPatitent.page.js';
import RecordingPage from '../../pageObjectModel/recording.page.js';
 import AddPatitentPage from '../../pageObjectModel/addPatient.page.js';
import LoginPage from '../../pageObjectModel/login.page.js';
import {
  verify,
  verifyAndClick,
  waitForElement,
  aeroplaneModeOff,
  aeroplaneModeOn
} from '../../../helper/helper.js';
import allureReporter from '';
import AudioManeger from '../../pageObjectModel/audioManeger.js';
import QuickActions from '../../pageObjectModel/quickActions.page.js' ;
describe('Existing patient E2E flow -English ', () => {
  beforeEach(() => {
    allureReporter.addEpic('NOKI IOS Automation');
    allureReporter.addFeature('Existing patient E2E -En');
    allureReporter.addOwner('Mobile Team');

});

  it('Intiating the conversation for a Newly created Patient', async() => {
    await waitForElement(HomePage.startNewEncounterButton);
    await HomePage.startNewEncounterButton.click();
    await verifyAndClick(SearchPatientPage.addPatient);
    await AddPatitentPage.addPatientWrn();
    await AddPatitentPage.createNewPatient();
  });
  it('Recording the conversation for multiple times offline ', async() => {
    await RecordingPage.startConversation();
    await AudioManeger.playAudio("english");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await RecordingPage.recordAudioforOfflineModeMT();
    await driver.pause(10000);
    await verifyAndClick(RecordingPage.pauseBtn);
    await AudioManeger.pauseAudio();
    console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
    await driver.pause(20000);
    await RecordingPage.playBtn.click();
    await AudioManeger.resumeAudio();  //correct
    console.log("Audio resumed:", AudioManeger.currentAudioFile);
    await driver.pause(60000); //aagain playing audio for 1 min in online
    await AudioManeger.pauseAudio(); 
    await driver.pause(2000);

    await aeroplaneModeOn();

    await driver.pause(5000);
    await AudioManeger.pauseAudio();
   
    
  });
  it('Offline mode app kill state verification', async() => {
    await driver.terminateApp("com.thinkhat.nokiTest"); // step verifying the app screen to be in recording screen only even in offline
    await driver.pause(10000);
    await driver.activateApp("com.thinkhat.nokiTest");
    await verifyAndClick(RecordingPage.errorOk)
    await waitForElement(RecordingPage.ContinueBtn);
    await verifyAndClick(RecordingPage.ContinueBtn);
    console.log(
      "Here app got restarted the app while it is in the recording screen and we verified with the app still in that page"
    );
  })
  it('Offline mode app pause/Stop buttons verification', async() => {

    await AudioManeger.resumeAudio();
    await driver.pause(60000);
    await AudioManeger.stopAudio();
    await verifyAndClick(RecordingPage.stopBtn);
    console.log(
      "here after app got closed while recording we magaing automatically again resumed the audio"
    );
    await driver.pause(5000);
    await verify(RecordingPage.offlineConversationSaved);
    
    await driver
      .action("pointer")
      .move({ duration: 0, x: 355, y: 22 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 354, y: 720 })
      .up({ button: 0 })
      .perform();
    const airplaneModeBtn = await $("~com.apple.ControlCenter.Airplane");
    await (await airplaneModeBtn).click();

    await driver
      .action("pointer")
      .move({ duration: 0, x: 283, y: 790 })
      .down({ button: 0 })
      .pause(50)
      .up({ button: 0 })
      .perform();         // device come to online
    await driver.pause(5000);
    console.log(
      "here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
  });
  it('SOAP NOTE  & Transcript Verification for the First conversation', async() => {
    await RecordingPage.SOAPNote_Verification()
    await RecordingPage.Transcript_Verification()
  });
  it('Second Conversation Intiation ', async() => {
    await RecordingPage.second_Conversation_For_New_Patient()
  });
  it('SOAP NOTE  & Transcript Verification for the second conversation', async() => {
    await RecordingPage.SOAPNote_Verification()
    await RecordingPage.Transcript_Verification()

  });
  it('Thiord Conversation {makingh the converastion as draft and completing the draft Transcript }', async() => {
    await RecordingPage.third_Conversation_For_New_Patient()
  });
  it('SOAP NOTE  & Transcript Verification for the Third Conversation', async() => {
    await RecordingPage.SOAPNote_Verification()
    await RecordingPage.Transcript_Verification()
  });

  it('ICD & CPT Codes Generation and Regeneration', async() => {
    await QuickActions.Icd_Cpt()
  });

  it('Care Plan generation and Regeneration ', async() => {
    await QuickActions.care_plan()
  });

  it('Feed back on the doctor genaration and Regenaration ', async() => {
    await QuickActions.feed_back()
  });
  it('Referall leter genaration and Regenaration', async() => {
    await QuickActions.referalLetter()
  });
  it('Regenerate SOAP Note verification', async() => {
    await QuickActions.SOAPNote()
    await RecordingPage.UpdatePatientInfo()
  });
  it(' HayNoki update verification', async() => {
    await RecordingPage.manualUpdate()
  });
  it('update and HayNoki update verification', async() => {
    await RecordingPage.hayNoki()
  });

  it('Finalizing the encounter', async() => {
    await RecordingPage.finalize_Encounter()
  });

})
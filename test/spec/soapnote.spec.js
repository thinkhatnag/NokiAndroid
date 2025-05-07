import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import PatientsPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/patient.page.js';
import EncounterPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js';
import SettingsPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js';
import { verify, verifyAndClick, network, networkFailureVerification, waitForElement, nokiDashBoard  } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import SearchPatientPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/searchPatitent.page.js';
import RecordingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js';
import AddPatitentPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js';

describe(' all the the soap note generation process are verified here ', () => {
    it.only('Verify if encounter starts and SOAP note is generated for a new patient', async() => {
       await HomePage.startNewEncounterButton.click()
       await SearchPatientPage.addPatient.click()
       await AddPatitentPage.creatNewPatient()
       await verifyAndClick(RecordingPage.acknowledgeCheckBox)
       await verifyAndClick(RecordingPage.startConversationBtn)
       await RecordingPage.recordAudio()
       await RecordingPage.ctsConformation()
       await RecordingPage.finalizeEncounter()
       await LoginPage.restartApp();

    });
    it('Verify SOAP note generation for an existing patient', async() => {
        await driver.pause(5000)
        await SearchPatientPage.startNewConversation('Naga')
        await RecordingPage.startConversation()
        await RecordingPage.recordAudio()
        await RecordingPage.PrevEncounterRefYes.click()
        await RecordingPage.ctsConformation()
        await LoginPage.restartApp();

    });
    it('Verify SOAP note generation for a draft transcript', async() => {
        await HomePage.encounter.click()
        await EncounterPage.noteSearch('Draft Transcript')
        await driver.pause(3000)
        await verifyAndClick(EncounterPage.draft)
        await RecordingPage.resumeRecording.click()
        await RecordingPage.recordAudioForDraft()
        await LoginPage.restartApp();

    });
    it('Verify SOAP note generation after app switch after clicking stop button instantly', async() => {
        await SearchPatientPage.startNewConversation('Chandu')
        await RecordingPage.startConversation()
        await RecordingPage.recordAudio()
        await RecordingPage.PrevEncounterRefNo.click()
        await driver.pause(1000)
        await RecordingPage.Audio()
        await verify(RecordingPage.SoapNoteBtn)
        await LoginPage.restartApp();

    });

    it('Verify SOAP note generation after app switch after clicking on stop Button and wait until the genrating the soap note button is displayed', async() => {
        await SearchPatientPage.startNewConversation('Chandu')
                await RecordingPage.startConversation()

        await RecordingPage.recordAudio()
        await RecordingPage.PrevEncounterRefNo.click()
        await driver.pause(5000)
        await RecordingPage.Audio()
        await verify(RecordingPage.SoapNoteBtn)
        await LoginPage.restartApp();

    });
    //sleep mde test cases
    it('Verify SOAP note generation after sleep mode,instantly after clicking on stop Button and reopen the app to verify soap note button is displayed', async() => {
        await SearchPatientPage.startNewConversation('Chandu')
        await RecordingPage.startConversation()
        await RecordingPage.recordAudio()
        await RecordingPage.PrevEncounterRefNo.click()
        await driver.pause(1000)
        await driver.executeScript("mobile: lock", [{"seconds":60}]);
        await RecordingPage.sleepModeConformation()
        await LoginPage.restartApp();

    });
    it('Verify SOAP note generation after sleep mode for 1 minute after clicking on stop Button and wait until the genrating the soap note button is displayed', async() => {
        await SearchPatientPage.startNewConversation('Chandu')
        await RecordingPage.startConversation()
        await RecordingPage.recordAudio()
        await RecordingPage.PrevEncounterRefNo.click()
        await driver.pause(10000)
        await driver.executeScript("mobile: lock", [{"seconds":60}]);
        await RecordingPage.sleepModeConformation()
        await LoginPage.restartApp();

    });
    // Network failure test case
    it('verify the transcript is saved as draft or not after clicking stop Button ', async() => {
        await SearchPatientPage.startNewConversation('Chandu')
        await RecordingPage.startConversation()
        await RecordingPage.Audio()
        await RecordingPage.stopBtn.click()
        await networkFailureVerification()
        try{
            await waitForElement(RecordingPage.SoapNoteBtn)
            console.log("Play button verification successful.");
        }catch(error){
            console.error('Soap note is not generated properllay', error)
        } 
    });
    it('verify the cdss visibility while recording ', async() => {
        await HomePage.settings.click()
        await SettingsPage.generalSettings.click()
        await verify(SettingsPage.cdssEnabled)
        await verify(SettingsPage.diognosisJustificationEnabled)
        await HomePage.homeBtn.click()
        await SearchPatientPage.startNewConversation('Chandu')
        await RecordingPage.startConversation()
        await waitForElement(RecordingPage.SuggestedQuestions)
        await LoginPage.restartApp();
        await HomePage.settings.click()
        await SettingsPage.generalSettings.click()
        await verifyAndClick(SettingsPage.cdssEnabled)
        await verify(SettingsPage.cdssDisabled)
        await SettingsPage.generalSettingsDone.click()
        await HomePage.homeBtn.click()
        await SearchPatientPage.startNewConversation('Chanddu')
        await RecordingPage.startConversation()
        try {
            await verify(RecordingPage.cdssDisabled)
        } catch (error) {
            console.error("CDSS button is not worked properlly in the general setting screen    ////  cdss subscription i ove please re verify that ", error);
        }
        await verify(RecordingPage.cdssDisabled)
        await LoginPage.restartApp()
    });
  
  
    it('verify the transcript is saved as draft or not when app lost rhe data ', async() => {
        await SearchPatientPage.startNewConversation('Chandu')
        await RecordingPage.startConversation()
        await RecordingPage.Audio()
        await networkFailureVerification()
        try {
            await verify(RecordingPage.playBtn);
            console.log("Play button verification successful.");
        } catch (error) {
            console.error("Error verifying play button:", error);
        }
        await LoginPage.restartApp();
        await EncounterPage.draftVerification('chandu')
    });

});
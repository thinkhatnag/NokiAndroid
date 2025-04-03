import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import PatientsPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/patient.page.js';
import EncounterPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js';
import { verify, nokiDashBoard, verifyAndClick, performPointerAction  } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import SearchPatientPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/searchPatitent.page.js';
import RecordingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js';
import AddPatitentPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page';


describe('enconter elements functinalities and flows are verified here ', () => {
    it('Create a new patient from the encounter screen and check the flow up to recording {TC17}', async() => {
        await HomePage.encounter.click()
        await nokiDashBoard()
        await EncounterPage.startNewEncounter.click()
        await SearchPatientPage.addPatient.click()
        await driver.pause(5000)
        await AddPatitentPage.creatNewPatient()
        await verify(RecordingPage.startConversationBtn)
        await RecordingPage.back.click()
        await LoginPage.restartApp();
    })
    it('Search for a draft transcript and verify the flow {TC17-A}', async() => {
        await HomePage.encounter.click()
        await EncounterPage.noteSearch('Draft Transcript')
        await verify(EncounterPage.draft)
        await EncounterPage.draft.click()
        await verify(RecordingPage.resumeRecording)
        await RecordingPage.back.click()
        await verify(EncounterPage.searchNoteBTN)
        await LoginPage.restartApp();
        
    })
    it.only('Create a patient, start recording for the first encounter, save as draft, delete the encounter, and verify {TC18}', async() => {
        await HomePage.encounter.click()    
        await nokiDashBoard()
        await EncounterPage.startNewEncounter.click()
        await SearchPatientPage.addPatient.click()
        const patientName = await AddPatitentPage.creatNewPatient()
        await verifyAndClick(RecordingPage.startConversationBtn)
        await verifyAndClick(RecordingPage.acknowledgeAndContinueBtn)
        await driver.pause(10000)
        await RecordingPage.recordingPageBack.click()
        await RecordingPage.ContinueBtn.click()
        await RecordingPage.recordingPageBack.click()
        await verify(RecordingPage.discardBtn)
        await RecordingPage.saveAsDraftBtn.click()
        await driver.pause(5000)
        await HomePage.encounter.click()
        await EncounterPage.noteSearch('Draft Transcript')
        await performPointerAction(driver, 864, 680, 430, 680)
        await verifyAndClick(EncounterPage.deleteCancel)
        await performPointerAction(driver, 864, 680, 430, 680)
        await verifyAndClick(EncounterPage.deleteConformation)
        await EncounterPage.searchNoteBTN.click()
        await EncounterPage.searchNoteTextFireld.setValue(patientName)
        await verify(EncounterPage.noEncounterFound)
        await LoginPage.restartApp()
    })
  

})
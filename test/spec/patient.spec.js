import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import PatientsPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/patient.page.js';
import EncounterPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js';
import SettingsPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js';
import { nokiDashBoard, verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import SearchPatientPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/searchPatitent.page.js';
import RecordingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js';
import AddPatitentPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js'


describe('Patitent screen  elements functinalities and flows are verified here ', () => {
    it('Verify all patient screen functionalities {TC15}', async() => {
        await verifyAndClick(HomePage.patients);
        await PatientsPage.Search('badri');
        await verify(PatientsPage.noPatitentFound)
        await PatientsPage.clear.click()
        await PatientsPage.cancel.click()
        await driver.pause(3000)
        await nokiDashBoard()       
        await PatientsPage.addPatient.click()
        await AddPatitentPage.addPatitentWrn()
        await AddPatitentPage.cancel.click()
        await LoginPage.restartApp();
        
    })
    it('Verify patient screen and encounter flow {TC16}', async() => {
        await HomePage.patients.click()
        await PatientsPage.patientSearchAndContinue('chandu')
        await driver.pause(3000)
        await nokiDashBoard()     
        await PatientsPage.startNewEncounter.click()
        await verify(RecordingPage.startConversationBtn)
        await RecordingPage.back.click()
        await LoginPage.restartApp();

    })
    
})
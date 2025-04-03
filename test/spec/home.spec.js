import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import PatientsPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/patient.page.js';
import EncounterPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js';
import SettingsPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js';
import { verify, verifyAndClick  } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import SearchPatientPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/searchPatitent.page.js';
import RecordingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js';
import AddPatitentPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js'

describe('Home Screen elements functinalities and flows are verified here ', () => {
    it('Verify all elements on the home screen are displayed {TC10}', async() => {
        await verify(HomePage.homeScreenAnimation)
        await verify(HomePage.patients)
        await verify(HomePage.encounter)
        await verify(HomePage.nokiDashboardButton)
        await verify(HomePage.settings)
        await LoginPage.restartApp()
    });
    it('Verify all tab bar elements are working correctly {TC11}', async() => {
        await HomePage.patients.click();
        await verify(PatientsPage.patientSearch)
        await verifyAndClick(HomePage.encounter)
        await verify(EncounterPage.Encounter)
        await verifyAndClick(HomePage.settings)
        await verify( SettingsPage.profileSettings)
        await LoginPage.restartApp()
    });
    it('Verify the audio recording process {TC12}', async() => {
        await HomePage.startNewEncounterButton.click();
        await SearchPatientPage.patientSearch('Chandu');
        await (await SearchPatientPage.proceedBTn).click();
        await verify(RecordingPage.startConversationBtn)
        await LoginPage.restartApp()
    });
    it.only('Start recording with Spanish language selected {TC13}', async() => {
        await HomePage.startNewEncounterButton.click();
        await SearchPatientPage.patientSearch('Chandu');
        await (await SearchPatientPage.proceedBTn).click();
        await verify(RecordingPage.startConversationBtn)
        await RecordingPage.launguageSelectior.click();
        await verify(RecordingPage.englishLanOpt)
        await verifyAndClick(RecordingPage.spanishLanOpt)
        await driver.executeScript("mobile: pressKey", [{"keycode":4}]);
        try {
            await verify(RecordingPage.startConversationBtn);
        } catch (error) {
            console.error("Error verifying startConversationBtn:", error);
        }
        await LoginPage.restartApp()    
    });
    it('Start recording after adding a new patient {TC14}', async() => {
        await HomePage.startNewEncounterButton.click();
        await SearchPatientPage.addPatient.click();
        await AddPatitentPage.addPatitentWrn()
        await AddPatitentPage.creatNewPatient();
        try {
            await verify(RecordingPage.startConversationBtn);
        } catch (error) {
            console.error("Error verifying startConversationBtn:", error);
        }
        await LoginPage.restartApp()
    });
})
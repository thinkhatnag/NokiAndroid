import EncounterPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js";
import HomePage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js";
import LoginPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js";
import SearchPatientPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/searchPatitent.page.js";
import SettingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js"
import { back, verify,  verifyAndClick, waitForElement,  } from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";
import PatientsPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/patient.page"
import AddPatientPage from "../pageObjectModel/addPatient.page.js";
import QuickActions from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/quickActions.page.js";

describe(' Noki Android ', () => {
    it('Login proccess', async() => {
        await LoginPage.enterEmail('Nag.Subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('Welcome@123')
        await LoginPage.clickLogin();
    })
    it('HOME Screen, patiens, notes and setting screen verfication', async() => {

      
        await waitForElement(HomePage.homeScreenAnimation)
        await HomePage.patients.click();
        await verify(PatientsPage.patientSearch)
        await verifyAndClick(HomePage.encounter)
        await verify(EncounterPage.Encounter)
        await verifyAndClick(HomePage.settings)
        await verifyAndClick(SettingPage.profileSettings)
        await SettingPage.SettingScreen()
        await HomePage.home.click()
    })
    it.only('intiatinting the conversation for an exicisting Patient', async() => {

        await HomePage.startNewEncounterButton.click();
        await SearchPatientPage.patientSearch('Naga');
        await (await SearchPatientPage.proceedBTn).click();
    })
    it.only('starting the conversation by acrknowledging ', async() => {

        await RecordingPage.launguageSelectior.click();
        await verify(RecordingPage.englishLanOpt)
        await verifyAndClick(RecordingPage.spanishLanOpt)
        await verifyAndClick(RecordingPage.englishLanOpt)
        await back()
        await RecordingPage.startConversation()
    })
    it.only('recording the audio for an existing pation with previous add on data, also verifying CTS, Multiple Conversation, Quick Actions, Finalizing Enconter ', async() => {

        await RecordingPage.recordAudioAndContinueForPrevEncounter()
        await RecordingPage.finalizeEncounter()
        await HomePage.home.click()
    })
    it('crating a nePattion and check the whole flow of CTS, Multiple Conversation, QuickActions, Finalizing Encounter, ', async() => {

        await HomePage.startNewEncounterButton.click()
        await SearchPatientPage.addPatient.click()
        await AddPatientPage.addPatitentWrn()
        await AddPatientPage.creatNewPatient()
        await RecordingPage.startConversation()
        await RecordingPage.recordAudio()
        await RecordingPage.ctsConformation()
        await RecordingPage.finalizeEncounter()
        await HomePage.home.click()
    })
    it('Loging Out scenario', async() => {

        await HomePage.settings.click()
        await SettingPage.logoutBtn.click()
        await SettingPage.logoutConformationBtn.click()

        console.log('Logout successfully');

        await verify(LoginPage.emailField)

        console.log('Logout successfully');


        console.log('%c End to End Testing completed successfully hip hip Hooray !!! hip hip Hooray !!! hip hip Hooray !!! hip hip Hooray !!! You are allowe to give the Build to Manual QA team for Testing love you', 'color:blue; font-size: 30px; font-weight: bold;');
    });
})
// describe(' Noki Android ', () => {
//         it('Verify Settings screen elements and functinalities', async() => {
//             await HomePage.settings.click();
//             await verifyAndClick(SettingsPage.profileSettings)
//             await SettingsPage.profileSettingScreen()
//             await verifyAndClick(SettingsPage.profileback)
//             await verifyAndClick(SettingsPage.support)
//             await verify(SettingsPage.consultWithUs)
//             await verify(SettingsPage.WriteToUSNow)
//             await verifyAndClick(SettingsPage.supportback)
//             await verifyAndClick(SettingsPage.launguage)
//             await verifyAndClick(SettingsPage.spanish)
//             await verifyAndClick(SettingsPage.Idioma)
//             await verifyAndClick(SettingsPage.Inglish)
//             await verifyAndClick(SettingsPage.generalSettings)
//             await verifyAndClick(SettingsPage.diognosisJustificationEnabled)
//             await SettingsPage.cancel.click()
//             await SettingsPage.generalSettings.click()
//             await SettingsPage.cdss.click()
//             await SettingsPage.diognosisJustificationEnabled.click()
//             await SettingsPage.Done.click()        
//             await verifyAndClick(SettingsPage.logoutBtn)
//             await verifyAndClick(SettingsPage.logoutcancelationBtn)
//             await SettingsPage.logoutBtn.click();
//             await verifyAndClick(SettingsPage.logoutConformationBtn)
//             await verify(LoginPage.emailField)
//             await LoginPage.restartApp()
//         });
//     });
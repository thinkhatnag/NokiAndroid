import EncounterPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js";
import HomePage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js";
import LoginPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js";
import AudioManeger from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/audioManeger.js";
import SearchPatientPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/searchPatitent.page.js";
import SettingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js";
import {
  back,
  verify,
  verifyAndClick, 
  waitForElement,
  
} from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";
import PatientsPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/patient.page.js";
import AddPatientPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js";
//import QuickActions from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/test/pageObjectModel/quickActions.page.js";

describe(" Noki Android ", () => {

  // it("HOME Screen, patiens, notes and setting screen verfication", async () => {
  //   await verify(HomePage.homeScreenAnimation);
  //   await HomePage.patients.click();
  //   await verify(PatientsPage.patientSearch);
  //   await verifyAndClick(HomePage.encounter);
  //   await verify(EncounterPage.Encounter);
  //   await verifyAndClick(HomePage.settings);

  // })
  //   it("setting screen proffile Edit verification", async () => {

  //   await verifyAndClick(SettingPage.profileSettings);
  //   await SettingPage.SettingScreen();
  //   await HomePage.home.click();
  // });
  // // it("Intiatinting the conversation for an exicisting Patient and confirming the cts generation and finalizing Encounter.", async () => {
  // //   await HomePage.startNewEncounterButton.click();
  // //   await SearchPatientPage.patientSearch("ofline");
  // //   await (await SearchPatientPage.proceedBTn).click();
  // //   await RecordingPage.launguageSelectior.click();
  // //   await verify(RecordingPage.englishLanOpt);
  // //   await verifyAndClick(RecordingPage.spanishLanOpt);
  // //   await verifyAndClick(RecordingPage.englishLanOpt);
  // //   await back();
  // //   await RecordingPage.startConversation();
  // //   // await RecordingPage.recordAudioforOfflineMode();
  // //   await driver.pause(120000);
  // //   await waitForElement(RecordingPage.SoapNoteBtn);
  // //   await verifyAndClick(RecordingPage.Transcript);
  // //   await RecordingPage.ctsConformation()
  // //   await RecordingPage.finaliseEncounter()
  // //   // const recordText = await RecordingPage.dataScaning(RecordingPage.cleanedTranscriptScroll);
  // //   // await RecordingPage.audioManager.TextComparison(recordText);

  // // });
  // it("existing patient with previous add on data, also verifying CTS, Multiple Conversation, Quick Actions, Finalizing Enconter ", async () => {
  //   await LoginPage.restartApp()    
  //   await HomePage.startNewEncounterButton.click();
  //   await SearchPatientPage.patientSearch("Naga");
  //   await SearchPatientPage.proceedBtn.click();
  //   await RecordingPage.startConversation()
  //   await RecordingPage.recordAudioAndContinueForPrevEncounter();
  //   await RecordingPage.finalizeEncounter();
  // });
  // it("crating a new patient and check the whole flow of CTS, Multiple Conversation, QuickActions, Finalizing Encounter, ", async () => {
  //   await LoginPage.restartApp()
  //   await HomePage.startNewEncounterButton.click();
  //   await SearchPatientPage.addPatient.click();
  //   await AddPatientPage.addPatitentWrn();
  //   await AddPatientPage.creatNewPatient();
  //   await RecordingPage.startConversation();
  //   await RecordingPage.recordAudio();
  //   await RecordingPage.ctsConformation();
  //   await RecordingPage.finalizeEncounterForNewPatient();
  // });

  it("Loging Out scenariofrom the app", async () => {
    // await RecordingPage.dataScaning(RecordingPage.cleanedTranscriptScroll);
    // await AudioManeger.TextComparison();
    await RecordingPage.referalCopyBtn.click();
    await RecordingPage.mailBtn.click();
    await RecordingPage.printBtn.click();
    await driver.pause(5000);
    await back();

  });
});

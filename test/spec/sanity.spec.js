import HomePage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js";
import PatientsPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/patient.page.js";
import EncounterPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js";
import SearchPatientPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/searchPatitent.page.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js";
// import AddPatitentPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js';
import LoginPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js";
import AddPatientPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js"
import {
  verify,
  verifyAndClick,
  waitForElement,
} from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";
import SettingsPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js";
import AddPatitentPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/addPatient.page.js";
import QuickActions from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/quickActions.page.js";
import SpanishLanguage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/spanishLanguage.js";
describe(" Noki Android ", () => {
  it("Noki Login Prod", async () => {
    // await LoginPage.enterEmail("bheema.badri@thinkhat.ai");
    // await LoginPage.enterPassword("Abcd1234$");
    await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai")
    await LoginPage.enterPassword("Welcome@123")
    await LoginPage.selectMultiTenant();
    await LoginPage.clickLogin();
  });
  it("HOME Screen, patiens, notes and setting screen verfication", async () => {
    await verify(HomePage.homeScreenAnimation);
    await HomePage.patients.click();
    await verify(PatientsPage.patientSearch);
    await verifyAndClick(HomePage.encounter);
    await verify(EncounterPage.Encounter);
    await verifyAndClick(HomePage.settings);
    await verifyAndClick(SettingsPage.profileSettings);
    await SettingsPage.SettingScreen();
    await HomePage.home.click();
  });
  // it("Intiatinting the conversation for an exicisting Patient and confirming the cts generation and finalizing Encounter.", async () => {
  //   await HomePage.startNewEncounterButton.click();
  //   await SearchPatientPage.patientSearch("ofline");
  //   await (await SearchPatientPage.proceedBTn).click();
  //   await RecordingPage.launguageSelectior.click();
  //   await verify(RecordingPage.englishLanOpt);
  //   await verifyAndClick(RecordingPage.spanishLanOpt);
  //   await verifyAndClick(RecordingPage.englishLanOpt);
  //   await back();
  //   await RecordingPage.startConversation();
  //   // await RecordingPage.recordAudioforOfflineMode();
  //   await driver.pause(120000);
  //   await waitForElement(RecordingPage.SoapNoteBtn);
  //   await verifyAndClick(RecordingPage.Transcript);
  //   await RecordingPage.ctsConformation()
  //   await RecordingPage.finaliseEncounter()
  //   // const recordText = await RecordingPage.dataScaning(RecordingPage.cleanedTranscriptScroll);
  //   // await RecordingPage.audioManager.TextComparison(recordText);

  // });
  it("existing patient with previous add on data, also verifying CTS, Multiple Conversation, Quick Actions, Finalizing Enconter ", async () => {
    await LoginPage.restartApp()    
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.patientSearch("Naga");
    await SearchPatientPage.proceedBtn.click();
    await RecordingPage.startConversation()
    await RecordingPage.recordAudioForExictingPatient();
    await RecordingPage.ctsConformation()
    await RecordingPage.multipleConversationForExistingPatient()
    await QuickActions.QuickActionsFlow()
    await RecordingPage.finalizeEncounter();
  });
  it("crating a new patient and check the whole flow of CTS, Multiple Conversation, QuickActions, Finalizing Encounter, ", async () => {
    await LoginPage.restartApp()
    await HomePage.startNewEncounterButton.click();
    await SearchPatientPage.addPatient.click();
    await AddPatitentPage.addPatitentWrn();
    await AddPatientPage.creatNewPatient();
    await RecordingPage.startConversation();
    await RecordingPage.recordAudio();
    await RecordingPage.ctsConformation()
    await RecordingPage.multipleConversation()
    await QuickActions.QuickActionsFlow()
    await RecordingPage.finalizeEncounter();
  });

  it("Loging Out scenariofrom the app", async () => {
    await LoginPage.restartApp()
    await HomePage.settings.click();
    await SettingPage.logoutBtn.click();
    await SettingPage.logoutConformationBtn.click();
    console.log("Logout successfully");
    await verify(LoginPage.emailField);
    console.log("Logout successfully");
  });
});


it.only("Streamlined flow for the verification of app switching to spanish launguage and creating a new patient ", async () => {
  await LoginPage.restartApp();
  await verifyAndClick(HomePage.settings);
  await verifyAndClick(SettingsPage.launguage);
  await verifyAndClick(SettingsPage.spanish);
  await verifyAndClick(SettingsPage.home);
  await SpanishLanguage.startNewEncounter.click();
  await SpanishLanguage.addPatient.click();
  await SpanishLanguage.createNewPatient();
});

it("Streamlined flow for verifing the conversation recording with a proper spanish audio", async () => {
  await SpanishLanguage.recordAudio();
});

it("Streamlined navigation and flow to CDSS - Transcript - SOAP Note verification whille applaunguage is in spanish", async () => {
  await SpanishLanguage.ctsConformation();
});

it("Streamlined flow for running multiple conversation flow andf also creating a draft trancription and verifying of draft trancript completion before finalizing the encounter while app launguage is in spanish", async () => {
  await SpanishLanguage.multipleConversation();
});

it("Streamlined flow for the Quick Actions for a new patient, flow for generating/regenerating templates and sending emails for every update app launguage is spanish", async () => {
  await SpanishLanguage.quickAction();
});

it("verifying the Finalizing of the encounter of a newly created patient, without any draft is there in that particular transcript, app launguage is in spanish", async () => {
  await SpanishLanguage.finalizeEncounter();
  await LoginPage.restartApp();
});

it("Streamlined flow for the verification of intiating the new encunter for already Exicting patient", async () => {
  await SpanishLanguage.startNewEncounter.click();
  await SpanishLanguage.patientSearch("Naga");
  await SpanishLanguage.startConversation();
});

it("Streamlined flow for the verification of recording conversation for already Existing Patient with proper spanish launguage rejecting the previous encounter reference", async () => {
  await SpanishLanguage.recordAudioAndContinueForPrevEncounter();
});

it("Streamlined navigation and flow to CDSS - Transcript - SOAP Note verification whille applaunguage is in spanish, for alreay Exicting patient", async () => {
  await SpanishLanguage.ctsConformation();
});

it("Streamlined flow for running multiple conversation flow andf also creating a draft trancription and verifying of draft trancript completion before finalizing the encounter while app launguage is in spanish, for already Exicting Patient", async () => {
  await SpanishLanguage.multipleConversationForExistingEnconter();
});

it("Streamlined flow for the Quick Actions for an Exicting patient, flow for generating/regenerating templates and sending emails for every update app launguage is spanish", async () => {
  await SpanishLanguage.quickAction();
});

it("verifying the Finalizing of the encounter of an Existing patient, without any draft is there in that particular transcript, app launguage is in spanish", async () => {
  await SpanishLanguage.finalizeEncounter();
  await LoginPage.restartApp();
});


// it("This test case with complete Offlinr Recording all 10 scenarios ", async () => {
//   await RecordingPage.startConversationBtn.click();
// await RecordingPage.recordAudioforOfflineMode();
//   await driver.pause(120000);
//   await waitForElement(RecordingPage.SoapNoteBtn);
//   await verifyAndClick(RecordingPage.Transcript);
//   const recordText = await RecordingPage.dataScanning(RecordingPage.cleanedTranscriptScroll);
//   await RecordingPage.audioManager.TextComparison(recordText);
// });

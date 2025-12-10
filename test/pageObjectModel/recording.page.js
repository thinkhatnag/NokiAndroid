import HomePage from "../../test/pageObjectModel/home.page.js";
import EncounterPage from "../../test/pageObjectModel/encounter.page.js";
import QuickActions from "../../test/pageObjectModel/quickActions.page.js";
import {
  hideKeyboard,
  verify,
  verifyAndClick,
  waitForElement,
  network,
  back,
  swipe,
  validate,
  playTTS,
} from "../../helper/helper.js";
import AudioManager from "../../test/pageObjectModel/audioManeger.js";
import util from "util";
import fs from "fs";
import path from "path";

//

class RecordingPage {
  get back() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'
    );
  }

  get newEnconterNoticeTxt() {
    return $(
      '//android.widget.TextView[@text="Please ensure you have verbal consent from the patient before using Noki\'s AI ambient scribe for clinical documentation View Consent"]'
    );
  }
  get newEnconterNoticeTxtCheckBox() {
    return $(
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView"
    );
  }
  get ContinueBtn() {
    return $("~CONTINUE");
  }
  get endEncounter() {
    return $("~END ENCOUNTER");
  }
  get saveAsDraftBtn() {
    return $("~SAVE AS DRAFT");
  }
  get discardBtn() {
    return $("~DISCARD");
  }
  get templateSoapNote() {
    return $('//android.view.ViewGroup[@content-desc="Template, SOAP Note"]');
  }
  get launguageSelectior() {
    return $("~Scribe Language, English (en-US)");
  }
  get launguageSelectText() {
    return $(
      '//android.view.ViewGroup[@content-desc="Start Conversation"]/android.view.ViewGroup/android.view.View'
    );
  }
  get doneBtn() {
    return $("");
  }
  get englishLanOpt() {
    return $("~English (en-US)");
  }
  get spanishLanOpt() {
    return $("~Español (es-PR)");
  }

  get acknowledgeCheckBox() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup'
    );
  }
  get acknowledgeCheckConText() {
    return $(
      '//android.widget.TextView[@text="Acknowledge that you have received verbal consent from the patient to use Noki\'s AI Ambient Scribe for clinical documentation. View Consent"]'
    );
  }
  get acknowledgeAndContinueBtn() {
    return $("~Acknowledge & Continue");
  }
  get acknowledgeAndContinueCancelBtn() {
    return $("~Cancel");
  }
  get acknowledgeAndContinueCloseBtn() {
    return $('//android.widget.TextView[@text="X"]');
  }
  get startConversationBtn() {
    return $("~Start Conversation");
  }

  get pauseBtn() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView'
    );
  }
  get patientCreatedOk() {
    return $("");
  }
  get resumeRecording() {
    return $('//android.widget.TextView[@text="Resume Conversation"]');
  }
  get cdssDisabled() {
    return $(
      '//android.widget.TextView[@text="CDSS is disabled. Please enable from Settings to view"]'
    );
  }
  get resumeRecordingConformationYes() {
    return $("~YES");
  }
  get resumeRecordingConformationText() {
    const date = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    return $(
      `//android.widget.TextView[@text="By resuming, the ongoing conversation will be recorded and the draft transcript will be updated under the encounter dated ${date}. Are you sure you want to proceed?"]`
    );
  }
  get resumeRecordingConformationNO() {
    return $("~NO");
  }

  get stopBtn() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView[2]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView'
    );
  }
  get() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView'
    );
  }
  get resumeBtn() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'
    );
  }
  get PrevEncounterRef() {
    return $(
      `//android.widget.TextView[@text="Would you like to use the previous encounter's SOAP note as context?"]`
    );
  }
  get PrevEncounterRefNo() {
    return $("~NO");
  }
  get PrevEncounterRefYes() {
    return $("~YES");
  }
  get SoapNoteBtn() {
    return $(
      '//android.view.View[@content-desc="SOAP Note"]/android.view.ViewGroup'
    );
  }
  get soapNoteTable() {
    return $("");
  }
  get patientInformation() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]"
    );
  }
  get subjective() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[11]"
    );
  }
  get objective() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]"
    );
  }
  get assessment() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[9]"
    );
  }
  get plan() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]"
    );
  }
  get additinalInformation() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]"
    );
  }

  get age() {
    return $('//android.widget.TextView[@text="Age"]');
  }
  get gender() {
    return $('//android.widget.TextView[@text="Gender"]');
  }
  get encounterDate() {
    return $('//android.widget.TextView[@text="Encounter Date"]');
  }

  get chiefComplain() {
    return $('//android.widget.TextView[@text="Chief Complaint (CC)"]');
  }
  get historyofprsentIllness() {
    return $(
      '//android.widget.TextView[@text="History of Present Illness (HPI)"]'
    );
  }
  get pastMedicalHistory() {
    return $('//android.widget.TextView[@text="Past Medical History"]');
  }
  get socialHistory() {
    return $("~Add Social History");
  }
  get familyHistory() {
    return $("~Add Family History");
  }
  get reviewofSystems() {
    return $('//android.widget.TextView[@text="Review of Systems (ROS)"]');
  }
  get vitalSigns() {
    return $('//android.widget.TextView[@text="Vital Signs"]');
  }
  get generallAppearance() {
    return $('//android.widget.TextView[@text="General Appearance"]');
  }
  get physicalExaminations() {
    return $('//android.widget.TextView[@text="Physical Examination"]');
  }
  get Diognosis() {
    return $('//android.widget.TextView[@text="Diagnoses"]');
  }
  get clinicalImpression() {
    return $('//android.widget.TextView[@text="Clinical Impression"]');
  }
  get treatmentPlan() {
    return $('//android.widget.TextView[@text="Treatment Plan"]');
  }
  get patitentEducation() {
    return $('//android.widget.TextView[@text="Patient Education"]');
  }
  get followUp() {
    return $('//android.widget.TextView[@text="Follow-Up"]');
  }
  get medications() {
    return $('//android.widget.TextView[@text="Follow-Up"]');
  }

  get allergies() {
    return $('//android.widget.TextView[@text="Allergies"]');
  }
  get immunization() {
    return $('//android.widget.TextView[@text="Immunizations"]');
  }
  get referal() {
    return $('//android.widget.TextView[@text="Referral"]');
  }
  get Transcript() {
    return $("~Transcript");
  }

  //multiple Conversations
  get addConversation() {
    return $('//android.widget.TextView[@text="Add Conversation"]');
  }
  get multipleConcversationConfertmation() {
    return $("~");
  }
  get multipleConcversationCancel() {
    return $("");
  }
  get resumeConversation() {
    return $('//android.widget.TextView[@text="Resume Conversation"]');
  }
  get offlineModeRTranscription() {
    return $(
      `//android.widget.TextView[@text="No transcript available in offline mode"]`
    );
  }
  get offlineConversationSaved() {
    return $(
      `//android.widget.TextView[@text="We've saved your conversation. It'll sync when you're connected again."]`
    );
  }
  get playBtn() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView`
    );
  }

  get somethingWentWrongToast() {
    return $(`//android.widget.TextView[@text="Something went wrong"]`);
  }

  //Quick Action Related
  get quickActions() {
    return $("");
  }
  get quicktionsSearchFields() {
    return $("");
  }
  get regenerateSoapNote() {
    return $("");
  }
  get title() {
    return $('//android.widget.EditText[@text="Title"]');
  }
  get discription() {
    return $('//android.widget.EditText[@text="Description"]');
  }
  get add() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView[6]/com.horcrux.svg.GroupView/com.horcrux.svg.PathView"
    );
  }
  get clearPatientInfo() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView[7]/com.horcrux.svg.GroupView/com.horcrux.svg.PathView"
    );
  }

  get patientInformationRequired() {
    return $(
      `//android.widget.TextView[@text="Patient Information is required"]`
    );
  }
  z;
  get batteryPercentage() {
    return $(`//android.widget.TextView[matches(@text, "Charging Battery \\(\\d+ %\\)")]
`);
  }
  get cleanedTranscriptScroll() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView"
    );
  }
  get soapNoteScroll() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup"
    );
  }
  get orginalTranscriptScroll() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView"
    );
  }

  get Cdss() {
    return $("~CDSS");
  }
  get SuggestedDiagnosisAndInterventions() {
    return $(
      '//android.widget.TextView[@text="Suggested Diagnosis and Interventions"]'
    );
  }
  get SuggestedQuestions() {
    return $('//android.widget.TextView[@text="Suggested Questions"]');
  }
  get SuggestedMedications() {
    return $('//android.widget.TextView[@text="Suggested Medications"]');
  }
  get SuggestedDiagnosticTesting() {
    return $('//android.widget.TextView[@text="Suggested Follow-ups"]');
  }
  get showOriginalTrnscript() {
    return $("~Show Original Transcript");
  }
  get showOriginalTrnscriptTableView() {
    return $("");
  }

  get showClaeanedTranscript() {
    return $("~Show Cleaned Transcript");
  }
  get showClaeanedTranscriptTableView() {
    return $("");
  }
  get copyBtn() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/com.horcrux.svg.SvgView[1]"
    );
  }
  get feedBackCopyBtn() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/com.horcrux.svg.SvgView[1]"
    );
  }
  get referalCopyBtn() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/com.horcrux.svg.SvgView[1]"
    );
  }

  get mailBtn() {
    return $('//com.horcrux.svg.SvgView[@resource-id="email"]');
  }

  get printBtn() {
    return $('//com.horcrux.svg.SvgView[@resource-id="print"]');
  }
  get SoapNoteScreenTxtField() {
    return $(
      '//android.widget.EditText[@text="Press on the mic and start speaking..."]'
    );
  }

  get Mic() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView[2]/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView[2]"
    );
  }

  get MicStop() {
    return $("//android.widget.ImageView");
  }

  get send() {
    return $(
      "//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.PathView"
    );
  }
  get finaliseEncounter() {
    return $("~Finalize Encounter");
  }
  get finaliseEncounterTxt() {
    return $(
      '//android.widget.TextView[@text="Are you sure you want to finalise the encounter?"]'
    );
  }
  get finaliseEncounterYes() {
    return $("~Yes");
  }
  get finaliseEncounterNo() {
    return $("~No");
  }

  get AddPatientInformation() {
    return $(`~Add Patient Information`);
  }
  get connectionLostDescription() {
    return $(
      '//android.widget.TextView[@text="You`re currently offline. Please check your internet connection and try again."]'
    );
  }

  get yes() {
    return $("~YES");
  }
  get no() {
    return $("~No");
  }
  get Ok() {
    return $("~OK");
  }
  get cancle() {
    return $("~Cancel");
  }
  get patitentInfoRequired() {
    return $(
      '//android.widget.TextView[@text="Patient Information is required"]'
    );
  }

  get update() {
    return $(
      '//com.horcrux.svg.SvgView[@resource-id="edit"]/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'
    );
  }
  get save() {
    return $("~Save");
  }
  async Audio() {
    await AudioManager.playAudio("english");
    await driver.pause(100000);
    await AudioManager.stopAudio();
  }

  async recordAudio() {
    await this.Audio();
    await this.stopBtn.click();
  }
  async CDSS_Verification() {
    if (await this.notEnoughTranscript.isDisplayed()) {
      console.error(
        "Recording failed: Please provide a proper medical conversation"
      );
    } else {
      await waitForElement(this.SoapNoteBtn);
      console.log("Recording successful: Transcript generated");
    }
    await waitForElement(QuickActions.quickActionButton);
    await verifyAndClick(this.Transcript);
    await verifyAndClick(this.Cdss);
    await driver.pause(2000);
    const elements =
      this.SuggestedDiagnosisAndInterventions ||
      this.SuggestedDiagnosticTesting ||
      this.SuggestedMedications ||
      this.SuggestedQuestions;

    if (elements.isDisplayed()) {
      console.log("CDSS is generated properly");
    } else if (this.CDSSLimitExceded.isDisplayed()) {
      console.error(
        "\x1b[31m%s\x1b[0m",
        "Kindly please verify the CDSS is off / your CDSS subscription is over"
      );
    }
  }
  async Transcript_Verification() {
    await waitForElement(this.Transcript);
    await driver.pause(3000);
    await verifyAndClick(this.Transcript);
    await this.dataScaning(this.cleanedTranscriptScroll);
    await AudioManager.TextComparison();
    await verifyAndClick(this.showOriginalTrnscript);
    await verifyAndClick(this.showClaeanedTranscript);
    await verifyAndClick(this.SoapNoteBtn);
  }

  async SOAPNote_Verification() {
    await waitForElement(QuickActions.quickActions);
    await verifyAndClick(this.SoapNoteBtn);
    await this.copyMailAndPrint();
  }
  async CDSS_Verification() {
    if (await this.notEnoughTranscript.isDisplayed()) {
      console.error(
        "Recording failed: Please provide a proper medical conversation"
      );
    } else {
      await waitForElement(this.SoapNoteBtn);
      console.log("Recording successful: Transcript generated");
    }
    await waitForElement(QuickActions.quickActionButton);
    await verifyAndClick(this.Transcript);
    await verifyAndClick(this.Cdss);
    await driver.pause(2000);
    const elements =
      this.SuggestedDiagnosisAndInterventions ||
      this.SuggestedDiagnosticTesting ||
      this.SuggestedMedications ||
      this.SuggestedQuestions;

    if (elements.isDisplayed()) {
      console.log("CDSS is generated properly");
    } else if (this.CDSSLimitExceded.isDisplayed()) {
      console.error(
        "\x1b[31m%s\x1b[0m",
        "Kindly please verify the CDSS is off / your CDSS subscription is over"
      );
    }
  }

  async multipleConversation() {
    await waitForElement(this.addConversation);
    await verifyAndClick(this.addConversation);
    await verifyAndClick(this.yes);
    await verify(this.pauseBtn);
    await this.recordAudioAndSaveAsDraft();
    await HomePage.encounter.click();
    await EncounterPage.clickDraftTranscript();
    await this.finaliseEncounter.click();
    await this.Ok.click();
    await this.resumeConversation.click();
    await this.yes.click();
    await this.Audio();
  }
  async second_Conversation_For_Existing_Patient() {
    await waitForElement(this.addConversation);
    await verifyAndClick(this.addConversation);
    await verifyAndClick(this.yes);
    await verify(this.pauseBtn);
    await this.recordAudio();
    await waitForElement(this.PrevEncounterRef);
    await validate(this.PrevEncounterRef);
    await verifyAndClick(this.PrevEncounterRefNo);
  }
  async second_Conversation_For_New_Patient() {
    await waitForElement(this.addConversation);
    await verifyAndClick(this.addConversation);
    await verifyAndClick(this.yes);
    await verify(this.pauseBtn);
    await this.recordAudio();
  }

  async third_Conversation_For_Existing_Patient() {
    await this.multipleConversation();
  }
  async third_Conversation_For_New_Patient() {
    await this.multipleConversation();
  }
  get finalized() {
    return $('//android.widget.TextView[@text=" Finalized"]');
  }

  async finalizeEncounter() {
    await waitForElement(this.SoapNoteBtn);
    await verifyAndClick(this.SoapNoteBtn);
    await verifyAndClick(this.SoapNoteScreenTxtField);
    await hideKeyboard();
    await waitForElement(this.SoapNoteBtn);
    await verifyAndClick(this.SoapNoteBtn);
    await this.finaliseEncounter.click();
    await this.finaliseEncounterYes.click();
    await waitForElement(this.finalized);
    await validate(this.finalized);
    await back();
  }

  async recordAudioAndSaveAsDraft() {
    await this.Audio();
    await driver.pause(3000);
    await verifyAndClick(this.back);
    await verifyAndClick(this.saveAsDraftBtn);
  }

  async recordAudioForExictingPatient() {
    await this.recordAudio();
    await this.PrevEncounterRefNo.click();
    await this.ctsConformation();
  }

  async recordAudioForDraft() {
    await verifyAndClick(this.resumeRecordingConformationNO);
    await this.recordAudio();
    await this.ctsConformation();
  }

  async startConversation() {
    await verifyAndClick(this.startConversationBtn);
    await driver.pause(2000);
    await verifyAndClick(this.acknowledgeAndContinueBtn);
  }

  async sleepModeConformation() {
    await driver.activateApp("com.thinkhat.heynoki");
    await HomePage.encounter.click();
    await verifyAndClick(EncounterPage.draft);
    // try {
    await verify(this.SoapNoteBtn);
  }

  // async getScrollableData() {
  //     const scrollView = await this.soapNoteTable; // Adjust selector if needed
  //     let allData = [];
  //     let previousElements = [];

  //     while (true) {
  //         // Get visible elements (e.g., table cells)
  //         const cells = $$('//XCUIElementTypeCell'); // Adjust selector if needed
  //         const currentElements = await Promise.all(cells.map(cell => cell.getText()));

  //         // Check if we’ve reached the end (no new data)
  //         if (currentElements.every(elem => previousElements.includes(elem))) {
  //             break;
  //         }

  //         // Add new elements to the result
  //         allData = [...new Set([...allData, ...currentElements])];
  //         previousElements = currentElements;

  //         // Perform a scroll (scrollGesture up)
  //     //     }
  //     return allData;
  // }
  async copyMailAndPrint() {
    await verifyAndClick(this.copyBtn);
    await verifyAndClick(this.mailBtn);
    await verifyAndClick(this.printBtn);
    await driver.pause(5000);
    await back();
  }
  async recordAudioforOfflineMode() {
    await AudioManager.AudioCommand(); // app start playing the audio
    console.log("Audio started:", AudioManager.currentAudioFile);
    await this.recordAudioforOfflineModeMT(); //app under goes offline to test the offline recording/offline functinality
    await verifyAndClick(this.pauseBtn);
    await AudioManager.pauseAudio();
    console.log("Audio paused at:", AudioManager.pausedTime, "seconds");
    await driver.pause(20000);
    await waitForElement(this.playBtn);
    await verifyAndClick(this.playBtn);
    await AudioManager.resumeAudio();
    console.log("Audio resumed:", AudioManager.currentAudioFile);
    await driver.pause(100000);
    await network();
    await driver.pause(20000);
    const appId = process.env.BUNDLE_ID;
    await driver.execute("mobile: terminateApp", { appId });
    await AudioManager.pauseAudio();
    await driver.pause(10000);
    await driver.activateApp(appId);
    await driver.pause(10000);
    // await verifyAndClick(this.ContinueBtn)
    console.log(
      "Here app got restarted the app while it is in the recording screen and we verified with the app still in that page"
    );
    await waitForElement(this.playBtn);
    await verifyAndClick(this.playBtn);
    await AudioManager.playAudio();
    await driver.pause(60000);
    console.log(
      "here after app got closed while recording we again automatically again resumed the audio"
    );
    await verify(this.pauseBtn);
    await driver.pause(10000);
    await driver.activateApp(com.android.settings);
    await driver.pause(10000);
    console.log(
      "we have switched the app to settings and wait for a period of time and returng to the noki app to test the off line record is going on and making sure that the app is still recording in offline mode and the app is still intact"
    );
    await driver.activateApp(com.thinkhat.heynoki);
    console.log(
      "we have switched the app to settings and wait for a period of time and returng to the noki app to test the off line record is going on and making sure that the app is still recording in offline mode and the app is still intact"
    );
    await driver.pause(10000);
    await AudioManager.stopAudio();
    await driver.pause(5000);
    await verifyAndClick(this.stopBtn);
    await verify(this.offlineConversationSaved);
    await network();
    await driver.pause(5000);
    console.log(
      "here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
    if (this.PrevEncounterRefNo.isDisplayed()) {
      await this.PrevEncounterRefNo.click();
      console.log(
        "Here her are undrgoing conversation may be s followup or the patient is visted the doctor previously"
      );
    } else {
      console.log(
        "This Encounter we are recording for this particulat patient is for the First time"
      );
    }
    console.log("Audio stopped (killed) after app restart");
  }

  async recordAudioforOfflineModeMT() {
    let timesToRun = 2;
    console.log(`Loop will run ${timesToRun} times`);
    for (let i = 0; i < timesToRun; i++) {
      await driver.pause(30000);
      await network(); //offline
      await driver.pause(5000);
      await verify(this.offlineModeRTranscription);
      await driver.pause(30000);
      await network(); //online
      await driver.pause(5000);
    }
  }

  async dataScaning(scrollablelement) {
    const allTexts = new Set();
    const element = await scrollablelement;
    let newTextsAdded = 0;
    let scrollCount = 0;
    const maxScrolls = 15;

    const recyclerView = await $("//androidx.recyclerview.widget.RecyclerView");
    const size = await recyclerView.getSize();

    while (scrollCount < maxScrolls) {
      newTextsAdded = 0;
      const textViews = await $$(
        "//androidx.recyclerview.widget.RecyclerView//android.widget.TextView"
      );
      for (const textView of textViews) {
        const text = await textView.getText();
        if (text && !allTexts.has(text)) {
          allTexts.add(text);
          newTextsAdded++;
        }
      }
      const stopElement = await $$(
        '//android.widget.TextView[@text="Conversation 2"]'
      );
      if (stopElement.length > 0 || newTextsAdded === 0) {
        console.log(
          stopElement.length > 0
            ? '🛑 Found "Conversation 2" — stopping scan.'
            : "⚠️ No new texts found — stopping scan."
        );
        break;
      }

      await swipe("up", element);
      await driver.pause(500);
      scrollCount++;
    }

    const allTextArray = Array.from(allTexts);

    // ✅ Save to file
    const dirPath =
      "/Users/nagasubarayudu/Desktop/NokiAndroid/_results_/TranscriptFiles";
    const filePath = path.join(dirPath, `scanned_texts_${Date.now()}.txt`);

    // Ensure folder exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write file
    fs.writeFileSync(filePath, allTextArray.join("\n"), "utf-8");

    console.log(`✅ Saved ${allTextArray.length} lines to: ${filePath}`);
    return allTextArray;
  }

  // soapNoteElements = {
  //   patientInformation: this.patientInformation,
  //   subjective: this.subjective,
  //   objective: this.objective,
  //   assessment: this.assessment,
  //   plan: this.plan,
  //   additionalInformation: this.additinalInformation,
  // };

  async dataScaningTemplet(scrollableElement, template, Elements) {
    const allTexts = new Set();
    let newTextsAdded = 0;
    let scrollCount = 0;
    const maxScrolls = 15;

    const element = await scrollableElement;

    while (scrollCount < maxScrolls) {
      newTextsAdded = 0;

      const textViews = await $$(
        "//androidx.recyclerview.widget.RecyclerView//android.widget.TextView"
      );

      for (const textView of textViews) {
        const text = await textView.getText();
        if (text && !allTexts.has(text)) {
          allTexts.add(text);
          newTextsAdded++;
        }
      }

      if (newTextsAdded === 0) {
        console.log("⚠️ No new texts found — stopping scan.");
        break;
      }

      await swipe("up", element);
      await driver.pause(500);
      scrollCount++;
    }

    // ✅ Convert text Set to Array
    const allTextArray = Array.from(allTexts);

    // ✅ Verify SOAP note elements
    const verificationResults = {};

    for (const [key, selector] of Object.entries(soapNoteElements)) {
      try {
        const el = await $(selector);
        const exists = await el.isExisting();

        if (!exists) {
          verificationResults[key] = false;
          continue;
        }

        const text = await el.getText();
        verificationResults[key] = Boolean(text && allTexts.has(text));
      } catch (err) {
        verificationResults[key] = false;
      }
    }

    // ✅ Save file (optional)
    const filePath = `./${template}_${Date.now()}.txt`;
    require("fs").writeFileSync(filePath, allTextArray.join("\n"), "utf-8");

    console.log("✅ Scan complete");
    console.log("Verification:", verificationResults);

    return {
      texts: allTextArray,
      verified: verificationResults,
    };
  }

  async UpdatePatientInfo() {
    await waitForElement(this.update);
    await verifyAndClick(this.update);
    await verifyAndClick(this.AddPatientInformation);
    await verifyAndClick(this.add);

    await validate(this.patientInformationRequired);
    await verifyAndClick(this.title);
    await this.title.setValue("Blood Group");
    await verifyAndClick(this.discription);
    await this.discription.setValue("O positive");
    await hideKeyboard();
    await verifyAndClick(this.add);
    await verifyAndClick(this.save);
    await this.bloodGroup("Blood Group");
    await this.bloodName("O positive");
  }

  // get SoapNoteScreenTxtFieldEntry() {
  //   return $("");
  // }
  async bloodGroup(name) {
    return await validate($(`~${name}`));
  }

  async bloodName(name) {
    return await validate($(`~${name}`));
  }
  async manualUpdate() {
    await waitForElement(this.SoapNoteScreenTxtField);
    await verifyAndClick(this.SoapNoteScreenTxtField);
    await this.SoapNoteScreenTxtField.setValue("Blood Group O negitive");
    await hideKeyboard();
    await verifyAndClick(this.send);
    await this.bloodGroup("Blood Group");
    await this.bloodName("O negitive");
  }
  async hayNoki() {
    await driver.pause(10000);
    await driver
      .action("pointer") //pointer action to move the support chat to make the visibility of the mic button
      .move({ duration: 0, x: 656, y: 1388 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 694, y: 690 })
      .up({ button: 0 })
      .perform();

    await waitForElement(this.Mic);
    await this.Mic.click();
    await driver.pause(2000);
    await playTTS("Blood group is B negative", "Alex", 1.1);
    await driver.pause(2000);
    await verifyAndClick(this.MicStop);
    await verifyAndClick(this.send);
    await this.bloodGroup("Blood Group");
    await this.bloodName("B negative");
  }
}

export default new RecordingPage();

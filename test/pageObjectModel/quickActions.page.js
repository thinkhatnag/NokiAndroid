import {
  verify,
  verifyAndClick,
  waitForElement,
  back,
} from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";
// import recordingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page";
import RecordingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js";

class QuickActions {
  //Quick Action Related
  get quickActions() {
    return $("~Quick Actions");
  }
  get quicktionsSearchField() {
    return $(
      '(//android.view.ViewGroup[@content-desc="Quick Actions"])[1]/android.view.ViewGroup[1]'
    );
  }
  get regenerateSoapNote() {
    return $("~Regenerate Soap Note");
  }
  get translateSoapNote() {
    return $("~Translate Soap Note to");
  }
  get french() {
    return $("~French");
  }
  get spanish() {
    return $("~Spanish");
  }
  get english() {
    return $("~English");
  }
  get generateIcdAndCptCodes() {
    return $("~Generate ICD & CPT codes");
  }
  get generateCarePlan() {
    return $("~Generate Care Plan with Explanation");
  }
  get generateFeedBack() {
    return $("~Generate feedback on Doctor Performance");
  }
  get generateReferalLetter() {
    return $("~Generate Referral Letter");
  }
  get icdAndCptCodes() {
    return $(
      '//android.view.View[@content-desc="ICD & CPT codes"]/android.view.ViewGroup'
    );
  }
  get regenerateIcdAndCptCodes() {
    return $("~Regenerate ICD & CPT codes");
  }

  get regenerateCarePlan() {
    return $("~Regenerate Care Plan with Explanation");
  }
  get carePlan() {
    return $(
      '//android.view.View[@content-desc="Care Plan with Explanation"]/android.view.ViewGroup'
    );
  }
  get regenerateFeedBack() {
    return $("~Regenerate feedback on Doctor Performance");
  }
  get feedBack() {
    return $(
      '//android.view.View[@content-desc="Feedback on Doctor Performance"]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get regenerateReferalLetter() {
    return $("~Regenerate Referral Letter");
  }
  get referalLetter() {
    return $(
      '//android.view.View[@content-desc="Referral Letter"]/android.view.ViewGroup'
    );
  }

  get ok() {
    return $("~OK");
  }
  get yes() {
    return $("~YES");
  }
  get no() {
    return $("~NO");
  }

  get PatientInformationInFrench() {
    return $('//android.widget.TextView[@text="Informations sur le patient"]');
  }
  get PatientInformationInSpnish() {
    return $('//android.widget.TextView[@text="Información del Paciente"]');
  }
  get PatientInformation() {
    return $('//android.widget.TextView[@text="Patient Information"]');
  }
  get addPatientInfoSpanish() {
    return $("~Añadir Información del Paciente");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  async Icd_Cpt() {
    await waitForElement(this.quickActions);

    await driver.pause(3000);
    await verifyAndClick(this.quickActions);
    await verifyAndClick(this.generateIcdAndCptCodes);
    await waitForElement(this.icdAndCptCodes);
    await driver.pause(5000);
    await RecordingPage.copyMailAndPrint();
    await this.quickActions.click();
    await this.regenerateIcdAndCptCodes.click();
    await this.yes.click();
    await waitForElement(this.icdAndCptCodes);
    await driver.pause(2000);
    await RecordingPage.copyMailAndPrint();
  }
  async translateSoapNote() {
    await waitForElement(this.quickActions);

    // await RecordingPage.copyMailAndPrint()
    // await verifyAndClick(RecordingPage.update)
    // await verifyAndClick(RecordingPage.AddPatientInformation)
    // await verify(RecordingPage.title)
    // await verify(RecordingPage.discription)
    // await verifyAndClick(RecordingPage.add)
    // await verify(RecordingPage.patitentInfoRequired)
    // await verifyAndClick(RecordingPage.clearPatientInfo)
    // await verifyAndClick(RecordingPage.cancle)
    await this.quickActions.click();
    await this.translateSoapNote.click();
    await this.spanish.click();
    await verifyAndClick(this.yes);
    await waitForElement(this.PatientInformationInSpnish);
    await driver.pause(2000);
    await RecordingPage.copyMailAndPrint();
    await this.quickActions.click();
    await this.translateSoapNote.click();
    await this.english.click();
    await verifyAndClick(this.yes);
    await waitForElement(this.PatientInformation);
    await RecordingPage.copyMailAndPrint();
  }
  async care_plan() {
    await waitForElement(this.quickActions);

    await this.quickActions.click();
    await this.generateCarePlan.click();
    await waitForElement(this.carePlan);
    await driver.pause(5000);
    await RecordingPage.copyMailAndPrint();
    await this.quickActions.click();
    await this.regenerateCarePlan.click();
    await this.yes.click();
    await waitForElement(this.carePlan);
    await RecordingPage.copyMailAndPrint();
  }
  async feed_Back() {
    await waitForElement(this.quickActions);
    await verifyAndClick(this.quickActions);
    await verifyAndClick(this.generateFeedBack);
    await waitForElement(this.feedBack);
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.feedBackCopyBtn);
    await console.log("copy button clicked successfully");
    await verifyAndClick(RecordingPage.mailBtn);
    await verifyAndClick(RecordingPage.printBtn);
    await driver.pause(5000);
    await back();
    await verifyAndClick(this.quickActions);
    await verifyAndClick(this.regenerateFeedBack);
    await verifyAndClick(this.yes);
    await waitForElement(this.feedBack);
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.feedBackCopyBtn);
    await console.log("copy button clicked successfully");
    await verifyAndClick(RecordingPage.mailBtn);
    await verifyAndClick(RecordingPage.printBtn);
    await driver.pause(5000);
    await back();
  }
  async referal_Letter() {
    await waitForElement(this.quickActions);
    await driver.pause(2000);
    await this.quickActions.click();
    await this.generateReferalLetter.click();
    await waitForElement(this.referalLetter);
    await driver.pause(5000);
    await verifyAndClick(RecordingPage.referalCopyBtn);
    await console.log("copy button clicked successfully");
    await verifyAndClick(RecordingPage.mailBtn);
    await verifyAndClick(RecordingPage.printBtn);
    await driver.pause(5000);
    await back();
    await this.quickActions.click();
    await this.regenerateReferalLetter.click();
    await this.yes.click();
    await waitForElement(this.referalLetter);
    await driver.pause(3000);
    await verifyAndClick(RecordingPage.referalCopyBtn);
    await console.log("copy button clicked successfully");
    await verifyAndClick(RecordingPage.mailBtn);
    await verifyAndClick(RecordingPage.printBtn);
    await driver.pause(5000);
    await back();
  }
  async soap_note() {
    await waitForElement(this.quickActions);
    await driver.pause(2000);
    await this.quickActions.click();
    await this.regenerateSoapNote.click();
    await this.yes.click();
    await waitForElement(this.PatientInformation);
    await driver.pause(2000);
    await RecordingPage.copyMailAndPrint();
  }
}

export default new QuickActions();

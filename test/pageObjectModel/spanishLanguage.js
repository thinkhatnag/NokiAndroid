import {
  waitForElement,
  verifyAndClick,
  verify,
  back,
  hideKeyboard, nokiDashBoard,
    Network,
    clickDraftTranscript,
} from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js";
import { faker } from "@faker-js/faker";
import AudioManeger from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/audioManeger.js";
import LoginPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js";
import AudioManager from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/audioManeger.js"
class SpanishLanguage {
  get newUserREsgistrationText() {
    return $();
  }
  get emailField() {
    return $();
  }
  get passwordField() {
    return $();
  }
  get loginButton() {
    return $();
  }
  get errorMessage() {
    return $();
  }
  get WrongPassword() {
    return $();
  }
  get emailError() {
    return $();
  }
  get invalidEmailError() {
    return $();
  }
  get emailNotRegisteredError() {
    return $();
  }
  get homescreenAnimation() {
    return $();
  }




//HOME Screen 

  get homeScreenAnimation() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[3]`
    );
  }
  get welcomeThumbnail() {
    return $();
  }

  get nokiDashboardButton() {
    return $(`~`);
  }
  get patients() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[2]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView`
    );
  }
  get encounter() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[3]`
    );
  }
  get settings() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[4]`
    );
  }

  get startNewEncounter() {
    return $(
      `//android.view.ViewGroup[@content-desc="Agregar Nuevo Encuentro"]/android.view.ViewGroup/android.view.View`
    );
  }
  get nokiDashBoardStartNewEncounter() {
    return $();
  }





  // patient Screen
  get PatientsScreenTitle() {
    return $(`//android.widget.TextView[@text="Pacientes"]`);
  }
  get PatientSearchBtn() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup`
    );
  }
  get PatientScreenDashBoardAddPatientBtn() {
    return $();
  }





  //Encounter screen
  get encounerScreenTitle() {
    return $(`//android.widget.TextView[@text="Notas"]`);
  }
  get EncounterScreenSearchBtn() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup`
    );
  }
  get notesText() {
    return $(`~`);
  }
  get DeleteBtn() {
    return $();
  }





  //SettingPage
  get stettings() {
    return $('');
  }

  get profileSettings() {
    return $('~Configuración de Perfil');
  }
  get help() {
    return $("~Ayuda");
  }
  get launguage() {
    return $("~Idioma, Español (es-PR)");
  }
  get generalSettings() {
    return $("~Configuración General");
  }
  get Done() {
    return $(`//android.widget.TextView[@text="Listo"]`);
  }
  get logoutBtn() {
    return $(`~Cerrar Sesión`);
  }
  get edit() {
    return $("~Editar");
  }
  get firstName() {
    return $(`//android.widget.EditText[@resource-id="firstName"]`);
  }
  get middleName() {
    return $(`//android.widget.EditText[@resource-id="middleName"]`)
  }
  get lastName() {
    return $(`//android.widget.EditText[@resource-id="lastName"]`);
  }
  get email() {
    return $(`//android.widget.EditText[@text="nag.subbarayudu@thinkhat.ai"]`);
  }
  get save() {
    return $("~Guardar");
  }
  get cancel() {
    return $("~Cancelar");
  }
  get speciality() {
    return $("~Anestesiología");
  }
  get specialitySearchBar() {
    return $(`//android.widget.EditText[@resource-id="specialitySearch"]`);
  }
  get specialityEdit() {
    return $("~Anestesiología");
  }

  get Idioma() {
    return $("~Idioma, Español (es-PR)");
  }

  get doctorname() {
    return $('//android.widget.TextView[@text="nag subbarayudu"]');
  }
  get supportback() {
    return $(
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]"
    );
  }
  get profileback() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]'
    );
  }
  get consultWithUs() {
    return $(`//android.widget.TextView[@text="Consulta"]`);
  }
  
  get english() {
    return $("~English (en-US)");
  }
  get Inglish() {
    return $("~English (en-US)");
  }
  get home() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[1]'
    );
  }
  get spanish() {
    return $("~Español (es-PR)");
  }
  get selectAllEnabled() {
    return $(
      '(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get selectAllDisabled() {
    return $(
      '(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get cdssEnabled() {
    return $(
      '(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get cdssDisabled() {
    return $(
      '(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get diognosisJustificationDisabled() {
    return $(
      '(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get diognosisJustificationEnabled() {
    return $(
      '(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get logoutcancelationBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button2"]');
  }
  get logoutConformationBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }
  get logingoutText() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]');
  }
  get logoutBtn() {
    return $("~Logout");
  }
  get sync() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'
    );
  }
  get phone() {
    return $(
      '//android.view.ViewGroup[@content-desc="Consult"]/android.view.ViewGroup[1]'
    );
  }
  get whatsapp() {
    return $(
      '//android.view.ViewGroup[@content-desc="Consult"]/android.view.ViewGroup[2]'
    );
  }
  get text() {
    return $(
      '//android.view.ViewGroup[@content-desc="Consult"]/android.view.ViewGroup[3]'
    );
  }
  get Gmail() {
    return $(
      '//android.view.ViewGroup[@content-desc="Consult"]/android.view.ViewGroup[4]'
    );
  }

  



  //patitents Page
  get patients() {
    return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[2]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView`);
  }
  get nokiDashboard() {
    return $(`~`);
  }

  get clearText() {
    return $(`//android.widget.TextView[@text="Cancelar"]`);
  }
  get cancel() {
    return $(`//android.widget.TextView[@text="Cancelar"]`);
  }
  get noPatitentFound() {
    return $(`~`);
  }
  get goBack() {
    return $(`~`);
  }

  //Enconter Screen
  get Encounter() {
    return $(`~`);
  }
  get searchNote() {
    return $(`~`);
  }
  get legPain() {
    return $(`~`);
  }
  get draft() {
    return $(`~`);
  }
  get deleteBtn() {
    return $(`~`);
  }

  get deleteCancel() {
    return $(`~`);
  }

  get deleteConformation() {
    return $(`~`);
  }
  get noEncounterFound() {
    return $(`~`);
  }





  // Search patitent
  get patient() {
    return $(`~`);
  }
  get searchPatientsField() {
    return $(`//android.widget.EditText[@text="Buscar paciente"]`);
  }

 
  get proceedBTn() {
    return $(`~Proceder`);
  }

  //addPAtitent
  get addPatient() {
    return $(`~Agregar paciente`);
  }
  get patientName() {
    return $(`//android.widget.EditText[@text="Ingresar nombre del paciente"]`);
  }
  get DOB() {
    return $(`//android.widget.EditText[@text="Fecha de nacimiento"]`);
  }
  get genderPicker() {
    return $(`//android.view.ViewGroup[@content-desc="Género, *, Seleccionar género"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView`);
  }


  get male() {
    return $(`~Masculino`);
  }
  get female() {
    return $(`~Femenino`);
  }
  get other() {
    return $(`~Otro`);
  }
  get unknown() {
    return $(`~Desconocido`);
  }
  get addAndProceed() {
    return $(`~Agregar y continuar`);
  }
  get cancel() {
    return $(`~`);
  }
  get nameError() {
    return $(`//android.widget.TextView[@text="Se requiere el nombre del paciente"]`);
  }
  get dateError() {
    return $(`//android.widget.TextView[@text="Se requiere la fecha de nacimiento"]`);
  }
  get genderError() {
    return $(`//android.widget.TextView[@text="Se requiere género"]`);
  }

  // Recording Screen
  get checkBox() {
    return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView`);
  }
  get startConversationBtn() {
    return $(`//android.view.ViewGroup[@content-desc="Comenzar grabación"]/android.view.ViewGroup/android.view.View`);
  }
  get continueBtn() {
    return $(`~CONTINUAR`);
  }
  get acknowledgeBtn() {
    return $(`~Aceptar y Continuar`);
  }
  get saveAsDraftBtn() {
    return $(`~GUARDAR COMO BORRADOR`);
  }
  get discardBtn() {
    return $(`~DESCARTAR`);
  }
  get SoapNoteBtn() {
    return $(`//android.view.View[@content-desc="Nota SOAP"]/android.view.ViewGroup`);
  }
  get LaunguageSelectior() {
    return $(`~`);
  }
  get LaunguageSelectText() {
    return $(`~`);
  }
  get doneBtn() {
    return $(`~`);
  }
  get EngLanOpt() {
    return $(`~`);
  }
  get SpanLanOpt() {
    return $(`~`);
  }
  get startConversationBtn() {
    return $();
  }
  get ackwnledge() {
    return $(`~`);
  }
  get pauseBtn() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView`
    );
  }
  get patientCreatedOk() {
    return $(`~`);
  }
  get resumeRecording() {
    return $(`~`);
  }
  get resumeRecordingConformationYes() {
    return $(`~`);
  }

  get resumeRecordingConformationNO() {
    return $(`~`);
  }

  get stopBtn() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[2]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView`
    );
  }
  get PlayBtn() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView`
    );
  }




  get PrevEncounterRef() {
    return $(`//android.widget.TextView[@resource-id="¿Te gustaría usar la nota SOAP del encuentro anterior como contexto?"]`);
  }

  get PrevEncounterRefYes() {
    return $(`~SÍ`);
  }
  get PrevEncounterRefNo() {
    return $(`~NO`);
  }


 
  get patientInformation() {
    return $(`~`);
  }
  get subjective() {
    return $("]");
  }
  get objective() {
    return $(`~`);
  }
  get assessment() {
    return $(`~`);
  }
  get plan() {
    return $(`~`);
  }
  get additinalInformation() {
    return $(`~`);
  }
  get name() {
    return $(`~`);
  }
  get age() {
    return $(`~`);
  }
  get gender() {
    return $(`~`);
  }
  get encounterDate() {
    return $(`~`);
  }

  get chiefComplain() {
    return $(`~`);
  }
  get historyofprsentIllness() {
    return $(`~`);
  }
  get pastMedicalHistory() {
    return $(`~`);
  }
  get socialHistory() {
    return $(`~`);
  }
  get familyHistory() {
    return $(`~`);
  }
  get reviewofSystems() {
    return $(`~`);
  }
  get vitalSigns() {
    return $(`~`);
  }
  get generallAppearance() {
    return $(`~`);
  }
  get physicalApperence() {
    return $(`~`);
  }
  get Diognosis() {
    return $(`~`);
  }
  get clinicalImpression() {
    return $(`~`);
  }
  get treatmentPlan() {
    return $(`~`);
  }
  get patitentEducation() {
    return $(`~`);
  }
  get followUp() {
    return $(`~`);
  }
  get medications() {
    return $(`~`);
  }

  get allergies() {
    return $(`~`);
  }
  get immunization() {
    return $(`~`);
  }
  get referal() {
    return $();
  }

  get Transcript() {
    return $(`//android.widget.TextView[@text="Transcripción"]`);
  }
  get Cdss() {
    return $(`//android.widget.TextView[@text="CDSS"]`);
  }
  get SuggestedDiagnosisAndInterventions() {
    return $(``);
  }
  get SuggestedQuestions() {
    return $(``);
  }
  get SuggestedMedications() {
    return $(``);
  }
  get SuggestedFollowups() {
    return $(``);
  }

  get originalTrnscript() {
    return $(`~Mostrar Transcripción Original`);
  }

  get claeanedTranscript() {
    return $(`~Mostrar Transcripción Limpiada`);
  }

  get copyBtn() {
    return $(`//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/com.horcrux.svg.SvgView[1]`);
  }
  get mailBtn() {
    return $(`~email`);
  }
 
  get printBtn() {
    return $(`//com.horcrux.svg.SvgView[@resource-id="print"]`);
  }
  get addConversation() {
    return $(`//android.view.ViewGroup[@content-desc="Agregar conversación"]/android.view.ViewGroup/android.view.View`);
  }

  get printDownload() {
    return $(`~`);
  }

  get printCancel() {
    return $(`~`);
  }
  get printPageCancel() {
    return $(`~`);
  }
  get printPageBackBtn() {
    return $(`~`);
  }
  get SoapNoteScreenTxtField() {
    return $(`//android.widget.EditText[@text="Presiona el micrófono y comienza a hablar..."]`);
  }

  get update() {
    return $(`//com.horcrux.svg.SvgView[@resource-id="edit"]/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView`);
  }
  get send() {
    return $(`~`);
  }
  get finaliseEncounter() {
    return $(`~Finalizar Encuentro`);
  }
  get finaliseEncounterTxt() {
    return $(`//android.widget.TextView[@text="¿Está seguro de finalizar el encuentro y deshabilitar todas las acciones disponibles?"]`);
  }
  get ok() {
    return $(`~Sí`);
  }
  get no() {
    return $(`~No`);
  }
  get resumeRecording() {
    return $(`//android.view.ViewGroup[@content-desc="Reanudar conversación"]/android.view.ViewGroup/android.view.View`);
  }
  get resumeRecordingConformation() {
    return $(``);
  }

  get PatientInfo() {
    return $(`~`);
  }
  get Subject() {
    return $(`~`);
  }
  get Object() {
    return $(`~`);
  }
  get Assess() {
    return $(`~`);
  }
  get Plan() {
    return $(`~`);
  }
  get AdditionalInfo() {
    return $(`~`);
  }
  get connectionLost() {
    return $(`~`);
  }
  get connectionLostClose() {
    return $(`~`);
  }
  get offlineModeRTranscription() {
    return $(`//android.widget.TextView[@text="Transcripción no disponible en modo sin conexión"]`);
  }
  get offlineConversationSaved() {
    return $(`//android.widget.TextView[@text="Hemos guardado tu conversación. Se sincronizará cuando estés conectado nuevamente."]`);
  }


  // Helper methods for actions
  async enterEmail(email) {
    await expect(this.emailField).toBeDisplayed();
    const size = await this.emailField.getSize();
    expect(size.height).toBeGreaterThanOrEqual(34);
    await this.emailField.setValue(email);
  }

  async enterPassword(password) {
    await expect(this.passwordField).toBeDisplayed();
    const size = await this.passwordField.getSize();
    expect(size.height).toBeGreaterThanOrEqual(34);
    await this.passwordField.setValue(password);
  }

  async clickLogin() {
    await expect(this.loginButton).toBeDisplayed();
    const size = await this.loginButton.getSize();
    expect(size.width).toBeGreaterThanOrEqual(44);
    expect(size.height).toBeGreaterThanOrEqual(44);
    const isEnabled = await this.loginButton.isEnabled();
    expect(isEnabled).toBe(true);
    await this.loginButton.click();
  }
  async clearTextFields() {
    await this.emailField.clearValue();
    await this.passwordField.clearValue();
  }
//Setting page Functinalities
  async profileSettingScreen() {
    await verifyAndClick(this.edit);
    await verifyAndClick(this.firstName);
    await this.firstName.clearValue();
    const FirstName = await this.firstName.setValue("Naga");
    await hideKeyboard();
    await verifyAndClick(this.middleName);
    const MiddleName = await this.middleName.setValue("Surrendra");
    await hideKeyboard();
    await verify(this.lastName);
    await this.lastName.clearValue();
    const LastName = await this.lastName.setValue("Subbarayudu");
    await hideKeyboard();
    await verifyAndClick(this.cancel);
    await verifyAndClick(this.edit);
    await verify(FirstName);
    await verify(MiddleName);
    await verify(LastName);
    await back();
  }
  async support_VerifiCation() {

    await verifyAndClick(this.help);
    await driver.pause(5000);
    await verifyAndClick(this.phone);
    await driver.pause(3000);
    const phonePackage = "com.google.android.dialer";
    await driver.pause(3000);
    const Package = await driver.getCurrentPackage();
    if (Package !== phonePackage) {
      throw new Error(
        `phone app (${phonePackage}) is not active. Current package: ${Package}`
      );
    }
    console.log("phone is active");
    await driver.activateApp("com.thinkhat.heynoki");
    await driver.pause(10000);
    // await this.whatsapp.click();
    // await driver.pause(10000);
    // const whatsappPackage = "com.whatsapp";
    // const whatsappCurrentPackage = await driver.getCurrentPackage();
    // if (whatsappCurrentPackage !== whatsappPackage) {
    //   throw new Error(
    //     `Gmail (${whatsappPackage}) is not active. Current package: ${whatsappCurrentPackage}`
    //   );
    // }
    // console.log("WhatsApp is active");
    // await driver.pause(5000);
    // await driver.activateApp("com.thinkhat.heynoki");
    // await driver.pause(5000);
    await verifyAndClick(this.Gmail);
    await driver.pause(5000);
    const gmailPackage = "com.google.android.gm";
    const gmailCurrentPackage = await driver.getCurrentPackage();
    if (gmailCurrentPackage !== gmailPackage) {
      await driver.pause(5000);

      throw new Error(
        `Gmail (${gmailPackage}) is not active. Current package: ${gmailCurrentPackage}`
      );
    }

    console.log("Gmail is active");
    await driver.pause(5000);
    await driver.activateApp("com.thinkhat.heynoki");
    await driver.pause(5000);

    await verifyAndClick(this.text);
    await driver.pause(5000);

    const messagesPackage = "com.google.android.apps.messaging";
    const messagesCurrentPackage = await driver.getCurrentPackage();
    if (messagesCurrentPackage !== messagesPackage) {
      await driver.pause(5000);

      throw new Error(
        `Messages (${messagesPackage}) is not active. Current package: ${messagesCurrentPackage}`
      );
    }

    console.log("Messages is active");

    await driver.pause(5000);
    await driver.activateApp("com.thinkhat.heynoki");
    await back();
  }
  async generalSettingsUpdate() {

    await verifyAndClick(this.launguage);
    await verifyAndClick(this.spanish);
    await verifyAndClick(this.Idioma);
    await verifyAndClick(this.Inglish);
    await verifyAndClick(this.generalSettings);
    await verifyAndClick(this.cdssEnabled);
    await verifyAndClick(this.diognosisJustificationEnabled);
    await verifyAndClick(this.cancel);
    await verifyAndClick(this.generalSettings);
    await verifyAndClick(this.cdssEnabled);
    await this.diognosisJustificationEnabled;
    await verifyAndClick(this.Done);
    await verifyAndClick(this.generalSettings);
    await verifyAndClick(this.cdssDisabled);
    await verifyAndClick(this.diognosisJustificationDisabled);
    await verifyAndClick(this.Done);
 
  }



  async patitentName(patitent) {
    return $(`//android.widget.EditText[@text="${patitent}"]`);
  }

//Quick Action Buttons
get quickActionButton() {
  return $(`~Acciones Rápidas`);
}
get quicktionsSearchField() {
  return $(`//android.widget.EditText[@resource-id="quickActionSearchField"]`);
}
get regenerateSoapNote() {
  return $(`~Regenerar Nota SOAP`);
}
get translateSoapNote() {
  return $(`~Traducir Nota SOAP a`);
}
get regenerateIcdAndCpt() {
  return $(`~Regenerar códigos ICD y CPT`);
}
get regenerateCarePlan() {
  return $(`~Regenerar Plan de Atención con Explicación`);
}
get regenerateFeedBack() {
  return $(`~Regenerar retroalimentación sobre el desempeño del doctor`);
}

get regenerateReferalLetter() {
  return $(`~Regenerar Carta de Referencia`);
}
get spanish() {
  return $(`~Español`);
}

get no() {
  return $(`~NO`);
}
get yes() {
  return $(`~SÍ`);
}

get PatientInformationTxtInSpanish() {
  return $(`//android.widget.TextView[@text="Información del Paciente"]`);
}
get english() {
  return $(`~Inglés`);
}
get generateIcdAndCptCodes() {
  return $(`~Generar códigos ICD y CPT`);
}
get generateCarePlan() {
  return $(`~Generar Plan de Atención con Explicación`);
}
get generateFeedBack() {
  return $(`~Generar retroalimentación sobre el desempeño del doctor`);
}
get generateReferalLetter() {
  return $(`~Generar Carta de Referencia`);
}
get PatientInformationTxtInEnlish() {
  return $(`//android.widget.TextView[@text="Patient Information"]`);
}

get soapNOteSearchField() {
  return $(`//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]`);
}
get micOn() {
  return $(`//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView[2]`);
}
get MicStop() {
  return $(`//android.widget.ImageView`);
}
get sendBtn() {
  return $(`//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView`);
}
get careplan() {
  return $(`//android.view.View[@content-desc="Carta de referencia"]/android.view.ViewGroup`);
}
get Icdcptcodes() {
  return $(`//android.view.View[@content-desc="Códigos ICD y CPT"]/android.view.ViewGroup`);
}
get carePlan() {
  return $(`//android.view.View[@content-desc="Plan de cuidado con explicación"]/android.view.ViewGroup`);
}
get feedBack() {
  return $(`//android.view.View[@content-desc="Retroalimentación sobre el desempeño del doctor"]/android.view.ViewGroup`);
}




  //AddPatitent Screen Functions
  async copyMailPrint() {
    await waitForElement(this.copyBtn);
    await verifyAndClick(this.copyBtn);
    await verifyAndClick(this.mailBtn);
    await verifyAndClick(this.emailSentOk);
    await verifyAndClick(this.printBtn);
    await driver.pause(10000);
    await back();
  }
  async Soap_Note_Regeneration() {
    await waitForElement(this.quickActionButton);
    await this.quickActionButton.click();
    await verify(this.quicktionsSearchField);
    await verifyAndClick(this.regenerateSoapNote);
    await verifyAndClick(this.yes);
    await waitForElement(this.SoapNoteBtn);
    await this.copyMailPrint();
  }
    // await this.update.click();
    // await this.patientInformation.click();
    // await verify(this.title);
    // await verify(this.Discription);
    // await verifyAndClick(this.add);
    // await verifyAndClick(RecordingPage.clearPatientInfo);
    // await verifyAndClick(this.save);
    // await verifyAndClick(this.update);
    // await verifyAndClick(this.cancel)
  async translate_SoapNote()
  {
    await waitForElement(this.quickActionButton)

    await this.quickActionButton.click();
    await this.translateSoapNote.click();
    await this.english.click();
    await verifyAndClick(this.yes);
    await waitForElement(this.PatientInformationTxtInEnlish);
    await this.copyMailPrint();
    await this.quickActionButton.click();
    await this.translateSoapNote.click();
    await verifyAndClick(this.spanish);
    await verifyAndClick(this.yes);
    await waitForElement(this.PatientInformationTxtOnSpanish);
    await driver.pause(4000);
  }
    // await this.update.click();
    // await this.patientInformation.click();
    // await verify(RecordingPage.titleInSpanish)
    // await verify(RecordingPage.discriptionInSpanish)
    // await verifyAndClick(this.add);
    // await verifyAndClick(RecordingPage.Ok)
    // await verifyAndClick(RecordingPage.clearPatientInfo);
    // await verifyAndClick(this.save);
    // await verifyAndClick(this.update);
    // await verifyAndClick(this.cancel);
  async Icd_cpt(){
    await verifyAndClick(this.quickActionButton);
    await verifyAndClick(this.generateIcdAndCptCodes);
    await waitForElement(this.icdAndCptCodes);
    await this.copyMailPrint();
    await verifyAndClick(this.regenerateIcdAndCpt);
    await verifyAndClick(this.yes);
    await waitForElement(this.icdAndCptCodes);
    await this.copyMailPrint();
  }
  async care_plan(){
    await waitForElement(this.quickActionButton)
    await this.quickActionButton.click();
    await this.generateCarePlan.click();
    await waitForElement(this.careplan);
    await this.copyMailPrint();
    await verifyAndClick(this.quickActionButton);
    await verifyAndClick(this.regenerateCarePlan);
    await verifyAndClick(this.yes);
    await waitForElement(this.carePlan);
    await this.copyMailPrint();
  }
  async feed_Back(){
    await waitForElement(this.quickActionButton)

    await this.quickActionButton.click();
    await this.generateFeedBack.click();
    await waitForElement(this.feedBack);
    await this.copyMailPrint();
    await verifyAndClick(this.quickActionButton)
    await verifyAndClick(this.quickActionButton);
    await verifyAndClick(this.regenerateFeedBack);
    await verifyAndClick(this.yes);
    await waitForElement(this.feedBack);
    await this.copyMailPrint();
  }
  async referal_Letter(){
    await waitForElement(this.quickActionButton)

    await this.quickActionButton.click();
    await this.generateReferalLetter.click();
    await waitForElement(this.referalLetter);
    await this.copyMailPrint();
    await this.quickActionButton.click();
    await verifyAndClick(this.regenerateReferalLetter);
    await verifyAndClick(this.yes);
    await waitForElement(this.referalLetter);
    await verifyAndClick(this.copyBtn);
    await verifyAndClick(this.mailBtn);
    await verifyAndClick(RecordingPage.emailSentOk)
    await verifyAndClick(this.printBtn);
    await verifyAndClick(this.printPageCancel);
    await verifyAndClick(this.printPageBackBtn);
    await this.quickActionButton.click();
    await verifyAndClick(this.regenerateSoapNote);
    await verifyAndClick(this.yes);
  }

  //AddPatitent Screen Functions
  async createNewPatient() {

    const name = faker.person.fullName();
    const year = faker.number.int({ min: 1920, max: 2023 });
    const month = faker.number.int({ min: 1, max: 12 });
    const date = faker.number.int({min: 1, max: 28})
    const dob = `${String(month).padStart(2, "0")}/${String(date).padStart(2, "0")}/${year}`;

    await verifyAndClick(this.patientName);
    await this.patientName.setValue(name)
    await this.DOB.click();
    await this.DOB.setValue(dob)
 
    await this.genderPicker.click();
    await verifyAndClick(this.female);
    await this.genderPicker.click();
    await verifyAndClick(this.other);
    await this.genderPicker.click();
    await verifyAndClick(this.unknown);
    await this.genderPicker.click();
    await this.male.click();
    await verify(this.cancel);
    await verifyAndClick(this.addAndProceed);
    await RecordingPage.patientCreatedOk.click()
    return name;
  }
  async addPatitentWrn() {
    await verifyAndClick(this.addAndProceed);
    await waitForElementToBeVisible(this.nameError);
    await waitForElementToBeVisible(this.dateError);
    await waitForElementToBeVisible(this.genderError);
  }

  //Encounter Screen Function
  async noteSearch(randomName) {
    await this.searchNote.click();
    await this.searchNote.setValue(randomName);
  }
  async noteSearchVerification(randomName) {
    await this.noteSearch(randomName);
    return $(`//XCUIElementTypeStaticText[@name="${randomName}"]`);
  }

  async deleteEncounter() {
    await this.deleteSwipe();
    await this.deleteBtn.click();
    await this.deleteCancel.click();
    await this.deleteSwipe();
    await this.deleteBtn.click();
    await this.deleteConformation.click();
  }
  
  //Patient Screen
  async Search(patientName) {
    await this.patientSearch.click();
    await this.patientSearch.setValue(patientName);
  }
  async patientSearchAndContinue(patientName) {
    await this.Search(patientName);
    await verifyAndClick(`//XCUIElementTypeStaticText[@name="${patientName}`);
  }
  //Search Patient
  async patientSearch(patient) {
    await this.searchPatientsField.click();
    await this.searchPatientsField.setValue(patient);
    await driver.pause(2000);
    const patientElement = await this.patientName(patient);
    await verifyAndClick(patientElement);
    await verifyAndClick(this.proceedBTn);
  }
  async startConversation() {
    await verifyAndClick(RecordingPage.acknowledgeCheckBox);
    await verifyAndClick(this.startConversationBtn);
  }

  //Recording Screen
  async recordAudio() {
    await AudioManager.playAudio("spanish");
    await driver.pause(80000);
    await AudioManager.stopAudio();
    await this.pauseBtn.click();
    await this.stopBtn.click();
  }
  async CDSSConformation() {
    if (await this.notEnoughTranscript.isDisplayed()) {
      console.error(
        "Recording failed: Please provide a proper medical conversation"
      );
    } else {
      await waitForElement(this.SoapNoteBtn);
      console.log("Recording successful: Transcript generated");
    }
    await driver.pause(120000);
    await verifyAndClick(this.Transcript);
    await verifyAndClick(this.Cdss);
    await driver.pause(2000);
    const elements =
      this.SuggestedDiagnosisAndInterventions ||
      this.SuggestedDiagnosticTesting ||
      this.SuggestedMedications || //asdvwrfversdvcwreasvfdcweafSvdxc wrefasvdcxz
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

  async Transcript_Verification(){
    await driver.pause(3000);
    await verifyAndClick(this.Transcript);
    await RecordingPage.dataScaning(RecordingPage.cleanedTranscriptScroll); // dsvceafsdc
    await verifyAndClick(this.originalTrnscript);
    await verifyAndClick(this.claeanedTranscript);
    await this.SoapNoteBtn.click();
  }
  async SOAPNOTE_Verification(){
    await verify(this.PatientInformationTxtInSpanish)
    await RecordingPage.dataScaning(RecordingPage.soapNoteScroll)
    await this.copyMailPrint()

  }


  async recordAudioAndSaveAsDraft() {
    await AudioManager.playAudio("spanish");
    await driver.pause(40000);
    await AudioManager.stopAudio();
    await verifyAndClick(this.Back);
    await verifyAndClick(this.saveAsDraftBtn);
  }
  async recordAudioAndContinueForPrevEncounter() {
    await this.recordAudio();
    await waitForElement(this.PrevEncounterRef);
    await this.no.click();
  }
  async recordAudioForDraft() {
    await this.recordAudio();
    await waitForElementToBeVisible(this.PrevEncounterRef);
    await verifyAndClick(this.ok);
    await this.ctsConformation();
  }
  async finalizeEncounter() {
    await waitForElement(this.quickActionButton);
    await this.finaliseEncounter.click();
    // await verify(this.finaliseEncounteSuccessrTxt);
    await driver.pause(5000);
  }

  async multipleConversation() {
    await waitForElement(this.addConversation);
    await verifyAndClick(this.addConversation);
    await verifyAndClick(this.no);
    await verifyAndClick(this.addConversation);
    await verifyAndClick(this.ok);
    await verify(this.pauseBtn);
    await this.recordAudioAndSaveAsDraft();
    await driver.pause(5000);
    await LoginPage.restartApp();
    await verifyAndClick(this.encounter);
    await driver.pause(5000);
    await clickDraftTranscript()
    await waitForElement(this.finaliseEncounter);
    await verifyAndClick(this.finaliseEncounter);
    await driver.pause(3000);
    await verifyAndClick(this.resumeConversationForMultipleConverstionScenario);
    await verifyAndClick(
      this.resumeConversationForMultipleConverstionScenarioYes
    );
    await this.recordAudio();
  }
  async multipleConversationForExistingEnconter() {
    await this.multipleConversation();
    await this.PrevEncounterRef.click();
    await this.no.click();
  }
  async second_Conversation_For_Existing_Encounter() {
    await waitForElement(this.addConversation);
    await verifyAndClick(this.addConversation);
    await verifyAndClick(this.ok);
    await this.recordAudio();
    await this.PrevEncounterRef.click();
    await this.no.click();
  }
  async second_Conversation_For_New_Encounter() {
    await waitForElement(this.addConversation);
    await verifyAndClick(this.addConversation);
    await verifyAndClick(this.ok);
    await this.recordAudio();
  }
  async third_Conversation_For_Existing_Encounter() {
    await this.multipleConversation();
    await this.PrevEncounterRef.click();
    await this.no.click();
  }
  async third_Conversation_For_New_Encounter() {
    await this.multipleConversation();
  }
  async recordAudioforOfflineMode() {
    await AudioManeger.playAudio("spanish");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await this.recordAudioforOfflineModeMT();
    await driver.pause(10000);
    await verifyAndClick(this.pauseBtn);
    await AudioManeger.pauseAudio();
    console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
    await driver.pause(20000);
    await this.PlayBtn.click();
    await AudioManeger.resumeAudio();
    console.log("Audio resumed:", AudioManeger.currentAudioFile);
    await driver.pause(100000);
    await AudioManeger.pauseAudio();
    await driver.pause(2000);
    await Network();
    await driver.pause(2000);
    await AudioManeger.resumeAudio();
    await driver.pause(5000);
    await driver.terminateApp("com.thinkhat.nokiTest");
    await AudioManeger.pauseAudio();
    await driver.pause(10000);
    await driver.activateApp("com.thinkhat.nokiTest");
    await driver.pause(10000);
    await verifyAndClick(this.continueBtn);
    console.log(
      "Here app got restarted the app while it is in the recording screen and we verified with the app still in that page"
    );
    await AudioManeger.resumeAudio();
    await driver.pause(100000);
    await AudioManeger.pauseAudio();
    await verifyAndClick(this.stopBtn);
    console.log(
      "here after app got closed while recording we magaing automatically again resumed the audio"
    );
    await driver.pause(5000);
    await verify(this.offlineConversationSaved);
    await Network()
    console.log(
      "here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
    if (this.no.isDisplayed()) {
      await this.no.click();
      console.log(
        "Here her are undrgoing conversation may be s followup or the patient is visted the doctor previously"
      );
    } else {
      console.log(
        "This Encounter we are recording for this particulat patient is for the First time"
      );
    }
  }

  async recordAudioforOfflineModeMT() {
    let timesToRun = 3;
    let count = 0;
    console.log(`Loop will run ${timesToRun} times`);
    for (let i = 0; i < timesToRun; i++) {
      await driver.pause(10000);
      await Network();
      await driver.pause(10000);
      await verify(this.offlineModeRTranscription);
      await driver.pause(60000);
      await Network();
      count++;
      console.log(`Offline Mode Loop we are Running Now  ${i + 1} completed`);
    }
  }
  get title() {
    return $(`//android.widget.EditText[@text="Título"]`); 
  }
  get discription() {
    return $(`//android.widget.EditText[@text="Descripción"]`);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }  get () {
    return $(``);
  }


  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  get () {
    return $(``);
  }

  get () {
    return $(``);
  }
  get () {
    return $(``);
  }
  async bloodGroup(text) {
    return await waitForElement(
      $(
        `//android.widget.TextView[@text="${text}"]`
      )
    );
  }

  async bloodName(name) {
    return await waitForElement($(`//android.widget.TextView[@text="${name}"]`));
  }

  async UpdatePatientInfo() {
    await waitForElement(this.update);
    await verifyAndClick(this.update);
    await verifyAndClick(this.PatientInformationTxtInSpanish);
    await verifyAndClick(this.title);
    await this.title.setValue("Grupo sanguíneo");
    await verifyAndClick(this.discription);
    await this.discription.setValue("B postivo");
    await back()
    await verifyAndClick(RecordingPage.add);
    await verifyAndClick(RecordingPage.save);
    await this.bloodGroup("Grupo sanguíneo");
    await this.bloodName("B postivo");
  }


  async manualUpdate() {
    await waitForElement(this.SoapNoteScreenTxtField);
    await verifyAndClick(this.SoapNoteScreenTxtField);
    await this.SoapNoteScreenTxtField.setValue(
      "Grupo sanguíneo O postivo"
    );
    await back()
    await verifyAndClick(RecordingPage.send);
    await this.bloodGroup("Grupo sanguíneo");
    await this.bloodName("O postivo");
  }


  async hayNoki() {
    await waitForElement(this.micOn);
    await verifyAndClick(this.micOn);
    await driver.pause(2000);
    await playTTS("Grupo sanguíneo O negativo", "Alex", 1.1);
    await driver.pause(2000);
    await verifyAndClick(this.MicStop);
    await verifyAndClick(RecordingPage.send);
    await this.bloodGroup("Grupo sanguíneo");
    await this.bloodName("O negativo");
  }
}
export default new SpanishLanguage();

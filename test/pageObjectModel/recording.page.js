import { verify, verifyAndClick, waitForElement } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js'
import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js'
import EncounterPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/encounter.page.js'

class RecordingPage {
    get back() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'); 
    }
    get recordingPageBack() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'); 
    }
    get newEnconterNoticeTxt() 
    { 
        return $('//android.widget.TextView[@text="Please ensure you have verbal consent from the patient before using Noki\'s AI ambient scribe for clinical documentation View Consent"]');
    }
    get newEnconterNoticeTxtCheckBox() 
    { 
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'); 
    }
     get ContinueBtn()
    {
        return $('~CONTINUE')
    }
    get saveAsDraftBtn()
    {
        return $('~SAVE AS DRAFT')
    }
    get discardBtn()
    {
        return $('~DISCARD')
    }
    get templateSoapNote() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Template, SOAP Note"]'); 
    }
    get launguageSelectior() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Scribe Language, English"]/com.horcrux.svg.SvgView'); 
    }
    get launguageSelectText() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Start Conversation"]/android.view.ViewGroup/android.view.View'); 
    }
    get doneBtn() 
    { 
        return $(''); 
    }
    get englishLanOpt() 
    { 
        return $('~English'); 
    }
    get spanishLanOpt() 
    { 
        return $('~Español'); 
    }


    get acknowledgeCheckBox() 
    { 
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'); 
    }
    get acknowledgeCheckConText() 
    { 
        return $('//android.widget.TextView[@text="Acknowledge that you have received verbal consent from the patient to use Noki\'s AI Ambient Scribe for clinical documentation. View Consent\"]'); 
    }
    get acknowledgeAndContinueBtn() 
    { 
        return $('~Acknowledge & Continue'); 
    }
    get acknowledgeAndContinueCancelBtn() 
    { 
        return $('~Cancel'); 
    }
    get acknowledgeAndContinueCloseBtn() 
    { 
        return $('//android.widget.TextView[@text="X"]'); 
    }
    get startConversationBtn() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Start Conversation"]/android.view.ViewGroup/android.view.View'); 
    }
   
    get pauseBtn() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView'); 
    }
    get patientCreatedOk() 
    { 
        return $(''); 
    }
    get resumeRecording() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Resume Recording"]/android.view.ViewGroup/android.view.View'); 
    }
    get cdssDisabled() 
    { 
        return $('//android.widget.TextView[@text="CDSS is disabled. Please enable from Settings to view"]'); 
    }
    get resumeRecordingConformationYes() 
    { 
        return $('~YES'); 
    }
    get resumeRecordingConformationText() { 
        const date = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        return $(`//android.widget.TextView[@text="By resuming, the ongoing conversation will be recorded and the draft transcript will be updated under the encounter dated ${date}. Are you sure you want to proceed?"]`);    
    }
     
    get resumeRecordingConformationNO() 
    { 
        return $('~NO'); 
    }

    get stopBtn() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[2]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView'); 
    }
    get playBtn() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView'); 
    }
    get resumeBtn() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[1]/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView'); 
    }
    get PrevEncounterRef() 
    { 
        return $(`//android.widget.TextView[@text="Would you like to use the previous encounter's SOAP note as context?"]`); 
    }
    get PrevEncounterRefNo() 
    { 
        return $('~NO'); 
    }
    get PrevEncounterRefYes() 
    { 
        return $('~YES'); 
    }
    get SoapNoteBtn() 
    { 
        return $('//android.view.View[@content-desc="SOAP Note"]/android.view.ViewGroup'); 
    }
    get soapNoteTable(){
        return $('')
    }
    get patientInformation() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]'); 
    }
    get subjective() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[11]'); 
    }
    get objective() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]'); 
    }
    get assessment() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[9]'); 
    }
    get plan() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]'); 
    }
    get additinalInformation() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]'); 
    }
    
    get age() 
    { 
        return $('//android.widget.TextView[@text="Age"]'); 
    }
    get gender() 
    { 
        return $('//android.widget.TextView[@text="Gender"]'); 
    }
    get encounterDate() 
    { 
        return $('//android.widget.TextView[@text="Encounter Date"]'); 
    }

    get chiefComplain() 
    { 
        return $('//android.widget.TextView[@text="Chief Complaint (CC)"]'); 
    }
    get historyofprsentIllness() 
    { 
        return $('//android.widget.TextView[@text="History of Present Illness (HPI)"]'); 
    }
    get pastMedicalHistory() 
    { 
        return $('//android.widget.TextView[@text="Past Medical History"]'); 
    }
    get socialHistory() 
    { 
        return $('~Add Social History'); 
    }
    get familyHistory() 
    { 
        return $('~Add Family History'); 
    }  
    get reviewofSystems() 
    { 
        return $('//android.widget.TextView[@text="Review of Systems (ROS)"]'); 
    }
    get vitalSigns() 
    { 
        return $('//android.widget.TextView[@text="Vital Signs"]'); 
    }
    get generallAppearance() 
    { 
        return $('//android.widget.TextView[@text="General Appearance"]'); 
    }
    get physicalExaminations() 
    { 
        return $('//android.widget.TextView[@text="Physical Examination"]'); 
    }
    get Diognosis() 
    { 
        return $('//android.widget.TextView[@text="Diagnoses"]'); 
    }
    get clinicalImpression() 
    { 
        return $('//android.widget.TextView[@text="Clinical Impression"]'); 
    }
    get treatmentPlan() 
    { 
        return $('//android.widget.TextView[@text="Treatment Plan"]'); 
    }
    get patitentEducation() 
    { 
        return $('//android.widget.TextView[@text="Patient Education"]'); 
    }
    get followUp() 
    { 
        return $('//android.widget.TextView[@text="Follow-Up"]'); 
    }
    get medications() 
    { 
        return $('//android.widget.TextView[@text="Follow-Up"]'); 
    }

    get allergies() 
    { 
        return $('//android.widget.TextView[@text="Allergies"]'); 
    }
    get immunization() 
    { 
        return $('//android.widget.TextView[@text="Immunizations"]'); 
    }
    get referal() 
    { 
        return $('//android.widget.TextView[@text="Referral"]'); 
    }
    get Transcript() 
    { 
        return $('~Transcript'); 
    }





    //multiple Conversations
    get addConversation() 
    { 
        return $(''); 
    }
    get multipleConcversationConfertmation() 
    { 
        return $(''); 
    }
    get multipleConcversationCancel() 
    { 
        return $(''); 
    }
    get resumeConversation() 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }





    //Quick Action Related 
    get quickActions() 
    { 
        return $(''); 
    }
    get quicktionsSearchFields() 
    { 
        return $(''); 
    }
    get regenerateSoapNote() 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $('');   
    }

    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }
    get () 
    { 
        return $(''); 
    }

    get Cdss() 
    { 
        return $('~CDSS'); 
    }
    get SuggestedDiagnosisAndInterventions() 
    { 
        return $('//android.widget.TextView[@text="Suggested Diagnosis and Intervention"]'); 
    }
    get SuggestedQuestions() 
    { 
        return $('//android.widget.TextView[@text="Suggested Questions"]'); 
    }
    get SuggestedMedications() 
    { 
        return $('//android.widget.TextView[@text="Suggested Medications"]'); 
    }
    get SuggestedDiagnosticTesting() 
    { 
        return $('//android.widget.TextView[@text="Suggested Follow-ups"]'); 
    }
    get showOriginalTrnscript() 
    { 
        return $('~Show Original Transcript'); 
    }
    get showOriginalTrnscriptTableView() 
    { 
        return $(''); 
    }

    get showClaeanedTranscript() 
    { 
        return $('~Show Cleaned Transcript'); 
    }
    get showClaeanedTranscriptTableView() 
    { 
        return $(''); 
    }
    get copyBtn() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/com.horcrux.svg.SvgView[1]'); 
    }
    get mailBtn() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/com.horcrux.svg.SvgView[2]'); 
    }
   
    get printBtn() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/com.horcrux.svg.SvgView[3]'); 
    }
    get SoapNoteScreenTxtField() 
    { 
        return $('//android.widget.EditText[@text="Press on the mic and start speaking..."]'); 
    }
 
    get Mic() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/com.horcrux.svg.SvgView[1]'); 
    }
    get send() 
    { 
        return $('//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/com.horcrux.svg.SvgView[2]'); 
    }
    get finaliseEncounter() 
    { 
        return $('~Finalize Encounter'); 
    }
    get finaliseEncounterTxt() 
    { 
        return $('//android.widget.TextView[@text="Are you sure you want to finalise the encounter?"]'); 
    }
    get finaliseEncounterOk() 
    { 
        return $('~Yes'); 
    }
    get finaliseEncounterCancel() 
    { 
        return $('~No'); 
    }
   
    get connectionLost(){

        return $('//android.widget.TextView[@text="Connection Lost!"]');
    }
    get connectionLostDescription(){

        return $('//android.widget.TextView[@text="You`re currently offline. Please check your internet connection and try again."]');
    }
    get backToPatientScreen() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'); 
    }

   
    async Audio(){
        await driver.execute('mobile: shell', 
            {command: 'am start -a android.intent.action.VIEW -d "https://youtu.be/5t6Yr4eZ9wY?si=32xirVzLBsHIrZgJ"' });        
            await driver.pause(100000);
            await driver.activateApp('com.thinkhat.heynoki');       
         }
         
    async recordAudio()
    {
        await this.Audio();
        await this.stopBtn.click();
    }
    async ctsConformation()
    {
        await waitForElement(this.SoapNoteBtn)
        await verifyAndClick(this.Transcript)
        await verifyAndClick(this.Cdss)
        await driver.pause(10000)
        const element = this.SuggestedDiagnosisAndInterventions || 
                        this.SuggestedDiagnosticTesting || 
                        this.SuggestedMedications || 
                        this.SuggestedQuestions;
        await verify(element);
        await driver.pause(3000)
        await this.Transcript.click()
        await driver.execute('mobile: swipe', { direction: 'up' });

        await this.showOriginalTrnscript.click()
        await driver.execute('mobile: swipe', { direction: 'up' });

        await this.showClaeanedTranscript.click()
        await driver.execute('mobile: swipe', { direction: 'up' });
        
        await this.SoapNoteBtn.click()
        await driver.execute('mobile: swipe', { direction: 'up' });
        await driver.execute('mobile: swipe', { direction: 'down' });
        await driver.execute('mobile: swipe', { direction: 'down' });
    }

     async multipleConversation() 
    {
        await this.AddConversation.click()
        await this.no.click()
        await this.yes.click()
        await this.AddConversationConfirmationYes.click()
        await verify(this.pauseBtn)
        await this.recordAudioAndSaveAsDraft()
        await HomePage.encounter.click()
        await verifyAndClick(EncounterPage.draft)
        await this.finaliseEncounter.click()
        await this.ok.click()
        await this.resumeConversationForMultipleConverstionScenario.click()
        await this.Yes.click()
        await this.recordAudio()
        await this.ctsConformation()
    }

    async finalizeEncounter() 
    {
        await verifyAndClick(this.SoapNoteScreenTxtField);
        await this.doneBtn.click()
        await verify(this.send);
        await verifyAndClick(this.copyBtn);
        await verifyAndClick(this.update)
        await verify(this.save)
        await verifyAndClick(this.AddPatientInformation)
        await verify(this.title)
        await verify(this.Discription)
        await verifyAndClick(this.add)
        await verifyAndClick(this.ok)
        await verifyAndClick(this.clearPatientInfo)
        await verifyAndClick(this.cancel)
        await verifyAndClick(this.mailBtn);
        await verifyAndClick(this.emailSentOk);
        await verifyAndClick(this.printBtn);
        await verify(this.printDownload);
        await verifyAndClick(this.printPageCancel);
        await verifyAndClick(this.printPageBackBtn);
        await this.multipleConversation()
        await this.finaliseEncounter.click()
        await this.finaliseEncounterOk.click()
        await verify(this.finaliseEncounterTxt);
        await this.ok.click();
        try 
        {
            if(this.update.isDisplayed())
            {
                await verify(this.update)
                console.error("%c even after finalized encounter is confirmed we are able to see the update Button", "color: red");                
            }    
        } 
        catch (error) 
        {
            console.error("An error occurred:", error);   
        }
        await this.backToPatientScreen.click();
    }
    
    async recordAudioAndSaveAsDraft(){
        await this.Audio()
        await driver.pause(3000)
        await this.recordingPageBack.click()
        await verifyAndClick(this.saveAsDraftBtn)
    }
   
    async recordAudioAndContinueForPrevEncounter(){
        await this.recordAudio()
        await waitForElementToBeVisible(this.PrevEncounterRef)
        await this.PrevEncounterRefYes.click()
        await this.ctsConformation()

    }

    async recordAudioForDraft(){
        await verifyAndClick(this.resumeRecordingConformationYes)
        await this.recordAudio()
        await this.ctsConformation()
    }

    async startConversation(){
        await verifyAndClick(this.acknowledgeCheckBox)
        await verifyAndClick(this.startConversationBtn)
    }

    async sleepModeConformation(){
        await driver.activateApp('com.thinkhat.heynoki');
        await HomePage.encounter.click()
        await verifyAndClick(EncounterPage.draft)
        try {
            await verify(this.SoapNoteBtn)
            
        } catch (error) {
            console.error("the soap note is not yet realy displayed or somthing unexpected happened")
            
        }
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

    //         // Perform a scroll (swipe up)
    //         await driver.execute('mobile: swipe', { direction: 'up' });
    //     }
    //     return allData;
    // }
}
export default new RecordingPage();













async function getScrollableData() {
    const scrollView = $('//XCUIElementTypeTable');
    let allData = [];
    let previousElements = [];

    while (true) {
        // Get visible elements (e.g., table cells)
        const cells = $$('//XCUIElementTypeCell');
        const currentElements = await Promise.all(cells.map(cell => cell.getText()));

        // Check if we’ve reached the end (no new data)
        if (currentElements.every(elem => previousElements.includes(elem))) {
            break;
        }

        // Add new elements to the result
        allData = [...new Set([...allData, ...currentElements])];
        previousElements = currentElements;

        // Perform a scroll (swipe up)
        await driver.execute('mobile: swipe', { direction: 'up' });
    }

    return allData;
}
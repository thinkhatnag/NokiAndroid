import { hideKeyboard } from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";
import HomePage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js";
class SearchPatientPage {
    get patient() {
        return $('//android.widget.TextView[@text="Select Patient"]');
    }
    get searchPatientsField() {
        return $('//android.widget.EditText[@text="Search Patient"]');
    }
    get addPatient() {
        return $('~Add Patient');
    }
  
    get proceedBTn(){
        return $('~Proceed');
    }
    get cancelBtn() {
        return $('~Cancel');
    }
    get nokiDashboard() {
        return $('~Noki Dashboard');
    }
    get startNewEncounter() {
        return $('~Start New Encounter');
    }
   
    async patientName(patient) {
        
        const scribeName = `${patient.charAt(0).toUpperCase()}, ${patient}`;
        return $(`//android.view.ViewGroup[@content-desc="${scribeName} "]`);

    }////android.view.ViewGroup[@content-desc="C, Chandu "]
    async patientSearch(patient) {
        await this.searchPatientsField.click();
        await this.searchPatientsField.addValue(patient);
        const patientElement = await this.patientName(patient);
        await hideKeyboard()
        await patientElement.click();
    }
    

    async startNewConversation(patient){
        await HomePage.startNewEncounterButton.click()
        await this.patientSearch(patient);
        await driver.pause(3000)
        await this.proceedBTn.click();
    }
    
   

}
export default new SearchPatientPage();
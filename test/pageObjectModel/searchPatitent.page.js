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
        const scribeName = await $(`//android.widget.TextView[@text="${patient}"]`);
        return scribeName;
    }
    
    async patientSearch(patient) {
        await this.searchPatientsField.click();
        await this.searchPatientsField.addValue(patient);
        const scribeName = await this.patientName(patient);
        await hideKeyboard();
        await driver.pause(3000);
        await scribeName.click(); // Directly click the element
    }
    

    async startNewConversation(patient){
        await HomePage.startNewEncounterButton.click()
        await this.patientSearch(patient);
        await driver.pause(3000)
        await this.proceedBTn.click();
    }
    
   

}
export default new SearchPatientPage();
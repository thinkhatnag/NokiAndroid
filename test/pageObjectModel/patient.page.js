import { hideKeyboard, verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';

class PatientPage {
    get patients() 
    { 
        return $('//android.widget.TextView[@text="Patients"]'); 
    }

    get patientSearch() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'); 
    }
    get patientSearchTextField() 
    { 
        return $('//android.widget.EditText[@text="Search Patient"]'); 
    }
    get nokiDashboard() 
    { 
        return $('~android.widget.EditText'); 
    }
    get addPatient() 
    { 
        return $('~Add New Patient'); 
    }
    get clear() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup'); 
    }
    get cancel() 
    { 
        return $('//android.widget.TextView[@text="Cancel"]'); 
    }
    get noPatitentFound() 
    { 
        return $('//android.widget.TextView[@text="No Patients Found"]'); 
    }
    get goBack() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get startNewEncounter() 
    { 
        return $('~Start New Encounter'); 
    } 

    async Search(patientName) {
        await this.patientSearch.click();
        await this.patientSearchTextField.setValue(patientName);
        await hideKeyboard()
    }

    async patientSearchAndContinue(patientName) {
        await this.Search(patientName);
        try {
            const patientElement = $(`//android.widget.TextView[@text="${patientName}"]`);
            await verifyAndClick(patientElement);       
         } catch (error) {
            console.error(`Element with name "${patientName}" not found:`, error);
        }    
    }
}

export default new PatientPage();
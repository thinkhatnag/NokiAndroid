import {verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import RecordingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js';
import { faker } from '@faker-js/faker';


class AddPatitentPage{
    get addPatientTxt() {
        return $('//android.widget.TextView[@text="Add Patient"]');
    }
    get patientName() {
        return $('//android.widget.EditText[@text="First Name & Last Name"]');
    }
    get DOB() {
        return $('//android.widget.EditText[@text="DOB"]');
    }
    get previousMonth() {
        return $('~Previous month');
    }
    get nextMonth() {
        return $('~Next month');
    }
  
    // get monthPicker() {
    //     const currentMonth = new Date().toLocaleString('en-US', { month: 'long' }); 
    //     return $(``);
    // }
    get  yearPicker() 
    {
        return $('//android.widget.TextView[@resource-id="android:id/date_picker_header_year"]');
    }
    get  yearPickerScrollView()
    {
        return $('//android.widget.ListView[@resource-id="android:id/date_picker_year_picker"]');
    }
    
    get  ok() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }
    get  cancel() {
        return $('//android.widget.Button[@resource-id="android:id/button2"]');
    }
    get  genderPicker() {
        return $('//android.view.ViewGroup[@content-desc="Gender, *, Gender"]');
    }
    get male() {
        return $('//android.widget.TextView[@text="Male"]');
    }
    get female() {
        return $('//android.widget.TextView[@text="Female"]');
    }
    get other() {
        return $('//android.widget.TextView[@text="Other"]');
    }
    get unknown() {
        return $('//android.widget.TextView[@text="Unknown"]');
    }
    get addAndProceed() {
        return $('~Add and Proceed');
    }
    get cancel() {
        return $('~Cancel');
    }
    get nameError() {
        return $('//android.widget.TextView[@text="First Name & Last Name is required"]');
    } 
    get dateError() {
        return $('//android.widget.TextView[@text="DOB is required"]');
    } 
    get genderError() {
        return $('//android.widget.TextView[@text="Gender is required"]');
    }

    async yearElement(year)
    {
        return $(`//android.widget.TextView[@resource-id="android:id/text1" and @text="${year}"]`);
    }
    
   async creatNewPatient()
    {
    const name = faker.person.fullName(); 
    const year = faker.number.int({ min: 1920, max: 2023 }); 
    const month = faker.number.int({ min: 1, max: 12 });
    const day = faker.number.int({ min: 1, max: 28 }); 

    const dob = new Date(year, month - 1, day) 
  .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

    await this.patientName.click();
    await this.patientName.setValue(name);
    await this.DOB.click();
    await this.DOB.setValue(dob)
    // await this.yearPicker.click();
    // const yearElement = await driver.$(`-android uiautomator:new UiSelector().text("${year}")`);
    // await yearElement.scrollIntoView();
    // await yearElement.click();
    // await this.previousMonth.click();
    // await this.previousMonth.click();
    // await this.nextMonth.click();patientName
    // await this.ok.click();
    await this.genderPicker.click();
    await verify(this.female);
    await verify(this.other);
    await verify(this.unknown);
    await this.male.click();
    await verify(this.cancel);
    await verifyAndClick(this.addAndProceed);
    return name;
    }
        

    async addPatitentWrn(){
        await this.addAndProceed.click()
        await verify(this.nameError)
        await verify(this.dateError)
        await verify(this.genderError)
    }
}
export default new AddPatitentPage();
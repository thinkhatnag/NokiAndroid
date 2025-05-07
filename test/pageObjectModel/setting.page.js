import { back, hideKeyboard, verify,  verifyAndClick,  } from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";
import HomePage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js";
class SettingPage {
    get stettings() 
    { 
        return $('//android.widget.TextView[@text="Settings"]'); 
    }
    get startNewEncounter() 
    { 
        return $(''); 
    }
    get profileSettings() 
    { 
        return $('//android.widget.TextView[@text="Profile Settings"]'); 
    }
    get help() 
    { 
        return $('~Help'); 
    }
    get launguage() 
    { 
        return $('~Language, English (en-US)'); 
    }
    get generalSettings() 
    { 
        return $('~General Settings'); 
    }
    get Done() 
    { 
        return $('~Done'); 
    }
    get logoutBtn() 
    { 
        return $('//android.widget.TextView[@text="Logout"]'); 
    }
    get edit() 
    { 
        return $('~Edit'); 
    }
    get firstName() 
    { 
        return $('//android.widget.EditText[@resource-id="firstName"]'); 
    }
    get middleName() 
    { 
        return $('//android.widget.EditText[@resource-id="middleName"]'); 
    }
    get lastName() 
    { 
        return $('//android.widget.EditText[@resource-id="lastName"]'); 
    }
    get email() 
    { 
        return $('~email'); 
    }
    get save() 
    { 
        return $('~Save'); 
    }
    get cancel() 
    { 
        return $('~Cancel'); 
    }
    get speciality() 
    { 
        return $('~speciality'); 
    }
    get Idioma() 
    { 
        return $('~Idioma, Español (es-PR)'); 
    }

    get doctorname() 
    { 
        return $('//android.widget.TextView[@text="nag subbarayudu"]'); 
    }
    get supportback() 
    { 
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]'); 
    }
    get profileback() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]'); 
    }
    get consultWithUs() 
    { 
        return $('~Consult with us!'); 
    }
    get WriteToUSNow() 
    { 
        return $('~Write to us now!'); 
    }
    
    get english() 
    { 
        return $('~English (en-US)'); 
    }
    get Inglish()
    {
        return $('~English (en-US)'); 

    }
    get home(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[1]');
    }
    get spanish() 
    { 
        return $('~Español (es-PR)'); 
    }
    get selectAllEnabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get selectAllDisabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get cdssEnabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get cdssDisabled(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup')
    }
    get diognosisJustificationDisabled(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup')
    }
    get diognosisJustificationEnabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get logoutcancelationBtn() 
    { 
        return $('//android.widget.Button[@resource-id="android:id/button2"]'); 
    } 
     get logoutConformationBtn() 
    { 
        return $('//android.widget.Button[@resource-id="android:id/button1"]'); 
    }    
    get logingoutText() 
    { 
        return $('//android.widget.TextView[@resource-id="android:id/message"]'); 
    } 
    get logoutBtn() 
    { 
        return $('~Logout'); 
    } 
    get sync() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup')

    } 
    get whatsapp() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Consult"]/android.view.ViewGroup[1]'); 
    } 
    get text() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Consult"]/android.view.ViewGroup[2]'); 
    } 
    get Gmail() 
    { 
        return $('//android.view.ViewGroup[@content-desc="Consult"]/android.view.ViewGroup[3]'); 
    } 

    async  SettingScreen()
    {
        await verifyAndClick(this.edit)
        await verifyAndClick(this.firstName)
        await this.firstName.clearValue()
        const FirstName =await this.firstName.setValue('Naga')
        await hideKeyboard()
        await verifyAndClick(this.middleName)
        const MiddleName=await this.middleName.setValue('Surendra')
        await hideKeyboard()
        await verify(this.lastName)
        await this.lastName.clearValue()
        const LastName=await this.lastName.setValue('Subbarayudu')
        await hideKeyboard()
        await verifyAndClick(this.cancel)
        await verifyAndClick(this.edit)
        await verify(FirstName)
        await verify(MiddleName)
        await verify(LastName)
        await back()
        await back()
// Assuming verifyAndClick is a custom function to verify and click an element
await verifyAndClick(this.help);
await driver.pause(5000);

await verifyAndClick(this.whatsapp);
await driver.pause(5000);
// WhatsApp package name for Android
const whatsappPackage = "com.whatsapp";

// Check if WhatsApp is in the foreground
const currentPackage = await driver.getCurrentPackage();
if (currentPackage !== whatsappPackage) {
    throw new Error(`WhatsApp (${whatsappPackage}) is not active. Current package: ${currentPackage}`);
}

console.log("WhatsApp is active");

// Pause for 5 seconds
await driver.pause(5000);

// Switch back to the original app
await driver.activateApp('com.thinkhat.heynoki');   

await verifyAndClick(this.Gmail);
await driver.pause(5000);

// Verify Gmail is active
const gmailPackage = "com.google.android.gm";
const gmailCurrentPackage = await driver.getCurrentPackage();
if (gmailCurrentPackage !== gmailPackage) {
    throw new Error(`Gmail (${gmailPackage}) is not active. Current package: ${gmailCurrentPackage}`);
}

console.log("Gmail is active");
await driver.pause(5000);
await driver.activateApp('com.thinkhat.heynoki');   
// Open Settings and Help, then click text element to launch Messages
await verifyAndClick(this.text)
await driver.pause(5000)

// Verify Messages is active
const messagesPackage = "com.google.android.apps.messaging";
const messagesCurrentPackage = await driver.getCurrentPackage();
if (messagesCurrentPackage !== messagesPackage) {
    throw new Error(`Messages (${messagesPackage}) is not active. Current package: ${messagesCurrentPackage}`);
}

console.log("Messages is active");

// Pause for 5 seconds and switch back
await driver.pause(5000);
await driver.activateApp('com.thinkhat.heynoki');  
await back() 
        await verifyAndClick(this.launguage)
        await verifyAndClick(this.spanish)
        await verifyAndClick(this.Idioma)
        await verifyAndClick(this.Inglish)
        await verifyAndClick(this.generalSettings)
        await verifyAndClick(this.cdssEnabled)
        await verifyAndClick(this.diognosisJustificationEnabled)
        await verifyAndClick(this.cancel)
        await verifyAndClick(this.generalSettings)
        await verifyAndClick(this.cdssEnabled)
        await (this.diognosisJustificationEnabled)
        await verifyAndClick(this.Done)
        await verifyAndClick(this.generalSettings)
        await verifyAndClick(this.cdssDisabled)
        await verifyAndClick(this.diognosisJustificationDisabled)
        await verifyAndClick(this.Done)        
        await verifyAndClick(this.logoutBtn)
        await verifyAndClick(this.logoutcancelationBtn)
        await verifyAndClick(this.home)
    }
}
export default new SettingPage();
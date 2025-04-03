import RecordingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import { network } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import loginPage from './login.page';

class EncounterPage {
    get Encounter() 
    { 
        return $('//android.widget.TextView[@text="Notes"]'); 
    }
    get searchNoteBTN() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'); 
    }
    get searchNoteTextFireld() 
    { 
        return $('//android.widget.EditText[@text="Search Notes"]'); 
    }
  
    get startNewEncounter() 
    { 
        return $('~Start New Encounter'); 
    }
    get clear() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/com.horcrux.svg.SvgView'); 
    }
    get cancel() 
    { 
        return $('//android.widget.TextView[@text="Cancel"]'); 
    }
    get legPain() 
    { 
        return $(''); 
    }
    get draft() 
    { 
        return $('(//android.widget.TextView[@text="Draft Transcript"])[1]'); 
    }
    get deleteBtn() 
    { 
        return $(''); 
    }

    get deleteCancel() 
    { 
        return $('//android.widget.Button[@resource-id="android:id/button2"]'); 
    }

    get deleteConformation() 
    { 
        return $('//android.widget.Button[@resource-id="android:id/button1"]'); 
    }
    get noEncounterFound() 
    { 
        return $('//android.widget.TextView[@text="No Notes Found"]'); 
    }
    get encounterDate() { 
        const currentDate = new Date();
        
        // Formatting the date as MM/DD/YYYY
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    
        // Array to store possible time values (1 to 10 minutes before current time)
        let possibleTimes = [];
        
        for (let i = 1; i <= 10; i++) {
            let pastTime = new Date(currentDate.getTime() - i * 60000); // Subtract i minutes
    
            let formattedTime = pastTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }).toUpperCase(); // Ensuring AM/PM format matches
    
            possibleTimes.push(`"${formattedDate} at ${formattedTime}"`);
        }
    
        // Constructing an XPath with multiple possible time values
        const xpath = `//android.widget.TextView[@text=${possibleTimes.join(' or @text=')}]`;
    
        return $(xpath);
    }

    
    async noteSearch(randomName) {
        await this.searchNoteBTN.click();
        await this.searchNoteTextFireld.setValue(randomName);
        const noteElement = await $(`//android.widget.TextView[@text="${randomName}"]`); 
        await noteElement.waitForDisplayed({ timeout: 5000 });
    }
     
    async draftVerification(randomName) {
        
        await HomePage.encounter.click()
        await this.noteSearch(randomName)
        const encounterDateElement = await this.encounterDate();
        await verify(encounterDateElement)
        console.log("the draft transcript is verified")
    }
    

    // async deleteSwipe(startX, startY, endX, endY) {
    //     await driver.action('pointer')
    //         .move({ duration: 0, x: startX, y: startY })
    //         .down({ button: 0 })
    //         .move({ duration: 1000, x: endX, y: endY })
    //         .up({ button: 0 })
    //         .perform();
    // }
    
    // async deleteEncounter() {
    //     // Get screen size
    //     const { width, height } = await driver.getWindowRect();
    //     const startX = width * 0.9;
    //     const endX = width * 0.1;
    //     const y = height * 0.5; 
    //     // Perform the delete swipe
    //     await this.deleteSwipe(startX, y, endX, y);
    //     await this.deleteCancel.click();
    //     // Perform the delete swipe again
    //     await this.deleteSwipe(startX, y, endX, y);
    //     await this.deleteConformation.click();
    // }
    
}

export default new EncounterPage();
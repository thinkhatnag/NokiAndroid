import { verify, verifyAndClick, waitForElement } from "../../helper/helper.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/recording.page";

class QuickActions {
   //Quick Action Related 
    get quickActions() 
    { 
        return $('~quickActions'); 
    }
    get quicktionsSearchField() 
    { 
        return $('~quicktionsSearchField'); 
    }
    get regenerateSoapNote() 
    { 
        return $('~regenerateSoapNote'); 
    }


    get translateSoapNote() 
    { 
        return $('~translateSoapNote'); 
    }
    get french() 
    { 
        return $('~french'); 
    }
    get spanish() 
    { 
        return $('~spanish'); 
    }
    get english() 
    { 
        return $('~english'); 
    }





    get generateIcdAndCptCodes() 
    { 
        return $('~generateIcdAndCptCodes'); 
    }
    get generateCarePlan() 
    { 
        return $('~generateCarePlan'); 
    }
    get generateFeedBack() 
    { 
        return $('~generateFeedBack'); 
    }
    get generateReferalLetter() 
    { 
        return $('~generateReferalLetter'); 
    }
    get icdAndCptCodes() 
    { 
        return $('~icdAndCptCodes'); 
    }

    get regenerateCarePlan() 
    { 
        return $('~regenerateCarePlan'); 
    }
    get carePlan() 
    { 
        return $('~carePlanWithExplanation'); 
    }
    get regenerateFeedBack() 
    { 
        return $('~regenerateFeedBack'); 
    }
    get feedBack() 
    { 
        return $('~feedBackOnDoctorPerformance'); 
    }
    get regenerateReferalLetter() 
    { 
        return $('~regenerateReferalLetter'); 
    }
    get referalLetter() 
    { 
        return $('~referalLetter'); 
    }
   
    get ok() 
    { 
        return $('~ok'); 
    }
    get yes() 
    { 
        return $('~yes'); 
    }
    get no() 
    { 
        return $('~no'); 
    }
    get PatientInformationInFrench() 
    { 
        return $(''); 
    }
    get PatientInformationInSpnish() 
    { 
        return $(''); 
    }
    get PatientInformation() 
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
    async quickAction()
    {
        await this.quickActions.click()
        await verify(this.quicktionsSearchField)
        await verifyAndClick(this.regenerateSoapNote)
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(RecordingPage.SoapNoteBtn)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.quickActions.click()
        await verifyAndClick(this.translateSoapNote)
        await verify(this.french)
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(this.PatientInformationInFrench)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.quickActions.click()
        await this.translateSoapNote.click()
        await this.spanish.click()
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(this.PatientInformationInSpnish)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.quickActions.click()
        await this.translateSoapNote.click()
        await this.english.click()
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(this.PatientInformation)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.quickActions.click()
        await this.generateIcdAndCptCodes.click()
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(icdAndCptCodes)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.quickActions.click()
        await this.generateCarePlan.click()
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(this.carePlan)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.quickActions.click()
        await this.generateFeedBack.click()
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(this.feedBack)
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.quickActions.click()
        await this.generateReferalLetter.click()
        // await this.ok.click()
        await verify(this.cancle)
        await verifyAndClick(this.Proceed)
        await waitForElement(this.referalLetter)
        await driver.execute('mobile: swipe', { direction: 'up' });

    }
}
    export default new QuickActions();

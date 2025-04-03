
import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import { performPointerAction, verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import SettingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js';
describe('to install the application ', () => {
    it('hello noki', async() => 
    {
   await HomePage.settings.click()
   await SettingPage.generalSettings.click()
   await driver.pause(10000)
        
    })
})
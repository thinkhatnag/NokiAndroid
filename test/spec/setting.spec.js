import LoginPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import { performPointerAction, verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import SettingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js';
import { faker } from '@faker-js/faker';

describe('Setting screen elments and functinality check {TC19}',() => {

    it('Verify Settings screen elements and functinalities', async() => {
  
        await HomePage.settings.click();
        await verifyAndClick(SettingPage.profileSettings)
        await SettingPage.SettingScreen()
        await verifyAndClick(SettingPage.profileback)
        await verifyAndClick(SettingPage.support)
        await verify(SettingPage.consultWithUs)
        await verify(SettingPage.WriteToUSNow)
        await verifyAndClick(SettingPage.supportback)
        await verifyAndClick(SettingPage.launguage)
        await verifyAndClick(SettingPage.spanish)
        await verifyAndClick(SettingPage.Idioma)
        await verifyAndClick(SettingPage.Inglish)
        await verifyAndClick(SettingPage.generalSettings)
        await SettingPage.cdssEnabled.click()
        await verifyAndClick(SettingPage.diognosisJustificationEnabled)
        await SettingPage.cancel.click()
        await SettingPage.generalSettings.click()
        await SettingPage.cdssEnabled.click()
        await SettingPage.diognosisJustificationEnabled.click()
        await SettingPage.Done.click()
        await SettingPage.generalSettings.click()
        await SettingPage.cdssDisabled.click()
        await SettingPage.diognosisJustificationDisabled.click()
        await SettingPage.Done.click()        
        await verifyAndClick(SettingPage.logoutBtn)
        await verifyAndClick(SettingPage.logoutcancelationBtn)
        await SettingPage.logoutBtn.click();
        await verifyAndClick(SettingPage.logoutConformationBtn)
        await verify(LoginPage.emailField)
        await LoginPage.restartApp()
    });
})
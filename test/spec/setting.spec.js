import LoginPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/login.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/home.page.js';
import { performPointerAction, verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js';
import SettingPage from '/Users/nagasubarayudu/Desktop/NokiAndroid/test/pageObjectModel/setting.page.js';
describe('Setting screen elments and functinality check {TC19}',() => {

    it('Verify Settings screen elements and functinalities', async() => {
        await HomePage.settings.click();
        await verifyAndClick(SettingPage.profileSettings)
        await verify(SettingPage.doctorname)
        await verifyAndClick(SettingPage.back)
        await verifyAndClick(SettingPage.support)
        await verify(SettingPage.talkToUs)
        await verify(SettingPage.email)
        await verifyAndClick(SettingPage.back)
        await verifyAndClick(SettingPage.launguage)
        await verifyAndClick(SettingPage.spanish)
        await verifyAndClick(SettingPage.english)

        await driver.pause(5000)
        await SettingPage.generalSettings.click()
        await SettingPage.generalSettings.click()

        await driver.pause(5000)
        await verify(SettingPage.selectAllEnabled)
        await verify(SettingPage.cdssDisabled)
        await verifyAndClick(SettingPage.diognosisJustificationDisabled)
        await verifyAndClick(SettingPage.selectAllDisabled)
        await verify(SettingPage.cdssEnabled)
        await verify(SettingPage.diognosisJustificationEnabled)
        await verifyAndClick(SettingPage.cdssEnabled)
        await verifyAndClick(SettingPage.cdssDisabled)
        await verify(SettingPage.cdssEnabled)
        await verifyAndClick(SettingPage.diognosisJustificationEnabled)
        await verifyAndClick(SettingPage.diognosisJustificationDisabled)
        await verify(SettingPage.diognosisJustificationEnabled)
        await SettingPage.generalSettingsDone.click()
        await verifyAndClick(SettingPage.logoutBtn)
        await verifyAndClick(SettingPage.logoutcancelationBtn)
        await SettingPage.logoutBtn.click();
        await verifyAndClick(SettingPage.logoutConformationBtn)
        await verify(LoginPage.emailField)
        await LoginPage.restartApp()
    });
})
import SpanishLanguage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/IOS/spanishLanguage.js';
import {  verify } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';

describe('Spanish language UI elements verification', () => {
    it('TC027 Verify login button is properly styled and aligned', async () => {
        await SpanishLanguage.clickLogin();
        await SpanishLanguage.clearTextFields();
    });

    it('TC28 Show an error when password is not provided', async () => {
        await SpanishLanguage.enterEmail('test@example.com');
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.errorMessage);
        await SpanishLanguage.clearTextFields();
    });

    it('TC29 Show an error when incorrect password is entered', async () => {
        await SpanishLanguage.enterEmail('test@example.com');
        await SpanishLanguage.enterPassword('wrongpassword');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.WrongPassword);
        await SpanishLanguage.clearTextFields();
    });

    it('TC30 Show an error when email is not provided', async () => {
        await SpanishLanguage.enterPassword('password');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.emailError);
        await SpanishLanguage.clearTextFields();
    });

    it('TC31 Show errors when both email and password are not provided', async () => {
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.emailError);
        await verify(SpanishLanguage.errorMessage);
        await SpanishLanguage.clearTextFields();
    });

    it('TC32 Show an error for incorrect email format', async () => {
        await SpanishLanguage.enterEmail('invalid-email');
        await SpanishLanguage.enterPassword('password');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.invalidEmailError);
        await SpanishLanguage.clearTextFields();
    });

    it('TC33 Show an error when email is not registered', async () => {
        await SpanishLanguage.enterEmail('unregistered@example.com');
        await SpanishLanguage.enterPassword('password');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.emailNotRegisteredError);
        await SpanishLanguage.clearTextFields();
    });

    it('TC34 Verify login process completes ', async () => {
        await SpanishLanguage.enterEmail('valid@example.com');
        await SpanishLanguage.enterPassword('validpassword');
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.homescreenAnimation, 15000);
        await SpanishLanguage.clearTextFields();
    });

    it('TC35 Create a new patient, start a conversation, generate SOAP note, and verify all functionalities', async () => {
        await SpanishLanguage.startNewEncounter.click()
        await SpanishLanguage.addPatient.click()
        await SpanishLanguage.creatNewPatient('chi', '1990', 'January');
        await SpanishLanguage.recordAudio();
        await SpanishLanguage.ctsConformation();
        await driver.restartApp();
    });

    it('TC36 Generate SOAP note for an existing patient', async () => {
        await SpanishLanguage.startNewEncounter.click();
        await SpanishLanguage.patientSearch('chi');
        await SpanishLanguage.patientName.click();
        await SpanishLanguage.startConversationBtn.click()
        await SpanishLanguage.recordAudio();
        await SpanishLanguage.ctsConformation();
        await driver.restartApp();
    });

    it('TC37 Generate SOAP note for a draft transcript', async () => {
        await SpanishLanguage.noteSearch('Draft');
        await SpanishLanguage.draft.click();
        await SpanishLanguage.resumeRecording.click()
        await SpanishLanguage.resumeRecordingConformationYes.click();
        await SpanishLanguage.recordAudioForDraft()
        await driver.restartApp();
    });
});
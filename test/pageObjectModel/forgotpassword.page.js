
class ForgotPasswordPage {
    async verifyForgotPasswordScreen() {
        await expect($('//android.widget.TextView[@text="Forgot Password?"]')).toBeDisplayed();
    }

    async enterEmailAndSendResetLink(email) {
        const emailField = await $('//android.widget.EditText');
        await emailField.setValue(email);
        const sendResetLinkButton = await $('//android.widget.TextView[@text="Send Reset Link"]');
        await sendResetLinkButton.click();
    }

    async checkEmailInGmail() {
        await driver.execute('mobile: terminateApp', { appId: 'com.thinkhat.heynoki' });
        await driver.activateApp('com.google.android.gm');
        await driver.pause(5000);
        await driver.activateApp('com.thinkhat.heynoki');
    }
}

export default new ForgotPasswordPage();
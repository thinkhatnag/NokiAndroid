import {
  verifyAndClick,
  hideKeyboard,
} from "/Users/nagasubarayudu/Desktop/NokiAndroid/helper/helper.js";

class LoginPage {
  get loginText() {
    return $('(//android.widget.TextView[@text="Login"])[1]');
  }
  get newUserText() {
    return $(
      '//android.widget.TextView[@text="New User? Please create an account on"]'
    );
  }
  get emailField() {
    return $(
      '//android.view.ViewGroup[@content-desc="Email*"]/android.view.ViewGroup/android.widget.EditText'
    );
  }
  get passwordField() {
    return $(
      '//android.view.ViewGroup[@content-desc="Password*"]/android.view.ViewGroup/android.widget.EditText'
    );
  }
  get loginButton() {
    return $("~Login");
  }
  get forgotPassworfLoginButton() {
    return $('//android.widget.TextView[@text="Login"]');
  }
  get sendResetLink() {
    return $('//android.widget.TextView[@text="Send Reset Link"]');
  }
  get multtTenent() {
    return $('~Select Account ID*');
  }
  get selectIdError() {
    return $('//android.widget.TextView[@text="Account ID is required"]');
  }
  get () {
    return $('');
  }
  get () {
    return $('');
  }
  get () {
    return $('');
  }
  get passwordError() {
    return $('//android.widget.TextView[@text="Password is required"]');
  }
  get emailError() {
    return $('//android.widget.TextView[@text="Email is required"]');
  }
  get invalidEmailError() {
    return $('//android.widget.TextView[@text="Invalid Email"]');
  }

  get startNewEncounter() {
    return $(
      '//android.view.ViewGroup[@content-desc="Start New Encounter"]/android.view.ViewGroup'
    );
  }
  get forgotPasswordBtn() {
    return $(`//android.widget.TextView[@text="Forgot Password?"]`);
  }
  get multiTenantOption() {
    return $('//android.widget.TextView[@text="nagasurendra-badri-69g23"]');
  }
  get multiTenantError() {
    return $('//android.widget.TextView[@text="Account ID is required"]');
  }

  async enterEmail(email) {
    await this.emailField.click();
    await this.emailField.setValue(email);
    await hideKeyboard();
  }
  async enterForgotPasswordEmail(email) {
    await this.emailField.click();
    await this.emailField.setValue(email);
    await hideKeyboard();
  }

  async enterPassword(password) {
    await this.passwordField.click();
    await this.passwordField.setValue(password);
    await hideKeyboard();
  }


  async clickLogin() {
    await verifyAndClick(this.loginButton);
  }
  async restartApp() {
    const appId = process.env.BUNDLE_ID;
    await driver.terminateApp(appId);
         await driver.pause(2000);
    await driver.activateApp(appId);
  }
  async selectMultiTenant() {
    await verifyAndClick(this.multtTenent)
      await this.multiTenantOption.click();
      await driver.pause(2000);
    }
     
    }
  


export default new LoginPage();

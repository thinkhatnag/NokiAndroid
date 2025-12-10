import {
  verifyAndClick,
  hideKeyboard,
} from "../../../helper/helper.js";

class LoginPage {

  get newUserText() {
    return $(
      '//android.widget.TextView[@text="New User? Please create an account on"]'
    );
  }
  get emailField() {
    return $("~Correo electrónico*");
  }
  get passwordField() {
    return $("~Contraseña*");
  }
  get loginButton() {
    return $("~Iniciar sesión");
  }
  get forgotPassworfLoginButton() {
    return $('');
  }
  get sendResetLink() {
    return $('');
  }
  get multtTenent() {
    return $("~Seleccionar ID de cuenta*");
  }
  get selectIdError() {
    return $('');
  }

  get passwordRequiredError() {
    return $('-android uiautomator:new UiSelector().text("Se requiere contraseña")');
  }
  get emailRequiredError() {
    return $('-android uiautomator:new UiSelector().text("Se requiere correo electrónico")');
  }
  get invalidEmailError() {
    return $('-android uiautomator:new UiSelector().text("Correo electrónico inválido")');
  }

  get startNewEncounter() {
    return $(
      ''
    );
  }
  get forgotPasswordBtn() {
    return $(`-android uiautomator:new UiSelector().text("¿Olvidaste tu contraseña?")`);
  }
  get multiTenantOption() {
    return $('~nagasurendra-badri-69g23');
  }
  get multiTenantError() {
    return $('-android uiautomator:new UiSelector().text("Se requiere el ID de cuenta")');
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
    await verifyAndClick(this.multtTenent);
    await this.multiTenantOption.click();
    await driver.pause(2000);
  }
  async clearTextFields(){
    await this.emailField.clearValue()
    await this.passwordField.clearValue()
  }
}

export default new LoginPage();

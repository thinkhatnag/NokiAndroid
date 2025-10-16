
describe("Forgot Password all scenarios in spanish", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addFeature("Forgot Password all scenarios ");
    allureReporter.addOwner('Mobile Team');
  });
  it("Verify  message entering not rigistered email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail("nag.subbarayudu@gmail.com");
    await verify(SpanishLanguage.emailNotRegisteredError);
    await verifyAndClick(SpanishLanguage.loginLink);
  });
  it("Verify  message entering inccorect email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail("nag.subbarayudu@");
    await verify(SpanishLanguage.invalidEmailError);
    await verifyAndClick(SpanishLanguage.loginLink);
  });

  it("Verify  message not entering  email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail(" ");
    await verify(SpanishLanguage.emailError);
    await verifyAndClick(SpanishLanguage.loginLink);
  });
  it("Verify success message for entering correct email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail(
      "nag.subbarayudu@thinkhat.ai"
    );
    await verify(SpanishLanguage.successMessageForResetLink);
    await verifyAndClick(SpanishLanguage.continueToLogin);
  });
});

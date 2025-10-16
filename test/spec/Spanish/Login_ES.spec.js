describe('Login screen all scenarios in Spanish ',() => { 
    beforeEach(() => {
        allureReporter.addEpic("NOKI IOS Automation");
        allureReporter.addFeature("Login all scenarios -Es");
        allureReporter.addOwner('Mobile Team');
      });
      beforeEach(async() => {
      await LoginPage.restartApp()
      });
    it('Verify error message when password is not provided {TC03}', async() => {
        
        await SpanishLanguage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await SpanishLanguage.selectMultiTenant();
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.errorMessage);
    });

    it('Verify error message when an incorrect password is entered {TC04}', async() => {
        
        await SpanishLanguage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await SpanishLanguage.enterPassword('123456')
        await SpanishLanguage.selectMultiTenant();
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.forgotPassword);
    });

    it('Verify error message( when email is not provided {TC05}', async() => {
        
        await SpanishLanguage.enterEmail(' ')
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.emailError);
    });

    it('Verify error message when an incorrectly formatted email is entered {TC07}', async() => {
        
        await SpanishLanguage.enterEmail('nag.subbarayudu@')
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.invalidEmailError)
    });

    it('Verify error message when the email is not registered {TC08}', async() => {
        
        await SpanishLanguage.enterEmail('vqejvcievciye@gmail.com')
        await verify(SpanishLanguage.emailNotRegisteredError)
    });
  
    it('Verify  message when the password is wrong', async() => {
        
        await SpanishLanguage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await SpanishLanguage.enterPassword('Welcome@124dwdfsscawd')
        await SpanishLanguage.selectMultiTenant();
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.WrongPassword)
    });
       it('Verify  message when the email is multitenent{TC08}', async() => {
        
        await SpanishLanguage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await SpanishLanguage.enterPassword('Welcome@123')
        await SpanishLanguage.selectMultiTenant();
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.homescreenAnimation)
    });
    
})
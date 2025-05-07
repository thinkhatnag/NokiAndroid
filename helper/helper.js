import { faker } from '@faker-js/faker';

export async function verify(element) {
    await element?.waitForDisplayed({ timeout: 10000 });
}
export async function verifyAndClick(element) {
    await verify(element)
    await element?.click();
   
}
export async function hideKeyboard() {
    
    if (await driver.isKeyboardShown()) {
        await driver.executeScript("mobile: hideKeyboard", []);
    }    
}


export async function restartApp() {
    const appId = 'com.thinkhat.heynoki'; 
    await driver.execute('mobile: terminateApp', { appId });
    await driver.pause(2000)
    await driver.activateApp(appId);
}
export async function waitForElement(element, timeout = 180000) {
    await element?.waitForDisplayed({ timeout });
}  
 
export async function newpatient() {
    const patientName = faker.person.findName();
    const birthYear = faker.random.number({ min: 1900, max: 2025 });
    const birthMonth = faker.date.month();
    return { patientName, birthYear, birthMonth };
}
export async function nokiDashBoard() {
    await driver.action('pointer')
  .move({ duration: 0, x: 362, y: 1411 })
  .down({ button: 0 })
  .pause(50)
  .up({ button: 0 })
  .perform();
}

export async function performPointerAction(driver, startX, startY, endX = startX, endY = startY, duration = 1000) {
    const { width, height } = await driver.getWindowRect();
    console.log(`Device Screen Size: ${width}x${height}`);

    // Normalize coordinates (assuming startX and startY are percentage values between 0-100)
    const scale = (val, max) => Math.round((val / 100) * max);

    const x1 = Math.min(Math.max(scale(startX, width), 0), width - 1);
    const y1 = Math.min(Math.max(scale(startY, height), 0), height - 1);
    const x2 = Math.min(Math.max(scale(endX, width), 0), width - 1);
    const y2 = Math.min(Math.max(scale(endY, height), 0), height - 1);

    console.log(`Performing action from (${x1}, ${y1}) to (${x2}, ${y2})`);

    const actions = [
        { type: 'pointerMove', duration: 0, x: x1, y: y1 },
        { type: 'pause', duration: 50 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 100 },
        { type: 'pointerUp', button: 0 }
    ];

    // Add swipe movement if needed
    if (x1 !== x2 || y1 !== y2) {
        actions.splice(2, 0, { type: 'pointerMove', duration, x: x2, y: y2 });
    }

    await driver.performActions([{
        type: 'pointer',
        id: 'pointer1',
        parameters: { pointerType: 'touch' },
        actions
    }]);

    await driver.releaseActions();
}
export async function network(){
    await driver.toggleData();
    await driver.toggleWiFi();
}
export async function networkFailureVerification() {

    await network()
    await verify(RecordingPage.connectionLost)
    await verify(RecordingPage.connectionLostDescription)
    await network()
    await driver.pause(5000)

    }
    export async function back() {

        await driver.executeScript("mobile: pressKey", [{"keycode":4}]);
    
    }

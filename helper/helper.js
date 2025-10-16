import { faker } from '@faker-js/faker';
import RecordingPage from '../test/pageObjectModel/recording.page.js';
import SpanishLanguage from '../test/pageObjectModel/spanishLanguage.js'
export async function verify(element) {
  await element?.waitForDisplayed({ timeout: 10000 });
}
export async function validate(element) {
  await verify(element);
  await expect(element).toBeDisplayed();
}
export async function verifyAndClick(element) {
  await verify(element);
  await driver.pause(2000)
  await element?.click();
}
export async function hideKeyboard() {
  if (await driver.isKeyboardShown()) {
    await driver.executeScript("mobile: hideKeyboard", []);
  }
}

export async function restartApp() {
  const appId = process.env.BUNDLE_ID;
  await driver.execute("mobile: terminateApp", { appId });
  await driver.pause(2000);
  await driver.activateApp(appId);
}
export async function waitForElement(element, timeout = 240000) {
  await element?.waitForDisplayed({ timeout });
}

export async function nokiDashBoard() {
  await driver
    .action("pointer")
    .move({ duration: 0, x: 362, y: 1411 })
    .down({ button: 0 })
    .pause(50)
    .up({ button: 0 })
    .perform();
}

export async function performPointerAction(
  driver,
  startX,
  startY,
  endX = startX,
  endY = startY,
  duration = 1000
) {
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
    { type: "pointerMove", duration: 0, x: x1, y: y1 },
    { type: "pause", duration: 50 },
    { type: "pointerDown", button: 0 },
    { type: "pause", duration: 100 },
    { type: "pointerUp", button: 0 },
  ];

  // Add swipe movement if needed
  if (x1 !== x2 || y1 !== y2) {
    actions.splice(2, 0, { type: "pointerMove", duration, x: x2, y: y2 });
  }

  await driver.performActions([
    {
      type: "pointer",
      id: "pointer1",
      parameters: { pointerType: "touch" },
      actions,
    },
  ]);
  await driver.releaseActions();
}
export async function network() {
  await driver.toggleData();
  await driver.toggleWiFi();
}
// export async function networkFailureVerification() {

//     await network()
//     await verify(RecordingPage.connectionLost)
//     await verify(RecordingPage.connectionLostDescription)
//     await network()
//     await driver.pause(5000)

//     }
    export async function back() {

        await driver.executeScript("mobile: pressKey", [{"keycode":4}]);

    }

export async function Network() {
  await driver.toggleAirplaneMode();
}

export async function swipe(direction, scrollElement) {
  const validDirections = ["up", "down", "left", "right"];
  // Resolve scroll element
  let element;
  element =
    typeof scrollElement === "string" ? await $(scrollElement) : scrollElement;
  await driver.execute("mobile: swipeGesture", {
    direction,
    duration: 1000,
    elementId: await element.elementId,
    percent: 0.08,
  });
}
export async function clickDraftTranscript() {
  await driver.action('pointer')
  .move({ duration: 0, x: 350, y: 382 })
  .down({ button: 0 })
  .pause(50)
  .up({ button: 0 })
  .perform();


  }
  export async function terminateApp() {
    // Open recent apps
    await driver.executeScript("mobile: pressKey", [{ "keycode": 187 }]);

    // Wait for the UI to load
    await driver.pause(1000);

    // Swipe up to simulate manual kill
    await driver.action('pointer')
        .move({ duration: 0, x: 427, y: 1018 })  // start point
        .down({ button: 0 })                     // press down
        .move({ duration: 1000, x: 429, y: 113 }) // swipe up
        .up({ button: 0 })                       // release
        .perform();

    // Small pause to let the action complete
    await driver.pause(500);

}
// import allureReporter from "@wdio/allure-reporter";
// import AudioManager from "../test/pageObjectModel/audioManeger.js"; // your AudioManager instance

// // --- Live Transcript Monitoring ---
// export async function LiveTranscriptMonitor(language = "english", checkInterval = 2000) {
//   // --- Selectors inside the function ---
//   const englishOffline = await RecordingPage.offlineModeRTranscription;
// const spanishOffline = await SpanishLanguage.offlineModeRTranscription;
//   const TRANSCRIPT_SELECTOR = '//android.widget.TextView';
//   const OFFLINE_SELECTORS = {
//     english: englishOffline,
//     spanish: spanishOffline,
//     // Add more languages here if needed
//   };

//   const offlineSelector = OFFLINE_SELECTORS[language];

//   let previousText = "";
//   let monitoring = true;

//   while (monitoring) {
//     try {
//       // 1️⃣ Check if device is offline
//       const offlineElements = await $$(offlineSelector);
//       if (offlineElements.length > 0) {
//         allureReporter.addStep(
//           `⚠️ Device offline detected (${language}), stopping live transcript monitoring`,
//           {},
//           "broken"
//         );
//         break;
//       }

//       // 2️⃣ Fetch new transcript text
//       const transcriptElement = await $(TRANSCRIPT_SELECTOR);
//       const currentText = await transcriptElement.getText();

//       if (currentText && currentText.trim() !== previousText) {
//         // New text appeared
//         previousText = currentText;
//         allureReporter.addStep(
//           `✅ Live transcript updated (${language})`,
//           { text: currentText.slice(0, 500) },
//           "passed"
//         );
//       } else {
//         // No new text yet
//         allureReporter.addStep(
//           `⚠️ Live transcript not updated yet (${language})`,
//           { lastText: previousText.slice(0, 500) },
//           "broken"
//         );
//       }

//       // 3️⃣ Stop monitoring if audio finished
//       const audioPlayedTime =
//         AudioManager.playedTime +
//         (AudioManager.isPaused ? 0 : Date.now() / 1000 - AudioManager.startTime);

//       if (audioPlayedTime >= AudioManager.maxDuration) {
//         monitoring = false;
//         allureReporter.addStep(
//           `⏹️ Audio finished (${language}), stopping live transcript monitoring`,
//           {},
//           "passed"
//         );
//         break;
//       }

//       await driver.pause(checkInterval);

//     } catch (err) {
//       allureReporter.addStep(
//         `❌ Error reading live transcript (${language})`,
//         { error: err.message },
//         "failed"
//       );
//     }
//   }

//   return previousText;
// }

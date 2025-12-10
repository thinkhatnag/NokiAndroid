import { faker } from "@faker-js/faker";
import RecordingPage from "../test/pageObjectModel/recording.page.js";
import SpanishLanguage from "../test/pageObjectModel/spanishLanguage.js";
import say from "say";
export async function verify(element) {
  await element?.waitForDisplayed({ timeout: 20000 });
}
export async function validate(element) {
  await verify(element);
  await expect(element).toBeDisplayed();
}
export async function verifyAndClick(element) {
  await verify(element);
  await driver.pause(2000);
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
  await driver.executeScript("mobile: pressKey", [{ keycode: 4 }]);
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

export async function terminateApp() {
  // Open recent apps
  await driver.executeScript("mobile: pressKey", [{ keycode: 187 }]);

  // Wait for the UI to load
  await driver.pause(1000);

  // Swipe up to simulate manual kill
  await driver
    .action("pointer")
    .move({ duration: 0, x: 427, y: 1018 }) // start point
    .down({ button: 0 }) // press down
    .move({ duration: 1000, x: 429, y: 113 }) // swipe up
    .up({ button: 0 }) // release
    .perform();

  // Small pause to let the action complete
  await driver.pause(500);
}

export async function playTTS(text, voice = null, speed = 1.0) {
  return new Promise((resolve, reject) => {
    say.speak(text, voice, speed, (err) => {
      if (err) {
        console.error("TTS failed:", err);
        reject(err);
      } else {
        console.log("TTS spoken:", text);
        resolve();
      }
    });
  });
}
export async function scrollIntoView(element, direction, scrollingelement) {
  const elem = await $(element);
  await elem.scrollIntoView();
  await elem.scrollIntoView({
    direction: direction,
    maxScrolls: 10,
    scrollableElement: scrollingelement,
  });
}

export async function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFKD") // normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics (accents)
    .replace(/[\r\n]+/g, " ") // replace newlines with spaces
    .replace(/\s+/g, " ") // collapse multiple spaces
    .trim();
}
export async function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const matrix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) matrix[i][0] = i;
  for (let j = 0; j <= n; j++) matrix[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  return matrix[m][n];
}

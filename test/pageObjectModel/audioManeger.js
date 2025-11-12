import { spawn, exec } from "child_process";
import util from "util";
import fs from "fs";
import path from "path";
import { normalizeText, levenshtein } from "../../helper/helper.js";

// import path from "path";
import allureReporter from "@wdio/allure-reporter";
const execPromise = util.promisify(exec);
class AudioManager {
  constructor() {
    this.audioFiles = {
      english:
        "/Users/nagasubarayudu/Desktop/NokiAndroid/utils/audioFiles/CardiacArrestEN.wav",
      spanish:
        "/Users/nagasubarayudu/Desktop/NokiAndroid/utils/audioFiles/CardiacArrestES.mp3",
    };
    this.currentAudioFile = null;
    this.currentProcess = null;
    this.isPaused = false;
    this.pausedTime = 0; // Track paused time in seconds
    this.startTime = 0; // Track start time in seconds

    // 🔹 Added for audio duration limit
    this.playedTime = 0;
    this.maxDuration = 608; // 10:08 in seconds
    this._durationTicker = null;
  }

  _startDurationTicker() {
    if (this._durationTicker) return;
    this._durationTicker = setInterval(async () => {
      let elapsed = this.playedTime;
      if (!this.isPaused && this.startTime) {
        elapsed += Date.now() / 1000 - this.startTime;
      }
      if (elapsed >= this.maxDuration) {
        clearInterval(this._durationTicker);
        this._durationTicker = null;
        await this.stopAudio();
        console.log("Audio auto-stopped at 10:08 (608 sec)");
      }
    }, 1000);
  }
  async _startLiveTranscriptMonitor(language) {
    console.log(`🟢 Starting live transcript monitor for ${language}`);

    const TRANSCRIPT_SELECTOR = "//android.widget.TextView";
    const offlineSelector =
      language === "english"
        ? '//android.widget.TextView[@text="No transcript available in offline mode"]'
        : '//android.widget.TextView[@text="Transcripción no disponible en modo sin conexión"]';

    let liveFound = false;

    // Run up to 10 checks, 3 sec apart
    for (let attempt = 1; attempt <= 10; attempt++) {
      try {
        // Stop if offline element appears
        const offlineElements = await $$(offlineSelector);
        if (offlineElements.length > 0) {
          console.log(
            `⚠️ Device offline detected (${language}), stopping monitor`
          );
          allureReporter.addStep(
            `⚠️ Device offline detected (${language}), stopping monitor`,
            {},
            "broken"
          );
          break;
        }

        // Check for live transcript
        const transcriptElement = await $(TRANSCRIPT_SELECTOR);
        const currentText = (await transcriptElement.getText())?.trim() || "";

        if (currentText.length > 0) {
          console.log(`✅ Live transcript detected: "${currentText}"`);
          allureReporter.addStep(
            `✅ Live transcript detected (${language})`,
            { text: currentText.slice(0, 500) },
            "passed"
          );
          liveFound = true;
          break; // stop monitoring early if live text detected
        }

        // Stop monitor if audio finished
        const audioPlayedTime =
          this.playedTime +
          (this.isPaused ? 0 : Date.now() / 1000 - this.startTime);
        if (audioPlayedTime >= this.maxDuration) {
          console.log(`⏹️ Audio finished (${language}), stopping monitor`);
          this._monitoring = false;
          break;
        }
      } catch (err) {
        console.log(
          `❌ Error reading transcript (${language}): ${err.message}`
        );
        allureReporter.addStep(
          `❌ Error reading transcript (${language})`,
          { error: err.message },
          "failed"
        );
      }

      await driver.pause(3000); // wait 3 sec before next attempt
    }

    if (!liveFound) {
      console.log(`❌ No live transcript is coming (${language})`);
      allureReporter.addStep(`❌ No live transcript is coming (${language})`);
    }

    console.log(`🛑 Live transcript monitor finished (${language})`);
  }

  // async playAudio(language) {
  //   const audioFilePath = this.audioFiles[language] || this.audioFiles.english;

  //   if (this.isPaused && this.currentProcess) {
  //     this.currentProcess = spawn("afplay", [
  //       "-t",
  //       String(Number.MAX_SAFE_INTEGER),
  //       "-ss",
  //       String(this.pausedTime),
  //       audioFilePath,
  //     ]);
  //     this.currentProcess.on("error", (err) => {
  //       console.error("Failed to resume afplay:", err);
  //     });
  //     this.startTime = Date.now() / 1000;
  //     this.isPaused = false;
  //     this._startDurationTicker(); // 🔹 start ticker on resume
  //     return audioFilePath;
  //   } else {
  //     if (this.currentProcess) {
  //       await this.stopAudio();
  //     }
  //     this.currentAudioFile = audioFilePath;
  //     this.currentProcess = spawn("afplay", [audioFilePath]);
  //     this.currentProcess.on("error", (err) => {
  //       console.error("Failed to start afplay:", err);
  //     });
  //     this.startTime = Date.now() / 1000;
  //     this.isPaused = false;
  //     this._startDurationTicker(); // 🔹 start ticker on play
  //     return this.currentAudioFile;
  //   }
  // }
  async playAudio(language = "english") {
    const audioFilePath = this.audioFiles[language] || this.audioFiles.english;

    // Start Android live transcript monitoring
    // this._startLiveTranscriptMonitor(language);

    if (this.isPaused && this.currentProcess) {
      this.currentProcess = spawn("afplay", [
        "-t",
        String(Number.MAX_SAFE_INTEGER),
        "-ss",
        String(this.pausedTime),
        audioFilePath,
      ]);
      this.startTime = Date.now() / 1000;
      this.isPaused = false;
      this._startDurationTicker();
      return audioFilePath;
    } else {
      if (this.currentProcess) await this.stopAudio();
      this.currentAudioFile = audioFilePath;
      this.currentProcess = spawn("afplay", [audioFilePath]);
      this.startTime = Date.now() / 1000;
      this.isPaused = false;
      this._startDurationTicker();
      return this.currentAudioFile;
    }
  }

  async pauseAudio() {
    if (this.currentProcess && !this.isPaused) {
      this.playedTime += Date.now() / 1000 - this.startTime; // 🔹 accumulate playback
      this.pausedTime = this.playedTime;

      const { stdout } = await execPromise("pgrep afplay || true");
      if (stdout.trim()) {
        await execPromise("pkill -STOP afplay");
        this.isPaused = true;
      }
    }
  }
  async resumeAudio() {
    if (this.currentProcess && this.isPaused) {
      await execPromise("pkill -CONT afplay");
      this.startTime = Date.now() / 1000;
      this.isPaused = false;
      this._startDurationTicker();
      // this._startLiveTranscriptMonitor(language);
      // 🔹 restart ticker
    }
  }

  async stopAudio() {
    if (this.currentProcess) {
      const { stdout } = await execPromise("pgrep afplay || true");
      if (stdout.trim()) {
        await execPromise("killall afplay");
      }
      this.currentProcess = null;
    }

    // 🔹 Final played time update
    if (!this.isPaused && this.startTime) {
      this.playedTime += Date.now() / 1000 - this.startTime;
    }

    // Load full transcript (linked to current audio)
    const transcriptMap = {
      english:
        "/Users/nagasubarayudu/Desktop/NokiAndroid/utils/audiotranscripts/CardiacArrest.txt",
      spanish:
        "/Users/nagasubarayudu/NokiAndroid/NokiAndroid/utils/audiotranscripts/CardiacArrestEs.txt",
    };

    // Find which transcript to use
    let language = "english";
    for (const [lang, path] of Object.entries(this.audioFiles)) {
      if (path === this.currentAudioFile) {
        language = lang;
      }
    }

    const transcriptPath = transcriptMap[language];
    const fullTranscript = fs
      .readFileSync(transcriptPath, "utf8")
      .trim()
      .split(/\s+/);

    // Approximate slice of transcript
    const wordsPerSecond = fullTranscript.length / this.maxDuration;
    const wordsToTake = Math.floor(this.playedTime * wordsPerSecond);

    const partialTranscript = fullTranscript.slice(0, wordsToTake).join(" ");

    // Save to .txt file
    const logDir = "/Users/nagasubarayudu/Desktop/NokiAndroid/utils/audioLogs";
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const logFile = `${logDir}/played_audio_${Date.now()}.txt`;
    fs.writeFileSync(logFile, partialTranscript, "utf8");

    console.log("Transcript of played audio saved to:", logFile);

    // Reset state
    this.isPaused = false;
    this.pausedTime = 0;
    this.startTime = 0;
    this.playedTime = 0;
    if (this._durationTicker) {
      clearInterval(this._durationTicker);
      this._durationTicker = null;
    }
    return logFile;
  }

  async TextComparison(language = "english") {
    const AUDIO_LOG_DIR =
      "/Users/nagasubarayudu/Desktop/NokiAndroid/utils/audioLogs";
    const SCANNED_DIR =
      "/Users/nagasubarayudu/Desktop/NokiAndroid/_results_/TranscriptFiles";

    // --- Helper functions ---
    const normalizeText = (text) => {
      return text
        .replace(/--+\s*Conversation\s*\d+\s*--+/gi, " ")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
    };

    const deduplicateText = (text) => {
      const lines = text
        .split(/\n+/)
        .map((l) => l.trim())
        .filter(Boolean);
      return [...new Set(lines)].join(" ");
    };

    // --- Get latest played audio transcript ---
    const playedFiles = fs
      .readdirSync(AUDIO_LOG_DIR)
      .filter((f) => f.startsWith("texts_") && f.endsWith(".txt"))
      .sort((a, b) => b.localeCompare(a));
    if (!playedFiles.length)
      throw new Error("No played audio transcript files found.");
    const latestPlayed = path.join(AUDIO_LOG_DIR, playedFiles[0]);

    // --- Get latest scanned transcript ---
    const scannedFiles = fs
      .readdirSync(SCANNED_DIR)
      .filter((f) => f.startsWith("played_audio_") && f.endsWith(".txt"))
      .sort((a, b) => b.localeCompare(a));
    if (!scannedFiles.length) throw new Error("No scanned text files found.");
    const latestScanned = path.join(SCANNED_DIR, scannedFiles[0]);

    // --- Read and normalize ---
    const playedText = normalizeText(fs.readFileSync(latestPlayed, "utf8"));
    const scannedText = normalizeText(
      deduplicateText(fs.readFileSync(latestScanned, "utf8"))
    );

    // --- Compare similarity (Levenshtein) ---
    const distance = levenshtein(playedText, scannedText);
    const maxLen = Math.max(playedText.length, scannedText.length) || 1;
    const similarity = ((1 - distance / maxLen) * 100).toFixed(2);

    const threshold = 90;
    const status =
      similarity >= threshold ? "✅ Match found" : "❌ Below threshold";

    // --- Allure Reporting ---
    allureReporter.step(
      `Text comparison [${language.toUpperCase()}]: ${status} (${similarity}%)`,
      () => {
        allureReporter.attachment(
          "Played Transcript",
          playedText,
          "text/plain"
        );
        allureReporter.attachment(
          "Scanned Transcript",
          scannedText,
          "text/plain"
        );
      }
    );

    console.log(
      `🔍 Comparison complete — Similarity: ${similarity}% (${status})`
    );

    // --- Delete both files after comparison ---
    try {
      fs.unlinkSync(latestPlayed);
      fs.unlinkSync(latestScanned);
      console.log(`🧹 Deleted compared files:`);
      console.log(` - ${latestPlayed}`);
      console.log(` - ${latestScanned}`);
    } catch (err) {
      console.warn("⚠️ Error deleting compared files:", err.message);
    }

    return {
      playedFile: latestPlayed,
      scannedFile: latestScanned,
      similarity: `${similarity}%`,
      threshold: `${threshold}%`,
      status,
      language: language.toUpperCase(),
    };
  }
}

export default new AudioManager();

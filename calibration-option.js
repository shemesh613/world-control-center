const calibrationLabel = "כיול מחדש";
const existingLabel = "ילד/ה חדש/ה";

function keepCalibrationOptionVisible() {
  for (const button of document.querySelectorAll("button")) {
    if (button.textContent.trim() === existingLabel) {
      button.textContent = calibrationLabel;
    }
  }
}

new MutationObserver(keepCalibrationOptionVisible).observe(document.body, {
  childList: true,
  subtree: true,
});

keepCalibrationOptionVisible();

// =============================================
// PLANT JOURNEY: MAP-FIRST NAVIGATION, QUIZZES, AND REVEALS
// Edit the correctAnswer values to match your quiz.
// A = first choice, B = second, C = third, D = fourth.
// =============================================

const correctAnswers = {
  1: "A",
  2: "B",
  3: "A",
  4: "D",
  5: "C",
  6: "B"
};

const mapScreen = document.getElementById("map-screen");
const levelScreens = document.querySelectorAll("[data-level-screen]");
const mapMarkers = document.querySelectorAll("[data-level]");
let completedLevels = new Set();

function showMap() {
  levelScreens.forEach(screen => screen.hidden = true);
  mapScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLevel(levelNumber) {
  // Level 7 is available after completing Levels 1-6.
  if (levelNumber === 7 && completedLevels.size < 6) {
    alert("Complete Levels 1–6 first to unlock the final level!");
    return;
  }

  mapScreen.hidden = true;
  levelScreens.forEach(screen => {
    screen.hidden = Number(screen.dataset.levelScreen) !== levelNumber;
  });

  const selected = document.querySelector(
    `[data-level-screen="${levelNumber}"]`
  );
  if (selected) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

mapMarkers.forEach(marker => {
  marker.addEventListener("click", event => {
    event.preventDefault();
    openLevel(Number(marker.dataset.level));
  });
});

document.querySelectorAll("[data-back]").forEach(button => {
  button.addEventListener("click", showMap);
});

document.querySelectorAll("[data-answer]").forEach(button => {
  button.addEventListener("click", () => {
    const levelScreen = button.closest("[data-level-screen]");
    const levelNumber = Number(levelScreen.dataset.levelScreen);
    const feedback = levelScreen.querySelector(".feedback");
    const quiz = levelScreen.querySelector(".quiz");
    const reveal = levelScreen.querySelector(".reveal-content");

    // Ignore answers after this level has already been completed.
    if (completedLevels.has(levelNumber)) return;

    if (button.dataset.answer === correctAnswers[levelNumber]) {
      feedback.textContent = "Correct! Your discovery is ready to bloom. 🌱";
      feedback.className = "feedback correct";
      completedLevels.add(levelNumber);
      quiz.hidden = true;
      reveal.hidden = false;
      levelScreen.querySelectorAll(".answer-button").forEach(answerButton => {
        answerButton.disabled = true;
      });

      // Show the final marker as unlocked after all six quizzes are complete.
      if (completedLevels.size === 6) {
        document.querySelector(".final-marker circle").style.fill = "#285943";
      }
    } else {
      feedback.textContent = "Not quite—try again!";
      feedback.className = "feedback incorrect";
    }
  });
});

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    const currentLevel = Number(
      button.closest("[data-level-screen]").dataset.levelScreen
    );

    // Continue directly to the next level after the picture is revealed.
    if (currentLevel < 6) {
      openLevel(currentLevel + 1);
    } else {
      openLevel(7);
    }
  });
});

document.getElementById("boom-button").addEventListener("click", () => {
  document.getElementById("final-reveal").hidden = false;
  document.getElementById("boom-button").hidden = true;
});

// Background music
const backgroundMusic = document.getElementById("backgroundMusic");

backgroundMusic.volume = 0.3;

document.addEventListener("click", function startMusic() {
  backgroundMusic.play().catch(error => {
    console.log("Music playback requires user interaction.");
  });
}, { once: true });
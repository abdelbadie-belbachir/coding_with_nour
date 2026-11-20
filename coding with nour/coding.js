const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

noBtn.addEventListener("mouseover", () => {
  const playArea = document.querySelector(".button-container");
  const playAreaRect = playArea.getBoundingClientRect();
  const padding = 10;

  const maxX = playAreaRect.width - noBtn.offsetWidth - padding;
  const maxY = playAreaRect.height - noBtn.offsetHeight - padding;

  const newX = Math.floor(Math.random() * Math.max(1, maxX - padding)) + padding;
  const newY = Math.floor(Math.random() * Math.max(1, maxY - padding)) + padding;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
  }, 3000);
});
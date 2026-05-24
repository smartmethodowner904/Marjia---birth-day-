const giftBox = document.getElementById("giftBox");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("birthdayMusic");

giftBox.addEventListener("click", () => {
  giftBox.style.display = "none";
  mainContent.classList.remove("hidden");

  music.play();

  confetti({
    particleCount: 300,
    spread: 200,
    origin: { y: 0.6 }
  });
});

const button = document.getElementById("timerButton");
const timerText = document.getElementById("timer");

button.addEventListener("click", () => {
  let seconden = 60;

  timerText.textContent = `Rust: ${seconden} sec`;

  const interval = setInterval(() => {
    seconden--;

    timerText.textContent = `Rust: ${seconden} sec`;

    if (seconden <= 0) {
      clearInterval(interval);
      timerText.textContent = "✅ Klaar voor de volgende oefening!";
    }
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {

    const hello = document.querySelector(".hello");

    if (!hello) return;

    const uur = new Date().getHours();

    let tekst = "";

    if (uur < 12) {

        tekst = "Goedemorgen 👋";

    } else if (uur < 18) {

        tekst = "Goedemiddag 👋";

    } else {

        tekst = "Goedenavond 👋";

    }

    hello.textContent = tekst;

});

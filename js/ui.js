document.addEventListener("DOMContentLoaded", () => {

    // Begroeting aanpassen
    const hello = document.querySelector(".hello");

    if (hello) {

        const uur = new Date().getHours();

        if (uur < 12) {

            hello.textContent = "Goedemorgen 👋";

        } else if (uur < 18) {

            hello.textContent = "Goedemiddag 👋";

        } else {

            hello.textContent = "Goedenavond 👋";

        }

    }

    // Statistieken laden
    if (typeof updateTrainingCounter === "function") {

        updateTrainingCounter();

    }

    // Home als beginscherm
    if (typeof showScreen === "function") {

        showScreen("homeScreen");

    }

});

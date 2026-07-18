document.addEventListener("DOMContentLoaded", () => {

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

    if (typeof updateTrainingCounter === "function") {
        updateTrainingCounter();
    }


});

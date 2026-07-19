function saveTraining() {

    let trainingen = getTrainingen() + 1;

    localStorage.setItem("trainingen", trainingen);
    localStorage.setItem("lastTraining", new Date().toDateString());

    updateTrainingCounter();

}

function getTrainingen() {

    return Number(localStorage.getItem("trainingen")) || 0;

}

function getStreak() {

    const laatste = localStorage.getItem("lastTraining");

    if (!laatste) {
        return 0;
    }

    // Tijdelijke versie.
    // Later bouwen we een echte streak met opeenvolgende dagen.
    return 1;

}

function getMinuten() {

    return Number(localStorage.getItem("minuten")) || 95;

}

function getCalories() {

    return Number(localStorage.getItem("calories")) || 0;

}

function updateTrainingCounter() {

    const trainingen = getTrainingen();
    const streak = getStreak();
    const minuten = getMinuten();
    const calories = getCalories();

    // Home
    const teller = document.getElementById("trainingCount");
    if (teller) teller.textContent = trainingen;

    const streakHome = document.getElementById("streakCount");
    if (streakHome) streakHome.textContent = streak;

    // Statistieken
    const statsTrainingen = document.getElementById("statsTrainingen");
    if (statsTrainingen) statsTrainingen.textContent = trainingen;

    const statsStreak = document.getElementById("statsStreak");
    if (statsStreak) statsStreak.textContent = streak;

    const statsMinuten = document.getElementById("statsMinuten");
    if (statsMinuten) statsMinuten.textContent = minuten;

    const statsCalories = document.getElementById("statsCalories");
    if (statsCalories) statsCalories.textContent = calories;

    const bestStreak = document.getElementById("bestStreak");
    if (bestStreak) bestStreak.textContent = streak + " dagen";

}

document.addEventListener("DOMContentLoaded", updateTrainingCounter);

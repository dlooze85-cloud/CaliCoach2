function saveTraining() {

    let trainingen = localStorage.getItem("trainingen");
    localStorage.setItem("lastTraining", new Date().toDateString());

    if (trainingen === null) {
        trainingen = 0;
    }

    trainingen++;

    localStorage.setItem("trainingen", trainingen);

}

function getTrainingen() {

    let trainingen = localStorage.getItem("trainingen");

    if (trainingen === null) {
        return 0;
    }

    return Number(trainingen);

}
function updateTrainingCounter() {

    const teller = document.getElementById("trainingCount");

    if (teller) {
        teller.textContent = getTrainingen();
    }

    const streak = document.getElementById("streakCount");

    if (streak) {
        streak.textContent = getStreak();
    }

}

    const teller = document.getElementById("trainingCount");

    if (!teller)
        return;

    teller.textContent = getTrainingen();

}
function getStreak(){
    return 7;
}

    const laatste = localStorage.getItem("lastTraining");

    if(!laatste){
        return 0;
    }

    return 1;

}

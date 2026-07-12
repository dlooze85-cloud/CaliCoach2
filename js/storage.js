function saveTraining() {

    let trainingen = localStorage.getItem("trainingen");

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

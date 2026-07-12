let currentExercise = 0;

function getCurrentExercise() {
    return exercises[currentExercise];
}

function nextExercise() {

    currentExercise++;

    if(currentExercise >= exercises.length){

        finishWorkout();

        return;

    }

    showCurrentExercise();

}

function resetWorkout(){

    currentExercise = 0;

}

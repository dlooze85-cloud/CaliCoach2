let currentExercise = 0;
let currentWorkout = [];

function getCurrentExercise() {
    return currentWorkout[currentExercise];
}

function nextExercise() {

    currentExercise++;

    
if(currentExercise >= currentWorkout.length){
        finishWorkout();

        return;

    }

    showCurrentExercise();

}

function resetWorkout(){

    currentExercise = 0;

}
function generateWorkout(type){

    if(type==="express"){

        return exercises
            .sort(()=>Math.random()-0.5)
            .slice(0,6);

    }

    return exercises;

}

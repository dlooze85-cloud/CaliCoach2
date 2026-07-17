
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
    if(type === "full"){
    return [...exercises]
        .sort(() => Math.random() - 0.5)
        .slice(0, 12);
}

if(type === "surprise"){
    return [...exercises]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 6) + 6);
}

    if(type !== "express"){
        return exercises;
    }

    const workout = [];

    function voegToe(bodypart){

        const opties = exercises.filter(o =>
            o.bodypart === bodypart &&
            !workout.includes(o)
        );

        if(opties.length > 0){

            workout.push(
                opties[Math.floor(Math.random()*opties.length)]
            );

        }

    }

    voegToe("Upper");
    voegToe("Legs");
    voegToe("Core");
    voegToe("Full");
    voegToe("Posterior");

    const overige = exercises.filter(o => !workout.includes(o));

    if(overige.length > 0){

        workout.push(
            overige[Math.floor(Math.random()*overige.length)]
        );

    }

    return workout;

}

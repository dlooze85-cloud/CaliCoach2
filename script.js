let currentExercise = 0;

function startWorkout() {

    saveTraining();
    updateTrainingCounter();

    currentExercise = 0;

    showCurrentExercise();

}

function showCurrentExercise() {

    const hero = document.querySelector(".hero");

    const oefening = exercises[currentExercise];

    hero.innerHTML = `

        <p class="small">
        Oefening ${currentExercise + 1} van ${exercises.length}
        </p>

        <h2>${oefening.name}</h2>

        <p><strong>Spieren:</strong><br>${oefening.muscle}</p>

        <br>

        <p>${oefening.sets} sets × ${oefening.reps}</p>

        <br>

        <button onclick="finishExercise()">
        Oefening voltooid
        </button>

    `;

}

function finishExercise(){

    currentExercise++;

    if(currentExercise >= exercises.length){

        finishWorkout();

        return;

    }

    startRest();

}

function startRest(){

    const hero = document.querySelector(".hero");

    let seconden = exercises[currentExercise-1].rest;

    hero.innerHTML=`

        <h2>Rust</h2>

        <h1 id="timer">${seconden}</h1>

        <p>Volgende oefening komt eraan...</p>

    `;

    const teller=document.getElementById("timer");

    const interval=setInterval(()=>{

        seconden--;

        teller.textContent=seconden;

        if(seconden<=0){

            clearInterval(interval);

            showCurrentExercise();

        }

    },1000);

}

function finishWorkout(){

    const hero=document.querySelector(".hero");

    hero.innerHTML=`

        <h2>🎉 Training voltooid!</h2>

        <p>Top gedaan!</p>

        <br>

        <button onclick="location.reload()">
        Terug naar Home
        </button>

    `;

}

document
.getElementById("startButton")
.addEventListener("click",startWorkout);

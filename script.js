function startWorkout() {

    saveTraining();
    updateTrainingCounter();

    currentExercise = 0;
    currentWorkout = generateWorkout("express");

    
showCurrentExercise();


}

function showCurrentExercise() {

    const hero = document.querySelector(".hero");

    const oefening = getCurrentExercise();

    hero.innerHTML = `

<p class="small">
<p class="small">
Oefening ${currentExercise+1} van ${currentWorkout.length}
</p>

<div class="progress">

<div class="progress-fill"
style="width:${((currentExercise+1)/currentWorkout.length)*100}%">
</div>

</div>
<p class="small">
Nog ${currentWorkout.length-currentExercise-1} oefening(en) te gaan
</p>

<div class="exercise-image">

<img
src="${oefening.image}"
alt="${oefening.name}"
loading="lazy">

</div>

<h2>${oefening.name}</h2>

<div class="info-grid">

<div class="info-card">
💪
<h4>Spieren</h4>
<p>${oefening.muscle}</p>
</div>

<div class="info-card">
⭐
<h4>Niveau</h4>
<p>${oefening.difficulty}</p>
</div>

<div class="info-card">
🔥
<h4>Calorieën</h4>
<p>± ${oefening.calories}</p>
</div>

<div class="info-card">
⏱
<h4>Rust</h4>
<p>${oefening.rest} sec</p>
</div>

</div>

<p class="exercise-description">
${oefening.description}
</p>

<div class="sets">

🏋️ ${oefening.sets} sets × ${oefening.reps}

</div>

<div class="exercise-stats">

<span>💪 ${oefening.muscle}</span>

<span>⭐ ${oefening.difficulty}</span>

<span>🔥 ± ${oefening.calories} kcal</span>

</div>

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
const volgende = getCurrentExercise();
    
hero.innerHTML=`

<h2>⏱ Rust</h2>

<div class="timer-circle">

<h1 id="timer">${seconden}</h1>

</div>

<h3>Volgende oefening</h3>

<div class="exercise-image">
    <img src="${volgende.image}" alt="${volgende.name}">
</div>

<h2>${volgende.name}</h2>

<p>🏋️ ${volgende.sets} sets × ${volgende.reps}</p>

<p>💪 ${volgende.muscle}</p>
<p class="exercise-description">
${volgende.description}
</p>
<br>

<button onclick="skipRest()">
⏭ Rust overslaan
</button>
<br>

<button onclick="skipRest()">
⏭ Rust overslaan
</button>

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
function skipRest(){

    showCurrentExercise();

}
document
.getElementById("startButton")
.addEventListener("click", startWorkout);

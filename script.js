
function startWorkout(type = "express") {

    saveTraining();
    updateTrainingCounter();

    currentExercise = 0;
    currentWorkout = generateWorkout(type);

    
showCurrentExercise();


}

function showCurrentExercise() {

    const hero = document.querySelector(".hero");

    const oefening = getCurrentExercise();

    hero.innerHTML = `

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

    if(currentExercise >= currentWorkout.length){

        finishWorkout();

        return;

    }

    startRest();

}

function startRest(){

    const hero = document.querySelector(".hero");

    let seconden = currentWorkout[currentExercise-1].rest;
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
function getMotivation(){

    const quotes = [

        "🔥 Consistentie verslaat perfectie.",

        "💪 Iedere training maakt je sterker.",

        "🚀 Kleine stappen. Grote resultaten.",

        "🏆 Discipline wint altijd van motivatie.",

        "⚡ Je toekomstige zelf zal je bedanken.",

        "🔥 Vandaag gewonnen. Morgen nog sterker."

    ];

    return quotes[Math.floor(Math.random()*quotes.length)];

}
function finishWorkout() {

    const hero = document.querySelector(".hero");

    let totaalCalorieen = 0;

    currentWorkout.forEach(oefening => {
        totaalCalorieen += oefening.calories;
    });

    hero.innerHTML = `

    <div class="finish-screen">

        <div class="finish-icon">🏆</div>

        <h2>Training voltooid!</h2>

        <p class="finish-text">
${getMotivation()}
</p>

        <div class="finish-stats">

            <div class="finish-card">
                💪
                <strong>${currentWorkout.length}</strong>
                <span>Oefeningen</span>
            </div>

            <div class="finish-card">
                🔥
                <strong>${totaalCalorieen}</strong>
                <span>kcal</span>
            </div>

            <div class="finish-card">
                ⏱
                <strong>${currentWorkout.length * 3}</strong>
                <span>Minuten</span>
            </div>

        </div>

        <button onclick="location.reload()">
            🔄 Nieuwe training
        </button>

    </div>

    `;

}
function skipRest(){

    showCurrentExercise();

}


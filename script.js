const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startWorkout);

function startWorkout() {
saveTraining();
    const hero = document.querySelector(".hero");

    hero.innerHTML = `

        <p class="small">Training gestart</p>

        <h2>🔥 Full Body Beginner</h2>

        <br>

        <h3>Oefening 1 / 8</h3>

        <h2>Push-ups</h2>

        <p>3 sets × 10 herhalingen</p>

        <br>

        <button id="nextExercise">
        OEFENING VOLTOOID
        </button>

    `;

    document
        .getElementById("nextExercise")
        .addEventListener("click", nextExercise);

}

function nextExercise() {

    const hero = document.querySelector(".hero");

    hero.innerHTML = `

        <p class="small">Goed bezig 💪</p>

        <h2>Rust</h2>

        <h1 id="timer">60</h1>

        <p>Volgende oefening start zo...</p>

    `;

    let seconden = 60;

    const teller = document.getElementById("timer");

    const interval = setInterval(() => {

        seconden--;

        teller.innerHTML = seconden;

        if (seconden <= 0) {

            clearInterval(interval);

            hero.innerHTML = `

                <p class="small">Oefening 2 / 8</p>

                <h2>Squats</h2>

                <p>3 sets × 15 herhalingen</p>

                <br>

                <button onclick="location.reload()">
                Terug naar Home
                </button>

            `;

        }

    }, 1000);

}

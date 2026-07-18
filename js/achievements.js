const achievements = [

{
    title: "🥇 Eerste training",
    goal: 1
},

{
    title: "🔥 Op dreef",
    goal: 10
},

{
    title: "💯 Doorzetter",
    goal: 100
},

{
    title: "👑 Fitness Legend",
    goal: 250
}

];

function renderAchievements(){

    const trainingen = getTrainingen();

    let html = "";

    achievements.forEach(a=>{

        const gehaald = trainingen >= a.goal;

        html += `
        <div class="achievement ${gehaald ? "done" : ""}">
            <div>
                <strong>${a.title}</strong><br>
                ${Math.min(trainingen,a.goal)} / ${a.goal}
            </div>

            <div>
                ${gehaald ? "✅" : "🔒"}
            </div>
        </div>
        `;

    });

    document.getElementById("achievementList").innerHTML = html;

}

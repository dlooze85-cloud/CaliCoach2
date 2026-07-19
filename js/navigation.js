function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.style.display = "none";
    });

    document.getElementById(screenId).style.display = "block";

    document.querySelectorAll("nav button").forEach(btn => {
        btn.classList.remove("active");
    });

    if (screenId === "homeScreen") {
        document.getElementById("navHome").classList.add("active");
    }

    if (screenId === "workoutScreen") {
        document.getElementById("navWorkout").classList.add("active");
    }

    if (screenId === "statsScreen") {
        document.getElementById("navStats").classList.add("active");
    }

    if (screenId === "profileScreen") {
        document.getElementById("navProfile").classList.add("active");
    }

}

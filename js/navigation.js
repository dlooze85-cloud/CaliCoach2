function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.style.display = "none";
    });

    document.getElementById(screenId).style.display = "block";

    document.querySelectorAll("nav button").forEach(button => {
        button.classList.remove("active");
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

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

document.addEventListener("DOMContentLoaded", () => {
    showScreen("homeScreen");
});

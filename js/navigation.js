function showScreen(screen){

    document.getElementById("homeScreen").style.display="none";
    document.getElementById("statsScreen").style.display="none";
    document.getElementById("profileScreen").style.display="none";

    document.getElementById(screen).style.display="block";

}

const knop = document.getElementById("timerButton");
const timer = document.getElementById("timer");

knop.addEventListener("click", () => {

let seconden = 60;

timer.innerHTML = seconden + " sec";

const interval = setInterval(function(){

seconden--;

timer.innerHTML = seconden + " sec";

if(seconden<=0){

clearInterval(interval);

timer.innerHTML="✅ Volgende oefening!";

}

},1000);

});

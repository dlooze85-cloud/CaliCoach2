function greeting() {

    const hour = new Date().getHours();

    if (hour < 12)
        return "Goedemorgen";

    if (hour < 18)
        return "Goedemiddag";

    return "Goedenavond";
}

function updateGreeting() {

    const hello = document.querySelector(".hello");

    if (!hello)
        return;

    hello.innerHTML = greeting() + " 👋";
}

updateGreeting();

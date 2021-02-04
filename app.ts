var container = document.getElementById("container");

function countdown(initial, final = 0, interval = 0){
    var current = initial;

    while(current > final){
        container.innerHTML = current;
        current -= interval;
    }
}
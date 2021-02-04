let array = [123, "Pick up dry cleaning", false];
let [ id, title, completed] = array;

console.log(String(id) + title + completed);

let options = {
    one: 20,
    two: 4,
    three: 2
}

function getOptions (){
    return {
        one: 30,
        two: 10,
        three: 10
    }
}

function countdown({one, two: final = 0,
                       three: interval = 1, one: count}){

    while(count > final){
        count -= interval;
        console.log(count);
    }
}

countdown({one: 10});
countdown(options);

countdown(getOptions());

function addValues(...values) {
    let sum = 0;
    for(let value of values){
        sum += value;
    }
    return sum;
}

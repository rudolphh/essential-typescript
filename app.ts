var container = document.getElementById("container");

function Counter(el){

    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', () => {
        this.count += 1;
        el.innerHTML = this.count;
    });
}

new Counter(container);

let array = [1, 2, 3].filter(x => x > 0);
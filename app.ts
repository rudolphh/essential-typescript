
interface jQuery {
    (selector : string) : HTMLElement;
    version : number;
}

// var $ = <jQuery> function (selector) {
let $ = <jQuery> function (selector) {
    //return document.getElementById(selector);
}

$.version = 1.12;

let element = $('container');
element.
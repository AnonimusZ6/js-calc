"use strict";

const tables = document.getElementById('tables');
const tds = tables.querySelectorAll('td');
const inputs = document.querySelector('#inputs');
const btnEquals = document.getElementById('btnEquals');
const toClears = document.getElementById('toClears');


let result = '';

function toEqualize() {
    clears();
    inputs.value = eval(result);
}


const clears = () => {
    inputs.value = '';
};

function toInput() {
    tds.forEach(elem => {
        elem.addEventListener('click', function() {
            inputs.value += elem.textContent;
            result = inputs.value;
        });
    });
}

btnEquals.addEventListener('click', function() {
    toEqualize();
});


toClears.addEventListener('click', function() {
    clears();
});

toInput();

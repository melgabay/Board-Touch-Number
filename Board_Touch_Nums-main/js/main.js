'use strict';
var gNums = [];
var gLength = 16;
var gCounter = 1;

window.onload = function init() {
    createNumsArray();
    renderTable();
}

function YourLevel(size) {
    gLength = size;
    stop();
    gCounter = 1;
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById("msec").innerHTML = "0" + msec;
    document.getElementById("sec").innerHTML = "0" + sec;
    document.getElementById("min").innerHTML = "0" + min;
    document.getElementById("hour").innerHTML = "0" + hour;
    createNumsArray();
    renderTable();
}

function cellClicked(cell) {
    if (gCounter === 1) {
        start();
    } else if (gCounter === gLength) { stop() };
    if (gCounter === +cell.textContent) {
        cell.style.backgroundColor = getRandomColor();
        gCounter++;
    }
}

function renderTable() {
    var tableHTML = '';
    var sizeBoard = Math.sqrt(gLength);
    var counter = 0;
    for (var i = 0; i < sizeBoard; i++) {
        tableHTML += '<tr>';
        for (var j = 0; j < sizeBoard; j++) {
            tableHTML += ` <td onclick="cellClicked(this)" > ${gNums[counter++]} </td>`;
        }
        tableHTML += ' </tr>';
    }
    var elTableBody = document.querySelector('.createTable');
    elTableBody.innerHTML = tableHTML;
}

function createNumsArray() {
    gNums = [];
    for (var i = 0; i < gLength; i++) {
        gNums.push(i + 1);
    }
    shuffle();
}

function shuffle() {
    var currentIndex = gNums.length;
    var randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        var temp = gNums[currentIndex];
        gNums[currentIndex] = gNums[randomIndex];
        gNums[randomIndex] = temp;
    }
    return gNums;
}
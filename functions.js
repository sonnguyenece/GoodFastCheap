function checkGood() {
    return document.getElementById("good").checked;
}

function checkFast() {
    return document.getElementById("fast").checked;
}

function checkCheap() {
    return document.getElementById("cheap").checked;
}

function markCheckBox(id) {
    document.getElementById(id).checked = true;
}

function unmarkCheckBox(id) {
    document.getElementById(id).checked = false;
}

function random0to2() {
    return Math.floor(Math.random() * 3);
}

let rand;
let temp = rand;

function checkResult() {
    if (checkFast() === checkGood() === checkCheap() === true) {
        while (temp === rand) rand = random0to2();
        switch (rand) {
            case 0:
                unmarkCheckBox("good");
                break;
            case 1:
                unmarkCheckBox("fast");
                break;
            case 2:
                unmarkCheckBox("cheap");
                break;
        }
        temp = rand;
    }
    else return;
}
let gammeSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    gammeSeq.push(randClr);
    console.log(gammeSeq);
    // console.log(randClr);

    btnFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gammeSeq[idx]) {
        console.log("Same Value");
        if (userSeq.length == gammeSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="White";
        },1000)
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(this);
    userClr = btn.getAttribute("id");
    // console.log(userClr);
    userSeq.push(userClr);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gammeSeq = [];
    userSeq = [];
    level = 0;
}

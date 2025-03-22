let gameSeq = [];
let userSeq = [];

let started = false; 
let level = 0;

let btns = ['green', 'pink', "blue", "yellow"];

let h3 = document.querySelector('h3');

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("Game is started");
        started= true;

        levelUp();
    }
});

function gameFlash(btns){
    btns.classList.add("gameflash"); 

    setTimeout(function () {
        btns.classList.remove('gameflash');
    }, 300);
}


function userFlash(btns){
    btns.classList.add("userFlash"); 

    setTimeout(function () {
        btns.classList.remove('userFlash');
    }, 300);
}
function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
    
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkAnswer() {
    //console.log("Current level" , level);

    let index = level-1;
    if(userSeq[index]===gameSeq[index]){
        console.log("same color");
    }else{
        h3.innerText = "Game Over! Press any key to start";
    }
}

function btnPress () {
    console.log("button was pressed");
    console.log(this);
    let btn = this;
    //gameFlash(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);

    userSeq.push(userColor);

    checkAnswer(); 

}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click', btnPress);
}
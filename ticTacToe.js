let boxes = document.querySelectorAll(".box");
let bodyDiv = document.querySelector(".body-div")
let resetBtn = document.querySelector(".reset-button");
let playerx = document.querySelector(".player-1-wins");
let playery = document.querySelector(".player-2-wins");
let newGameBtn = document.querySelector(".new-game-button-class");
let draw = document.querySelector(".draw-class");
let count=0;

let playerX=1;
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let drawArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
];

function check(){
    for(let index of arr){
        if((boxes[index[0]].textContent == 'X') && (boxes[index[1]].textContent == 'X') && (boxes[index[2]].textContent == 'X')){
            playerx.classList.remove("hidden");
            bodyDiv.classList.add("opacity");
            resetBtn.classList.add("hidden");
            newGameBtn.classList.remove("hidden");
            count=0;
        }
        else if((boxes[index[0]].textContent == 'O') && (boxes[index[1]].textContent == 'O') && (boxes[index[2]].textContent == 'O')){
            playery.classList.remove("hidden");
            bodyDiv.classList.add("opacity");
            resetBtn.classList.add("hidden");
            newGameBtn.classList.remove("hidden");
            count=0;
        }
    }
}
function drawCheck(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(boxes[drawArr[i][j]].textContent != '')
                count++;
        }
    }
    if(count == 9){
        draw.classList.remove("hidden");
        newGameBtn.classList.remove("hidden");
        bodyDiv.classList.add("opacity");
        resetBtn.classList.add("hidden");
        playerx.classList.add("hidden");
        playery.classList.add("hidden");
    }
    count=0;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerX == 1 && box.textContent == ''){
            box.textContent = "X";
            playerX=0;
        }
        else if(playerX == 0 && box.textContent == ''){
            box.textContent = "O";
            playerX=1;
        }
        check();
        drawCheck();
    })
})

resetBtn.addEventListener("click",()=>{
   for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        boxes[drawArr[i][j]].textContent = '';
    }
   }
    playerX=1;
});

boxes.forEach((box)=>{
    box.addEventListener("mouseover",()=>{
        box.style.backgroundColor = "rgb(47, 47, 68)"
    });
});
boxes.forEach((box)=>{
    box.addEventListener("mouseout",()=>{
        box.style.backgroundColor = "rgb(50, 50, 73)"
    });
});
resetBtn.addEventListener("mouseover",()=>{
    resetBtn.style.backgroundColor="rgb(172, 152, 152)"
})
resetBtn.addEventListener("mouseout",()=>{
    resetBtn.style.backgroundColor="rgb(141, 123, 123)"
})

newGameBtn.addEventListener("click",()=>{
    playerx.classList.add("hidden");
    playery.classList.add("hidden");
    newGameBtn.classList.add("hidden");
    bodyDiv.classList.remove("opacity");
    resetBtn.classList.remove("hidden");
    draw.classList.add("hidden");
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            boxes[drawArr[i][j]].textContent = '';
        }
    }
    count=0;
    playerX=1;
})
newGameBtn.addEventListener("mouseover",()=>{
    newGameBtn.style.backgroundColor="rgb(185, 164, 164)"
})
newGameBtn.addEventListener("mouseout",()=>{
    newGameBtn.style.backgroundColor="rgb(141, 123, 123)"
})

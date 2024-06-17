let music=new Audio("music.mp3")
let turnmusic=new Audio("ting.mp3")
let gameOver=new Audio("gameover.mp3")
let turn="X";
let isGameOver=false

//Function to change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//Function to check win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
  let wins=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
  wins.forEach(e=>{
    if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[2]].innerText===boxtext[e[1]].innerText && boxtext[e[0]].innerText!==''){
        document.querySelector('#turn').innerText=boxtext[e[0]].innerText+" won"
        isGameOver=true;
        document.querySelector('.gif').style.width='10vw'
        document.querySelector('.gif').style.height='10vw'
    }
  })
}

//Game Logic
let boxes=document.getElementsByClassName("boxer")
Array.from(boxes).forEach(e=>{
    let boxtext=e.querySelector(".boxtext");
    e.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn()
            turnmusic.play();
            checkWin();
            if(!isGameOver){
            document.getElementById('turn').innerText="Turn of "+turn
            }
        }
    })
}) 

let button=document.querySelector('button')
button.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach((e)=>{
        e.innerText=" ";
        turn="X"
        isGameOver=false
        document.getElementById('turn').innerText="Turn of "+turn
        document.querySelector('.gif').style.width='0'
            
    })
})
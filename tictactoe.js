console.log("Welcome to the cooler tic-tac-toe");

let turn1 = new Audio("turn.mp3");
// let gameend= new Audio("gameover.mp3");
let gameover=false;

let turn = "X"

// turn change
const changeTurn=()=>{

    return turn === "X"? "O": "X";
}

//check win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[[0,1,2],
     [3,4,5], 
     [6,7,8], 
     [0,3,6], 
     [1,4,7], 
     [2,5,8], 
     [0,4,8], 
     [2,4,6]
    ];

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
            gameover=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="200px";
            document.getElementsByClassName('boxtext').forEach(e =>{
                if(boxtext[e[0]].innerText=== ""){boxtext[e[0]].nodeValue(null);}
                if(boxtext[e[1]].innerText=== ""){boxtext[e[1]].nodeValue(null);}
                if(boxtext[e[2]].innerText=== ""){boxtext[e[2]].nodeValue(null);}
            })
            // gameend.play();
            
        }
    })
}

// Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turn1.play();
            checkWin();
            if(!gameover){document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            

        }
    })
})

//reset
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText=""
    });
    turn="X"
    gameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px";
})

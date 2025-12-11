let boxes =document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset");
let nbtn =document.querySelector("#ngame");
let msgcont=document.querySelector(".msg");
let msg=document.querySelector("#ms");

let turno =true;

let winpatt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was defw");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
             box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwin();
    });
});

rbtn.addEventListener("click",()=>{
    location.reload();
});

const showwinner =(winner)=>{
    msg.innerText=`cong PLAYER ${winner}`;
    msgcont.classList.remove("hide");
}
const changecolor =(p1,p2,p3)=>{
    let b1=boxes[p1];
    let b2=boxes[p2];
    let b3=boxes[p3];
    b1.style.color = "Red";
    b2.style.color = "Red";
    b3.style.color = "Red";
}
const checkwin=()=>{
    for(patt of winpatt){
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                for(let box of boxes){
                    box.disabled=true;
                }
                changecolor(patt[0],patt[1],patt[2]);
                showwinner(pos1);
                retet()          
            }
        }

    }

}
const retet=()=>{
    nbtn.addEventListener("click",()=>{
    location.reload();
});

}


let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msg=document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container");

let turnO = true;

const winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
            box.disabled=true;  //to stop it change once after clicking

        }
        else{
            box.innerText="X";
            turnO=true;
            box.disabled=true;

        }

        checkwinner();
    });
});

const resetgame=()=>{
    turnO=true;
    enable();
    msgcontainer.classList.add("hide");

};

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
        
        
    };
};

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    };
};


const showwinner= (posval1) => {
    msg.innerText=`Congratulations,  winner is ${posval1}`;
    msgcontainer.classList.remove("hide");
    disable();
};

let checkwinner= () =>{
    for(let patterns of winner){
        // console.log(patterns[0],patterns[1],patterns[2]);
        
            let posval1=boxes[patterns[0]].innerText;
            let posval2=boxes[patterns[1]].innerText;
            let posval3=boxes[patterns[2]].innerText;
        
        if(posval1 != "" && posval2!=""&& posval3!=""){
            if(posval1===posval2&& posval2===posval3 && posval3===posval1){
                
                showwinner(posval1);
                disable();
               
            };
            
        };

    };
};


resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);
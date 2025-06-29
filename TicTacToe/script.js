let btns = document.querySelectorAll(".btn")
let resetBtn = document.querySelector("#resetBtn")
let msg_con = document.querySelector(".msg-container")
let newBtn = document.querySelector("#newBtn")
let msg = document.querySelector("#msg")

let turnO= true; //o or x

const winning_patterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

btns.forEach((button) => {
    button.addEventListener("click",()=>{
        // console.log("button clicked");
        if(turnO === true){
            button.innerText = "O"
            turnO = false;
            
        }else{
            button.innerText = "X"
            turnO = true
        }
        button.disabled = true;

        checkWinner();
    })
})
/*
const checkWinner=(()=>{
    for(let patterns of winning_patterns){
        // console.log(patterns)
        console.log(patterns[0],patterns[1],patterns[2])
        // console.log(btns[patterns[0]],btns[patterns[1]],btns[patterns[2]])
        console.log(
            btns[patterns[0]].innerText,
            btns[patterns[1]].innerText,
            btns[patterns[2]].innerText
        );
    }
})
*/
const checkWinner=(()=>{
    for(let patterns of winning_patterns){
        let pos1val=  btns[patterns[0]].innerText;
        let pos2val = btns[patterns[1]].innerText;
        let pos3val = btns[patterns[2]].innerText;
        

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val===pos2val && pos2val===pos3val){
            // console.log("Winner!",pos1val);
            disableBtns();
            showWinner(pos1val);

        }
    }}
})

const showWinner=(winner)=>{
    msg.innerText = `Winner is ${winner}.`
    msg_con.classList.remove("hide");
}

const disableBtns = () =>{
    for(let btn of btns){
        btn.disabled = true;
    }
}

const enableBtns = () => {
    for (let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const reset = () =>{
    turnO = true;
    enableBtns();
    msg_con.classList.add("hide")
}

newBtn.addEventListener("click",reset)
resetBtn.addEventListener("click",reset)


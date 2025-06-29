const notesCon = document.querySelector(".notesCon");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox")

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable","true");

})
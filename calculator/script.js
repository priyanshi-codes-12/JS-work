// const btn1 = document.getElementById("d1");
// btn1.addEventListener("click",() =>{
//     display.value += btn1.innerHTML
// });
// const btn2 = document.getElementById("d2");
// btn2.addEventListener("click",() =>{
//     display.value += btn2.innerHTML
// });

// const display = document.getElementById("display")

const buttons = document.querySelectorAll(".samebt")
const display = document.querySelector("#display")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const back = document.querySelector(".back")

buttons.forEach((button)=>{
    button.addEventListener("click",() =>{
    display.value += button.innerHTML
    });
})

clear.addEventListener("click",() =>{
    display.value = ""
});

equal.addEventListener("click",() =>{
   try{
    display.value = eval(display.value)
   }catch{
    display.value = "Error"
   }
});

back.addEventListener("click",() =>{
    display.value = display.value.slice(0,-1);
});

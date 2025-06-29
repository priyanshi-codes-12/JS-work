const inputBox = document.getElementById("inputBox")
const listCon = document.getElementById("listCon")

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCon.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listCon.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }   
});

function saveData(){
    localStorage.setItem("data",listCon.innerHTML);
}
function showData(){
    listCon.innerHTML = localStorage.getItem("data")
}
showData()
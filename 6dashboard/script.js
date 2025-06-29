const dateElement = document.getElementById("currentDate");
const today = new Date();
const day = today.getDate();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[today.getMonth()];

dateElement.textContent = `${day} ${month}`;


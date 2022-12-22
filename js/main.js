// Fetching data and insert in divs
const idDiv = document.querySelector(".id");
const adviceDiv = document.querySelector(".advice");

fetch("https://api.adviceslip.com/advice")
.then(data => data.json())
.then(advice => {
    idDiv.textContent = `advice # ${advice.slip.id}`
    adviceDiv.textContent = `${advice.slip.advice}`
}).catch(error=> Error(error));


// To reload page using luck icon
const icon = document.querySelector(".icon");

icon.addEventListener("click",()=>{
    location.reload()
})
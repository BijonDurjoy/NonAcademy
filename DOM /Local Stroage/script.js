const counter = document.getElementById("counter");
const counterBtn = document.getElementById("counterBtn");
const localValue = localStorage.getItem("count");
let count = 0;
if(localValue){
    count = counter.innerText = localValue;
}
counterBtn.addEventListener("click", () =>{
    count++;
    counter.innerText = count;
    console.log(count);localStorage.setItem("count", count);
}) 
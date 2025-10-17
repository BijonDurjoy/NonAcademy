let input = document.getElementById("input");
let button = document.getElementById("submitButton");


button.addEventListener("click", () => {
  document.getElementById("outputSize").innerText = input.value.length;
  console.log(`The input value size is ${input.value.length}`);
});

//Reload button functionality
document.getElementById("reloadButton").addEventListener("click", ()=>{
    location.reload();
})
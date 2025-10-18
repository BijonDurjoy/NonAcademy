let input = document.getElementById("input");
let button = document.getElementById("submitButton");

let submitFunc = () => {
  document.getElementById("outputSize").innerText = input.value.length;
  console.log(`The input value size is ${input.value.length}`);
};

//Reload button functionality
let reloadFunc = () =>{
  location.reload();
}

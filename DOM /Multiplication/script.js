const inputField = document.getElementById("inputNum");
const btn = document.getElementById("generateBtn");



btn.addEventListener("click", () =>{
    let userInput = Number(inputField.value);
    //console.log(typeof userInput);
    let counter = 1;
    while(counter <= 10){
        let output = userInput * counter;
        console.log(`${userInput} * ${counter} = ${output}`);

        const ans = document.createElement("p");
        ans.innerText = `${userInput} * ${counter} = ${output}`;
        document.body.appendChild(ans);
        counter++;
    }
})

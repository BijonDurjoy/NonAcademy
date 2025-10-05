let colors = ["red", "green", "blue"];

let counter = 0;

function changeColor(){
    while(counter < colors.length){
        document.body.style.backgroundColor = colors[counter];
        console.log(colors[counter]);
        counter++;
        break;
    }
    if(counter == colors.length){
        counter = 0;
    }
}
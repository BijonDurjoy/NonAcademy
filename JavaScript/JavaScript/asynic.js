let totalAmount = 100;

let sendMoney = async (amount) =>{
    if(amount > totalAmount){
        console.log(`Insufficient Balance`);
        return;
    }
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            totalAmount -= amount;
            console.log(`After send money, Total Balance : ${totalAmount}`);
            resolve();
        },2000);
    });
};

let cashIn = async (amount) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            totalAmount += amount;
            console.log(`After Cash in, Total Balance : ${totalAmount}`);
            resolve();
        },4000);
    });
};

await cashIn(5000);
await sendMoney(2000);
console.log(totalAmount);

//data fetching
let fetchData = async() =>{
    console.log(`Fetching Data...`);
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
}

fetchData();
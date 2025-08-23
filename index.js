


console.log("Script")
let list = document.getElementById("name-list");
const count = 10;

for(let i=0; i< count;i++){
    const listElem = document.createElement("li");
    listElem.innerHTML = `AJMAL M ${i+1}`;
    list.appendChild(listElem)
}
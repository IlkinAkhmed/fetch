const tbody = document.querySelector("#tbody");

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  data.forEach((items) => {
    console.log(items);
    const trow = document.createElement("tr");
    const Name = document.createElement("td");
    const username = document.createElement("td");
    const email = document.createElement("td");
    const number = document.createElement("td");
    Name.textContent = items.name;
    username.textContent = items.username;
    email.textContent = items.email;
    number.textContent = items.phone;
    trow.append(Name, username, email, number);
    tbody.append(trow);
  });
}
fetchData(); 
// const p = document.querySelector("#p")
// const btnreset = document.querySelector("#btn")
// const btnstop = document.querySelector("#stop")
// const btnstart = document.querySelector("#start")
// second = 0
// minute = 1
// let myInterval = setInterval(function() {p.innerHTML=count++;},1000)
// btnreset.addEventListener('click',()=>{
//     count=0
//     clearInterval(myInterval)
//     setInterval(function() {p.innerHTML=count++;},1000)
// })
// btnstop.addEventListener("click",()=>{
//     clearInterval(myInterval)
// })
// btnstart.addEventListener('click',()=>{
//     setInterval(function() {p.innerHTML=count++;},1000)
// })
// if (p.innerHTML===60) {
//     p.innerHTML=minute+"."+count++
// }

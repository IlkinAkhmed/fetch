// const tbody = document.querySelector("#tbody");

// async function fetchData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   data.forEach((items) => {
//     console.log(items);
//     const trow = document.createElement("tr");
//     const Name = document.createElement("td");
//     const username = document.createElement("td");
//     const email = document.createElement("td");
//     const number = document.createElement("td");
//     Name.textContent = items.name;
//     username.textContent = items.username;
//     email.textContent = items.email;
//     number.textContent = items.phone;
//     trow.append(Name, username, email, number);
//     tbody.append(trow);
//   });
// }
// fetchData();
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

const inpname = document.querySelector("#inp-name");
const inprate = document.querySelector("#inp-rating");
const tbody = document.querySelector("#tbody");
const show = document.querySelector("#showData")
const table = document.querySelector(".table")
const baseUrl = "http://localhost:3000/products";

async function fetchData() {
  try {
    const res = await axios(baseUrl);
    addTable(res.data);
  } catch (error) {
    console.log(error);
  }
}
function addTable(data) {
  try {
    tbody.innerHTML = "";
    data.forEach((items) => {
      const trow = document.createElement("tr");
      trow.innerHTML = `
      <td>${items.id}</td>
      <td>${items.name}</td>
      <td>${items.rating}</td>
      <td>
      <button onclick="editPost(${items.id})">edit</button>
      <button onclick="deletePost(${items.id})">delete</button>
      </td>
      `;
      tbody.append(trow);
    });
  } catch (error) {
    console.log(error);
  }
}
async function CreatePost() {
  try {
    await axios.post(baseUrl, {
      name: inpname.value,
      rating: inprate.value,
    });
    fetchData();
  } catch (error) {
    console.log(error);
  }
}
async function deletePost(PostId) {
  try {
    axios.delete(`${baseUrl}/${PostId}`);
    fetchData();
  } catch (error) {
    console.log(error);
  }
}
editPostId=null
async function editPost(PostId){
  try {
    const res = await axios.get(`${baseUrl}/${PostId}`)
    data = res.data
    inpname.value=data.name
    inprate.value=data.rating
    editPostId = PostId
  } catch (error) {
    console.log(error);
  }
}
async function UpdatePost(){
  if (editPostId) {
    try {
      await axios.put(`${baseUrl}/${editPostId}`,{
      name:inpname.value,
      rating:inprate.value
      })
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }
}
fetchData();
show.addEventListener('click',()=>{
  table.classList.toggle('active')
})

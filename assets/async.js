async function fetchData(){
    const res = await axios('http://localhost:3000/products')
    const data = res.data
    data.forEach(items => {
        console.log(items.name);
    });
}
fetchData()
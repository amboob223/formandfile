// we are going to do it this way taking the button out the form so wwe can caiotrol the fetch and the payload and the varibles to get the name and the file data and put both in the database then we will see how to do it smooth
const name = document.getElementById("name");
const image = document.getElementById("image")
const button = document.getElementById("btn");

button.addEventListener("click",async()=>{
    const body = {
        name:name.value,
        filename:image.value
    }
    const response = await fetch("http://localhost:5000/work",
    {
        method:"POST",
        headers:{"Content-type":"applications/json"},
        body:JSON.stringify(body)
    })
    
})

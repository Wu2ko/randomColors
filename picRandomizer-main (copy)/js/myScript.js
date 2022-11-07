document.querySelector('form').onsubmit = (event)=>{
    if(document.querySelector('.name').value ===''||
        document.querySelector('.email').value ===''){
        event.preventDefault();
        document.querySelector('.error').innerHTML="<p>Uzpildyk</p>"
    }
}













/*let x = 0
while (x<16){
    let newDiv = document.createElement("div")
    newDiv.className = `col-sm-3 box`
    document.querySelector(".container").appendChild(newDiv)
    x++
}

const random = (number)=>{
    return Math.floor(Math.random()*number)
}
document.querySelector('.container').addEventListener('click',(event)=>{
    event.target.style.backgroundColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
})

//document.createElement("div123213")

console.log("isthison?")
*/

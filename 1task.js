let colors=["brown","green","red","yellow","blue","orange","pink","purple","gray","aqua"]
let btn=document.getElementById('btn')
let color=document.querySelector('.color')
btn.addEventListener("click",()=>{
    const anycolor=getRandomNumber()
    //console.log(anycolor)

    document.body.style.backgroundColor=colors[anycolor]
    color.textContent=colors[anycolor]
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
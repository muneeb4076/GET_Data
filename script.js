document.querySelector(".in").addEventListener("keydown",(Event)=>{
    if(Event.key==="Enter")
    {Msg1()}
})

document.querySelector(".btn").addEventListener("click",()=>{Msg1();})
function Msg1(){
var message=document.querySelector(".in").value
var mesg1=message.toUpperCase()

document.querySelector(".out").innerHTML= "THE MESSAGE IS " + mesg1
}

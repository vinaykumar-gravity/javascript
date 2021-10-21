let contact = document.getElementById("openButton")
let details = document.getElementById("closeModal")

contact.addEventListener("click",function(){
    document.getElementById("overlay").style.display = "block"
})

document.getElementById("closebutton").addEventListener("click",function(){
    document.getElementById("overlay").style.display = "none"
    document.getElementById("openModal").style.display = "block"
})


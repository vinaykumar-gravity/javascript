let pot = document.getElementsByClassName("pot")
let a = 0;
let prev = document.getElementById("prev") 
let next = document.getElementById("next")

prev.addEventListener("click",function(){
    pot[a].style.display = "none"
    if(a==0) {
        a=2
    }
    else {
        a--
    }
    pot[a].style.display = "block"

})

next.addEventListener("click",function(){
    pot[a].style.display = "none"
    if(a==2) {
        a=0
    }
    else {
        a++;
    }
    pot[a].style.display = "block"
})

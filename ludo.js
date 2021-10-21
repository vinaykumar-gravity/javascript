let roll = document.getElementById("dice")
let a = 0
let i = 0
let present = document.getElementsByClassName("box")
let player_1 = document.getElementById("score1")
let player_2 = document.getElementById("score2")
let w1 = document.getElementsByClassName("para1")
let w2 = document.getElementsByClassName("para2")
let T_1 = 0
let T_2 = 0

w1.innerHTML = ""
w2.innerHTML = "Player 2 turn"

roll.addEventListener("click",function(){
    a = Math.floor(Math.random()*100)+1
    present[i].innerHTML = `${a}`
    if(i==1){
        T_2 = T_2 + a
        player_2.innerHTML = `Score : ${T_2}`
        i=0
        present[i].innerHTML = `-`  
        w1[0].innerHTML = "Player 1 turn"
        w2[0].innerHTML = ""
        present[1].classList.remove("active")
        present[0].classList.add("active")

    }
    else{
        T_1 = T_1 + a
        player_1.innerHTML = `Score : ${T_1}`
        i=1
        present[i].innerHTML = `-`
        w1[0].innerHTML = ""
        w2[0].innerHTML = "Player 2 turn"
        present[0].classList.remove("active")
        present[1].classList.add("active")
    }
})
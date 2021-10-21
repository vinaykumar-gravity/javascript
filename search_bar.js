let inputValue = document.getElementById("searchBar")

inputValue.addEventListener("keyup",function(event){
    let searchQuery = event.target.value
    let allNames = document.getElementsByClassName("name")
    for(let k = 0;k<allNames.length;k++) {
        const currentName = allNames[k].textContent
        if(!(currentName.includes(searchQuery))) {
            allNames[k].style.display = "none"
        }
        else {
            allNames[k].style.display = "block"
        }
    }
})
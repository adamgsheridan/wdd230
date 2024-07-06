let visits = addVisits()
let loadVisits = document.getElementById("visits")
loadVisits.innerHTML = visits

function addVisits(){
    let totalVisits = localStorage.getItem("site-visits")
    if (totalVisits == null){
        totalVisits = 0
    }
    else{
        totalVisits = parseInt(totalVisits)
    }
    totalVisits = totalVisits + 1
    localStorage.setItem("site-visits",`${totalVisits}`)
    return totalVisits
}
let fday = new Date().getDay()

if (fday >= 1 && fday <= 4) {
    document.querySelector(".light-meet-greet").classList.add("show")
}

document.querySelector(".light-meet-greet button").addEventListener("click", ()=> {
    document.querySelector(".light-meet-greet").classList.remove("show")
})

if (fday >= 1 && fday <= 4) {
    document.querySelector(".dark-meet-greet").classList.add("show")
}

document.querySelector(".dark-meet-greet button").addEventListener("click", ()=> {
    document.querySelector(".dark-meet-greet").classList.remove("show")
})

function deferToJoin() {
    window.open("join.html")
}

document.querySelector(".light-hero button").addEventListener("click", deferToJoin)
document.querySelector(".dark-hero button").addEventListener("click", deferToJoin)
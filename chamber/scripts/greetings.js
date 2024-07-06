let today = new Date();
const DAY_IN_MILLIS = 1000*60*60*24;
const LAST_VISIT_KEY = "last-visit"

function getMessage(){
    let lastvisit = localStorage.getItem(LAST_VISIT_KEY)    
    if (lastvisit == null){
        return "Welcome! Let us know if you have any questions."
    }
    lastvisit = parseInt(lastvisit)
    let datediff = today.getTime() - lastvisit
    if (datediff < DAY_IN_MILLIS){
        return "Back so soon? Awesome!"
    }
    if (datediff < DAY_IN_MILLIS * 2){
        return "You last visited us yesterday. Welcome back!"
    }
    let daysSinceLastVisit = Math.floor(datediff/DAY_IN_MILLIS)
    return `Your last visit was ${daysSinceLastVisit} days ago. It's good to have you back!`
}

let message = getMessage()
document.getElementById("greeting").innerText = message
localStorage.setItem(LAST_VISIT_KEY, `${today.getTime()}`)
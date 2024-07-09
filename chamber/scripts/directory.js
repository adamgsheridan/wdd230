var selectGrid =  document.querySelector("#directory-grid")
var selectList = document.querySelector("#directory-list")
var selectData = document.querySelector("#directory-data")

selectGrid.addEventListener("click", ()=>{
    if (!selectGrid.classList.contains("active")){
        selectGrid.classList.add("active")
        selectList.classList.remove("active")
        selectData.classList.add("directory-cards")
        selectData.classList.remove("directory-list")
    }
})
6
selectList.addEventListener("click", ()=>{
    if (!selectList.classList.contains("active")){
        selectList.classList.add("active")
        selectGrid.classList.remove("active")
        selectData.classList.add("directory-list")
        selectData.classList.remove("directory-cards")
    }
})

const url = "./data/members.json"

const displayBusinesses = (businesses) => {
    const cards = document.querySelector(".directory-cards")
    businesses.forEach((business) => {
        let card = document.createElement("section")
        card.innerHTML = `
        <img src="${business.img}">
        <p>${business.name}</p>
        <p>${business.address}</p>
        <p>${business.phonenumber}</p>
        <p><a class="card-website" href="${business.websiteurl}">Click Here To Visit Company Website</a></p>
        `
        cards.appendChild(card)
    })
}

async function getData() {
    const input = await fetch(url)
    if(input.ok) {
        const data = await input.json()
        displayBusinesses(data.companies)
    }
    else {
        console.error("Something went wrong when loading the business data.")
        const cards = document.querySelector("directory-cards")
        cards.innerHTML = "<section><h1>Something went wrong when loading the business data.</h1></section>"
    }
}

getData()
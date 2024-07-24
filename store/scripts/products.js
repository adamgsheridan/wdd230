// var selectGrid =  document.querySelector("#directory-grid")
var selectData = document.querySelector("#product-data")


const url = "./data/products.json"

const displayProducts = (products) => {
    const cards = document.querySelector(".product-cards")
    products.forEach((product) => {
        let card = document.createElement("section")
        card.innerHTML = `
        <img src="${product.imgurl}">
        <p>${product.name}</p>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Featured: ${product.featured}</p>
        `
        cards.appendChild(card)
    })
}

async function getData() {
    const input = await fetch(url)
    if(input.ok) {
        const data = await input.json()
        displayProducts(data.products)
    }
    else {
        console.error("Something went wrong when loading the product data.")
        const cards = document.querySelector("product-cards")
        cards.innerHTML = "<section><h1>Something went wrong when loading the product data.</h1></section>"
    }
}

getData()
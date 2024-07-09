const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'

const cards = document.querySelector('#cards')

// Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
    const response = await fetch(url)
    const data = await response.json()
    // console.table(data.prophets);
    displayProphets(data.prophets)
}
getProphetData()

const displayProphets = (prophets)=> {
    prophets.forEach((prophets) => {
        // Create a section element and store it in a variable named card using createElement().
        let card = document.createElement("section")

        // Create an h2 element and store it in a variable named "fullName".
        let fullName = document.createElement("h2")

        let dateOfBirth = document.createElement("p")

        let birthPlace = document.createElement("p")

        // Create an img element and store it in a variable named "portrait".
        let portrait = document.createElement("img")

        // Populate the heading element with the prophet's full name using a template string to build the full name.
        fullName.textContent = `${prophets.name} ${prophets.lastname}`

        dateOfBirth.textContent = `Birthdate: ${prophets.birthdate}`

        birthPlace.textContent = `Place of Birth: ${prophets.birthplace}`

        // Build the image element.
        portrait.setAttribute('src', prophets.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height', '440')

        // Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName)
        card.appendChild(dateOfBirth)
        card.appendChild(birthPlace)
        card.appendChild(portrait)
        cards.appendChild(card)
    });
}
let year = new Date().getFullYear()
let currentYearSpan = document.querySelector("#currentYear")
// The '`' mark emables you to use a variable inside of a string.
currentYearSpan.innerHTML = `${year}`

// Sets the last modified date
let lastModifiedParagraph = document.querySelector("#lastModified")
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`
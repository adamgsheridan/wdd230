function getYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    document.querySelector('#currentYear').textContent = currentYear;
}

getYear();

function displayLastModified() {
    let lastModified = new Date(document.lastModified);
    document.querySelector('#lastModified').innerHTML = lastModified
}

displayLastModified();
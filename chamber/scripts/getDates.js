function displayLastModified() {
    let lastModified = new Date(document.lastModified);
    document.querySelector('#lastModified').innerHTML = lastModified;
}

displayLastModified();
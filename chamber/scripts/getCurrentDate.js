function getCurrentDate() {
    let date = Date.now();
    document.getElementById("hidden").innerHTML = date;
}

getCurrentDate();
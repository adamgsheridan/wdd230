function calculateWindchill() {
    let airTemp = 50
    let windspeed = 3
    let windchill = 35.74 + .6215 * airTemp - 35.75 * windspeed ** .16 + .4275 * airTemp * windspeed ** .16

    if (airTemp < 50 || windspeed < 3) {
        document.getElementById('windchill').innerHTML = "N/A"
    }
    else {
        document.getElementById('windchill').innerHTML = "Windchill: " + windchill.toFixed(2)
    }
}

calculateWindchill()
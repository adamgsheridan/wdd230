const currentTemp = document.querySelector("#current-temp")
const currentCondition = document.querySelector("#condition")
const currentHumidity = document.querySelector("#humidity")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.769770389301335&lon=-111.8929699723273&appid=3f91a1dd0b5133efd8bbbeeff51c9c58"

40.769770389301335, -111.8929699723273
async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            data = await response.json()
            console.log(data)
            displayInformation(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
apiFetch();

function displayInformation(data) {
    currentTemp.innerHTML = `${((data.main.temp - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`
    currentCondition.innerHTML = `${data.weather[0].description}`
    const iconCode = data.weather[0].icon
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    currentHumidity.innerHTML = `${data.main.humidity}%`
}

const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.769770389301335&lon=-111.8929699723273&appid=3f91a1dd0b5133efd8bbbeeff51c9c58"

async function forecastApiFetch() {
    try {
        const response = await fetch(forecasturl)
        if (response.ok) {
            data = await response.json()
            console.log("new data")
            console.log(data)
            displayforecast(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

forecastApiFetch()

const date1 = document.querySelector("#date1")
const date2 = document.querySelector("#date2")
const date3 = document.querySelector("#date3")

const minTemp1 = document.querySelector("#min-temp1")
const minTemp2 = document.querySelector("#min-temp2")
const minTemp3 = document.querySelector("#min-temp3")

const maxTemp1 = document.querySelector("#max-temp1")
const maxTemp2 = document.querySelector("#max-temp2")
const maxTemp3 = document.querySelector("#max-temp3")

function displayforecast(data) {
    const dayDate1 = data.list[0].dt_txt
    const dayDate2 = data.list[8].dt_txt
    const dayDate3 = data.list[16].dt_txt

    date1.innerHTML = dayDate1
    date2.innerHTML = dayDate2
    date3.innerHTML = dayDate3

    const minimumTemp1 = `${((data.list[0].main.temp_min - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`
    const minimumTemp2 = `${((data.list[8].main.temp_min - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`
    const minimumTemp3 = `${((data.list[16].main.temp_min - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`

    minTemp1.innerHTML = minimumTemp1
    minTemp2.innerHTML = minimumTemp2
    minTemp3.innerHTML = minimumTemp3

    const maximumTemp1 = `${((data.list[0].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`
    const maximumTemp2 = `${((data.list[8].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`
    const maximumTemp3 = `${((data.list[16].main.temp_max - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`

    maxTemp1.innerHTML = maximumTemp1
    maxTemp2.innerHTML = maximumTemp2
    maxTemp3.innerHTML = maximumTemp3
}
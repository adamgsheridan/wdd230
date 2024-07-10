const currentTemp = document.querySelector("#current-temp")
const currentCondition = document.querySelector("#condition")
// const weatherIcon = document.querySelector("#weather-icon")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=34.107642401400355&lon=-84.03627482191843&appid=3f91a1dd0b5133efd8bbbeeff51c9c58"

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
}
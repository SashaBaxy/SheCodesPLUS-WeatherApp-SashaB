//current day and time
let now = new Date();
let h2 = document.querySelector("h2");
let currentHours = now.getHours();
currentHours = ("0" + currentHours).slice(-2);
let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day}, ${currentHours}:${minutes}`;

//weather related

function search(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-text-input");
    searchCity(cityInput.value);
}
function searchCity(city) {
    let apiKey = "b38034b76f133ca05fd67538c5b8c748";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    console.log(response);
    let name = response.data.name;
    let cityName = `${name}`;
    let cityTemp = `${temperature}`;
    let city = document.querySelector(".city");
    let currentTemp = document.querySelector("#currentTemp");
    city.innerHTML = cityName;
    currentTemp.innerHTML = `${cityTemp}°C`;
}

let form = document.querySelector("#citySearchForm");
form.addEventListener("submit", search);

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let city = "Manchester";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);

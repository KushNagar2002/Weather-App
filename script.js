/*const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '46f41ea3eamsh482f1821bd7fc3ep19fed7jsn23cd147bb421',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

    fetch(url, options)
	.then(response => response.json())
    // .then(data => console.log(data.main))
    .then(data1 => console.log(data1.weather[0].main))
    .catch (error => console.error(error))
*/

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = async (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  //CODE GOES HERE

  const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  try {
    const response = await fetch(fullURL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE

  getWeatherData(city)
    .then((data) => showWeatherData(data))
    .catch((error) => console.log(error));
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  const type = document.getElementById("weather-type");
  const temp = document.getElementById("temp");
  const min = document.getElementById("min-temp");
  const max = document.getElementById("max-temp");
  const city_name = document.getElementById("city-name");

  city_name.innerText = weatherData.name;
  type.innerText = weatherData.weather[0].description;
  temp.innerText = `${convertFtoC(weatherData.main.temp)} °C`;
  min.innerText = `${convertFtoC(weatherData.main.temp_min)} °C`;
  max.innerText = `${convertFtoC(weatherData.main.temp_max)} °C`;
};

// Convert Fahrenheit into Celcius 
const convertFtoC = (fahrenheit) => {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2);
  }
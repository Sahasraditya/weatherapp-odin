document.addEventListener('DOMContentLoaded', function() {
    const fetchWeatherBtn = document.querySelector(".submitButton");
    fetchWeatherBtn.addEventListener('click', async function() {
        try {
            // Fetch data from the API
            var cityText = document.querySelector(".text1").value
            const web = 'https://api.weatherapi.com/v1/current.json?key=999a317325b0401db53133146240207&q='
            const city = web.concat(cityText)
            const response = await fetch(city,{mode:'cors'});
            const value = await response.json();

            const weatherData = {
                location:value.location.name,
                weatherCondition:value.current.condition.text,
                temperatureC:value.current.temp_c,
                feelslikeC:value.current.feelslike_c,
                humidity: value.current.humidity,
            }

            // Display the data on the webpage
            const weatherCard = document.querySelector('.weatherCard');

            // Example: Displaying temperature and description
            weatherCard.innerHTML = `
            <h2>${weatherData.location}</h2>
            <p>Temperature: ${weatherData.temperatureC} °C</p>
            <p>Description: ${weatherData.weatherCondition}</p>
            <p>Feels Like: ${weatherData.feelslikeC} °C</p>
            <p>Humidity: ${weatherData.humidity} %</p>
            `;
           
        } catch (error) {
            console.error('Error fetching weather data:', error);
            // Display an error message on the webpage if fetching fails
            const weatherCard = document.getElementById('weatherCard');
            weatherCard.textContent = 'Failed to fetch weather data.';
        }
    });
});

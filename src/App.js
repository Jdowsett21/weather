import "./App.css";
import axios from "axios";
import { useState } from "react";
function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(false);
  console.log("App.js~ weatherData", weatherData);

  const makeApiCall = async (e, city) => {
    e.preventDefault();
    const req = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fea8ad0aa4e9f46cd9f106ab5416ab04`
    );
    const { data } = await req;
    const { main } = await data;
    setWeatherData(main);
  };
  return (
    <div className="App">
      <form>
        <label>City</label>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          name="city"
        />
        <button onClick={(e) => makeApiCall(e, city)}>Check Weather</button>
      </form>
      {weatherData && (
        <>
          <li>Feels like {weatherData.feels_like}</li>
          <li>Humidity {weatherData.humidity}</li>
        </>
      )}
    </div>
  );
}

export default App;

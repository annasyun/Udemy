import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState("");
  const API_KEY = "15f8fbf5168d6da001f1e3c2c4b76277";

  const getWeather = (lat, lon) => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        setWeather(`${temperature} @ ${place}`);
      });
  };

  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  };

  const handleGeoError = () => {
    console.log("failed!");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  useEffect(() => {
    askForCoords();
  }, []);

  return <div className="js-weather">{weather && <p>{weather}</p>}</div>;
}

function Practice10() {
  return <Weather />;
}

export default Practice10;

import React from 'react';

const WeatherCard = ({ city, data }) => {

  if (!data || !data.current_condition) {
    return (
      <div className="card">
        <h2>{city}</h2>
        {/* <p>No data fetched</p> */}
      </div>
    );
  }

  // ⭐ अब यह सुरक्षित है (क्योंकि ऊपर check कर दिया)
  const current = data.current_condition[0];

  return (
    <div className="card">
      <h2>{city}</h2>

      <p>Temperature: {current.FeelsLikeC}°C</p>
      <p>Cloud: {current.cloudcover}</p>
      <p>Weather Description: {current.weatherDesc[0].value}</p>
      <p>Wind Speed: {current.windspeedKmph} Km/h</p>
    </div>
  );
};

export default WeatherCard;

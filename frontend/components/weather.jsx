"use client";

import { useState, useEffect } from "react";

export default function WeatherWidet() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Your location");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      fetchWeather(28.61, 77.21); // fallback: New Delhi
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      () => {
        // User denied or it failed — use fallback
        setError("Location denied — showing default");
        fetchWeather(28.61, 77.21); // fallback: New Delhi
      }
    );
  }, []);

  function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load weather");
        setLoading(false);
      });
  }

  function describeWeather(code) {
    if (code === 0) return { label: "Clear sky", icon: "☀️" };
    if (code <= 3) return { label: "Partly cloudy", icon: "⛅" };
    if (code <= 48) return { label: "Foggy", icon: "🌫️" };
    if (code <= 67) return { label: "Rainy", icon: "🌧️" };
    if (code <= 77) return { label: "Snowy", icon: "❄️" };
    if (code <= 82) return { label: "Rain showers", icon: "🌦️" };
    return { label: "Stormy", icon: "⛈️" };
  }

  if (loading)
    return (
      <div className="bg-white border rounded-2xl p-6 max-w-xs text-gray-500">
        Detecting location...
      </div>
    );

  if (!weather)
    return (
      <div className="bg-white border rounded-2xl p-6 max-w-xs text-red-500">
        {error || "No weather data"}
      </div>
    );

  const { label, icon } = describeWeather(weather.weather_code);

  return (
    <div className="bg-gradient-to-b from-[#137cc1] to-[#0a5a8f] text-white rounded-3xl p-6 max-w-xs shadow-lg">
      <p className="text-sm opacity-80">{city}</p>
      <div className="flex items-center gap-3 mt-2">
        <span className="text-5xl">{icon}</span>
        <span className="text-5xl font-semibold">
          {Math.round(weather.temperature_2m)}°C
        </span>
      </div>
      <p className="mt-3 text-lg">{label}</p>
      <p className="text-sm opacity-80 mt-1">
        Wind: {weather.wind_speed_10m} km/h
      </p>
      {error && <p className="text-xs opacity-70 mt-2">{error}</p>}
      <p className="text-xs opacity-60 mt-3">Weather data by Open-Meteo</p>
    </div>
  );
}
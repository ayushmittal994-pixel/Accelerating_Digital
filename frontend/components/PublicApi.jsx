"use client";

import { useState, useEffect } from "react";

export default function VisitorWidget() {
  const [info, Setinfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchbyCoords(latitude, longitude);
      });

      () => {
        fetchByIP();
      };
    } else {
      fetchbyIP();
    }
  }, []);

  function fetchbyCoords(lat, lon) {
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`,
    )
      .then((res) => res.json())
      .then((data) => {
        (Setinfo({
          city: data.city || data.locality,
          country: data.countryName,
          region: data.principalSubdivision,
          isp: "Detected via GPS",
          flag: { emoji: "📍" },
          success: true,
        }),
          setLoading(false));
      })
      .catch(() => fetchByIP());
  }

  function fetchbyIP() {
    fetch("https://ipwhois.app/json/")
      .then((res) => res.json())
      .then((data) => {
        Setinfo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <div className="bg-white p-30 rounded-2xl p-6 max-w-sm text-gray-500 ">
          Detecting Location..
        </div>
      </div>
    );

  if (!info || info.status === false) {
    return (
      <div className="bg-white border rounded-2xl p-6 max-w-sm text-gray-500">
        Could not detect Location.
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center max-w-2xl mx-auto font-poppins pb-20 ">
      <div className="bg-gradient-to-b from-[#137cc1] to-[#0a5a8f] text-white rounded-3xl p-6 max-w-sm shadow-lg w-full">
        <p className="text-sm opacity-80">Welcome, visitor</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-4xl">{info.flag?.emoji || "🌍"}</span>
          <div>
            <p className="text-2xl font-semibold">
              {info.city}, {info.country}
            </p>
            <p className="text-sm opacity-80">{info.region}</p>
          </div>
        </div>
        <p className="text-sm opacity-80 mt-4">ISP: {info.isp}</p>
        <p className="text-xs opacity-60 mt-3">Location data by IPWhois</p>
      </div>
    </div>
  );
}

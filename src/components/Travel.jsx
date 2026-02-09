import React, { useState } from "react";
import axios from "axios";

const Travel = () => {
  const [travelData, setTravelData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Paris");
  const [country, setCountry] = useState("France");
  const [days, setDays] = useState(4);

  const generateTravel = async (city, country, days) => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://travel-planner-ai-be.vercel.app/api/travel-plan?city=${city}&country=${country}&days=${days}`,
      );

      setTravelData(response.data);
    } catch (err) {
      setError("Failed to generate travel plan. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const cities = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Dubai",
    "Singapore",
    "Rome",
    "Barcelona",
    "Sydney",
    "Istanbul",
    "Bangkok",
    "Amsterdam",
    "San Francisco",
    "Los Angeles",
    "Toronto",
    "Vancouver",
    "Berlin",
    "Munich",
    "Zurich",
    "Vienna",
    "Seoul",
    "Hong Kong",
    "Kuala Lumpur",
    "Bali",
    "Cape Town",
  ];

  const countries = [
    "France",
    "United Kingdom",
    "United States",
    "Japan",
    "United Arab Emirates",
    "Singapore",
    "Italy",
    "Spain",
    "Australia",
    "Turkey",
    "Thailand",
    "Netherlands",
    "Germany",
    "Canada",
    "Switzerland",
    "Austria",
    "South Korea",
    "China",
    "Malaysia",
    "Indonesia",
    "South Africa",
  ];

  const daysOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full container">
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="w-full max-w-3xl mx-auto bg-base-200 rounded-2xl shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend font-extrabold">City</legend>
              <select
                onChange={(e) => setCity(e.target.value)}
                defaultValue="Select city"
                className="select w-full"
                value={city}
              >
                <option disabled={true}>Select City</option>
                {cities.map((city) => (
                  <option className="font-semibold" value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend font-extrabold">
                Country
              </legend>
              <select
                onChange={(e) => setCountry(e.target.value)}
                defaultValue="Select country"
                value={country}
                className="select w-full"
              >
                <option disabled={true}>Select Country</option>
                {countries?.map((country) => (
                  <option
                    className="font-semibold"
                    value={country}
                    key={country}
                  >
                    {country}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend font-extrabold">
                No of Days
              </legend>
              <select
                defaultValue="Select no.of days"
                className="select w-full"
                onChange={(e) => setDays(e.target.value)}
                value={days}
              >
                <option disabled={true}>Select no.of days</option>
                {daysOptions?.map((num) => (
                  <option className="font-semibold" value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <button
            onClick={() => generateTravel(city, country, days)}
            className={`btn btn-primary ${loading ? "btn-disabled" : ""} mt-5 w-full`}
          >
            {loading ? "Generating..." : "Generate Plan"}
          </button>
        </div>

        {error && <p className="text-red-500 font-stretch-expanded">{error}</p>}
      </div>
      {loading && (
        <div className="flex flex-col items-center justify-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      )}
      {travelData && (
        <div className="max-w-3xl mx-auto bg-base-200 p-6 rounded-xl shadow">
          <h2 className="text-center text-3xl font-bold mb-3 font-stretch-condensed">
            Your Travel Plan
          </h2>
          <div className="px-5">
            <h1 className="text-2xl mb-2 font-extrabold font-stretch-ultra-expanded ">
              📍{travelData.destination}
            </h1>
            <span className="font-thin">
              Your AI generated travel plan is here
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-5">
            <div className="card card-border bg-base-100 w-95">
              <div className="card-body">
                <h2 className="card-title">🗓️ Best time to visit</h2>
                <p>{travelData.best_time}</p>
              </div>
            </div>
            <div className="card card-border bg-base-100 w-95">
              <div className="card-body">
                <h2 className="card-title">⏱️ Recommended Days</h2>
                <p>{travelData.duration_days} Days</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-4xl bg-base-100 border border-base-300 rounded-2xl p-6 shadow">
              <h2 className="text-lg font-semibold mb-4 capitalize">
                Top attractions at {travelData.destination}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {travelData.top_attractions.map((att, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-lg bg-base-200 border border-base-300 text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-primary">📍</span>
                    {att}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 mt-8">
            <h1 className="text-xl font-semibold mb-6">Sample Itinerary</h1>

            <div className="w-full max-w-4xl space-y-6">
              {travelData.sample_itinerary.map((i) => (
                <div
                  key={i.day}
                  className="flex items-center gap-6 bg-base-200 rounded-2xl p-6 border border-base-300"
                >
                  <div className="[flex-shrink-0] min-w-27.5 h-12 px-5 flex items-center justify-center rounded-full  bg-primary text-white font-semibold">
                    Day {i.day}
                  </div>

                  <p className="text-base md:text-lg font-semibold text-base-content/80 leading-relaxed">
                    {i.plan}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-5xl bg-base-100 border border-base-300 rounded-2xl p-8 shadow">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary">$</span>
                Estimated Budget (USD)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-base-200 border border-base-300 rounded-xl py-6 text-center shadow-sm">
                  <p className="text-sm font-mono opacity-70 mb-1">Basic</p>
                  <p className="text-2xl font-mono font-bold">
                    {travelData.estimated_budget_USD.low}
                  </p>
                </div>
                <div className="bg-base-200 border border-base-300 rounded-xl py-6 text-center shadow-sm">
                  <p className="text-sm font-mono opacity-70 mb-1">Plus</p>
                  <p className="text-2xl font-mono font-bold">
                    {travelData.estimated_budget_USD.mid}
                  </p>
                </div>
                <div className="bg-base-200 border border-base-300 rounded-xl py-6 text-center shadow-sm">
                  <p className="text-sm font-mono opacity-70 mb-1">Elite</p>
                  <p className="text-2xl font-mono font-bold">
                    {travelData.estimated_budget_USD.high}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-5xl bg-base-100 border border-base-300 rounded-2xl p-8 shadow">
              <h2 className="text-xl font-semibold mb-6">Local Tips</h2>

              <ul className="list-disc pl-6 space-y-3">
                {travelData.local_tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Travel;

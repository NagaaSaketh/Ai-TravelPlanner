# AI Travel Planner

An AI-powered travel planning app where you can generate a personalized travel plan for any destination in seconds.  
Built with a React frontend, Express/Node backend, and an OpenAI-compatible LLM via OpenRouter.

---

## Demo Link

[Live Demo](https://travel-planner-ai-fe.vercel.app/)

---

## Quick Start

```
git clone https://github.com/NagaaSaketh/Ai-TravelPlanner.git
cd Ai-TravelPlanner
```

**Frontend**
```
cd "Ai-Travel Planner -FE"
npm install
npm run dev
```

**Backend**
```
cd "Ai-Travel Planner-BE"
npm install
# Add OPENROUTER_API_KEY to .env
node index.js
```

## Technologies
- React 19
- Tailwind CSS v4
- DaisyUI
- Axios
- Node.js
- Express
- OpenAI SDK (OpenRouter)

## Features

**Travel Plan Generator**
- Select a city, country, and number of days (1–10)
- Click "Generate Plan" to get an AI-generated travel plan instantly

**AI-Generated Plan Includes**
- Destination overview
- Best time to visit (with reason)
- Recommended trip duration
- Top attractions at the destination
- Day-by-day sample itinerary
- Estimated budget in USD (Basic / Plus / Elite tiers)
- Local tips for first-time visitors


## API Reference

### **GET    /api/travel-plan**
Generate a travel plan for a given destination

Query Parameters:

| Param   | Type   | Default  | Description              |
|---------|--------|----------|--------------------------|
| city    | string | Paris    | City to travel to        |
| country | string | France   | Country of the city      |
| days    | number | 4        | Number of days for the trip |

Sample Response:
```json
{
  "destination": "Paris, France",
  "best_time": "April–June; mild weather and fewer crowds than summer.",
  "duration_days": 4,
  "top_attractions": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
  "sample_itinerary": [
    { "day": 1, "plan": "Arrive and explore Montmartre" },
    { "day": 2, "plan": "Visit the Louvre and Tuileries Garden" }
  ],
  "estimated_budget_USD": { "low": 800, "mid": 1500, "high": 3000 },
  "local_tips": ["Buy a Navigo pass for unlimited metro rides", "Book museum tickets online to skip queues"]
}
```

## Contact
For bugs or feature requests, please reach out to vadlamanisaketh25@gmail.com

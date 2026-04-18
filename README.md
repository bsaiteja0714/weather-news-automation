# 🤖 Smart Automation Tracker

An automated Node.js system that fetches real-time weather and tech news data, analyzes trends, and generates a daily markdown report. Powered by GitHub Actions for fully automated execution.

---

## 🚀 Features

- 🌦️ **Weather Fetching**  
  Retrieves real-time weather data using OpenWeatherMap API.

- 📰 **Tech News Fetching**  
  Collects latest technology headlines using GNews API.

- 🧠 **Data Analysis**  
  Detects trends such as AI mentions in news headlines.

- 📄 **Automated Reporting**  
  Generates a structured markdown report daily.

- ⚙️ **Automation**  
  Runs automatically using GitHub Actions (cron-based scheduling).

---

## 📂 Project Structure


smart-automation-tracker/
│
├── scripts/ # Core logic (API fetch + analysis)
│ └── main.js
│
├── output/ # Generated reports
│ └── report.md
│
├── .github/workflows/ # GitHub Actions automation
│ └── automation.yml
│
├── package.json # Dependencies
└── README.md


---

## ▶️ Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/smart-automation-tracker.git
cd smart-automation-tracker
2. Install dependencies
npm install
3. Set API keys (temporary local use)
export WEATHER_API=your_key
export NEWS_API=your_key

(Windows PowerShell)

$env:WEATHER_API="your_key"
$env:NEWS_API="your_key"
4. Run the script
node scripts/main.js
🔐 Environment Variables

This project uses:

WEATHER_API → OpenWeatherMap API key
NEWS_API → GNews API key
🤖 Automation (GitHub Actions)
Runs automatically every day
Fetches fresh data
Updates output/report.md
Commits changes to the repository

Manual run also available via:

Actions → Run workflow
📊 Sample Output
# 🌍 Smart Daily Report

📅 2026-04-17

## 🌦️ Weather
- 30°C, scattered clouds  
👉 Insight: Hot day  

## 📰 Tech News
- OpenAI launches new model  
- Apple AI developments  
- AI tools gaining traction  

## 📊 Insights
- AI is trending (3 mentions)
🧠 Tech Stack
Node.js
node-fetch
GitHub Actions
OpenWeatherMap API
GNews API
🎯 What This Project Demonstrates
API integration
Automation using GitHub Actions
Data processing and analysis
Real-world project structuring
🚀 Future Improvements
📈 Weekly trend reports
📊 Data visualization (charts)
🌍 Multi-city weather tracking
🧠 Advanced keyword analysis

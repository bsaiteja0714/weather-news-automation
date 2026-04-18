# 🌍 Weather News Automation

An automated Node.js system that fetches real-time weather data and technology news, analyzes trends, and generates a daily markdown report. Powered by GitHub Actions for fully automated execution.

---

## 🚀 Features

- 🌦️ **Weather Fetching**  
  Retrieves real-time weather data using OpenWeatherMap API.

- 📰 **Tech News Fetching**  
  Collects the latest technology headlines using GNews API.

- 🧠 **Basic Trend Analysis**  
  Detects patterns such as AI mentions in news headlines.

- 📄 **Automated Reporting**  
  Generates a structured markdown report daily.

- ⚙️ **Automation**  
  Runs automatically using GitHub Actions (cron-based scheduling).

---

## 📂 Project Structure


.
├── scripts/ # Core logic (API fetch + analysis)
│ └── main.js
├── output/ # Generated reports
│ └── report.md
├── .github/workflows/ # GitHub Actions automation
│ └── automation.yml
├── package.json # Dependencies
└── README.md


---

## ▶️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-news-automation.git
cd weather-news-automation
2. Install dependencies
npm install
3. Set environment variables
Windows (PowerShell)
$env:WEATHER_API="your_key"
$env:NEWS_API="your_key"
macOS / Linux
export WEATHER_API=your_key
export NEWS_API=your_key
4. Run the script
node scripts/main.js
🔐 Environment Variables
Variable	Description
WEATHER_API	OpenWeatherMap API key
NEWS_API	GNews API key
🤖 Automation (GitHub Actions)
Runs automatically every day
Fetches fresh weather and news data
Updates output/report.md
Commits changes to the repository

You can also trigger it manually:

Actions → Run workflow

📊 Sample Output
# 🌍 Daily Report

📅 2026-04-18

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

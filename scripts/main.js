const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const WEATHER_API = process.env.WEATHER_API;
const NEWS_API = process.env.NEWS_API;

const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const REPORTS_DIR = path.join(OUTPUT_DIR, 'reports');
const LATEST_FILE = path.join(OUTPUT_DIR, 'latest.md');

async function fetchWeather() {
  if (!WEATHER_API) {
    throw new Error("WEATHER_API environment variable is not defined");
  }

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=${WEATHER_API}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Weather API returned status: ${response.status}`);
  }

  const data = await response.json();
  const temperature = data.main.temp;
  const description = data.weather[0].description;

  let weatherInsight = "Moderate weather";
  if (temperature > 30) {
    weatherInsight = "Hot day";
  } else if (temperature < 20) {
    weatherInsight = "Cool day";
  }

  return { temperature, description, weatherInsight };
}

async function fetchNews() {
  if (!NEWS_API) {
    throw new Error("NEWS_API environment variable is not defined");
  }

  const endpoint = `https://newsdata.io/api/1/news?apikey=${NEWS_API}&category=technology&language=en`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`News API returned status: ${response.status}, message: ${errorText}`);
  }

  const data = await response.json();
  const articles = data.results ? data.results.slice(0, 5) : [];
  const headlines = articles.map(article => article.title);

  let aiCount = 0;
  for (const headline of headlines) {
    if (headline.toLowerCase().includes('ai')) {
      aiCount++;
    }
  }

  let trendResult = "No strong trend";
  if (aiCount > 2) {
    trendResult = "AI is trending";
  }

  return { headlines, aiCount, trendResult };
}

function generateReport(weatherData, newsData, currentDate) {

  let headlinesList = newsData.headlines.map(h => `* ${h}`).join('\n');
  if (!headlinesList) {
    headlinesList = "* No headlines found";
  }

  const reportContent = `# 🌍 Smart Daily Report\n\n📅 ${currentDate}\n\n## 🌦️ Weather\n\n* ${weatherData.temperature}°C, ${weatherData.description}\n  👉 Insight: ${weatherData.weatherInsight}\n\n## 📰 Tech News\n\n${headlinesList}\n\n## 📊 Insights\n\n* ${newsData.trendResult} (${newsData.aiCount} mentions)\n`;

  return reportContent;
}

async function main() {
  try {
    console.log("Starting smart-automation-tracker...");

    if (!fs.existsSync(REPORTS_DIR)) {
      console.log(`Creating reports directory at ${REPORTS_DIR}`);
      fs.mkdirSync(REPORTS_DIR, { recursive: true });
    }

    console.log("Fetching weather data...");
    const weatherData = await fetchWeather();

    console.log("Fetching news data...");
    const newsData = await fetchNews();

    console.log("Generating report...");
    const currentDate = new Date().toISOString().split('T')[0];
    const reportContent = generateReport(weatherData, newsData, currentDate);

    const REPORT_FILE = path.join(REPORTS_DIR, `${currentDate}.md`);
    fs.writeFileSync(REPORT_FILE, reportContent, 'utf-8');
    fs.writeFileSync(LATEST_FILE, reportContent, 'utf-8');
    console.log(`Successfully generated report at ${REPORT_FILE}`);
    console.log(`Successfully updated latest report at ${LATEST_FILE}`);

  } catch (error) {
    console.error("Error running script:", error.message);
    process.exit(1);
  }
}

main();

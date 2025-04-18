// utils.js

const weatherImg = {
  sun: "/assets/sun.png",
  cloudy: "/assets/cloudy.png",
  rain: "/assets/rain.png"
};

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayName = days[today.getDay()]; // e.g., "Friday"
const celsius = " °C";

// Make sure dotify and dotify.utils exist
window.dotify = window.dotify || {};
dotify.utils = dotify.utils || {};

// ----------------------------
// Update page titles
// ----------------------------
dotify.utils.updateTitles = (cityName) => {
  document.getElementById("cityName").textContent = cityName;
  document.getElementById("cityWeekday").textContent = dayName;
};

// ----------------------------
// Update main card info
// ----------------------------
dotify.utils.updateCardRightNow = (text1, text2) => {
  const divParent = document.getElementById("cardRN");
  divParent.innerHTML = ""; // clear existing content

  const column = document.createElement("div");
  column.innerHTML = `
    <div class="is-flex is-justify-content-space-between" style="width: 80%;">
      <p>Temperature: ${text1} ${celsius}</p>
      <p>Wind: ${text2} ${celsius}</p>
    </div>
  `;
  divParent.appendChild(column);
};

dotify.utils.updateCardTemp = (text) => {
  document.getElementById("card1").textContent = text + celsius;
};

dotify.utils.updateCardWind = (text) => {
  document.getElementById("cardWind").textContent = text;
};

// ----------------------------
// Update weekly forecast cards
// ----------------------------
dotify.utils.updateSmallWeekCards = (days, dayWeekNumber, cityData) => {
  const weekcards = document.getElementById("weekcards");

  const weekSliceStart = days.slice(dayWeekNumber);
  const weekSliceEnd = days.slice(0, dayWeekNumber);
  const weekReordered = weekSliceStart.concat(weekSliceEnd);

  const todayIndex = 0;
  let count = 0;

  weekReordered.forEach((day) => {
    const column = document.createElement("div");
    column.className = "column is-one-fifth";

    const min = cityData.daily.temperature_2m_min[todayIndex + count];
    const max = cityData.daily.temperature_2m_max[todayIndex + count];

    column.innerHTML = `
      <div class="box has-background-primary is-flex is-flex-direction-column is-align-items-center">
        <h1 class="title is-size-5">${day}</h1>
        <img src="assets/sun.png" class="image is-64x64">
        <p>Min ${min} ${celsius}</p>
        <p>Max ${max} ${celsius}</p>
      </div>
    `;

    weekcards.appendChild(column);
    count++;
  });
};

// Placeholder for future use
dotify.utils.getImg = (min, max) => {
  // To be implemented
};

// ----------------------------
// Get weather data object for city
// ----------------------------
dotify.utils.getCityObj = (cityName) => {
  const key = `${cityName}_daily`;
  console.log("Fetching weather data for:", key);
  return dotify.weatherData[key];
};

// ----------------------------
// Get weather hour object for city
// ----------------------------
dotify.utils.getHourObj = (cityName) => {
  const key = `${cityName}_hourly`;
  console.log("Fetching weather data for:", key);
  return dotify.weatherData[key];
};

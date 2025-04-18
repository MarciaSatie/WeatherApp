const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayName = days[today.getDay()];

// ----------------------------
// Update page titles
// ----------------------------
export function updateTitles(cityName) {
  document.getElementById("cityName").textContent = cityName;
  document.getElementById("cityWeekday").textContent = dayName;
}

// ----------------------------
// Update main card info
// ----------------------------
export function updateCardTemp(text) {
  document.getElementById("card1").textContent = text;
}

export function updateCardWind(text) {
  document.getElementById("cardWind").textContent = text;
}

// ----------------------------
// Update weekly forecast cards
// ----------------------------
export function updateSmallWeekCards(days, dayWeekNumber, cityData) {
  const weekcards = document.getElementById("weekcards");

  // Reorder days so today is the first one
  const weekSliceStart = days.slice(dayWeekNumber, days.length);
  const weekSliceEnd = days.slice(0, dayWeekNumber);
  const weekReordered = weekSliceStart.concat(weekSliceEnd);

  const todayIndex = 0;
  let count = 0;

  weekReordered.forEach(day => {
    const column = document.createElement("div");
    column.className = "column is-one-fifth";

    const min = cityData.daily.temperature_2m_min[todayIndex + count];
    const max = cityData.daily.temperature_2m_max[todayIndex + count];

    column.innerHTML = `
      <div class="box has-background-primary is-flex is-flex-direction-column is-align-items-center">
        <h1 class="title is-size-5">${day}</h1>
        <img src="assets/sun.png" class="image is-64x64">
        <p>Min ${min}</p>
        <p>Max ${max}</p>
      </div>
    `;

    weekcards.appendChild(column);
    count++;
  });
}

// ----------------------------
// Get weather data object for city
// ----------------------------
export function getCityObj(cityName) {
  const key = `${cityName}_daily`;
  console.log("Fetching weather data for:", key);

  // Use the dotify namespace
  const cityData = dotify.weatherData[key];
  return cityData;
}

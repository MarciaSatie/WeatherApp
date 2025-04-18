// cityFocus.js

(function () {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayName = days[today.getDay()]; // e.g., "Friday"

  // ----------------------------
  // Update page titles
  // ----------------------------
  dotify.cityFocus.updateTitles = function(cityName) {
    document.getElementById("cityName").textContent = cityName;
    document.getElementById("cityWeekday").textContent = dayName;
  };

  // ----------------------------
  // Update main card info
  // ----------------------------
  dotify.cityFocus.updateCardTemp = function(text) {
    document.getElementById("card1").textContent = text;
  };

  dotify.cityFocus.updateCardWind = function(text) {
    document.getElementById("cardWind").textContent = text;
  };

  // ----------------------------
  // Update weekly forecast cards
  // ----------------------------
  dotify.cityFocus.updateSmallWeekCards = function(days, dayWeekNumber, cityData,celsius) {
    const weekcards = document.getElementById("weekcards");

    const weekSliceStart = days.slice(dayWeekNumber);
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
          <p>Min ${min} ${celsius}</p>
          <p>Max ${max} ${celsius}</p>
        </div>
      `;

      weekcards.appendChild(column);
      count++;
    });
  };

  // ----------------------------
  // Get weather data object for city
  // ----------------------------
  dotify.cityFocus.getCityObj = function(cityName) {
    const key = `${cityName}_daily`;
    console.log("Fetching weather data for:", key);
    return dotify.weatherData[key];
  };

})();



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();// javascript premade object that returns current day.
const dayName = days[today.getDay()];// return a number  from 0 (Sunday) to 6 (Saturday).

export function updateTitles(cityName){
  document.getElementById("cityName").textContent = cityName;
  document.getElementById("cityWeekday").textContent = dayName;
}

export function updateCardTemp( text) {
  document.getElementById("card1").textContent = text;
}

export function updateCardWind( text) {
  document.getElementById("cardWind").textContent = text;
}

export function updateSmallWeekCards(days,dayWeekNumber,cityData){
  const weekcards = document.getElementById("weekcards");
  
  // reorder array for today's date having index 0 (to match woith Today's value from wetherDate's app). If today's week date is Friday, this will be the 1st day in the week day list matching with Today's value from WeatherData file.

  const weekSliceStart = days.slice(dayWeekNumber, days.lenght);
  const weekSliceEnd = days.slice(0,dayWeekNumber);
  const weekReodered = weekSliceStart.concat(weekSliceEnd);
  console.log(weekReodered);
  const todayIndex = 0;
  let count =0;

  const dayName = days[dayWeekNumber];// return a number  from 0 (Sunday) to 6 (Saturday).
 
  
  weekReodered.forEach(day => {
    const column = document.createElement("div");// creates a new div element
    column.className = "column is-one-fifth"// manipulate the class from each new div

    const min = cityData.daily.temperature_2m_min[todayIndex+count];
    const max =cityData.daily.temperature_2m_max[todayIndex+count];

    column.innerHTML = `
      <div class="box has-background-primary is-flex is-flex-direction-column is-align-items-center">
        <h1 class="title is-size-5">${day}</h1>
        <img src="assets/sun.png" class="image is-64x64">
        <p>Min ${min}</p>
        <p>Mx ${max}</p>
      ,</div>
    `;// add new content inside of this div.

  weekcards.appendChild(column);// append as a child to teh div with id weekcards.
  count++;
});
}


export function getCityObj(cityName){

  const key = `${cityName}_daily`;
  console.log(key);

   const cityData = weatherData[key];
  return cityData;
}

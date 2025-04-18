

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

  const dayName = days[dayWeekNumber];// return a number  from 0 (Sunday) to 6 (Saturday).
  // using for each to loop though the array of days;
  // for each day will call an annonimous function that will manipulate the HTML. 
  //So I don't need to repeat the code for each day of the week.
  days.forEach(day => {
    const column = document.createElement("div");// creates a new div element
    column.className = "column is-one-fifth"// manipulate the class from each new div

    const min = cityData.daily.temperature_2m_min[dayWeekNumber];
    const max =cityData.daily.temperature_2m_max[dayWeekNumber];

    column.innerHTML = `
      <div class="box has-background-primary is-flex is-flex-direction-column is-align-items-center">
        <h1 class="title is-size-5">${day}</h1>
        <img src="assets/sun.png" class="image is-64x64">
        <p>Min ${min}</p>
        <p>Mx ${max}</p>
      ,</div>
    `;// add new content inside of this div.

  weekcards.appendChild(column);// append as a child to teh div with id weekcards.
});
}


export function getCityObj(cityName){

  const key = `${cityName}_daily`;
  console.log(key);

   const cityData = weatherData[key];
  return cityData;
}


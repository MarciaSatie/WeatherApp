'use strict';

// Methods From cityFocus script file
import * as cityFocus from './cityFocus.js';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();// javascript premade object that returns current day.
const dayWeekNumber = today.getDay();// return a number  from 0 (Sunday) to 6 (Saturday)
console.log(dayWeekNumber);

const cityChoice ="amsterdan";


const cityData = cityFocus.getCityObj("amsterdam");
console.log(cityData.latitude);


cityFocus.updateTitles(cityChoice);
cityFocus.updateCardTemp(cityData.daily.temperature_2m_max[dayWeekNumber]);
cityFocus.updateCardWind(cityData.daily.wind_speed_10m_max[dayWeekNumber]);
cityFocus.updateSmallWeekCards(days,dayWeekNumber,cityData);
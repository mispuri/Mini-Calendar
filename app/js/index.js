const day = document.getElementById('day');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

const weeksDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const allMonts = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

date.innerHTML = (today.getDate() < 10 ? '0' : '') + today.getDate();
day.innerHTML = weeksDays[today.getDay()];
month.innerHTML = allMonts[today.getMonth()];
year.innerHTML = today.getFullYear();

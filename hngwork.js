const currentDayText = document.getElementById("dates");
const currentUTCTime = document.getElementById("times");
const date = new Date();

const generateCurrentDate = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  const currentDay = daysOfTheWeek[dayIndex];
  currentDayText.innerText = currentDay;
};

const generateUTCTime = () => {
  const date = new Date();
  const utcTimeMilliseconds = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  currentUTCTime.textContent = utcTimeMilliseconds;
};

generateCurrentDate();
generateUTCTime();
setInterval(generateUTCTime, 1000);

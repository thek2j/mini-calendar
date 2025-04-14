const monthNameEl = document.querySelector(".month-name");
const dayNameEl = document.querySelector(".day-name");
const dayNumEl = document.querySelector(".day-number");
const yearEl = document.querySelector(".year");

const date = new Date();

const monthName = date.toLocaleString("en", { month: "long" });
const dayName = date.toLocaleString("en", { weekday: "long" });
const dayNum = date.getDate();
const year = date.getFullYear();

monthNameEl.innerText = monthName;
dayNameEl.innerText = dayName;
dayNumEl.innerText = dayNum;
yearEl.innerText = year;

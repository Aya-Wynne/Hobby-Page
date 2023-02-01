const dateElement = document.querySelector("#today_date")
const todayDate = new Date();
let text=todayDate.toLocaleString();
dateElement.innerText="Today's Date " + text
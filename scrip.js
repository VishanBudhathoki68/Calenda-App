const newDate = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const currentDay = document.querySelector(".day");
const days = document.querySelectorAll(".days");
days.forEach((day) => {
    day.addEventListener("click", () => {
        month.innerHTML = months[newDate.getMonth()]
        year.innerHTML = newDate.getFullYear()
        currentDay.innerHTML = day.innerHTML;
    })
})
function defaultDay() {
    month.innerHTML = months[newDate.getMonth()]
    year.innerHTML = newDate.getFullYear()
    currentDay.innerHTML = newDate.getDate()
}
defaultDay()
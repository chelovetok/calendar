let date = new Date();
function createCalendar() {
let calendarDate = document.querySelector('.calendar__date>p').innerHTML = (date.toDateString());
month = date.getMonth();
months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]
const monthDays = document.querySelector(".days");
let calendarDateH1 = document.querySelector('.calendar__date>h1').innerHTML = (months[month]);
const lastDay = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();

const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),0
  ).getDate();
let firstDayIndex = date.getDay();
const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 0;


let days = "";

    for (let x = firstDayIndex; x > 2; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 3}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
        days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
    };
    let allDays = document.querySelectorAll(".days>div")
    let calendarContainer = document.querySelector(".calendar__container")
    for (let item of allDays) {
        item.onclick = function(){
           let notif = document.createElement("div");
           notif.classList.add("notification")
           notif.append(item.innerHTML + " " + months[date.getMonth()] + " " + date.getFullYear().toString() )
           calendarContainer.append(notif)
           setTimeout( function(){
                notif.remove()
           }, 1000)
           
           
           console.log(notif)

        }
    };
}
    
      
document.querySelector(".fa-arrow-circle-up").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    createCalendar();
});

document.querySelector(".fa-arrow-circle-down").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    createCalendar();
});
      
createCalendar()
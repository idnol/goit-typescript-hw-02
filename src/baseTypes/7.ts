/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}

const isWeekend = (day: WeekDay): boolean => {
    return day === WeekDay.saturday || day === WeekDay.sunday;
}
const day: string = 'sunday';
const getDay = isWeekend(WeekDay[day])?console.log("it's weekend"):console.log("you must work");
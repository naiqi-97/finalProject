let topicsArray = [
    "課程介紹",
    "隨機性",
    "不上課",
    "日期時間",
    "不上課",
    "條件判斷"
];

let startDate = new Date();
let holiday=new Date();
function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
function setHoliDay(hMonth, hDay){
    holiday.setMonth(hMonth-1,hDay);
    holiday.setHours(0);
    holiday.setMinutes(0);
    holiday.setSeconds(0);
}

//setHoliDay(2,28);
//setMonthAndDay(2,21);




'use strict'; // проверка соответствия стандарту ES6

let money = prompt("Ваш бюджет на месяц?","100"),
    time = prompt("Введите дату в формате YYYY-MM-DD","2019-07-03");
    
let question11 = prompt("Введите обязательную статью расходов в этом месяце","Фрукты"),
    question12 = prompt("Во сколько обойдется?","255"),
    question21 = prompt("Введите обязательную статью расходов в этом месяце","Овощи"),
    question22 = prompt("Во сколько обойдется?","355");

let expenses_ = {
    'question11':  question12,
    'question21':  question22
}

let appData = {
    budjet: money,
    timeData: time,
    expenses: expenses_,
    OptionalExpenses: {},
    income: "",
    savings: false
}

console.log("Ваш бюджет на 1 день составляет " + appData.budjet/30);

console.log(money, time, appData);
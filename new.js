'use strict'; // проверка соответствия стандарту ES6

let money = prompt("Ваш бюджет на месяц?","100"),
    time = prompt("Введите дату в формате YYYY-MM-DD","2019-07-03");
    
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    OptionalExpenses: {},
    income: "",
    savings: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if ((a != '' ) && (b != '') && (typeof(a) != null) && (typeof(b) != null) && (typeof(a) === 'string') && (a.length < 50)) {
        appData.expenses[a] = b;
    } else {
        i--;
        continue;
    } 

}


appData.moneyPerDay = appData.budjet / 30;


console.log(money, time, appData);
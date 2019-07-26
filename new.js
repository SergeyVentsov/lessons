'use strict'; // проверка соответствия стандарту ES6

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD","2019-07-03");

    while (isNaN(money) || money == '' || money == null) { //true если не цифры, пустая строка, оли нажата Отмена
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

    
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    OptionalExpenses: {},
    income: "",
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        if ((a != '' ) && (b != '') && (typeof(a) != null) && (typeof(b) != null) && (typeof(a) === 'string') && (a.length < 50)) {
            appData.expenses[a] = b;
        } else {
            i--;
        } 
    }
}

chooseExpenses();

appData.moneyPerDay = (appData.budjet / 30).toFixed() ; //toFixed преобразует в строку


console.log(money, time, appData);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();
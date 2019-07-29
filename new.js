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
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
            if ((a != '' ) && (b != '') && (typeof(a) != null) && (typeof(b) != null) && (typeof(a) === 'string') && (a.length < 50)) {
                appData.expenses[a] = b;
            } else {
                i--;
            } 
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed() ; //toFixed преобразует в строку
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert('Низкий уровень достатка');
        } else if ((appData.moneyPerDay >= 100) && (appData.moneyPerDay < 1000)) {
            alert('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 1000) {
            alert('Высокий уровень достатка');
        } else {
            alert('Произошла ошибка!');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Введите необязательную статью расходов в этом месяце");
              
            if ((a != '' ) && (typeof(a) != null) && (typeof(a) === 'string') && (a.length < 50)) {
                appData.OptionalExpenses[i] = a;
            } else {
                i--;
            } 
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
    }
}

console.log(money, time, appData);
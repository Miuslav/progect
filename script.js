'use strict';
let money, time;

function start(){
	money = +prompt ("Ваш бюджет на месяц?", "");
	time = prompt ("Введите дату в формате YYYY-MM-DD", "");
	
	while(isNaN(money) || money == "" || money == null){
		money = +prompt ("Ваш бюджет на месяц?", "");
	}
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpanses(){
	for (let i = 0; i < 2; i++) {
		let a = prompt ("Введите обязательную статью рассходов в этом месяце", ""),
			b = prompt ("Во сколько обойдется?", "");
	
		if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
	
			console.log ("done");
	
			appData.expenses[a] = b;
		} else {                            
			console.log ("bad result");
			i--;
		}
	}
}
chooseExpanses();

// для 2 цикла WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью рассходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// для 3 цикла DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью рассходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);


appData.moneyPerDay = (appData.budget / 30).toFixed();


alert ("Ежедневный бюджет:" + appData.moneyPerDay + "Что-то");


if (appData.moneyPerDay < 100) {
    console.log ("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Высокий уровень достатка");
} else {
	console.log ("Произошла ошибка");
}	

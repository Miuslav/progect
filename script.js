let money = prompt("20000", ''),
	time = prompt('2020-03-01', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Room", ''),
	a2 = prompt("10000", ''),
	a3 = prompt("Eting", ''),
	a4 = prompt("5000", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!

alert(appData.budget / 30);
'use strict';


let money, time;

function start() {
    money = +prompt ("Р’Р°С€ Р±СЋРґР¶РµС‚ РЅР° РјРµСЃСЏС†?", "");
    time = prompt ("Р’РІРµРґРёС‚Рµ РґР°С‚Сѓ РІ С„РѕСЂРјР°С‚Рµ YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Р’Р°С€ Р±СЋРґР¶РµС‚ РЅР° РјРµСЃСЏС†?", ""); 
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


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("asdasd", ""),
            b = prompt ("Р’Рѕ СЃРєРѕР»СЊРєРѕ РѕР±РѕР№РґРµС‚СЃСЏ?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    
    }
}
chooseExpenses();


function detectDayBudget() {                                            // Р Р°СЃС‡РµС‚ РґРЅРµРІРЅРѕРіРѕ Р±СЋРґР¶РµС‚Р°
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Р‘СЋРґР¶РµС‚ РЅР° 1 РґРµРЅСЊ СЃРѕСЃС‚Р°РІР»СЏРµС‚ " + appData.moneyPerDay + "СЂСѓР±.");
}
detectDayBudget();


function detectLevel() {                                                // Р Р°СЃС‡РµС‚ СѓСЂРѕРІРЅСЏ РґРѕСЃС‚Р°С‚РєР°
    if (appData.moneyPerDay < 100) {
        console.log ("РС‚Рѕ РјРёРЅРёРјР°Р»СЊРЅС‹Р№ СѓСЂРѕРІРµРЅСЊ РґРѕСЃС‚Р°С‚РєР°!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("РС‚Рѕ СЃСЂРµРґРЅРёР№ СѓСЂРѕРІРµРЅСЊ РґРѕСЃС‚Р°С‚РєР°!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("РС‚Рѕ РІС‹СЃРѕРєРёР№ СѓСЂРѕРІРµРЅСЊ РґРѕСЃС‚Р°С‚РєР°!");
    } else {
        console.log ("РћС€РёР±РѕС‡РєР°...!");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("РљР°РєРѕРІР° СЃСѓРјРјР° РЅР°РєРѕРїР»РµРЅРёР№?"),
            percent = +prompt("РџРѕРґ РєР°РєРѕР№ РїСЂРѕС†РµРЅС‚?");

            appData.monthIncome = save/100/12*percent;
            alert("Р”РѕС…РѕРґ СЃ Р’Р°С€РµРіРѕ РґРµРїРѕР·РёС‚Р° РІ РјРµСЃСЏС†: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses() {                        

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("РЎС‚Р°С‚СЊСЏ РЅРµРѕР±СЏР·Р°С‚РµР»СЊРЅС‹С… СЂР°СЃС…РѕРґРѕРІ?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();
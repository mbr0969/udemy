'use strict';

let money, time;
let appData = { 
  budget: money, 
  timeData: time,
   expenses: {}, 
   optionalExpenses:'', 
   income: [], 
   savings: false
};

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', 
        new Date().toISOString().slice(0, 10) );

appData.budget = money;        
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце',''),
        b = prompt('Во сколько обойдется?', '');

    if ((typeof(a)) === 'string' &&  (typeof(a)) != null && 
        (typeof(b)) != null &&  a !='' && b!='' && a.length <50 ) {
             console.log("done");
        appData.expenses[a] = b;  
    }
//     else{
//         i--;
//         continue;
//     }
}
appData.moneyPerDay = appData.budget/30;
alert(appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
        console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка"); 
}else{
        console.log("Высокий уровень достатка");
}

// alert(`Вам понадобится ${appData.expenses.budget1/30} 
// рублей в день для статьи расходов ${item1} и 
// ${appData.expenses.budget2/30} рублей в день для ${item2} статьи расходов` );
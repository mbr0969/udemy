'use strict';

let money, time, item1, item2;
let appData = { 
  budget: money, 
  timeData: time,
   expenses: {}, 
   optionalExpenses:'', 
   income: [], 
   savings: false
};

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', 
        new Date().toISOString().slice(0, 10) );
appData.budget = money;        
//console.log(appData.budget);

item1 = prompt('Введите обязательную статью расходов в этом месяце','');
appData.expenses.budget1 = prompt('Во сколько обойдется?', '');

item2 = prompt('Введите вторую обязательную статью расходов в этом месяце','');
appData.expenses.budget2 = prompt('Во сколько обойдется?', '');

alert(`Вы можете потратить в день: ${appData.budget/30} `);

alert(`Вам понадобится ${appData.expenses.budget1/30} 
рублей в день для статьи расходов ${item1} и 
${appData.expenses.budget2/30} рублей в день для ${item2} статьи расходов` );
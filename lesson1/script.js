'use strict';

let money , time,quest1, quest2;
let appData = {budget:money, 
  timeData:time,
   expenses: {}, 
   optionalExpenses:'', 
   income: [], 
   savings: false};

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', 
        new Date().toISOString().slice(0, 10) );

quest1 = prompt('Введите обязательную статью расходов в этом месяце','');
appData.expenses.quest1 = prompt('Во сколько обойдется?', '');

quest2 = prompt('Введите вторую обязательную статью расходов в этом месяце','');
appData.expenses.quest2 = prompt('Во сколько обойдется?', '');
alert(`Вы можете потратить в день: ${appData.budget / 30} `);
alert(`Вам понадобится ${appData.expenses[quest1]/30} 
рублей в день для статьи расходов ${quest1} и 
${appData.expenses[quest2]/30} рублей в день для ${quest2} статьи расходов` );
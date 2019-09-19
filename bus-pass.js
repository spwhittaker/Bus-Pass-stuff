var busPassSavings = function(){
var busPassCost = prompt("How much is your bus pass?");
var weeksForPass = prompt("How many weeks is it valid for?");
var daysPerWeek = prompt("How many days on average will you use the bus pass per week?");
var daySaver =  prompt("How much is a daily bus ticket?");
var daySaverNum = parseFloat(daySaver);
var busPassCostNum = parseFloat(busPassCost);
var dailyPassCost = (busPassCostNum / (weeksForPass * daysPerWeek));
var roundedDailyCost = dailyPassCost.toFixed(2);

console.log(busPassCostNum);

console.log("Your bus pass costs £" + busPassCostNum);
console.log("If you got bus passes every day instead it would cost £" + (weeksForPass * daysPerWeek * daySaver));
console.log("The bus pass price per day is £" + roundedDailyCost);
console.log("That's £" + (daySaverNum - roundedDailyCost).toFixed(2) + " less per day than a day saver that costs £" + daySaverNum);}

busPassSavings();
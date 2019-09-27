const busPassSavings = function(){
let busPassCost = prompt("How much is your bus pass?");
const weeksForPass = prompt("How many weeks is it valid for?");
const daysPerWeek = prompt("How many days on average will you use the bus pass per week?");
let daySaver =  prompt("How much is a daily bus ticket?");



if (busPassCost.charAt(0) == "£"){busPassCost = busPassCost.slice(1);}
busPassCost = Number(busPassCost);
busPassCost = busPassCost.toFixed(2);
if (daySaver.charAt(0) == "£"){daySaver = daySaver.slice(1);}
daySaver = Number(daySaver);
daySaver = daySaver.toFixed(2);
const dailyPassCost = (busPassCost / (weeksForPass * daysPerWeek)).toFixed(2);
const dailySaving = (daySaver - dailyPassCost).toFixed(2);
const totalDaySavers = (weeksForPass * daysPerWeek * daySaver).toFixed(2);

/*console.log(busPassCost);
console.log(daySaver);
console.log(dailyPassCost);
console.log(dailySaving);*/


console.log("Your bus pass costs £" + busPassCost);
console.log("If you got bus passes every day instead it would cost £" + totalDaySavers);
console.log("The bus pass price per day is £" + dailyPassCost);
if (dailySaving > 0) {console.log("That's £" + dailySaving + " less per day than a day saver that costs £" + daySaver);}
if (dailySaving < 0) {console.log("Umm, that's not a saving. Maybe just buy day savers.");} }

busPassSavings();

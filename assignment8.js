var meal

switch (meal){

    case 'breakfast':
        console.log('coffee+bagle');
    case 'lunch':
        console.log('sandwich');
    case 'dinner':
        console.log('pasta');
    default:
        console.log('no food');
}
function calTip(bill) {
    const bill1 = Number(bill);
    if (bill1 >= 30 && bill1 <= 300) {
        return bill1 * .15;
    } else {
        return bill1 * .20;
    }
}
console.log(calTip(100));

const bills = new Array(275, 28, 430);
const tips = new Array(calTip(bills[0]), calTip(bills[1]), calTip(bills[2]));
const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2])
console.log(total);


var Knicksaverage = (65+54+49)/3;
var Netsaverage = (44+23+71)/3;
console.log('knick\'s team average :'+Knicksaverage +'\n '+ 'Net\'s team average :'+ Netsaverage);


function checkwinner(){
    if (Netsaverage < Knicksaverage){console.log(`Net's team win ${Netsaverage}Vs.${Knicksaverage}`);}
else { console.log(`Knick's team win ${Knicksaverage}Vs.${Netsaverage}` );
}
}
console.log(checkwinner);

function microwave(food, time, mode) {
    const redyToEat = `Your ${food} will be heated for ${time} mins under ${mode}`;
    return console.log(redyToEat);
}


const food = microwave('pizza', 20 ,'reheat');
console.log(food);


function timefor4(orginaltime){
    return orginaltime * 4;
}


function foodfor4(orginalfood){
    return orginalfood * 4;


}
function mircowave(foodweight, time, mode){

    const food4 = foodfor4(food);
    const time4 = timefor4(time);
}

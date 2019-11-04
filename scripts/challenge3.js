function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }

    return percentage * bill;
}

let bills = [124, 48, 268];
let tips = [];
let finalAmounts = [];

bills.forEach(bill => {
    let tip = tipCalculator(bill);
    tips.push(tip);
    finalAmounts.push(bill + tip);
});

console.log('===========================')
console.log(bills);
console.log(tips);
console.log(finalAmounts);

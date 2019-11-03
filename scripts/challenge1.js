var mark = {
    'weight':78,
    'height':1.65
}

var john = {
    'weight':88,
    'height':1.65
}

function calcBMI(person){
    return person.weight / (Math.pow(person.height,2));
}

var marksBMI = calcBMI(mark);
var johnsBMI = calcBMI(john);

console.log(marksBMI > johnsBMI ? ' Mark has a greater BMI at ' + marksBMI + ' than John at '+ johnsBMI : 'John has a greater BMI at '+ johnsBMI + ' than Mark at  '+marksBMI);
var mark = {
    'weight':78, //Kilograms
    'height':1.65, // metres
    'age': 35
}

var john = {
    'weight':88, //kilograms
    'height':1.65, //metres
    'age':23
}

function calcBMI(person){
    return person.weight / (Math.pow(person.height,2));
}

var marksBMI = calcBMI(mark);
var johnsBMI = calcBMI(john);

console.log(marksBMI > johnsBMI ? ' Mark has a greater BMI at ' + marksBMI + ' than John at '+ johnsBMI : 'John has a greater BMI at '+ johnsBMI + ' than Mark at  '+marksBMI);



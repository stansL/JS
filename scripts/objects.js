/**
 * Objects and Properties
 * Objects and Methods
 *
 */


//Object literal
var john = {
    'firstName': 'John',
    'lastName': 'Smith',
    'gender': 'male',
    'dateOfBirth': 1990,
    'family': ['Jane', 'Mark', 'Emilly'],
    'job': 'teacher',
    'isMarried': false,
    'calcAge': function () {
        return 2019 - this.dateOfBirth;
    }
}


console.log(john);
console.log(john.calcAge());
console.log(john['family']);


//new object syntax`
let jane = new Object();
jane.surname = 'Omondi';
jane.firstName = 'Jane';
jane.lastName = 'Donata';

console.log(jane);


/**
 * Objects and Methods
 */

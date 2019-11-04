/****
*
**Functions
**
*/

function calculateAge(yearOfBirth){
    return 2019 - yearOfBirth;
}

console.log(calculateAge(1994));


function yearToRetirement(yearOfBirth,retirementAge){
    return retirementAge - calculateAge(yearOfBirth);
}

console.log(yearToRetirement(1994, 65));
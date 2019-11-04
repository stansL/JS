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


/****
*
**Function Statements and Expressions
**
*/


//Function Declaration
function jobDescriptionOne(job,firstName){
    //function body
}


//Function Expression
var jobDescriptionTwo = function(job, firstName){
    //function body
    switch(job){
        case 'teacher':{
            return firstName + ' teaches junior coders how to program';
        }
        case 'driver':{
            return firstName + ' ensures driving school tutorials are up t date!';
        }
        case 'designer':{
            return firstName + ' handles all the interior decor things for us!';

        }
        case 'coach':{
            return firstName + ' ensures our physical fitness is up to standards!';

        }
        default:{
            return 'Job description not yet defined!';
        }
    }
}


console.log(jobDescriptionTwo('designer','James'));
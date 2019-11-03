/**
*
* Control Structures
* If/Else
*/
var firstName  = 'John';
var civilStatus = 'married';

if(civilStatus === 'married'){
    console.log(firstName, 'is married!!');
}else{
    console.log(firstName, 'will hopefully marry soon!!');
}



var job = 'teacher';
switch(job){
    case 'teacher':{
        console.log('Mentors students');
        break;
    }
    case 'engineer':{
        console.log('Designs Stuff');
        break;
    }
    default:{
        console.log('JD not yet captured');
    }
}
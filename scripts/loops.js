/*
 * For Loops
 *
 *
 */

for (var i = 0; i <= 10; i++) {
    console.log(i);
}


var test = ["Science", "Physics", 'Math'];

for (var x = 0; x < test.length; x++) {
    console.log(test[x]);
}


console.log('=======================');
test.forEach(x => {
    console.log(x);
})
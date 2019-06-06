const name = 'Chevon';
let age = 23;
const hasHobbies = 'false';

//arrow functons provide a shorter function definition/signature
const summarizeUser = (userName, userAge, useHasHobbies) => {
    return (
        'Name is ' + 
        userName + 
        ' age is ' +
        userAge + 
        ' and has hobbies: ' +
        useHasHobbies
    );
}


// arrow functions can be written
//  without return statement if 
// the instruction is only one line long
const add = (a, b) => a + b;


//without parentheses for single-parameter list
const addRandom = a => a + 1;

console.log(summarizeUser(name, age, hasHobbies ));
console.log(add('without return statement: ', 1, 2));
console.log('without parentheses: ', addRandom(1));

const name = 'Chevon';
let age = 23;
const hasHobbies = 'false';


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

console.log(summarizeUser(name, age, hasHobbies ));
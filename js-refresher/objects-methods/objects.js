const person = {
    name: 'Chevon',
    age: '23',
    hobbies: false,
    greet: () => {
        console.log('Hello I am: ' + this.name);
    },

    // refers to local scope
    greeet(){
        console.log('Hello I am: ' + this.name);
    }
};
// 'this' in arrow function refers to global scope
// should return 'undefined' name
person.greet();

// should return name
person.greeet();


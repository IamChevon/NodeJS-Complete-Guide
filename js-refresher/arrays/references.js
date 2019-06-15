const person = {
    name: 'Chevon',
    age: '23',
    hobbies: false,

    greet(){
        console.log('Hello I am: ' + this.name);
    }
};

const hobbies = ['League of Legends', 'Coding'];

// arrays and objects are 'reference' types
// reference types store a pointer to the data being stored
// this allows you to update the data and not change the reference
// the following code adds new data and sould print the new data
hobbies.push('Reading');
console.log(hobbies);
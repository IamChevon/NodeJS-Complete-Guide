const person = {
    name: 'Chevon',
    age: '23',
    hobbies: false,

    greet(){
        console.log('Hello I am: ' + this.name);
    }
};

const hobbies = ['League of Legends', 'Coding'];

// array destructuring by index
const [hobby1, hobby2] = hobbies;
console.log('Hobbies: ', hobby1, hobby2);
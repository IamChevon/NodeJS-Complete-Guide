const person = {
    name: 'Chevon',
    age: '23',
    hobbies: false,

    greet(){
        console.log('Hello I am: ' + this.name);
    }
};

const copyPerson = { ...person };
console.log('Spread object: ', copyPerson);

const hobbies = ['League of Legends', 'Coding'];

const copyArr = [...hobbies];
console.log('Spread array: ' + copyArr);

const toArray = (...args) => {
    return args;
}
console.log('Rest args: ' + 1, 2, 3);


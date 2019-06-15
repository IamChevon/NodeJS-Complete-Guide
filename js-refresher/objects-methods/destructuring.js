const person = {
    name: 'Chevon',
    age: '23',
    hobbies: false,

    greet(){
        console.log('Hello I am: ' + this.name);
    }
};

// object destructuring by property
const printName = ({name}) => {
    console.log('Name: ' + name);
}

printName(person);

const {age} = person;
console.log(age);
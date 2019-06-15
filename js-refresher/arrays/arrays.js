const person = {
    name: 'Chevon',
    age: '23',
    hobbies: false,

    greet(){
        console.log('Hello I am: ' + this.name);
    }
};

const hobbies = ['League of Legends', 'Coding'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map( hobby => 'Hobby: ' + hobby));
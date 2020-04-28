`use strict`

const data = { name: 'Taras Bondaruk', city: 'Kyiv', born: 1997 };

const person = new Proxy(data, {
    has(obj, key) {
        console.log( 'check', key);
        return (key in obj || key === 'age');
    },
    get(obj, key) {
        console.log('get', key);
        if (key === 'age') {
            return (
                new Date().getFullYear() - 
                new Date(obj.born + '').getFullYear()
            );
        }
        return obj[key];
    }
});

console.log('Try \'age\' in person');
if ('age' in person) {
    console.log('Try person.age');
    if (person.age) {
        console.log('Try person[\'age\']');
        if (person['age']) {
            console.log({
                born: person.born,
                age: person.age
            });
        }
    }
} 

console.dir(person);
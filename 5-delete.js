`use strict`

const data = { name: 'Taras Bondaruk', city: 'Kyiv', born: 1997 };

const person = new Proxy(data, {
    deleteProperty(obj, key) {
        console.log('delete', key);
        return true;
    }
});

console.log(person);
delete person.name;
console.log(person);
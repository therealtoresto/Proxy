`use strict`

const data = { name: 'Taras Bondaruk', city: 'Kyiv', born: 1997 };

const person = new Proxy(data, {});

console.dir({ 'person.born': person.born });
console.dir({ 'person.year': person.year });

for (const key in person) {
    console.dir({
        key,
        value: person[key],
    });
}
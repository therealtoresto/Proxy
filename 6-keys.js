`use strict`

const data = { name: 'Taras Bondaruk', city: 'Kyiv', _born: 1997 };

const person = new Proxy(data, {
    ownKeys(obj) {
        return Object.keys(obj).filter(name => !name.startsWith('_'));
    }
});

console.dir(Object.keys(person));
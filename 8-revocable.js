`use strict`

const data = { name: 'Taras' };

const { proxy, revoke } = Proxy.revocable(data, {
    get: function(target, key) {
        return '[[' + target[key] + ']]';
    }
});

console.log(proxy.name);
revoke();
console.log(proxy.name);
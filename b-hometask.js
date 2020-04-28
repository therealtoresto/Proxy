`use strict`;

let numbers = [1, 2, 3];

numbers = new Proxy(numbers, {
    get(target, prop, reciver) {
        if(( prop < 0 ) ) {
            // даже если обращение к элементу идёт как arr[1]
            // prop является строкой, нужно преобразовать её к числу
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, reciver); 
    }
});

console.log(numbers[1]);
console.log(numbers[-1]); // 3, последний элемент
console.log(numbers[-2]); // 2, предпоследний элемент
console.log(numbers[-3]); // 1, за два элемента до последнегоconsole.log()
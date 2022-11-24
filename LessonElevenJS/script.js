// Promise - предназначени для выполнения операции в осинхронном режиме
const p = new Promise((resolve, reject) => {
    // resolve и reject - это функции
    // мы вызываем функию resolve() если код выполнился успешно
    // мы вызываем reject() если код выполнился с ошибкой

    setTimeout(() => {
        console.log('Hellos world');
        // resolve([1, 2, 3, 4]); // success
        reject('error'); // failed
    }, 1000);



});

// вызов them() у объекта promise запускает его код на выполнения
p.then((arr) => {
    // эта лямбда вызывзовется тогда когда внутри тела Promise будет взывана функция resolve()
    console.log(arr);
    return arr.reduce((p, c) => p + c);
})
.catch((err) => {
    // эта лямбда вызовется тогда когда внутри тела Promise будет взывана функция reject()
    console.log(err);
})
.then((a) => {
    console.log(a);
    throw 'aboba';
})
.catch((err) => {
    console.log(err);
});
console.log('Hello Java');

// await, async
async function test() {
    console.log('PI');
    return 3.14; // resolve(3.14)
}

// async функция всегда возвращает объект Promise
const w = test();
w.then((a) => console.log(a));

// await заставляет ждать окончaния выполнения Promis (именно вызова функции resolve())
// await нельзя ипользовать вне контекста асинхронной функции
// await можно использовать толко внутнри асихнронной функции либо лямбды

async function test2() {
    const v = await test();
    console.log(v);
}
test2();
console.log(w);

// JSON - JavaScript Object Notation
/*

{} - задают объект

[] - задают массив

внутри {} - свойства:

{
    "name": "String",
    "age": int, float, double,
    "drinks": [int, float, double, [arrays], "String"],
    "isAdmin": boolean,
    "photo": null,
    "order": {
        "product": "pepsi",
        "price": 12.22
    } 
}

*/

// JSON -> JavaScript Object
const s = `{"age": 12, "name": "Viktor"}`;
const user = JSON.parse(s);
console.log(user);

// JavaScript Object -> JSON
const cat = {
    age: 1,
    color: 'gray',
    vactinations: [12, 'true', 'Ebola-Virus', 'T-Virus']
};
const c = JSON.stringify(cat);
console.log(c);

// Асинхронные запросы
async function loadCurrentcies() {
    const res = await fetch('https://www.nbrb.by/api/exrates/currencies');
    console.log(res);
    const currentcies = await res.json();
    console.log(currentcies);
}

loadCurrentcies();



const prompt = require("prompt-sync")({ sigint: true});
let a = prompt('Введи первое значение: ');
a=Number(a);
if (!a)
{
    console.log('Некорректный ввод!');
    return;
}
let b = prompt('Введи второе значение: ');
b=Number(b);
if (!b)
{
    console.log('Некорректный ввод!');
    return;
}
const sum=a+b;
const quotient =a/b;
console.log('Ответ: '+sum+', '+quotient+'.');
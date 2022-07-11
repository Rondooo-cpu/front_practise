const prompt = require("prompt-sync")({ sigint: true});
let a = prompt('Введи первое значение: ');
let b = prompt('Введи второе значение: ');
a=Number(a);
b=Number(b);
if (a&&b)
{
    console.log(a);
    console.log(b);
    let a_from_b = a.toString(b); 
    console.log(a_from_b);
}
else 
{
    console.log('Некорректный ввод!');
}
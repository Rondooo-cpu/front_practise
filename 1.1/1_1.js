const prompt = require("prompt-sync")({ sigint: true});
let a = prompt('Введи первое значение: ');
let b = prompt('Введи второе значение: ');
a=Number(a);
b=Number(b);
if ((a&&b)||(a===0&&b)||(b===0&&a)||(a===0&&b===0))
{
    if (b>1&&b<36)
    {
        let a_from_b = a.toString(b); 
        console.log(a_from_b);
    }
    else
    {
        console.log('Некторректное значение числа для системы счисления!');   
    }
}
else 
{
    console.log('Некорректный ввод!');
}
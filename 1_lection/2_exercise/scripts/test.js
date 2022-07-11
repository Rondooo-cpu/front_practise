const firstNumber = Number(prompt('Введи первое значение: '));
if (!firstNumber&&firstNumber!==0)
{
    console.log('Некорректный ввод!');
    throw '';
}
const secondNumber = Number(prompt('Введи второе значение: '));
if (!secondNumber)
{
    console.log('Некорректный ввод!');
    throw '';
}
const sumFirsAndSecondNumbers=firstNumber+secondNumber;
const quotientOfFirstAndSecondNumber =firstNumber/secondNumber;
console.log('Ответ: '+sumFirsAndSecondNumbers+', '+quotientOfFirstAndSecondNumber+'.');
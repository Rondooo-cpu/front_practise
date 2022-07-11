const firstNumber = Number(prompt('Введи первое значение: '));
const secondNumber = Number(prompt('Введи второе значение: '));
if ((firstNumber&&secondNumber)||(firstNumber===0&&secondNumber)||(secondNumber===0&&firstNumber)||(firstNumber===0&&secondNumber===0))
{
    if (secondNumber>1&&secondNumber<36)
    {
        const firstNumerinSecondNumber = firstNumber.toString(secondNumber); 
        console.log(firstNumerinSecondNumber);
    }
    else
    {
        console.log('Некорректное значение числа для системы счисления!');   
    }
}
else 
{
    console.log('Некорректный ввод!');
}
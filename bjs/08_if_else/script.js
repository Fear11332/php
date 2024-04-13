let minValue = undefined;
let maxValue = undefined;
const number1Field = document.querySelector("#firstNumber");
const number2Field = document.querySelector("#secondNumber");


document.querySelector("#submit").addEventListener('click',function(event){

    event.preventDefault();
    if(!gameRun)
    {
        minValue = number1Field.value;
        maxValue = number2Field.value;
        gameRun=true;
    }
    else
        alert("hello");
});

if(
!Number.isFinite(+minValue) 
|| !Number.isFinite(+maxValue) 
|| maxValue==='' 
|| minValue==='' 
|| maxValue===null
|| minValue ===null
|| +minValue>=+maxValue)
{
    minValue=0;
    maxValue=10;
}
maxValue=maxValue>999?999:maxValue;
minValue=minValue<-999?-999:minValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    let answerNumber  = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = false;
    let stringNumber=answerNumber<0?'минус ':'';
    if(String(Math.abs(answerNumber)).length===3)
    {
        if(String(Math.abs(answerNumber))[0]==='1')
            stringNumber+='сто';
        else if(String(Math.abs(answerNumber))[0]==='2')
            stringNumber+='двести';
        else if(String(Math.abs(answerNumber))[0]==='3')
            stringNumber+='триста';
        else if(String(Math.abs(answerNumber))[0]==='4')
            stringNumber+='четыреста';
        else if(String(Math.abs(answerNumber))[0]==='5')
            stringNumber+='пятьсот';
        else if(String(Math.abs(answerNumber))[0]==='6')
            stringNumber+='шестьсот';
        else if(String(Math.abs(answerNumber))[0]==='7')
            stringNumber+='семьсот';
        else if(String(Math.abs(answerNumber))[0]==='8')
            stringNumber+='восемьсот';
        else if(String(Math.abs(answerNumber))[0]==='9')
            stringNumber+='девятьсот';

        if(String(Math.abs(answerNumber))[1]==='2')
            stringNumber+=' двадцать';
        else if(String(Math.abs(answerNumber))[1]==='3')
            stringNumber+=' тридцать';
        else if(String(Math.abs(answerNumber))[1]==='4')
            stringNumber+=' сорок';
        else if(String(Math.abs(answerNumber))[1]==='5')
            stringNumber+=' пятьдесят';
        else if(String(Math.abs(answerNumber))[1]==='6')
            stringNumber+=' шестьдесят';
        else if(String(Math.abs(answerNumber))[1]==='7')
            stringNumber+=' семьдеcят';
        else if(String(Math.abs(answerNumber))[1]==='8')
            stringNumber+=' восемьдесят';
        else if(String(Math.abs(answerNumber))[1]==='9')
            stringNumber+=' девяносто';
        else if(String(Math.abs(answerNumber))[1]==='1')
        {
            if(String(Math.abs(answerNumber))[2]==='0')
                stringNumber+=' десять';
            else if(String(Math.abs(answerNumber))[2]==='1')
                stringNumber+=' одиннадцать';
            else if(String(Math.abs(answerNumber))[2]==='2')
                stringNumber+=' двенадцать';
            else if(String(Math.abs(answerNumber))[2]==='3')
                stringNumber+=' тренадцать';
            else if(String(Math.abs(answerNumber))[2]==='4')
                stringNumber+=' четырнадцать';
            else if(String(Math.abs(answerNumber))[2]==='5')
                stringNumber+=' пятнадцать';
            else if(String(Math.abs(answerNumber))[2]==='6')
                stringNumber+=' шестнадцать';
            else if(String(Math.abs(answerNumber))[2]==='7')
                stringNumber+=' семнадцать';
            else if(String(Math.abs(answerNumber))[2]==='8')
                stringNumber+=' весемнадцать';
            else if(String(Math.abs(answerNumber))[2]==='9')
                stringNumber+=' девятнадцать';
        }
        if(String(Math.abs(answerNumber))[1]!=='1')
        {
            if(String(Math.abs(answerNumber))[2]==='1')
                stringNumber+=' один';
            else if(String(Math.abs(answerNumber))[2]==='2')
                stringNumber+=' два';
            else if(String(Math.abs(answerNumber))[2]==='3')
                stringNumber+=' три';
            else if(String(Math.abs(answerNumber))[2]==='4')
                stringNumber+=' четыре';
            else if(String(Math.abs(answerNumber))[2]==='5')
                stringNumber+=' пять';
            else if(String(Math.abs(answerNumber))[2]==='6')
                stringNumber+=' шесть';
            else if(String(Math.abs(answerNumber))[2]==='7')
                stringNumber+=' семь';
            else if(String(Math.abs(answerNumber))[2]==='8')
                stringNumber+=' восемь';
            else if(String(Math.abs(answerNumber))[2]==='9')
                stringNumber+=' девять';
        }
    }
    else if(String(Math.abs(answerNumber)).length===2)
    {
        if(String(Math.abs(answerNumber))[0]==='2')
        stringNumber+='двадцать';
        else if(String(Math.abs(answerNumber))[0]==='3')
            stringNumber+='тридцать';
        else if(String(Math.abs(answerNumber))[0]==='4')
            stringNumber+='сорок';
        else if(String(Math.abs(answerNumber))[0]==='5')
            stringNumber+='пятьдесят';
        else if(String(Math.abs(answerNumber))[0]==='6')
            stringNumber+='шестьдесят';
        else if(String(Math.abs(answerNumber))[0]==='7')
            stringNumber+='семьдеcят';
        else if(String(Math.abs(answerNumber))[0]==='8')
            stringNumber+='восемьдесят';
        else if(String(Math.abs(answerNumber))[0]==='9')
            stringNumber+='девяносто';
        else if(String(Math.abs(answerNumber))[0]==='1')
        {
            if(String(Math.abs(answerNumber))[1]==='0')
                stringNumber+='десять';
            else if(String(Math.abs(answerNumber))[1]==='1')
                stringNumber+='одиннадцать';
            else if(String(Math.abs(answerNumber))[1]==='2')
                stringNumber+='двенадцать';
            else if(String(Math.abs(answerNumber))[1]==='3')
                stringNumber+='тренадцать';
            else if(String(Math.abs(answerNumber))[1]==='4')
                stringNumber+='четырнадцать';
            else if(String(Math.abs(answerNumber))[1]==='5')
                stringNumber+='пятнадцать';
            else if(String(Math.abs(answerNumber))[1]==='6')
                stringNumber+='шестнадцать';
            else if(String(Math.abs(answerNumber))[1]==='7')
                stringNumber+='семнадцать';
            else if(String(Math.abs(answerNumber))[1]==='8')
                stringNumber+='весемнадцать';
            else if(String(Math.abs(answerNumber))[1]==='9')
                stringNumber+='девятнадцать';
        }
        if(String(Math.abs(answerNumber))[0]!=='1')
        {
            if(String(Math.abs(answerNumber))[1]==='1')
                stringNumber+=' один';
            else if(String(Math.abs(answerNumber))[1]==='2')
                stringNumber+=' два';
            else if(String(Math.abs(answerNumber))[1]==='3')
                stringNumber+=' три';
            else if(String(Math.abs(answerNumber))[1]==='4')
                stringNumber+=' четыре';
            else if(String(Math.abs(answerNumber))[1]==='5')
                stringNumber+=' пять';
            else if(String(Math.abs(answerNumber))[1]==='6')
                stringNumber+=' шесть';
            else if(String(Math.abs(answerNumber))[1]==='7')
                stringNumber+=' семь';
            else if(String(Math.abs(answerNumber))[1]==='8')
                stringNumber+=' восемь';
            else if(String(Math.abs(answerNumber))[1]==='9')
                stringNumber+=' девять';
        }
    }
    else 
    {
        if(String(Math.abs(answerNumber))[0]==='0')
            stringNumber+='ноль';
        else if(String(Math.abs(answerNumber))[0]==='1')
            stringNumber+='один';
        else if(String(Math.abs(answerNumber))[0]==='2')
            stringNumber+='два';
        else if(String(Math.abs(answerNumber))[0]==='3')
            stringNumber+='три';
        else if(String(Math.abs(answerNumber))[0]==='4')
            stringNumber+='четыре';
        else if(String(Math.abs(answerNumber))[0]==='5')
            stringNumber+='пять';
        else if(String(Math.abs(answerNumber))[0]==='6')
            stringNumber+='шесть';
        else if(String(Math.abs(answerNumber))[0]==='7')
            stringNumber+='семь';
        else if(String(Math.abs(answerNumber))[0]==='8')
            stringNumber+='восемь';
        else if(String(Math.abs(answerNumber))[0]==='9')
            stringNumber+='девять';
    }
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    let phraseRandom;
    let answerPhrase;
    phraseRandom = Math.round( Math.random()*4);
    answerPhrase = (phraseRandom==1)?
    `Вы загадали число ${stringNumber.length<20?stringNumber:answerNumber}?`:
    (phraseRandom==2)?
    `Ваше число ${stringNumber.length<20?stringNumber:answerNumber} ?`:
    (phraseRandom==3)?
    `Это ваше число ${stringNumber.length<20?stringNumber:answerNumber}?`:
    `Ваше число равно ${stringNumber.length<20?stringNumber:answerNumber}?`;
    answerField.innerText = answerPhrase;

    document.getElementById('btnRetry').addEventListener('click', function () {
        alert("введите только числовые значения в диапазоне от -999 до 999 включительно");
        do{
            minValue = prompt('Минимальное знание числа для игры',-999);
            maxValue = prompt('Максимальное знание числа для игры',999);
        }while(
        !Number.isFinite(+minValue) 
        || !Number.isFinite(+maxValue) 
        || maxValue==='' 
        || minValue==='' 
        || maxValue===null
        || minValue ===null
        || +minValue>=+maxValue);
        maxValue=+maxValue;
        minValue=+minValue;
        maxValue=maxValue>999?999:maxValue;
        minValue=minValue<-999?-999:minValue;
        let phraseRandom;
        let answerPhrase;
        phraseRandom = Math.round( Math.random()*4);
        orderNumber = 1;
        gameRun = true;
        answerNumber = Math.floor((minValue+maxValue)/2);
        stringNumber=answerNumber<0?'минус ':'';
        if(String(Math.abs(answerNumber)).length===3)
        {
            if(String(Math.abs(answerNumber))[0]==='1')
                stringNumber+='сто';
            else if(String(Math.abs(answerNumber))[0]==='2')
                stringNumber+='двести';
            else if(String(Math.abs(answerNumber))[0]==='3')
                stringNumber+='триста';
            else if(String(Math.abs(answerNumber))[0]==='4')
                stringNumber+='четыреста';
            else if(String(Math.abs(answerNumber))[0]==='5')
                stringNumber+='пятьсот';
            else if(String(Math.abs(answerNumber))[0]==='6')
                stringNumber+='шестьсот';
            else if(String(Math.abs(answerNumber))[0]==='7')
                stringNumber+='семьсот';
            else if(String(Math.abs(answerNumber))[0]==='8')
                stringNumber+='восемьсот';
            else if(String(Math.abs(answerNumber))[0]==='9')
                stringNumber+='девятьсот';
    
            if(String(Math.abs(answerNumber))[1]==='2')
                stringNumber+=' двадцать';
            else if(String(Math.abs(answerNumber))[1]==='3')
                stringNumber+=' тридцать';
            else if(String(Math.abs(answerNumber))[1]==='4')
                stringNumber+=' сорок';
            else if(String(Math.abs(answerNumber))[1]==='5')
                stringNumber+=' пятьдесят';
            else if(String(Math.abs(answerNumber))[1]==='6')
                stringNumber+=' шестьдесят';
            else if(String(Math.abs(answerNumber))[1]==='7')
                stringNumber+=' семьдеcят';
            else if(String(Math.abs(answerNumber))[1]==='8')
                stringNumber+=' восемьдесят';
            else if(String(Math.abs(answerNumber))[1]==='9')
                stringNumber+=' девяносто';
            else if(String(Math.abs(answerNumber))[1]==='1')
            {
                if(String(Math.abs(answerNumber))[2]==='0')
                    stringNumber+=' десять';
                else if(String(Math.abs(answerNumber))[2]==='1')
                    stringNumber+=' одиннадцать';
                else if(String(Math.abs(answerNumber))[2]==='2')
                    stringNumber+=' двенадцать';
                else if(String(Math.abs(answerNumber))[2]==='3')
                    stringNumber+=' тренадцать';
                else if(String(Math.abs(answerNumber))[2]==='4')
                    stringNumber+=' четырнадцать';
                else if(String(Math.abs(answerNumber))[2]==='5')
                    stringNumber+=' пятнадцать';
                else if(String(Math.abs(answerNumber))[2]==='6')
                    stringNumber+=' шестнадцать';
                else if(String(Math.abs(answerNumber))[2]==='7')
                    stringNumber+=' семнадцать';
                else if(String(Math.abs(answerNumber))[2]==='8')
                    stringNumber+=' весемнадцать';
                else if(String(Math.abs(answerNumber))[2]==='9')
                    stringNumber+=' девятнадцать';
            }
            if(String(Math.abs(answerNumber))[1]!=='1')
            {
                if(String(Math.abs(answerNumber))[2]==='1')
                    stringNumber+=' один';
                else if(String(Math.abs(answerNumber))[2]==='2')
                    stringNumber+=' два';
                else if(String(Math.abs(answerNumber))[2]==='3')
                    stringNumber+=' три';
                else if(String(Math.abs(answerNumber))[2]==='4')
                    stringNumber+=' четыре';
                else if(String(Math.abs(answerNumber))[2]==='5')
                    stringNumber+=' пять';
                else if(String(Math.abs(answerNumber))[2]==='6')
                    stringNumber+=' шесть';
                else if(String(Math.abs(answerNumber))[2]==='7')
                    stringNumber+=' семь';
                else if(String(Math.abs(answerNumber))[2]==='8')
                    stringNumber+=' восемь';
                else if(String(Math.abs(answerNumber))[2]==='9')
                    stringNumber+=' девять';
            }
        }
        else if(String(Math.abs(answerNumber)).length===2)
        {
            if(String(Math.abs(answerNumber))[0]==='2')
            stringNumber+='двадцать';
            else if(String(Math.abs(answerNumber))[0]==='3')
                stringNumber+='тридцать';
            else if(String(Math.abs(answerNumber))[0]==='4')
                stringNumber+='сорок';
            else if(String(Math.abs(answerNumber))[0]==='5')
                stringNumber+='пятьдесят';
            else if(String(Math.abs(answerNumber))[0]==='6')
                stringNumber+='шестьдесят';
            else if(String(Math.abs(answerNumber))[0]==='7')
                stringNumber+='семьдеcят';
            else if(String(Math.abs(answerNumber))[0]==='8')
                stringNumber+='восемьдесят';
            else if(String(Math.abs(answerNumber))[0]==='9')
                stringNumber+='девяносто';
            else if(String(Math.abs(answerNumber))[0]==='1')
            {
                if(String(Math.abs(answerNumber))[1]==='0')
                    stringNumber+='десять';
                else if(String(Math.abs(answerNumber))[1]==='1')
                    stringNumber+='одиннадцать';
                else if(String(Math.abs(answerNumber))[1]==='2')
                    stringNumber+='двенадцать';
                else if(String(Math.abs(answerNumber))[1]==='3')
                    stringNumber+='тренадцать';
                else if(String(Math.abs(answerNumber))[1]==='4')
                    stringNumber+='четырнадцать';
                else if(String(Math.abs(answerNumber))[1]==='5')
                    stringNumber+='пятнадцать';
                else if(String(Math.abs(answerNumber))[1]==='6')
                    stringNumber+='шестнадцать';
                else if(String(Math.abs(answerNumber))[1]==='7')
                    stringNumber+='семнадцать';
                else if(String(Math.abs(answerNumber))[1]==='8')
                    stringNumber+='весемнадцать';
                else if(String(Math.abs(answerNumber))[1]==='9')
                    stringNumber+='девятнадцать';
            }
            if(String(Math.abs(answerNumber))[0]!=='1')
            {
                if(String(Math.abs(answerNumber))[1]==='1')
                    stringNumber+=' один';
                else if(String(Math.abs(answerNumber))[1]==='2')
                    stringNumber+=' два';
                else if(String(Math.abs(answerNumber))[1]==='3')
                    stringNumber+=' три';
                else if(String(Math.abs(answerNumber))[1]==='4')
                    stringNumber+=' четыре';
                else if(String(Math.abs(answerNumber))[1]==='5')
                    stringNumber+=' пять';
                else if(String(Math.abs(answerNumber))[1]==='6')
                    stringNumber+=' шесть';
                else if(String(Math.abs(answerNumber))[1]==='7')
                    stringNumber+=' семь';
                else if(String(Math.abs(answerNumber))[1]==='8')
                    stringNumber+=' восемь';
                else if(String(Math.abs(answerNumber))[1]==='9')
                    stringNumber+=' девять';
            }
        }
        else 
        {
            if(String(Math.abs(answerNumber))[0]==='0')
                stringNumber+='ноль';
            else if(String(Math.abs(answerNumber))[0]==='1')
                stringNumber+='один';
            else if(String(Math.abs(answerNumber))[0]==='2')
                stringNumber+='два';
            else if(String(Math.abs(answerNumber))[0]==='3')
                stringNumber+='три';
            else if(String(Math.abs(answerNumber))[0]==='4')
                stringNumber+='четыре';
            else if(String(Math.abs(answerNumber))[0]==='5')
                stringNumber+='пять';
            else if(String(Math.abs(answerNumber))[0]==='6')
                stringNumber+='шесть';
            else if(String(Math.abs(answerNumber))[0]==='7')
                stringNumber+='семь';
            else if(String(Math.abs(answerNumber))[0]==='8')
                stringNumber+='восемь';
            else if(String(Math.abs(answerNumber))[0]==='9')
                stringNumber+='девять';
        }
        orderNumberField.innerText = orderNumber;
        answerPhrase = (phraseRandom==1)?
        `Вы загадали число ${stringNumber.length<20?stringNumber:answerNumber}?`:
        (phraseRandom==2)?
        `Ваше число ${stringNumber.length<20?stringNumber:answerNumber} ?`:
        (phraseRandom==3)?
        `Это ваше число ${stringNumber.length<20?stringNumber:answerNumber}?`:
        `Ваше число равно ${stringNumber.length<20?stringNumber:answerNumber}?`;
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        answerField.innerText = answerPhrase;
    })

    document.getElementById('btnOver').addEventListener('click', function () {
        if (gameRun){
            let phraseRandom;
            let answerPhrase;
            phraseRandom = Math.round( Math.random()*4);
            if (minValue === maxValue){
                answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    (phraseRandom==2)?
                    `Какие сложные загадки, я устал...\n\u{1F612}`:
                    (phraseRandom===3)?
                    `Это был сложный раунд \n\u{1F974}`:
                    `Я сдаюсь..\n\u{1F92F}`;

                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                minValue = answerNumber  + 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                stringNumber=answerNumber<0?'минус ':'';
                if(String(Math.abs(answerNumber)).length===3)
                {
                    if(String(Math.abs(answerNumber))[0]==='1')
                        stringNumber+='сто';
                    else if(String(Math.abs(answerNumber))[0]==='2')
                        stringNumber+='двести';
                    else if(String(Math.abs(answerNumber))[0]==='3')
                        stringNumber+='триста';
                    else if(String(Math.abs(answerNumber))[0]==='4')
                        stringNumber+='четыреста';
                    else if(String(Math.abs(answerNumber))[0]==='5')
                        stringNumber+='пятьсот';
                    else if(String(Math.abs(answerNumber))[0]==='6')
                        stringNumber+='шестьсот';
                    else if(String(Math.abs(answerNumber))[0]==='7')
                        stringNumber+='семьсот';
                    else if(String(Math.abs(answerNumber))[0]==='8')
                        stringNumber+='восемьсот';
                    else if(String(Math.abs(answerNumber))[0]==='9')
                        stringNumber+='девятьсот';
            
                    if(String(Math.abs(answerNumber))[1]==='2')
                        stringNumber+=' двадцать';
                    else if(String(Math.abs(answerNumber))[1]==='3')
                        stringNumber+=' тридцать';
                    else if(String(Math.abs(answerNumber))[1]==='4')
                        stringNumber+=' сорок';
                    else if(String(Math.abs(answerNumber))[1]==='5')
                        stringNumber+=' пятьдесят';
                    else if(String(Math.abs(answerNumber))[1]==='6')
                        stringNumber+=' шестьдесят';
                    else if(String(Math.abs(answerNumber))[1]==='7')
                        stringNumber+=' семьдеcят';
                    else if(String(Math.abs(answerNumber))[1]==='8')
                        stringNumber+=' восемьдесят';
                    else if(String(Math.abs(answerNumber))[1]==='9')
                        stringNumber+=' девяносто';
                    else if(String(Math.abs(answerNumber))[1]==='1')
                    {
                        if(String(Math.abs(answerNumber))[2]==='0')
                            stringNumber+=' десять';
                        else if(String(Math.abs(answerNumber))[2]==='1')
                            stringNumber+=' одиннадцать';
                        else if(String(Math.abs(answerNumber))[2]==='2')
                            stringNumber+=' двенадцать';
                        else if(String(Math.abs(answerNumber))[2]==='3')
                            stringNumber+=' тренадцать';
                        else if(String(Math.abs(answerNumber))[2]==='4')
                            stringNumber+=' четырнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='5')
                            stringNumber+=' пятнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='6')
                            stringNumber+=' шестнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='7')
                            stringNumber+=' семнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='8')
                            stringNumber+=' весемнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='9')
                            stringNumber+=' девятнадцать';
                    }
                    if(String(Math.abs(answerNumber))[1]!=='1')
                    {
                        if(String(Math.abs(answerNumber))[2]==='1')
                            stringNumber+=' один';
                        else if(String(Math.abs(answerNumber))[2]==='2')
                            stringNumber+=' два';
                        else if(String(Math.abs(answerNumber))[2]==='3')
                            stringNumber+=' три';
                        else if(String(Math.abs(answerNumber))[2]==='4')
                            stringNumber+=' четыре';
                        else if(String(Math.abs(answerNumber))[2]==='5')
                            stringNumber+=' пять';
                        else if(String(Math.abs(answerNumber))[2]==='6')
                            stringNumber+=' шесть';
                        else if(String(Math.abs(answerNumber))[2]==='7')
                            stringNumber+=' семь';
                        else if(String(Math.abs(answerNumber))[2]==='8')
                            stringNumber+=' восемь';
                        else if(String(Math.abs(answerNumber))[2]==='9')
                            stringNumber+=' девять';
                    }
                }
                else if(String(Math.abs(answerNumber)).length===2)
                {
                    if(String(Math.abs(answerNumber))[0]==='2')
                    stringNumber+='двадцать';
                    else if(String(Math.abs(answerNumber))[0]==='3')
                        stringNumber+='тридцать';
                    else if(String(Math.abs(answerNumber))[0]==='4')
                        stringNumber+='сорок';
                    else if(String(Math.abs(answerNumber))[0]==='5')
                        stringNumber+='пятьдесят';
                    else if(String(Math.abs(answerNumber))[0]==='6')
                        stringNumber+='шестьдесят';
                    else if(String(Math.abs(answerNumber))[0]==='7')
                        stringNumber+='семьдеcят';
                    else if(String(Math.abs(answerNumber))[0]==='8')
                        stringNumber+='восемьдесят';
                    else if(String(Math.abs(answerNumber))[0]==='9')
                        stringNumber+='девяносто';
                    else if(String(Math.abs(answerNumber))[0]==='1')
                    {
                        if(String(Math.abs(answerNumber))[1]==='0')
                            stringNumber+='десять';
                        else if(String(Math.abs(answerNumber))[1]==='1')
                            stringNumber+='одиннадцать';
                        else if(String(Math.abs(answerNumber))[1]==='2')
                            stringNumber+='двенадцать';
                        else if(String(Math.abs(answerNumber))[1]==='3')
                            stringNumber+='тренадцать';
                        else if(String(Math.abs(answerNumber))[1]==='4')
                            stringNumber+='четырнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='5')
                            stringNumber+='пятнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='6')
                            stringNumber+='шестнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='7')
                            stringNumber+='семнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='8')
                            stringNumber+='весемнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='9')
                            stringNumber+='девятнадцать';
                    }
                    if(String(Math.abs(answerNumber))[0]!=='1')
                    {
                        if(String(Math.abs(answerNumber))[1]==='1')
                            stringNumber+=' один';
                        else if(String(Math.abs(answerNumber))[1]==='2')
                            stringNumber+=' два';
                        else if(String(Math.abs(answerNumber))[1]==='3')
                            stringNumber+=' три';
                        else if(String(Math.abs(answerNumber))[1]==='4')
                            stringNumber+=' четыре';
                        else if(String(Math.abs(answerNumber))[1]==='5')
                            stringNumber+=' пять';
                        else if(String(Math.abs(answerNumber))[1]==='6')
                            stringNumber+=' шесть';
                        else if(String(Math.abs(answerNumber))[1]==='7')
                            stringNumber+=' семь';
                        else if(String(Math.abs(answerNumber))[1]==='8')
                            stringNumber+=' восемь';
                        else if(String(Math.abs(answerNumber))[1]==='9')
                            stringNumber+=' девять';
                    }
                }
                else 
                {
                    if(String(Math.abs(answerNumber))[0]==='0')
                        stringNumber+='ноль';
                    else if(String(Math.abs(answerNumber))[0]==='1')
                        stringNumber+='один';
                    else if(String(Math.abs(answerNumber))[0]==='2')
                        stringNumber+='два';
                    else if(String(Math.abs(answerNumber))[0]==='3')
                        stringNumber+='три';
                    else if(String(Math.abs(answerNumber))[0]==='4')
                        stringNumber+='четыре';
                    else if(String(Math.abs(answerNumber))[0]==='5')
                        stringNumber+='пять';
                    else if(String(Math.abs(answerNumber))[0]==='6')
                        stringNumber+='шесть';
                    else if(String(Math.abs(answerNumber))[0]==='7')
                        stringNumber+='семь';
                    else if(String(Math.abs(answerNumber))[0]==='8')
                        stringNumber+='восемь';
                    else if(String(Math.abs(answerNumber))[0]==='9')
                        stringNumber+='девять';
                }
                
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerPhrase = (phraseRandom==1)?
                `Вы загадали число ${stringNumber.length<20?stringNumber:answerNumber}?`:
                (phraseRandom==2)?
                `Ваше число ${stringNumber.length<20?stringNumber:answerNumber} ?`:
                (phraseRandom==3)?
                `Это ваше число ${stringNumber.length<20?stringNumber:answerNumber}?`:
                `Ваше число равно ${stringNumber.length<20?stringNumber:answerNumber}?`;
                answerField.innerText = answerPhrase;
            }
        }
    })

    document.getElementById('btnLess').addEventListener('click', function () {
        if (gameRun){
            let phraseRandom;
            let answerPhrase;
            phraseRandom = Math.round( Math.random()*4);
            if (Math.abs(maxValue-minValue-1)<=0.0001){
                answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    (phraseRandom==2)?
                    `Какие сложные загадки, я устал...\n\u{1F612}`:
                    (phraseRandom===3)?
                    `Это был сложный раунд \n\u{1F974}`:
                    `Я сдаюсь..\n\u{1F92F}`;

                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                maxValue = answerNumber-1;
                answerNumber  = Math.ceil((minValue + maxValue) / 2);
                stringNumber=answerNumber<0?'минус ':'';
                if(String(Math.abs(answerNumber)).length===3)
                {
                    if(String(Math.abs(answerNumber))[0]==='1')
                        stringNumber+='сто';
                    else if(String(Math.abs(answerNumber))[0]==='2')
                        stringNumber+='двести';
                    else if(String(Math.abs(answerNumber))[0]==='3')
                        stringNumber+='триста';
                    else if(String(Math.abs(answerNumber))[0]==='4')
                        stringNumber+='четыреста';
                    else if(String(Math.abs(answerNumber))[0]==='5')
                        stringNumber+='пятьсот';
                    else if(String(Math.abs(answerNumber))[0]==='6')
                        stringNumber+='шестьсот';
                    else if(String(Math.abs(answerNumber))[0]==='7')
                        stringNumber+='семьсот';
                    else if(String(Math.abs(answerNumber))[0]==='8')
                        stringNumber+='восемьсот';
                    else if(String(Math.abs(answerNumber))[0]==='9')
                        stringNumber+='девятьсот';
            
                    if(String(Math.abs(answerNumber))[1]==='2')
                        stringNumber+=' двадцать';
                    else if(String(Math.abs(answerNumber))[1]==='3')
                        stringNumber+=' тридцать';
                    else if(String(Math.abs(answerNumber))[1]==='4')
                        stringNumber+=' сорок';
                    else if(String(Math.abs(answerNumber))[1]==='5')
                        stringNumber+=' пятьдесят';
                    else if(String(Math.abs(answerNumber))[1]==='6')
                        stringNumber+=' шестьдесят';
                    else if(String(Math.abs(answerNumber))[1]==='7')
                        stringNumber+=' семьдеcят';
                    else if(String(Math.abs(answerNumber))[1]==='8')
                        stringNumber+=' восемьдесят';
                    else if(String(Math.abs(answerNumber))[1]==='9')
                        stringNumber+=' девяносто';
                    else if(String(Math.abs(answerNumber))[1]==='1')
                    {
                        if(String(Math.abs(answerNumber))[2]==='0')
                            stringNumber+=' десять';
                        else if(String(Math.abs(answerNumber))[2]==='1')
                            stringNumber+=' одиннадцать';
                        else if(String(Math.abs(answerNumber))[2]==='2')
                            stringNumber+=' двенадцать';
                        else if(String(Math.abs(answerNumber))[2]==='3')
                            stringNumber+=' тренадцать';
                        else if(String(Math.abs(answerNumber))[2]==='4')
                            stringNumber+=' четырнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='5')
                            stringNumber+=' пятнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='6')
                            stringNumber+=' шестнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='7')
                            stringNumber+=' семнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='8')
                            stringNumber+=' весемнадцать';
                        else if(String(Math.abs(answerNumber))[2]==='9')
                            stringNumber+=' девятнадцать';
                    }
                    if(String(Math.abs(answerNumber))[1]!=='1')
                    {
                        if(String(Math.abs(answerNumber))[2]==='1')
                            stringNumber+=' один';
                        else if(String(Math.abs(answerNumber))[2]==='2')
                            stringNumber+=' два';
                        else if(String(Math.abs(answerNumber))[2]==='3')
                            stringNumber+=' три';
                        else if(String(Math.abs(answerNumber))[2]==='4')
                            stringNumber+=' четыре';
                        else if(String(Math.abs(answerNumber))[2]==='5')
                            stringNumber+=' пять';
                        else if(String(Math.abs(answerNumber))[2]==='6')
                            stringNumber+=' шесть';
                        else if(String(Math.abs(answerNumber))[2]==='7')
                            stringNumber+=' семь';
                        else if(String(Math.abs(answerNumber))[2]==='8')
                            stringNumber+=' восемь';
                        else if(String(Math.abs(answerNumber))[2]==='9')
                            stringNumber+=' девять';
                    }
                }
                else if(String(Math.abs(answerNumber)).length===2)
                {
                    if(String(Math.abs(answerNumber))[0]==='2')
                    stringNumber+='двадцать';
                    else if(String(Math.abs(answerNumber))[0]==='3')
                        stringNumber+='тридцать';
                    else if(String(Math.abs(answerNumber))[0]==='4')
                        stringNumber+='сорок';
                    else if(String(Math.abs(answerNumber))[0]==='5')
                        stringNumber+='пятьдесят';
                    else if(String(Math.abs(answerNumber))[0]==='6')
                        stringNumber+='шестьдесят';
                    else if(String(Math.abs(answerNumber))[0]==='7')
                        stringNumber+='семьдеcят';
                    else if(String(Math.abs(answerNumber))[0]==='8')
                        stringNumber+='восемьдесят';
                    else if(String(Math.abs(answerNumber))[0]==='9')
                        stringNumber+='девяносто';
                    else if(String(Math.abs(answerNumber))[0]==='1')
                    {
                        if(String(Math.abs(answerNumber))[1]==='0')
                            stringNumber+='десять';
                        else if(String(Math.abs(answerNumber))[1]==='1')
                            stringNumber+='одиннадцать';
                        else if(String(Math.abs(answerNumber))[1]==='2')
                            stringNumber+='двенадцать';
                        else if(String(Math.abs(answerNumber))[1]==='3')
                            stringNumber+='тренадцать';
                        else if(String(Math.abs(answerNumber))[1]==='4')
                            stringNumber+='четырнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='5')
                            stringNumber+='пятнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='6')
                            stringNumber+='шестнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='7')
                            stringNumber+='семнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='8')
                            stringNumber+='весемнадцать';
                        else if(String(Math.abs(answerNumber))[1]==='9')
                            stringNumber+='девятнадцать';
                    }
                    if(String(Math.abs(answerNumber))[0]!=='1')
                    {
                        if(String(Math.abs(answerNumber))[1]==='1')
                            stringNumber+=' один';
                        else if(String(Math.abs(answerNumber))[1]==='2')
                            stringNumber+=' два';
                        else if(String(Math.abs(answerNumber))[1]==='3')
                            stringNumber+=' три';
                        else if(String(Math.abs(answerNumber))[1]==='4')
                            stringNumber+=' четыре';
                        else if(String(Math.abs(answerNumber))[1]==='5')
                            stringNumber+=' пять';
                        else if(String(Math.abs(answerNumber))[1]==='6')
                            stringNumber+=' шесть';
                        else if(String(Math.abs(answerNumber))[1]==='7')
                            stringNumber+=' семь';
                        else if(String(Math.abs(answerNumber))[1]==='8')
                            stringNumber+=' восемь';
                        else if(String(Math.abs(answerNumber))[1]==='9')
                            stringNumber+=' девять';
                    }
                }
                else 
                {
                    if(String(Math.abs(answerNumber))[0]==='0')
                        stringNumber+='ноль';
                    else if(String(Math.abs(answerNumber))[0]==='1')
                        stringNumber+='один';
                    else if(String(Math.abs(answerNumber))[0]==='2')
                        stringNumber+='два';
                    else if(String(Math.abs(answerNumber))[0]==='3')
                        stringNumber+='три';
                    else if(String(Math.abs(answerNumber))[0]==='4')
                        stringNumber+='четыре';
                    else if(String(Math.abs(answerNumber))[0]==='5')
                        stringNumber+='пять';
                    else if(String(Math.abs(answerNumber))[0]==='6')
                        stringNumber+='шесть';
                    else if(String(Math.abs(answerNumber))[0]==='7')
                        stringNumber+='семь';
                    else if(String(Math.abs(answerNumber))[0]==='8')
                        stringNumber+='восемь';
                    else if(String(Math.abs(answerNumber))[0]==='9')
                        stringNumber+='девять';
                }
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerPhrase = (phraseRandom==1)?
                `Вы загадали число ${stringNumber.length<20?stringNumber:answerNumber}?`:
                (phraseRandom==2)?
                `Ваше число ${stringNumber.length<20?stringNumber:answerNumber}?`:
                (phraseRandom==3)?
                `Это ваше число ${stringNumber.length<20?stringNumber:answerNumber}?`:
                `Ваше число равно ${stringNumber.length<20?stringNumber:answerNumber}?`;
                answerField.innerText = answerPhrase;
            }
        }
    })

    document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun){
            const phraseRandom = Math.round( Math.random()*4);
            const answerPhrase = (phraseRandom === 1) ?
                `Ха! Игра была легкая!\n\u{1F60E}` :
                (phraseRandom==2)?
                `Я знал ответ заранее!\n\u{1F913}`:
                (phraseRandom===3)?
                `Спасибо за игру!\n\u{1F973}`:
                `Я всегда угадываю\n\u{1F60E}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        }
    })



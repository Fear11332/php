let minValue = undefined;
let maxValue = undefined;
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

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    let answerNumber  = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    let phraseRandom;
    let answerPhrase;
    phraseRandom = Math.round( Math.random()*4);
    answerPhrase = (phraseRandom==1)?
    `Вы загадали число ${answerNumber }?`:
    (phraseRandom==2)?
    `Ваше число ${answerNumber} ?`:
    (phraseRandom==3)?
    `Это ваше число ${answerNumber}?`:
    `Ваше число равно ${answerNumber}?`;
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
        answerPhrase = (phraseRandom==1)?
        `Вы загадали число ${answerNumber }?`:
        (phraseRandom==2)?
        `Ваше число ${answerNumber} ?`:
        (phraseRandom==3)?
        `Это ваше число ${answerNumber}?`:
        `Ваше число равно ${answerNumber}?`;
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        gameRun = true;
        answerNumber = Math.floor((minValue+maxValue)/2);
        orderNumberField.innerText = orderNumber;
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
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerPhrase = (phraseRandom==1)?
                `Вы загадали число ${answerNumber }?`:
                (phraseRandom==2)?
                `Ваше число ${answerNumber} ?`:
                (phraseRandom==3)?
                `Это ваше число ${answerNumber}?`:
                `Ваше число равно ${answerNumber}?`;
                answerField.innerText = answerPhrase;
            }
        }
    })

    document.getElementById('btnLess').addEventListener('click', function () {
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
                maxValue = answerNumber-1;
                answerNumber  = Math.ceil((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerPhrase = (phraseRandom==1)?
                `Вы загадали число ${answerNumber }?`:
                (phraseRandom==2)?
                `Ваше число ${answerNumber} ?`:
                (phraseRandom==3)?
                `Это ваше число ${answerNumber}?`:
                `Ваше число равно ${answerNumber}?`;
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



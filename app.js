let secretNumber;
let counter;
let numberList=[];
let numberMax = 3;

//Condiciones iniciales
function conditionInitial(){
    assignText('h1', "Secret Number");
    assignText('p',`Indica un número del 1 al ${numberMax}`);
    secretNumber = randomGenerator();
    counter = 0;
}

function assignText(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyNumber(){
    let userNumber = parseInt(document.getElementById('valueUser').value);
    counter++;
    //Usuario acertó
    if(secretNumber === userNumber){
        assignText('p',`Acertaste el número en ${counter} ${(counter > 1) ? "intentos" : "intento" }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //Usuario no acertó
        if(userNumber > secretNumber){
            assignText('p', "El número secreto es menor");
        }else{
            assignText('p', "El número secreto es mayor");
        }
        clearBox();
    }

    return;
}

function clearBox(){
    document.querySelector('#valueUser').value = '';
}

//Generar número random diferentes
function randomGenerator(){
    let number = Math.floor(Math.random()*numberMax) + 1;
    //Generamos todos los numeros del 1 al numberMax?
    if(numberList.length == numberMax){
        assignText('p',"Ya se genereron todos los números posibles")
    }
    if(numberList.includes(number)){
        return randomGenerator();
    }else{
        numberList.push(number);
        return number;
    }
    
}

function restartGame(){
    clearBox();
    conditionInitial();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}


conditionInitial();
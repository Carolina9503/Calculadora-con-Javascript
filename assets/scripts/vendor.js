const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const historialBtn = document.getElementById('btn-historial');
const numeroNueve = document.getElementById('btn-nueve');
const numeroOcho = document.getElementById('btn-ocho');
const numeroSiete = document.getElementById('btn-siete');
const numeroSeis = document.getElementById('btn-seis');
const numeroCinco = document.getElementById('btn-cinco');
const numeroCuatro = document.getElementById('btn-cuatro');
const numeroTres = document.getElementById('btn-tres');
const nuemroDos = document.getElementById('btn-dos');
const numeroUno = document.getElementById('btn-uno');
const numeroCero = document.getElementById('btn-cero');
const teclas = document.getElementsByClassName('tecla');
const resetc = document.getElementById('btn-c');
const igual = document.getElementById('btn-igual');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

numeroNueve.onclick = function(e)
{
    userInput.value = userInput.value + "9";
}
numeroOcho.onclick = function(e)
{
    userInput.value = userInput.value + "8";
}
numeroSiete.onclick = function(e)
{
    userInput.value = userInput.value + "7";
}
numeroSeis.onclick = function(e)
{
    userInput.value = userInput.value + "6";
}
numeroCinco.onclick = function(e)
{
    userInput.value = userInput.value + "5";
}
numeroCuatro.onclick = function(e)
{
    userInput.value = userInput.value + "4";
}
numeroTres.onclick = function(e)
{
    userInput.value = userInput.value + "3";
}
nuemroDos.onclick = function(e)
{
    userInput.value = userInput.value + "2";
}
numeroUno.onclick = function(e)
{
    userInput.value = userInput.value + "1";
}
numeroCero.onclick = function(e)
{
    userInput.value = userInput.value + "0";
}






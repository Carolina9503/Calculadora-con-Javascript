const historial = [];
let defaultResult = 0;
let currentResult = defaultResult;
let operacion;


function suma()
{
    calcular('suma');
}
addBtn.addEventListener('click',suma);


function resta()
{
    calcular('resta');
}
subtractBtn.addEventListener('click',resta);


function multiplicacion()
{
    calcular('multiplicacion');
}
multiplyBtn.addEventListener('click',multiplicacion); 


function division()
{
    calcular('division');
}
divideBtn.addEventListener('click',division); 


function arregloHistorial()
{
    alert(historial);
}
historialBtn.addEventListener('click',arregloHistorial);

function calcular(operador)
{
    if(operador === 'suma')
    {
        currentResult =  currentResult + parseInt(userInput.value);
    }else if(operador === 'resta')
    {        
        currentResult = currentResult - parseInt(userInput.value);

    }else if (operador === 'multiplicacion')
    {
        currentResult = currentResult * parseInt(userInput.value); 

    }else if(operador === 'division')
    {
        currentResult = currentResult / parseInt(userInput.value);
    }
    outputResult(currentResult, currentResult);
    userInput.value = '';
}
igual.onclick = function(e)
{
   userInput.value = currentResult;
}





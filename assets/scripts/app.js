const historial = [];
let defaultResult = 0;
let currentResult = defaultResult;
let operacion = 0;



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
        userInput.value += "+"  ;
    }else if(operador === 'resta')
    {        
        userInput.value += "-"  ;

    }else if (operador === 'multiplicacion')
    {
        userInput.value += "*"  ;

    }else if(operador === 'division')
    {
        userInput.value += "/"  ;
    }
    outputResult(currentResult, currentResult);
    
}

igual.onclick = function(e)
{
   userInput.value = eval(userInput.value);
}





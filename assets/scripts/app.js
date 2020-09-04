const historial = [];
let defaultResult = 0;
let currentResult = defaultResult;
let operacion = 0;



addBtn.addEventListener('click',function(){
    calcular('suma');
});

subtractBtn.addEventListener('click',function(){
    calcular('resta');
});

multiplyBtn.addEventListener('click',function(){
    calcular('multiplicacion');
}); 

divideBtn.addEventListener('click',function(){
    calcular('division');
}); 


function arregloHistorial()
{
    alert("Los resultados almacenados son: " + historial);
}
historialBtn.addEventListener('click',arregloHistorial);

function calcular(operador)
{
    switch (operador)
    {
        case 'suma':
            userInput.value += "+"  ;
            break;
        case 'resta':
            userInput.value += "-"  ;
            break;
        case 'multiplicacion':
            userInput.value += "*"  ;
            break;
        case 'division':
            userInput.value += "/"  ;
            break;    

    }
   
    outputResult(currentResult, currentResult);
    
}
igual.onclick = function()
 {
     if(!isNaN(userInput.value.charAt(userInput.value.length-1)))
     {
        userInput.value = eval(userInput.value);
        historial.push(userInput.value);
     }else
     {
         alert("El ultimo valor no es un numero");
         userInput.value = "";
     }
}

resetc.onclick = function()
{
    userInput.value = "";
}





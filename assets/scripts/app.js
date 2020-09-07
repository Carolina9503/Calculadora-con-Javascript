
//innerText me trae el texto que esta entre el boton; Array.prototype.forEach.call(teclas, (tecla) toma la lista y la deja navegar
Array.prototype.forEach.call(teclas, (tecla) =>
{
    tecla.onclick = () => 
    {
        userInput.value += tecla.innerText;
    };   
});

historialBtn.onclick = () => alert("Los resultados almacenados son: " + historial);

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

resetc.onclick = ()=> userInput.value = "";





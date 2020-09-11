
//innerText me trae el texto que esta entre el boton; Array.prototype.forEach.call(teclas, (tecla) toma la lista y la deja navegar
for (const tecla of teclas) 
{
    tecla.onclick = () => 
    {
        userInput.value += tecla.innerText;
    };   
};

historialBtn.onclick = () =>{
    cambiarColor()
    alert("Los resultados almacenados son: " + historial);
} 

igual.onclick = function()
 {
     if(!isNaN(userInput.value.charAt(userInput.value.length-1)))
     {
        userInput.value = eval(userInput.value);
        historial.push(userInput.value);
     }else
     {
         alerta();
         userInput.value = "";
     }
}

resetc.onclick = ()=> userInput.value = "";

function alerta()
{
    window.confirm("El ultimo valor no es un numero");
}

function cambiarColor(){
    let calc = document.getElementById('results');
    let hijos = calc.children;
    for(let i= 0; i<hijos.length; i++){
       hijos[i].style.backgroundColor = "#4285f4"
    }
    
}

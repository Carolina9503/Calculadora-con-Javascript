
//innerText me trae el texto que esta entre el boton; Array.prototype.forEach.call(teclas, (tecla) toma la lista y la deja navegar
let esCientifica = false;
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
// codigo para agregar nodos en este caso se agrego un array de botones
function calculadoraCientifica(botones,elementoPadre)
{
    // if( esCientifica === false)
    // { 
        
        let elemento = document.getElementById(elementoPadre);
        for (let i = 0; i < botones.length; i++) {
            let boton = document.createElement('button');
            boton.innerText = botones[i];
            elemento.appendChild(boton);
            
        }   
        
        // esCientifica = true;
    // }else
    // {
    //     location.reload();
    // } 
    
}
function cambiarCalculadoraCientifica()
{
    let botones = ['Pi','i','e'];
    calculadoraCientifica(botones,'calc-actions1');

   botones = ['sen','cos','tan'];
    calculadoraCientifica(botones,'calc-actions2');

   botones = ['exp','log','In'];
    calculadoraCientifica(botones,'calc-actions3');

    botones = ['base','asin','acos'];
    calculadoraCientifica(botones,'calc-actions4');
}

calculadoraCient.addEventListener('click',cambiarCalculadoraCientifica);


// codigo para eliminar nodos en este caso se elimino un <P id="parrafo">
// La propiedad parentNode es para acceder al padre
function eliminarNodos()
{
    let texto = document.getElementById('parrafo');
    texto.parentNode.removeChild(texto);

}
eliminarNodo.onclick = () => eliminarNodos();




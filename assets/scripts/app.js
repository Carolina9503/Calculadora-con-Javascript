
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
function calculadoraCientifica()
{
    if( esCientifica === false)
    { 
        let botones = ['Pi','i','e'];
        let elemento = document.getElementById('calc-actions1');
        for (let i = 0; i < botones.length; i++) {
            let boton = document.createElement('button');
            boton.innerText = botones[i];
            elemento.appendChild(boton);
            
        }       
        esCientifica = true;
    }else
    {
        location.reload();
    } 
    
}
calculadoraCient.addEventListener('click',calculadoraCientifica);


// codigo para eliminar nodos en este caso se elimino un <P id="parrafo">
// La propiedad parentNode es para acceder al padre
function eliminarNodos()
{
    let texto = document.getElementById('parrafo');
    texto.parentNode.removeChild(texto);

}
eliminarNodo.onclick = () => eliminarNodos();


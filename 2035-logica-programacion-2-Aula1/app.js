let numeroSecreto=0;
let intentos =0;
let listaNumerosSorteados=[];
let numeroMaximo=10

function asignarTextoElemento(elemento, texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
return;
}

function verificarIntento(){
let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
console.log (numeroSecreto);
if (numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos == 1)?'vez':'veces'}`)
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    // El usuario no acerto
    if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor')

    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor')

    }
    intentos++;
    limpiarCaja();
} 
 return;
}

function limpiarCaja() {
 document.querySelector('#valorUsuario').value= '';
}
console.log (listaNumerosSorteados);


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado)
    console.log (listaNumerosSorteados)
    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya sorteamos todos los numeros posibles')
    }else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto()
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }}}
function condicionesIniciales(){
asignarTextoElemento('h1', 'Juego del numero secreto!')
asignarTextoElemento('p', `Indica un numero del uno al ${numeroMaximo}`)
numeroSecreto=generarNumeroSecreto();
intentos=1
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intetnos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}
condicionesIniciales();
console.log(numeroSecreto);
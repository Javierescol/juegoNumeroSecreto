let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `"Acertaste el Numero Secreto en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        console.log('Acertaste el número!');
            document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento ('p', 'El Numero secreto es menor');
            } 
        else  {
            asignarTextoElemento ('p', 'El Numero Secreto es Mayor');
        }
    intentos ++;
    limpiarCaja ();
    }
    return;
}
function limpiarCaja () {
        document.querySelector ('#valorUsuario').value = "";

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se Sortearon todos los numeros posibles');
    } else {

    if (listaNumerosSorteados.includes (numeroGenerado)) {
        return generarNumeroSecreto ();
    } else {
        listaNumerosSorteados.push (numeroGenerado);
        return numeroGenerado;
    }
}}
function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego () {
//limpiar la caja
limpiarCaja ();
//indicar mensaje de intervalo de numeros
//generar numero aleatorio
//inicializar numero de intentos
condicionesIniciales ();
//deshabilitar el boton de nuevo juego
document.querySelector ('#reiniciar').setAttribute ('disabled','true');
}
 condicionesIniciales();

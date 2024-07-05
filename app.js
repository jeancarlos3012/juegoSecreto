let numeroSecreto =0;
let intentos=1;
let listaNumeroSorteado = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let titulo=document.querySelector(elemento);
    titulo.innerHTML=texto;
    return
}
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        
        intentos++;
        limpiarCaja();

    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
   
}

function generadorNumeroSecreto(){
        let numeroGenerado =Math.floor(Math.random()*numeroMaximo)+1;
        //si el numero generado esta en la lista 
        console.log(numeroGenerado);
        console.log(listaNumeroSorteado);
        if (listaNumeroSorteado.length == numeroMaximo){
            asignarTextoElemento('p','Ya se sortearon todos los numero posibles');
        }else{

        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generadorNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto'),
    asignarTextoElemento('p','Indicar el numero del 1 al 10');
    numeroSecreto=generadorNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indiacr mensaje
    //Generar numero aleatorio
    condicionesIniciales();
    //Inicializar numero de intentos
    
    //Deshabilitar el boton de nuevo juego
    //Inicializar el numero intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

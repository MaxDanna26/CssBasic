// Posibles palabras
let palabras = ['javascript', 'international', 'programming', 'developer', 'web', 'drugs', 'world', 'word'];

// Numero random para que la maquina escoja un numero
let randomNumber = Math.floor(Math.random() * palabras.length);
console.log(randomNumber);
let palabraSeleccionada = palabras[randomNumber];

// Llenamos la interfaz con la misma cantidad de espacios vacios que de longitud de la palabra seleccionada
let palabraSecreta = Array(palabraSeleccionada.length).fill('_');
let espacioRellenar = document.getElementById('espacioToFill');

// Pintamos la interfaz
function actualizarInterfaz() {
    espacioRellenar.innerText = '';
    for (let i = 0; i < palabraSecreta.length; i++) {
        espacioRellenar.innerText += ' ' + palabraSecreta[i];
    }
}

actualizarInterfaz();

let letrasErroneas = [];
let espacioLetrasErroneas = document.getElementById('letrasWrong');

// Boton de usuario
let btnRonda = document.getElementById('ronda');
btnRonda.addEventListener('click', Comprobacion);

function Comprobacion() {
    let inputLetras = document.getElementById('letrasErroneas');
    let letraRonda = inputLetras.value;
    console.log(letraRonda);

    let letraEncontrada = false;

    for (let i = 0; i < palabraSeleccionada.length; i++) {
        if (letraRonda === palabraSeleccionada[i])
        {
            palabraSecreta[i] = letraRonda;
            letraEncontrada = true;
        }
    }
    
    if (!letraEncontrada) 
    {
        letrasErroneas.push(letraRonda);
        espacioLetrasErroneas.innerText = letrasErroneas.join(' ').toLocaleUpperCase();
    }

    actualizarInterfaz();
}

let insertPalabra = document.getElementById("insertWord");
let btnInsertar = document.getElementById("btnInsertar");



btnInsertar.addEventListener('click', InsertarWord);

function InsertarWord()
{
    let newPalabra = insertPalabra.value.toString();
    palabras.push(newPalabra);
}

console.log(palabras);




/**
 *  2C = Two of clubs (Tréboles)
 *  2D = Two od Diamonds (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two od Spades (Espadas)
 */

let deck         = []; // Cartas a utilizar
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K']; 

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const LabelPuntosHTML = document.querySelectorAll('small');


// Esta función crea un nuevo deck o baraja de cartas.
const crearDeck = () => {

    // Crea las cartas del 2 al 10 con los diferentes tipos(corazon, diamantes, treboles...)
    for( let i = 2; i <= 10; i++) {
        for( let tipo of tipos  ){
            deck.push( i + tipo );          
        }
    }

    // Crea las cartas de especiales
    for( let tipo of tipos ){
        for( let especial of especiales ){
            deck.push( especial + tipo );
        }
    }

    // Organiza las cartas de forma randow
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}

crearDeck();


// Esta función me permite tomar una carta
const pedirCarta = () => {

    if( deck.length === 0 )
    {
        throw 'No hay mas cartas en el deck'; // Mensaje de alerta que se han agotado las cartas
    }

    const carta = deck[Math.floor(Math.random() * deck.length)]; // seleccionamos un dato randow del arreglo.
    // console.log(carta);
    
    deck = deck.filter((i) => i !== carta); // filtramos
    // console.log(deck);

    return carta;
}


// pedirCarta();

const valorCarta = ( carta ) => {

    // const valor = carta[0];// Los string se pueden manejar como arrays en JS
    const valor = carta.substring(0, carta.length - 1); // corta el string sin tomar la ultima letra.
    
    //let puntos = 0;
    // 2 = 2,  10 = 10, 3 = 3
    // if( isNaN( valor ) ){ // isNaN = evalua si el tipo de dato es numero o no.
    //     puntos = ( valor === 'A' ) ? 11 : 10;
    // }else {
    //     console.log('Es un numero');
    //     puntos = valor * 1;// Transformar un string a numero
    // }

    // Estrucutras de control simplificada
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1;
}



// Eventos 
btnPedir.addEventListener( 'click',() => {

    const carta = pedirCarta();

    puntosJugador += valorCarta( carta );
    LabelPuntosHTML[0].innerText = puntosJugador;

    // <!-- <img class="carta" src="./cartas/10C.png" alt=""> -->
    const imgCarta = document.createElement('img');//Crear una imagen
    imgCarta.src =`./cartas/${ carta }.png`; //muestra la carta escogida.
    imgCarta.classList.add( 'carta' );
    divCartasJugador.append( imgCarta ); // Insertamos carta en el html seleccionada


} ) // Calback es una función que se envia como argumento.
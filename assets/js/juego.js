/**
 *  2C = Two of clubs (Tréboles)
 *  2D = Two od Diamonds (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two od Spades (Espadas)
 */

let deck         = []; // Cartas a utilizar
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K']; 

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
    console.log(carta);
    
    deck = deck.filter((i) => i !== carta); // filtramos
    console.log(deck);

    return carta;
}


// pedirCarta();

const valorCarta = ( carta ) => {

    const valor = carta[0];// Los string se pueden manejar como arrays en JS
    console.log(valor);
}

valorCarta( '2D' );
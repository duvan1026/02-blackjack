/**
 *  2C = Two of clubs (Tréboles)
 *  2D = Two od Diamonds (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two od Spades (Espadas)
 */

let deck         = []; // Cartas a utilizar
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K']; 

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
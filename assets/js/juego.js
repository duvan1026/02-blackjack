

/**
 * Son funciones anonimas auto-invocadas
 * 
 * // (function(){
 * // })();
 * 
 * or
 * 
 * // ( ()=>{
 * // })()
 */ 
/*************Patron Modulo**************
* No se puede acceder desde el navegador, porque se encuentra
* ubicado en algun lugar de memoria sin un identificador por nombre
*/
(() => {
    'use strict'// JavaScript es estricto a la hora de evaluar el codigo.

    // const personajes = ['Ana', 'Mercy', 'Mei'];
    // console.log( personajes );
    
    let deck         = []; // Cartas a utilizar
    const tipos      = ['C','D','H','S'];
    const especiales = ['A','J','Q','K']; 

    let puntosJugador = 0,
        puntosComputadora = 0;

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugador      = document.querySelector('#jugador-cartas');
    const divCartasComputadora  = document.querySelector('#computadora-cartas');

    const LabelPuntosHTML  = document.querySelectorAll('small');


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


    // Turno de la Computadora
    const turnoComputadora = ( puntosMinimos ) => {

        do{

            const carta = pedirCarta();

            puntosComputadora += valorCarta( carta );
            LabelPuntosHTML[1].innerText = puntosComputadora;

            // <!-- <img class="carta" src="./cartas/3C.png" alt=""> -->
            const imgCarta = document.createElement('img');//Crear una imagen
            imgCarta.src =`./cartas/${ carta }.png`; //muestra la carta escogida.
            imgCarta.classList.add( 'carta' );
            divCartasComputadora.append( imgCarta ); // Insertamos carta en el html seleccionada

            if( puntosMinimos > 21 ){
                break;
            }

        } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout( () => {

            if ( puntosComputadora === puntosMinimos ){
                alert('Nadie gana :c');
            }else if ( puntosMinimos > 21 ){
                alert('Computadora gana');
            }else if( puntosComputadora > 21 ){
                alert('Jugador Gana');
            }else {
                alert('computadora gana');
            }
        }, 100 );
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

        if ( puntosJugador > 21 )
        {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true; // deshabilita el boton
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ){
            console.warn('21, genial');
            btnPedir.disabled = true; // deshabilita el boton
            btnDetener.disabled = true;
        }

    }); // Calback es una función que se envia como argumento.


    // Evento boton Detener
    btnDetener.addEventListener('click', () => {
        // console.log('Click boton detener');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    });

    // Evento boton Nuevo
    btnNuevo.addEventListener( 'click', () => {

        deck = [];
        deck = crearDeck();

        puntosJugador = 0,
        puntosComputadora = 0;

        LabelPuntosHTML[0].innerText = 0;
        LabelPuntosHTML[1].innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    });


})();







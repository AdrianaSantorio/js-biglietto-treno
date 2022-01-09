console.log('JS OK!')

/*
Il programma dovrà chiedere all' utente il numero di chilometri che vuole percorrere e l' età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-Il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65
-L' output del prezzo finale va messo fuori in forma umana, ossia con massimo due decimali, per indicare i centesimi sul prezzo
*/

/*
1-chiedere il numero di chilometri
2-chiedere l' età del passeggero
3-calcolare il prezzo del biglietto
4-calcolare eventuali sconti
5-stampare il risultato in pagina
*/

//1

const tripLength = parseInt(prompt('Inserire la lunghezza del viaggio in Chilolometri', '321').trim());
console.log(tripLength);

//2

const passengerAge = parseInt(prompt("Inserire l' età del passeggero'", '25').trim());
console.log(passengerAge);

//validazione

if (isNaN(tripLength)) {
    alert('Prego inserire un valore numerico per indicare la lunghezza del viaggio in chilometri');
} else if (isNaN(passengerAge)){
    alert("Prego inserire un valore numerico per indicare l'età del passeggero")
} else {

    //3

    let ticketPrice = (tripLength / 100 * 21).toFixed(2);
    console.log(ticketPrice);

    //4

    if (passengerAge < 18) {
        ticketPrice = (ticketPrice / 100 * 80).toFixed(2);
    } else if (passengerAge >= 65) {
        ticketPrice = (ticketPrice / 100 * 60).toFixed(2);
    }

    console.log(ticketPrice);

    //5

    const ticketPriceElement = document.getElementById('ticket-price');
    ticketPriceElement.innerText = (`Il prezzo del tuo biglietto per percorrere ${tripLength} chilometri è ${ticketPrice}€.`);
}
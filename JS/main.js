/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

const nameUser = prompt('Gentilmente inserisca il suo nome');
console.log(nameUser);

const ageUser = prompt('Gentilmente inserisca la sua età');
console.log(ageUser);


const travelDistance = parseInt (prompt('Gentilmente inserisca il numero di chilometri della sua corsa'));
console.log(travelDistance);

let ticketCost = (travelDistance * 0.21);
console.log(ticketCost);

if (ageUser <= 17){
    ticketCost = ((ticketCost / 100) * 20);
    document.getElementById('sconto').innerHTML = 'Complimenti per essere così giovane, le abbiamo applicato uno sconto del 20%';
}else if (ageUser >= 65){
    ticketCost = ((ticketCost / 100) * 40);
    document.getElementById('sconto').innerHTML = 'Complimenti per essere così grande ed avere ancora la pazienza di utilizzare i nostri servizi, le abbiamo applicato uno sconto del 40%';
}

console.log(ticketCost);

ticketCost = ticketCost.toFixed(2);
console.log(ticketCost);

document.getElementById('prezzo').innerHTML= 'Il prezzo del biglietto è di: ' + ticketCost + ' € ' ;




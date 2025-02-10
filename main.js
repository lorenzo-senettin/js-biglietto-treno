// Chiedi all'utente il numero di chilometri e l'età del passeggero
const distance = parseFloat(prompt("Quanta distanza vuoi fare in kilometri? esempio:[15]"));
const age = parseInt(prompt("Quanti anni hai? esempio:[25]"));

// Costo standard del biglietto per ogni kilometro [espresso in euro]
const price_distance = 0.21;

//Calcola il prezzo del biglietto in base ai chilometri
let price = distance * price_distance;
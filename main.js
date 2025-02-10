// Chiedi all'utente il numero di chilometri e l'età del passeggero
const distance = parseFloat(prompt("Quanta distanza vuoi fare in kilometri? esempio:[15]"));
const age = parseInt(prompt("Quanti anni hai? esempio:[25]"));


// Costo del biglietto per ogni kilometro [espresso in euro]
const price_distance = 0.21;


//Calcola il prezzo del biglietto in base ai chilometri
let price = distance * price_distance;


//Calcola il prezzo del biglietto con variazioni di prezzo
if (age < 18) { //Prezzo per persone con meno di 18 anni
  price *= 0.8;
}
if (age > 65) { //Prezzo per persone con più di 65 anni
  price *= 0.6;
}
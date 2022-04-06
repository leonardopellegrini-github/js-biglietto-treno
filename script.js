/*

1. chiedere età passeggero
2. chiedere chilometri che deve fare
3. moltiplicare i km per 0.21 euro
4. SE minorenni 20% di sconto
5. SE over 65 40% di sconto 
6. 
6. stampa il risultato

*/

// chiedere età del passeggero

const eta = prompt ("Quanti anni hai?");

// chiedere chilometri che deve fare

const km = prompt ("Quanti km devi fare?");

// moltiplicare i km per 0.21 euro

let km_price = km * 0.21;

// SE minorenni 20% di sconto

if (eta < 18) {
  km_price = km_price - ((km_price * 20) / 100);
}

// SE over 65 40% di sconto 

if (eta > 65) {
  km_price = km_price - ((km_price * 40) / 100);
}

// STAMPA DEL PREZZO 

let num = km_price.toFixed(2);

document.getElementById('km_price').innerHTML = num;
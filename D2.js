/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function trovaNumeroMaggiore (a, b) {
  if (a > b) {
    return a;
} else {
  return b;
  }
}

let numero1= 10;
let numero2= 20;

let numeroMaggiore = trovaNumeroMaggiore(numero1, numero2);
console.log('Il numero maggiore è:'+ numeroMaggiore);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function controllaNumero(numero) {
  if (numero !== 5) {
    console.log('not equal');
  }
}

let numeroDaControllare = 7;
controllaNumero(numeroDaControllare);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function controllaDivisibilità(numero) {
  if (numero % 5 === 0) {
    console.log('divisibile per 5');
  }
}

let numeroDaVedere = 15;
controllaDivisibilità(numeroDaVedere);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verifcaValore(_numero1, _numero2) {
  if (_numero1 === 8 || _numero2 === 8 || _numero1 + _numero2 === 8 || _numero1 - _numero2 === 8) {
    console.log('Condizione verificata');
  }
}

let _numero1 = 3;
let _numero2 = 5;
verifcaValore(_numero1, _numero2);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function calcolaTotalCheckout(totalShoppingCart) {
  let costoSpedizione = 10;

  if (totalShoppingCart > 50) {
  costoSpedizione = 0;   /*spedizione gratuita*/
}

let totaleCheckout = totalShoppingCart + costoSpedizione;
return totaleCheckout;
}

let totalShoppingCart = 60;

let totaleCheckout = calcolaTotalCheckout(totalShoppingCart);
console.log('Totale Checkout:' + totaleCheckout);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
function calcolaTotalCheckout(totalShoppingCart) {
  let costoSpedizione = 10;

  if (totalShoppingCart > 50) {
  costoSpedizione = 0; 
}

if (blackFriday) {
  let sconto = totalShoppingCart * 0.2;
  totalShoppingCart -= sconto;
}

let totaleCheckout = totalShoppingCart + costoSpedizione;
return totaleCheckout;
}

let totalShoppingCart = 60;
let blackFriday = true;

let totaleCheckout = calcolaTotalCheckout(totalShoppingCart, blackFriday);
console.log('Totale Checkout:' + totaleCheckout); 
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numero3 = 8;
let numero4 = 3;
let numero5 = 11;

if (numero3 >= numero4 && numero3 >= numero5) {
  if (numero4 >= numero5) {
    console.log(numero3, numero4, numero5);
  } else {
    console.log(numero3, numero5, numero4);
  }
} else if (numero4 >= numero3 && numero4 >= numero5) {
  if (numero4 >= numero5) {
    console.log(numero4, numero3, numero5);
  } else {
    console.log(numero4, numero5, numero3);
  }
} else {
  if (numero3 >= numero4) {
    console.log(numero5, numero3, numero4);
  } else {
    console.log(numero5, numero4, numero3)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function verificaNumero(valore) {
  if (typeof valore === 'number') {
    console.log('Il valore è un numero.');
  } else {
    console.log('Il valore non è un numero.');
  }
}

let valore1 = 42;
let valore2 = 'Hello';

verificaNumero(valore1); /*Output: il valore è un numero*/
verificaNumero(valore2); /*Output: il valore non è un numero*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function verificaPariDispari(numero) {
  if (numero % 2 === 0) {
    console.log('Il numero è pari.')
  } else {
    console.log('Il numero è dispari.')
  }
}

let _numero3 = 6;
let _numero4 = 7;

verificaPariDispari(_numero3); /*Output: il numero è pari*/
verificaPariDispari(_numero4); /*Output: il numero è dispari*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
  console.log('Meno di 5');
} else if (val < 10) {
  console.log('Meno di 10');
} else {
  console.log('Uguale a 10 o maggiore');
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

const obj = {
  name: 'John',
  lastname: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
};

delete obj.lastname;
console.log(obj);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const you = {
  name: 'John',
  lastname: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
};

delete you.skills;
console.log(you);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numeri= [];
for (let i = 1; i <= 10; i++) {
  numeri.push(i);
}
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

const _numeri= [];
for (let i = 1; i <= 10; i++) {
  _numeri.push(i);
}
_numeri[_numeri.length - 1] = 100;
console.log(_numeri);


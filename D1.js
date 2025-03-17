/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*Dobbiamo immaginare i Data Types in JavaScript come delle scatoline di carta in cui possiamo mettere vari giocattoli.
 Su ogni scatola attacchiamo un’etichetta con il nome, e questo nome ci dirà cosa contiene quella scatolina.

Esempio:
In una scatola chiamata "Nome", possiamo mettere il nome di una persona, ad esempio "Alfonso", oppure il nome di un giocattolo, come "Topolino".
 In questo modo, sappiamo che nella scatola etichettata come "Nome" troveremo un nome.
 Dentro le scatole possiamo mettere diversi tipi di oggetti:
-Nomi
-Numeri
-Scatole vuote (intenzionalmente o perché ancora non abbiamo messo nulla dentro)
-------------------------------------
-----Tipi di dati in JavaScript:-----

1. Stringhe (String) – Sono parole o sequenze di caratteri racchiuse tra virgolette.
Esempio:
----
let nome = "Eduardo";  
let giocattolo = "Robot2";  
----
Qui abbiamo due scatole:
La scatola "nome" contiene "Eduardo"
La scatola "giocattolo" contiene "Robot2"
-------------------------------------
2.Numeri (Number) – Sono valori numerici, interi o decimali.
Esempio:
----
let eta = 23;  
let voto = 8.5;
----
Qui:
La scatola "eta" contiene il numero 23
La scatola "voto" contiene il numero 8.5
------------------------------------
3.Valore non definito (undefined) – Quando creiamo una scatola ma non ci mettiamo nulla dentro.
Esempio:
----
let cognome;  
console.log(cognome); // undefined
----
Qui la scatola "cognome" esiste, ma è vuota.
-------------------------------------
4.Boolean (Vero o Falso) – Possiamo chiedere se un certo valore è dentro una scatola.
Esempio:
----
let nome = "Monica";  
console.log(nome === "Eduardo"); // false  
console.log(nome === "Monica");  // true  
----
Se chiediamo "Monica è dentro la scatola 'nome'?", la risposta sarà true (vero).
Se chiediamo "Eduardo è dentro la scatola 'nome'?", la risposta sarà false (falso).
--------------------------------------
5.Scatola svuotata di proposito (null) – È come quando finiamo tutti i dolci in una scatola e vogliamo indicare che ora è vuota.
Esempio:
----
let caramelle = null;  
console.log(caramelle); // null
----
Qui la scatola "caramelle" esiste, ma l’abbiamo svuotata apposta.

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let myName = "Nicolae"; */
/* console.log(myName);*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;
console.log(somma);
let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Loboda";
console.log(myName);

/* D1.js:68 Uncaught SyntaxError: Identifier 'myName' has already been declared (at D1.js:68:5)
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let risultato = x - 4;
console.log(risultato);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john";
const name2 = "John";

console.log(!(name1 === name2)); // trasformazione in true.

let diversi = name1 !== name2; // true
console.log(diversi);

console.log(name1 === name2); // comparazione diretta true

let uguali = name1.toLowerCase() === name2.toLowerCase(); // trasformate in lowercase per risultato true
console.log(uguali);

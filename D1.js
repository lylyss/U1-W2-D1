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

/* "Dobbiamo immaginare i Datatype in JavaCript sono come delle scatoline di carta dove poi mettre vari giovattoli e su ogni scattola gli atachiamo un eticheta con il nome, il nome dira che cosa sta dentro questa scatolina"
"ESEMPIO: in una scatola che la chimiamo 'Nome' mettiamo dentro il tuo nome 'Alfonso' opure il nome del giocattolo, e cosi sapiamo che nella scatola etichetata con il nome troveremo un il nome Alfonso o Valerio, Topolino e cosi via"
"Dentro le scatole possiamo mettere piu tipi di ogetti non solo giocatoli o nomi ma anche numeri o puo essere anche vuota di proposito opure intenzionalmente la svuotiamo "
"ESEMPIO:
scatola con i nomi avrano dentro lettre e anche cifre ("Eduardo", "Topolino", "Robot2", "23", "234") che sranno appesa dalle due virgolete sopra come mollette ("Zio") e li chiameremmo queste mollette Stringhe.
scatola con i numeri dove conterrano numeri ( 0, 1, 20, 1.5, 5.5) con il tipo di ogetti Nuber, e non avranno bisogno di molette perche le useremo come cifre per dare un valore di una nota a scuola.
le scatole possono essere vuote o piene e per sapere cosa ce dentro possiamo chiedere se ce qualcosa dentro,
ESEMPIO:
------
-let nome = "Monica";
-let cognome ;
------
Chiediamo cosa c'e dentro alla scatola con i nomi, chediamo se ce "Eduardo" o "Antonio" e ci dira che non c'e, e ci dira la risposta "false" falso! perche dentro la scatola nome ce "Monica" 
ma se avessimo chiesto di Monica alora ci avrebbe detto "true" vero! dentro la scatola ce il nome Monica!
quando chediamo se c'e qualcosa dentro alla scatola cognome ci dira che non c'e nulla e ci dira '// undefined'
se invece la svuotiamo noi di proposito come quando magiamo tutti i dolci da una scatola e diacimao che e vuota allora scriviamo

-let dolci = null; 
per che rimane nulla .

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
console.log(!(name1 === name2));

let diversi = name1 !== name2;
console.log(diversi);

console.log(name1 === name2);

let uguali = name1.toLowerCase() === name2.toLowerCase();
console.log(uguali);

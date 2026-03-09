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

/* SCRIVI QUI LA TUA RISPOSTA 
 Esistono 5 tipi diversi di datatype presenti in Javascript:
 -number: ovvero tutti i tipi di numeri (interi, decimali, negativi); let numero = 1;
 -string: ovvero i testi, le parole; let parola = "ciao";
 -boolean: comprendono solo due valori, ovvero true e false; let isTrue = true; 
 -undefined: ovvero un valore non definito. la variabile ha valore, ma non è definito; let variabile;
 -null: ovvero una variabile che non ha valore; let variabile = null;
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/
 let myName = "Niccolò";
 console.log("Questo è il mio nome:", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/
let firstNumber = 12;
console.log("Questo è il primo numero:", firstNumber);

let secondNumber = 20;
console.log("Questo è il secondo numero:", secondNumber);

let sum = firstNumber + secondNumber;
console.log("Questa è la somma tra i due numeri:", sum);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log("Questo è il valore di x:", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Sciucco";
console.log("Questo è il nuovo valore della variabile myName: " + myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 4;
let sub = numero - x;
console.log("Questa è la differenza tra 4 e la variabile x:", sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
console.log("Questo è il primo nome: ", name1);

let name2 = "John";
console.log("Questo è il primo nome: ", name2);

let isTheSameName = name1 === name2;
console.log("Sono lo stesso nome? ", isTheSameName);

isTheSameName = name1 === name2.toLocaleLowerCase();
console.log("Sono lo stesso nome? ", isTheSameName);


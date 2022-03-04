//PALINDROMA:
//A) chiedere all'utente di inserire una parola
//B) dobbiamo crearci una funzione che ci permetta di capire se la parola inserita dall'utente sia polindroma o no, se è si allora 
// avremo un return true se non lo è avremo un return false 




const parola = prompt("inserire una parola") 


function polindroma(word){                          
    // 1. generiamo parola inversa
    let string= "";                                                          //assegniamo variabile stringa vuota
    for (i = word.length -1; i >= 0 ;i--){                              // con il ciclo for mi vado a prendere la parola  e la decremento di 1 
         console.log(parola.charAt(i))  
         string = string + word.charAt(i) 
         console.log (s) 
     } 

    // 2. confrontiamo la parola con la parola inversa
         if(word == string){
            return "la parola è polindroma"
        }else{
            return "la parola non è polindroma"
       }
} 

let risultato = polindroma(parola);                 
console.log(risultato);  









/* 
2) pari e dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.  */


const utente = "";

while
    ( utente == "pari" && utente == "dispari"){
        utente = prompt("inserire se è pari o dispari").trim();
}

let userNumber = 0;
while ((userNumber < 1 || userNumber > 5) || isNaN(userNumber)){
    userNumber =  parseInt(prompt("inserisci un numero da 1 a 5"));
}

const aInumber = randomInte(1,5); 
console.log( aInumber);
const sum = aInumber + userNumber;
/* console.log(isEven(sum)); */


if ( (utente == "pari" && isEven(sum)) ||
    ( utente == "dispari" && !isEven(sum))){
        console.log ("hai vinto")
    } else{
        console.log ("hai perso")
    }

 

 function randomInte(minValue, maxValue){
    if (isNaN (parseInt(minValue)) || isNaN(parseInt(maxValue))){
        console.error("randomInte(min,max) ha bisogno di due numeri come argomento");
        return (Math.floor(Math.random() *((maxValue + 1) - minValue) + minValue))
    }
 }
 




function isEven(number){
    return(number % 2=== 0)
    
}












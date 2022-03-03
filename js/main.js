//PALINDROMA:
//A) chiedere all'utente di inserire una parola
//B) dobbiamo crearci una funzione che ci permetta di capire se la parola inserita dall'utente sia polindroma o no, se è si allora 
// avremo un return true se non lo è avremo un return false 




const parola = prompt("inserire una parola") 

function polindroma(word){
    // 1. generiamo parola inversa
    let s= "";
    for (i = word.length -1; i >= 0 ;i--){
        /* console.log(parola.charAt(i))  */
        s = s + word.charAt(i)
        /* console.log (s) */
    }

    // 2. confrontiamo la parola con la parola inversa
        if(word == s){
            return "la parola è polindroma"
        }else{
            return "la parola non è polindroma"
        }
}

let risultato = polindroma(parola);
/* console.log(polindroma(parola)); */



/* let ciao = "ciao"
let s="";
s += ciao.charAt(3); // "o"
s += ciao.charAt(2) // "oa"
s += ciao.charAt(1) // "oai"
s += ciao.charAt(0) //"oaic" */









/* 2) pari e dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */
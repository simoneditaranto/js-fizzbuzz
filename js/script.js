// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creo una "lista" dei numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    
    if(i % 3 == 0 && i % 5 == 0) {
        // se "i" è divisibile sia per 3 che per 5
        console.log("FizzBuzz");
    } else if(i % 3 == 0){
        // se "i" è divisibile solo per 3
        console.log("Fizz");
    } else if(i % 5 == 0){
        // se "i" è divisibile solo per 5
        console.log("Buzz");
    } else {
        // se "i" non è divisibile ne per 3 ne per 5
        console.log(i);
    }

}
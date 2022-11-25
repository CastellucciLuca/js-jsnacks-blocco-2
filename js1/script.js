//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.
const number = [];

let userNumber;

for (let i = 0 ; i < 6 ; i++){
    userNumber = parseInt(prompt("Insert Number"));
    if (userNumber % 2 == 1){
        number.push(userNumber);
    }
}
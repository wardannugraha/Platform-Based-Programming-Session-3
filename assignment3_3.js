// Pemrograma Berbasis Platform
// Wardan Nugraha Ahmad (20230040071) - TI23T
// Assignment Session 3 no 3

let prompt = require('prompt-sync')()

let jersey_number = Number(prompt("Input Jersey Number : "));

console.log(`\nThe position of player number ${jersey_number} is :`)

if(jersey_number %2 == 0 ){
    console.log("Target Attacker")
}if(jersey_number %2 == 0 && jersey_number >= 50 && jersey_number <= 100){
    console.log("Have the right to be chosen as team captain")
}if(jersey_number %2 == 1 ){
    console.log("Defender")
}if(jersey_number %2 == 1 && jersey_number >= 90){
    console.log("Playmaker")
}if(jersey_number %2 == 1 && jersey_number % 3 == 0 || jersey_number % 5 == 0){
    console.log("Keeper")
}
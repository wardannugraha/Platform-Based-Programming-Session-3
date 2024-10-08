// Pemrograma Berbasis Platform
// Wardan Nugraha Ahmad (20230040071) - TI23T
// Assignment Session 3 no 1

let prompt = require('prompt-sync')();

console.log("\nFind Members of the Mafia Syndicate\n")

let name = prompt("Name : ")
let age = Number(prompt("Age : "))
let place_to_live = prompt("Place to live (use capital letters at the beginning of a word) : ")
let savings_in_dollars = Number(prompt("Savings in Million Dollars : "))

let live_don = ["Nevada","Newyork","Havana"];
let live_underboss = ["New Jersey","Manhattan","Nevada"];
let live_Capo = ["California","Detroit","Boston"];

console.log("\nAnalysis Results :")

if (age > 40 || live_don.includes(place_to_live) || savings_in_dollars > 10){
    console.log (`${name} is likely a mafia member with rank DON`)
} else if (age >= 25 && age <=40 || live_underboss.includes(place_to_live) || savings_in_dollars > 1 && savings_in_dollars <= 2){
    console.log (`${name} is likely a mafia member with rank UNDERBOSS`)
} else if (age >= 18 && age <=24 || live_Capo.includes(place_to_live) || savings_in_dollars <= 1){
    console.log (`${name} is likely a mafia member with rank CAPO`)
} else{
    console.log(`${name} is not suspicious`)
}
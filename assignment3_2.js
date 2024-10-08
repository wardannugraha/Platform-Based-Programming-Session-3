// Pemrograma Berbasis Platform
// Wardan Nugraha Ahmad (20230040071) - TI23T
// Assignment Session 3 no 2

let prompt = require('prompt-sync')();

console.log("\nInvestigation Into the Death of a Young Businessman.\n")

let poin1 = prompt("A. There was syanide powder in the victim's stomach (y/n) : ");
let poin2 = prompt("B. There was > 50 milligrams of cyanide powder in the victim's stomach (y/n) : ");
let poin3 = prompt("C. There is CCTV that clearly shows someone putting something into the glass (y/n) : ");
let poin4 = prompt("D. There is a CCTV that bluredly shows someone putting something into the glass (y/n) : ");
let poin5 = prompt("E. There are two or more fingerprints on the glass (y/n) : ");
let poin6 = prompt("F. There are suspicious movements (y/n) : ");
let poin7 = prompt("G. There was cyanide powder in the perpetrator's pocket (y/n) : ");

score = 0;

if(poin1 == "y"){
    score += 50
}if(poin2 == "y"){
    score += 500
}if(poin3 == "y"){
    score += 250
}if(poin4 == "y"){
    score += 150
}if(poin5 == "y"){
    score += 100
}if(poin6 == "y"){
    score += 50
}if(poin7 == "y"){
    score += 750
}

console.log("\nInvestigation Result :")

if(score >= 1300 && poin3 == "y" && poin5 == "y"){
    console.log(`Because the total score is ${score}, and points C and E are True.\nSo the case is a MURDER`)
} else{
    console.log("The case is NOT MURDER")
}
// Pemrograma Berbasis Platform
// Wardan Nugraha Ahmad (20230040071) - TI23T
// Assignment Session 3 no 4

let prompt = require('prompt-sync')()

// Fungsi untuk mengecek apakah bilangan prima
function isPrime(num) {
    if (num <= 1) return false; // Bilangan kurang dari atau sama dengan 1 bukan prima
    if (num === 2) return true; // 2 adalah bilangan prima
    if (num % 2 === 0) return false; // Bilangan genap selain 2 bukan prima

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; // Jika ada pembagi, bukan bilangan prima
        }
    }
    return true; // Jika tidak ada pembagi, bilangan prima
}

// Fungsi untuk mencari bilangan prima setelah input
function nextPrime(input) {
    let num = input + 1; // Memulai pengecekan dari angka setelah input
    while (!isPrime(num)) {
        num++; // Jika bukan prima, periksa angka berikutnya
    }
    return num; // Mengembalikan bilangan prima berikutnya
}

// Penggunaan
let input = Number(prompt("Input your number : "));
let nextPrimeNumber = nextPrime(input);
console.log(`Next prime number is : ${nextPrimeNumber}`);


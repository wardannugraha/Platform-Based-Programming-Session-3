// Pemrograma Berbasis Platform
// Wardan Nugraha Ahmad (20230040071) - TI23T
// Assignment Session 3 no 5

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

// Fungsi untuk menghitung jumlah bilangan prima dalam rentang tertentu
function sumPrimesInRange(start, end) {
    let sum = 0;
    let primeNumbers = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i; // Menambahkan bilangan prima ke total penjumlahan
            primeNumbers.push(i); // Menyimpan bilangan prima dalam array
        }
    }

    // Menampilkan bilangan prima yang ditemukan dan hasil penjumlahan
    console.log(`Prime number from ${start} until ${end}: ${primeNumbers.join(' + ')} = ${sum}`);
    
    return sum; // Mengembalikan hasil penjumlahan
}

// Penggunaan
let start = Number(prompt("Input start number : "));
let end = Number(prompt("Input end number : "));
let sum = sumPrimesInRange(start, end);
console.log(`Total prime number from ${start} until ${end} is ${sum}`);

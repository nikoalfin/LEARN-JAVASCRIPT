function myFunction(a){
    return Math.floor(a) == a;
}
// kode diatas adalah untuk mendeteksi angka desimal atau sebuah angka bilangan bulat

// Test Cases:
// myFunction(4)   Expected true 
// myFunction(1.123) Expected false 

console.log(myFunction(45));
console.log(myFunction(56.8));

// hasil 45 = true & 56.8 = false
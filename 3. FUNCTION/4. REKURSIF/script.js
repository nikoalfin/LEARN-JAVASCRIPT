// // Rekursif adalah function yg ada dlm funfction / function yg memanfggil functionnya sendriri

// // 1. TAMPILKAN ANGKA 10 - 1

// // MENGGUNAKAN FOR
// for(let i=10;i>0;i--){
//     console.log(i);
// }

// //MENGGUNAKAN FUNCTION REKURSIF
// function tampil(n){
//     if(n==0){
//     return;
//     }
// //kt kasih if diatas adlh biar function tampil() berhenti sampai angka 0 saja,jk kt tulis yg bawah saja itu dia akan berjalan terus sampai error 
//     console.log(n);
//     return tampil(n-1);
// } 

// tampil(20);


// BUAT FAKTORIAL ANGKA 5!
let hasil;
function faktor(j){
    if(j==0) return 1;
    return hasil=j*faktor(j-1);
}
faktor(8);
console.log(hasil);
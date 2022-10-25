// 1. CONTOH CLOSURE 1 ==========================
function init(){
    let nama='niko'
   function tampilNama(){
        console.log(nama);
    }
    tampilNama();
}
init();



// 2. CONTOH CLOSURE 2 =========================
// function init(){
//     // let nama='niko'
//    return function tampilNama(nama){
//         console.log(nama);
//     }
   
// }

// let kui=init();
// kui('niko');



// 3. BISA DIKATAKAN CLOSURE JIKA MENCARI VARIABEL DILUAR FUNCTIONNYA SENDIRI ==============================

// ---- namanya closure
// function satu(){
//     let nama='alfin'
//     function ambil(){
//         console.log(`namaku adalah = ${nama}`);
//     }
//     ambil();
// }

// ---- namanya bukan closure
function satu(){
    // let nama='alfin'
    function ambil(){
        let nama='setya';
        // program ini bs jalan, tapi ini bukan disebut closure karena ${nama} mencari variabel nama bukan dr variabel parentnya melainkan dr variabel lokalnya.
        console.log(`namaku adalah = ${nama}`);
    }
    ambil();
}
satu();







// ======================================= ALASAN MENGGUNAKAN CLOSURE =================================================

// 1. Untuk membuat function Factories ------------------------------------

function selamatmlm(waktu){
   return function nama(nm){
        console.log(`hallo ${nm} selamat ${waktu} ,semoga hari anda menyenangkan`);
    }
}

let slmtmalam= selamatmlm('malam');
let slmtpagi=  selamatmlm('pagi');
let slmtsiang= selamatmlm('siang');

slmtmalam('niko');
slmtpagi('sukri');


// // 2. untuk membuat private method ----------------------------------------

// // ---- penulisan 1
// let counter=0;

// function add(){
//     return console.log(++counter);
// }
// counter=10;
// // jika kita tambah counter lagi maka hasil akan =
// // 11
// // 12
// // 13

// add();
// add();
// add();
// // sebelum kt tambah counter=10 hasil =
// // 1
// // 2
// // 3


// ---- penulisan 2 (agar counter=10 tidak ikut dalam function)

// 1 --------------------
function add(){
    let counter=0;
    return function(){
        return console.log(++counter);
    };
};
counter=10;
// jk kt tambahkan counter=10 maka di tdk akan jalan karena counter=0 sdh menjadi variabel lokal yg berfungsi menyediakan variabel utk function closure

let ar=add();
ar();
ar();
ar();

console.log('')
console.log('')
console.log('')
// 2. penulisan menggunakan teknik IIFE ---------------------

// RUMUS = (function(){})();

let sum=(function (){
    let counter=5
    return function(){
        return console.log(++counter);
    }
})();

sum();
sum();
sum();
sum();
sum();

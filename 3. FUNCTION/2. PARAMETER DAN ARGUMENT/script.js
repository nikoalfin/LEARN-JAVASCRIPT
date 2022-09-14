// // >>>> 1. PENULISAN SATU
// function tambah(a,b){
// return a+b;
// }
// function kali(c,d){
//     return c*d;
// }

// let hasil=kali(tambah(2,3),tambah(1,4));
// alert(hasil);
// // kita bs kasih function tambah didalam argument function kali



// // >>>> 2. PENULISAN DUA JIKA ARGUMENT DAN PARAMETER TIDAK SAMA JUMLAHNYA

// // A. ARGUMENT KELEBIHAN
// function tambah(a,b){
//     return a+b;
// }
// alert(tambah(3,5,6));
// // hasilnya adalah 8 dan angka 6 diabaikan karena argumentnya kelebihan satu pdhal di parameter hanya disuruh menginputkan 2 angka saja

// // B. PARAMETER KELEBIHAN
// function kali(a,b,c){
//     return a*b*c;
// }
// alert(kali(3,4));
// // hasilnya akan undefined karena argument yg di inputkan kurang tdk sesuai yg ada di parameter



// >>>> 3. PENULISAN FUNCTION MENGGUNAKAN METHOD ARGUMENTS
// Jika menggunakan method arguments ini, maka kt tidak usah membuat parameter di function dan kt bs bebas brp argument yg ingin kt isikan.   CONTOH ==
function operasi(){
    let jawab=0;
    for(let k=0;k<arguments.length;k++){
        jawab +=arguments[k];
    }

// dgn menggunakan perulangan kt bisa mendeteksi brp jumlah argument yg masuk
    return jawab;
}
let hasil=operasi(3,4,1);
alert(hasil);


// YANG SEBENARNYA TERJADI SAAT KITA MENGGUNAKAN ARGUMENTS

// YANG ASLI >>
function argu(){
    return arguments;
}
console.log(argu(1,4,'dia','saya'));
// YANG SEBENARNYA TERJADI >>
// 1. console.log(argu(1,4,'dia','saya'));     1. argumentnya
// 2. arguments[1,4,'dia','saya']              2. dia masuk ke method arguments dahulu
// 3. function(1,4,'dia','saya'){}             3. Baru dia masuk ke function nya


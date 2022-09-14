// // PERILAKU 1 >>>>>>>>>>>>>
// let a=1;
// function coba(){
//     let b=3;
//     // console.log(b);
//     // kalau console ditaruh sini baru bisa 3 karena berada di lokal scope

//     // console.log(a);
//     // // hasilnya 1 karena saat kt naruh console di lokal scope maka dia masih bs mengakses variable di global scope
// }
// console.log(coba());
// console.log(b);
// // Dia akan error karena let b berada di dlm lokal scope



// // PERILAKU 2 >>>>>>>>>>>>>
// let a=1;
// function cobak(){
//     let a=5;

//     console.log(a);
//     // ini hasilnya baru bs 5 karena console berada dilokal scope

//     console.log(window.a);
//     // kecuali kt kasih window dia akan membaca dr luar sendiri fdan utk hasilnya adlh 1
// }
// cobak();
// console.log(a);
// // hasilnya = 1 karena variable let a=5 berada di dlm lokal scope jd dia tidak menimpa / let a=5 memiliki var sendiri didlm function cobak()



// PERILAKU 3 >>>>>>>>>>>>>>>
let a=2;
function coba(){
    a=6;
// js apakah ad?variable A yg ad di dlm lokal scope?.jk tdk maka akan mencari variable A di luar lokal scope/function coba().
// Dan hasilnya adlh a=6 akan ,menimpa a=2
}
coba();
console.log(a);
// hasilnya = 6 karena a=6 tdk memiliki varible dan dia akan mencari variable dgn nama yg sama yaitu a. dan utk cara bacanya ada di atas.
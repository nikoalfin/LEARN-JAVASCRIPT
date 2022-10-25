// //1.constructor function ============================================
// let baru=function(){
//     // ()=>{
// // jk kt pakai arrow function yg dikomen, program tdk akan jln karena tidak semua bs diganti dgn arrow function
//     this.nama='niko';
//     this.energi=50;

//     this.hallo= function(){
//         // ()=>{
// // namun jk kt taruh arrow funtion disini(pd method)program akan jalan. tapi ingat didalam arrow function tdk ada konsep this.  namun berbeda lagi jk kita tulis menggunakan object literal di no 2 tdk akan jalan.
//         console.log(`halo selamat malam ${this.nama} energi anda : ${this.energi}`);
//     }

// };

// let gui=new baru();




// // 2. object literal =================================================
// let mhs={
//     nama: 'alfin',
//     umur : 15,
//     gaes:()=>{
// // jk kt tulis menggunakan arrow function di method hasil undifened. karena arow function tdk punya konsep this, dan dia akan mencari this sampai window. dan jk kt tulis menggunakan function biasa dia akan jln (functiom(){})

//         console.log(`halo selamat malam ${this.nama} energi anda : ${this.umur}`);
// // hasil : halo selamat malam undefined energi anda : undefined

//         // console.log(`halo selamat malam ${nama} umur anda : ${umur}`);
// // dan jk kita tulis tidak pakai this maka akan error!!!! semua, walaupun function kt tulis menggunakan arrow function / function biasa.
//     }
// }



// // 3. CONTOH KASUS setinterval ================================================
// let hitung=function(){

//     this.nama ='niko',
//     this.umur =10,
//     this.hui=()=>{
//         console.log(`namaku ${this.nama} dan umurku ${this.umur} tahun`);
//     }

//     // setInterval(function(){
//     //     console.log(this.umur++);
//     // }, 1000);
// // dia akan error karena yg diambil function biasa tersebut adalah object windownya. namu jk kt dgn arrow function seperti dibawah

//     setInterval(()=>{
//         console.log(this.umur++);
//     },1000)
// // dia akan jalan karena arrow function tdk memiliki konsep this. dia akan mencari this di luarnya function arrow ini(cari didalam object hitung saja, tidak sampai global seperti function biasa tadi)
// }

// let pang=new hitung();


// 4. CONTOH LAGI ================================

// const box = document.querySelector('.box');

// box.addEventListener('click',function(){
//     let ai='size'
//     let bi='caption'
//     if(this.classList.contains(ai)){
//         [ai,bi]=[bi,ai]
//     }
// // mengakali agar jk diklik lg yg hilang bacground hitamnya dulu baru ukurannya

// this.classList.toggle(ai);


//     // setTimeout(function(){
//     //     this.classList.toggle('caption');
//     // },1000);
// // kode diatas tdk akan jln karena this akan menghasilkan window

//  setTimeout(()=>{
//         this.classList.toggle(bi);
//     },1000);
// // code akan jalan karena arrow function this akan mencari this yang tertuju pada box
    
// });
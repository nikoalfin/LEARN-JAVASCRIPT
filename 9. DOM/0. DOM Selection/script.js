// <<<<<<<<<<<<<<<<< DOM SELECTION >>>>>>>>>>>>>>>>>>>>>

// // 1. document.getElementById('') menghasilkan => element (satu saja   ==================================================

// const judul=document.getElementById('judul');
// judul.style.color='red';
// judul.style.backgroundColor='silver';
// judul.style.fontFamily='Times new Roman';
// judul.innerHTML='ganti judul jadi niko'




// // 2. document.getElementsByTagName('p'); menghasilkan => HTML colection ([lebih dr satu element]) ===================================================

// const par=document.getElementsByTagName('p');
// // hasil dr seleksi adalah [p.p1,p.p2,p.3,p]

// // par.style.color = 'green';
// // dia tdk akan jln karena par menyeleksi semua element p maka hrus kt kasih indexs ke brp kt ingin edit;

// par[0].style.color='green';
// par[2].innerHTML='coba class name'


// // 3. document.getElementsByClassName('') menghasilkan => HTML colection juga ====================================================

// const kol=document.getElementsByClassName('p2');
// kol[0].style.backgroundColor='blue';








// 4. document.querySelector('') menghasilkan => element ==========================================================
const p4=document.querySelector('section#b p');
p4.style.color='brown';

const li=document.querySelector('section#b ul');
li.style.color='aqua'

const p1=document.querySelector('p');
p1.style.backgroundColor='silver';
// dia akan mengeksekusi element P yg ia temukan pertama kali,tdk bs semua kecuali menggunakan >> document.getElementsByTagName('p') / document.querySelectorall('p'); baru dia bs mengeksekusi element P semua;




// 5. document.querySelectorAll('p'); menghasilkan => Element ==========================================================

const p=document.querySelectorAll('p');
p.forEach(function(i){
    i.style.backgroundColor='green';
});
// p[u].style.backgroundColor = 'green';




// 6. Mepersingkat scope (node root) ========================================================
const tui=document.getElementById('b'); 
const yui=tui.getElementsByTagName('p');
yui[0].style.fontSize='30px'

// yui langsung mengambil dr tui tdk usah menggunakan documnet agar jangkauan tdk terlalu besar dia akan fokus yg ada dalam >> id #b










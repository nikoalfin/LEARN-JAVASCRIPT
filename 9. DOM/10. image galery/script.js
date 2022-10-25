// VERSI PANJANGNYA ================================

// const sa=document.querySelector('.sa');
// const du=document.querySelector('.du');
// const ti=document.querySelector('.ti');
// const em=document.querySelector('.em');
// const lim=document.querySelector('.lim');
// const en=document.querySelector('.en');
const utama=document.querySelector('.gambesar');

// let ar=['basebal','anggur','bintang','jeruk','nanas','semangka','tuju'];

// sa.addEventListener('click',()=>{
//     utama.setAttribute('src','img/basebal.jpg');
//     // sa.setAttribute('src','img/anggur.jpg');
// });
// du.addEventListener('click',()=>{
//     utama.setAttribute('src','img/bintang.jpg');
//     // sa.setAttribute('src','img/anggur.jpg');
// });
// ti.addEventListener('click',()=>{
//     utama.setAttribute('src','img/jeruk.jpg');
//     // sa.setAttribute('src','img/anggur.jpg');
// });
// em.addEventListener('click',()=>{
//     utama.setAttribute('src','img/nanas.jpg');
//     // sa.setAttribute('src','img/anggur.jpg');
// });
// lim.addEventListener('click',()=>{
//     utama.setAttribute('src','img/semangka.jpg');
//     // sa.setAttribute('src','img/anggur.jpg');
// });
// en.addEventListener('click',()=>{
//     utama.setAttribute('src','img/tuju.jpg');
//     // sa.setAttribute('src','img/anggur.jpg');
// });



// VERSI PENDEKNYA ===================================

// kt manfaatkan element parentnya tdk satu2 seperti yg diatas
const koi=document.querySelector('.isi');

koi.addEventListener('click',(w)=>{
   if(w.target.className=="sa"){
    // buat ganti src img big ke src img yg diklik
    utama.src=w.target.src;
    
    // animation to img utama/big
    utama.classList.add('animasi');

    // buat hapus class animasi setelah 1/2 detik agar kalau di klik fungsi animasi bs berjalan lg
    setTimeout(()=>{
        utama.classList.remove('animasi');
    },500)
   }
})
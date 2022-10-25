// const klik=document.querySelector('.close');
// const card=document.querySelector('.card');

// klik.addEventListener('click',()=>{
//     card.style.display='none';
// })




// buat contoh element html ////////////////////

{/* <div class="card">
      <img src="img/niko.jpg" width="96" height="96">
      <span class="nama">Sandhika Galih</span>
      <span class="telp">08123456789</span>
      <span class="close">×</span>
    </div>  */}



// DOM TRAVERSAL >>>>>>>>>>>>>>>>>>>>>>>>>>
const silang=document.querySelectorAll('.close');
// menghasilkan 4 element karena all

// 1. parentElement ====================================

// silang.forEach((r)=>{
// // r adalah hasil yang di klik dari variabel silang

//     r.addEventListener('click',()=>{
//         r.parentElement.style.display='none';
// // parentElement = dia akan mencari parent dr r yaitu "class .card" yg ada di html. jd kt tdk perlu buat queryselector di js karena otomatis dia akan mencari parentnya sendiri. 
//     });
// });

const nama=document.querySelector('.nama')
// 2. parentElement.parentElement (2x) ======================================

nama.addEventListener('click',()=>{
    nama.parentElement.parentElement.style.backgroundColor='green';
})
// menghasilkan =  <div class="card">...</div>





// 3. nextElementSibling  ======================================
// nextElementSibling = memilih element setelahnya
nama.addEventListener('click',()=>{
    nama.nextElementSibling.style.backgroundColor='green';
})
    // menghasilkan = <span class="telp">08123456789</span>


// 4. previousElementSibling ========================================
// previousElementSibling = memilih element sebelumnya

nama.addEventListener('click',()=>{
    nama.previousElementSibling.style.backgroundColor='green';
})
// menghasilkan = <img src="img/niko.jpg" width="96" height="96">



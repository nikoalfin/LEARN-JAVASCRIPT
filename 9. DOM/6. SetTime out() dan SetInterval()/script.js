// // 1. SetTimeout() ======================================
// setTimeout(function(){
//     console.log('ok');
// },5000);
// // 5000 = setelah 5 detik function console.log=ok baru bisa muncul


// // buat ngeberhentiin setTimeout sebelum 7 detik
// const yu=setTimeout(()=>{
//     console.log('oke')
// },7000);

// const po=document.querySelector('.henti');
// po.addEventListener('click',()=>{
//     clearTimeout(yu);
//     console.log('berhenti');
// });








// 2. setInterval() ===============================
// setInterval() = kita menjalankan function ketika setelah contoh, 2 detik muncul,terus 2 detik lg muncul lg

const tu=setInterval(()=>{
    console.log('hayyyy');
},2000);

const po=document.querySelector('.henti');
po.addEventListener('click',()=>{
    clearInterval(tu);
    // utk memberhentikan setInterval
    console.log('berhenti');
});






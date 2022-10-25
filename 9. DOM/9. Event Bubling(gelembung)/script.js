// // StopPropagation() ====================================
// const klik=document.querySelectorAll('.close');
// const card=document.querySelectorAll('.card');



// klik.forEach((po)=>{
//     po.addEventListener('click',function(w){
//         w.target.parentElement.style.display='none';
//         w.stopPropagation();
//     })

// });


// card.forEach((io)=>{
//     io.addEventListener('click',()=>{
//         alert('ok');
//     })
// })

// // kedua foreach diatas dia akan mengekesekusi yg foreach card. karena card pembungkus dr element yg ada didalamnya termasuk element klik trsbut.   maka jk element klik ingin berfungsi lg kita gunakan StopPropagation di dlm fungsi klik





// 2. className="container" ======================================
const jo=document.querySelector('.container');

jo.addEventListener('click',(r)=>{
    // if(r.target.className=="close"){
    //     r.target.parentElement.style.display='none';
    // }
    r.target.style.backgroundColor='green';
})
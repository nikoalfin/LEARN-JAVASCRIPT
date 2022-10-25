const klik=document.querySelectorAll('.close');

// // sebelum dikasih method prevent default =======
// klik.forEach((r)=>{
//     // r adalah hasil yang di klik dari variabel silang
//     r.addEventListener('click',()=>{
//             r.parentElement.style.display='none';
//     });
// });



// sebelum dikasih method prevent default =======
klik.forEach((r)=>{
    // r adalah hasil yang di klik dari variabel silang
    r.addEventListener('click',(el)=>{
            el.target.parentElement.style.display='none';
            el.preventDefault();
    });
});


document.querySelector('.cek').addEventListener('click',(t)=>{
t.preventDefault();
});

// checkbok trsbt tdk akan bs diklik karena d preventDefault();





// preventDefault = untuk mencegah perilaku default dr suatu element. semisal <a href=""></a> jk di klik dia akan menuju kesesuai link yg dituju namun setelah kt kasih preventDefault maka perilaku element a tersebut tidak akan bisa.
// KASUS 1
const buton=document.querySelector('button');
const bodi=document.querySelector('body');
buton.addEventListener('click',function(){
    // bodi.style.backgroundColor='green';
    bodi.classList.toggle('birumuda');
});



// KASUS 2
// buat tombol baru
const tbaru=document.createElement('button');
const isitbaru=document.createTextNode('ubah lagi');
tbaru.appendChild(isitbaru);

// menambah atribut type ke element button
tbaru.setAttribute('type','button');


// menempatkan element button JS setelah element button yg ad di HTML
buton.after(tbaru);

// buat warna random
tbaru.addEventListener('click',function(){
    const r=Math.round(Math.random() *255+1);
    const g=Math.round(Math.random() *255+1);
    const b=Math.round(Math.random() *255+1);

    bodi.style.backgroundColor='rgb('+r+','+g+','+b+')';
});




// KASUS 3
const infut1=document.querySelector('input[name=rmerah]');
const infut2=document.querySelector('input[name=ghijau]');
const infut3=document.querySelector('input[name=bbiru]');

// change =jika klik blum dilepaskan maka tdk kana ngubah warna
// maka kt gunakan events input agar saat digeser warna akan ikut berubah

infut1.addEventListener('input',function(){
    const r=infut1.value;
    const g=infut2.value;
    const b=infut3.value;
    bodi.style.backgroundColor='rgb('+r+','+g+','+b+')'
});

infut2.addEventListener('input',function(){
    const r=infut1.value;
    const g=infut2.value;
    const b=infut3.value;
    bodi.style.backgroundColor='rgb('+r+','+g+','+b+')'
});

infut3.addEventListener('input',function(){
    const r=infut1.value;
    const g=infut2.value;
    const b=infut3.value;
    bodi.style.backgroundColor='rgb('+r+','+g+','+b+')'
});
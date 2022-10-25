// KASUS 1
const buton=document.querySelector('button');
const bodi=document.querySelector('body');
buton.addEventListener('click',()=>{
    bodi.classList.toggle('birumuda');
})
;


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
// Math.round() =method utk membulatkan angka decimal
// Math.random() *255+1 = rumus utk memilih angka random 1-255, karena default math random adalah 0-1



// KASUS 3
const infut1=document.querySelector('input[name=rmerah]');
const infut2=document.querySelector('input[name=ghijau]');
const infut3=document.querySelector('input[name=bbiru]');

// change = jika klik blum dilepaskan maka tdk akan ngubah warna
// maka kt gunakan events = input, agar saat digeser warna akan ikut berubah

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





// // KASUS 4 = ubah warna ketika mouse digeser

// // mousemove = berfungsi apabila cursor bergerak
// document.body,addEventListener('mousemove',(event)=>{
//     // posisi mouse >>>>>>>>>
//     console.log(event.clientX)
//     // clientX berfungsi apabila cursor digeser ke kanan kiri akan menghasilkan nilai angka
//     console.log(event.clientY)
//     // clientY berfungsi apabila cursor digeser ke bawah atas akan menghasilkan nilai angka

//     // ukuran browser >>>>>>>>>>
//     console.log(window.innerWidth);
//     // window.innerWidth = menghasilkan nilai berapa lebar window 
//     console.log(window.innerHeight);
//     // window.innerHeight = menghasilkan nilai berapa tinggi window 


//     const xmos=Math.round(event.clientX / window.innerWidth * 255);
//     const ymos=Math.round(event.clientY / window.innerHeight * 255);

//     document.body.style.backgroundColor='rgb('+xmos+','+ymos+',100)';

// })
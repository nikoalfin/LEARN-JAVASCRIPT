// 1. inline HTML atribut (Event Hendler)
// jk menggunakan diatas maka atribut onclick harus kt tulis di HTML

const p3=document.querySelector('.p3');

function ubahwarna(){
    p3.style.backgroundColor='lightblue'
}




// 2. element method (Event Hendler)
const p2=document.querySelector('.p2');
function ubahwarnap2(){
    p2.style.backgroundColor ='green';
}

p2.onclick=ubahwarnap2;






// 3. Menggunakan addEventListener
const p4=document.querySelector('section#b p');
p4.addEventListener('click',function(){
    p4.style.backgroundColor='yellow';
    const li=document.createElement('li');
    const teksli=document.createTextNode('tambah lagi');
    li.appendChild(teksli);

    const ul=document.querySelector('section#b ul');
    ul.appendChild(li);
})


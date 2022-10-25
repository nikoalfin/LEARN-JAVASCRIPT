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
const sectionb=document.getElementById('b');
p4.addEventListener('click',function(){
    p4.style.backgroundColor='yellow';
    p4.addEventListener('click',()=> {
        p4.style.backgroundColor='white'
    });

    // membuat element baru
    const li=document.createElement('li');
    const teksli=document.createTextNode('tambah lagi');
    // menggabungkan element 
    li.appendChild(teksli);

    // meletakan element li di akhir parent ul
    const ul=document.querySelector('section#b ul');
    ul.appendChild(li);

    // menambahkan element button utk mengahapus element li
    const but=document.createElement('button');
    const isi_but=document.createTextNode('hapus element li');
    but.appendChild(isi_but);

    // meletakan element button di akhir parent ul
    ul.appendChild(but)


    // menghapus element li dan button jika di klik menggunakan element button
    but.addEventListener('click',()=>{
        ul.removeChild(li);
        ul.removeChild(but);
    })
})


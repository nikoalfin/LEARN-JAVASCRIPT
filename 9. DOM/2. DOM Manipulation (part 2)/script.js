//  Manipulasi node
// ada urutan yg harus digunakan dlm manipulasi node

// 1.buat element tambahan baru
const pBaru=document.createElement('p');
// ini untuk misal kt ingin menambah tag p

// 2.buat isi/content yg ingin di buat di element trsbt
const teks=document.createTextNode('saya lagi belajar DOM');

// 3.save isi/content ke element yg kt buat tadi
pBaru.appendChild(teks);

// 4.save pBaru/element di akhir section A
const sectionA=document.getElementById('a');
sectionA.appendChild(pBaru);

// NB = method appendChild() ini hanya bs menambahkan element di akhir/terakhir.





// JIKA INGIN MENAMBAHKAN ELEMENT DI SEMBARANG TEMPAT MAKA HARUS MENGGUNAKAN METHOD insertbefore()

// 1.buat element baru beserta isinya seperti diatas
const lagi=document.createElement('li');
const isi=document.createTextNode('niko alfin setyawan');
lagi.appendChild(isi);

// 2.seleksi,dimana kita ingin taruh element tersebut menggunakan method insertBefore();
// ingat di insertBefore ini kt harus seleksi parentnya(ul yg dibawah) dan element sesudah element baru kita ingin ditempati(li2 yg dibawah)
const ul=document.querySelector('section#b ul');
const li2=ul.querySelector('li:nth-child(2)');

ul.insertBefore(lagi,li2);
// penjeasan = tambah element 'lagi' sebelum element 'li2'





// MENGHAPUS ELEMENT MENGGUNAKAN METHOD removeChild();

// 1. Seleksi element yg ingin dihapus
const linkHapus=document.querySelector("section#a a");

// 2. hapus element
sectionA.removeChild(linkHapus);











// MENGGANTI ELEMENT MENGGUNAKAN METHOD replaceChild();

//1.buat var, buat manggil element parentnya dulu
const sectionB=document.getElementById('b');

// 2.buat var buat manggil element yg ingin kt ganti
const par=sectionB.querySelector('p');

// 3.buat element baru
const h2Baru=document.createElement('h2');
const teksh2=document.createTextNode('belajar mengganti judul');
h2Baru.appendChild(teksh2);

// 4.mengganti element
sectionB.replaceChild(h2Baru,par);
// penjelasan = element 'h2Baru' mengganti element 'par'







h2Baru.style.backgroundColor='lightblue'
lagi.style.backgroundColor='lightblue'
pBaru.style.backgroundColor='lightblue'
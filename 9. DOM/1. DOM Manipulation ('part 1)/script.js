const po=document.querySelector('h1');

// 1. setAttribute() =================================== 
po.setAttribute('name','niko');
po.setAttribute('href','#');
//  hasil =  <h1 id="judul" name="niko">Hello World</h1>
// nambah atribut name="niko"



// 2. getAttribute() ====================================
const pi=document.querySelector('a');
pi.getAttribute('href');
// hasil = "http://instagram.com/sandhikagalih"
// buat nampilin isi atribut contoh isi atribut href


// 3. removeAttribute('') ==============================
po.removeAttribute('name');
// menghapus atribeut name='niko' pada h1






// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const ko=document.getElementsByClassName('p2')[0];
//hasil ko = <p class="p2">paragraf 2</p>

// 4. classList.add('') =================================
// buat nambah value class
ko.classList.add('label');
ko.classList.add('satu');
ko.classList.add('dua');
ko.classList.add('tiga');
// hasil = <p class="p2 label satu dua tiga">paragraf 2</p>


// 5. classList.remove() ================================
// buat hapus value class
ko.classList.remove('dua');
// hasil = <p class="p2 label satu tiga">paragraf 2</p>



// 6. classList.toggle() =================================
// jk sudah ada class mk dia akan menghapus class trsbt dan jk belum dia akan menambah kelas tersebut
ko.classList.toggle('tiga');
// hasil = <p class="p2 label satu">paragraf 2</p>
// class tiga akan hilang
// lalu kt tulis lagi
ko.classList.toggle('tiga');
// hasil = <p class="p2 label satu tiga">paragraf 2</p>
// class tiga ada lagi
// fdan begitu terus seterusnya



// 7. classList.item() ===================================
// menampilkan nama class sesuai dgn indexs yg kt tulis
ko.classList.item(3);
// hasil = 'tiga'




// 8. classList.contains() ==============================
// bertanya apakah nama class trsbut ada di value class ini
ko.classList.contains('tiga');
// hasil = true =? karena ada

ko.classList.contains('enam');
// hasil = false => karena tidak ada




// 9. classList.replace() ===============================
// mengganti nama value class
ko.classList.replace('satu','lima')
// hasil = <p class="p2 label lima tiga">paragraf 2</p>
// satu diganti lima

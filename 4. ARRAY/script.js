// let ariy=['fia','dea','filo',5,23,[4,7,6]];
// // 1. ARRAY MEMANFGGIL                       ==================================
// // console.log(ariy[2]);
// // console.log(ariy[5][0]);
// // console.log(ariy);


// // 2. MENAMPILKAN ISI ARRAY MENGGUNAKAN FOR  =================================
// for(let i=0;i<ariy.length;i++){
//     // console.log(ariy[i]);

//     console.log('anggota ke '+(i+1)+' adalah '+ariy[i]);
// }


// // 3. Method join() = buat nampilin isi array ================================
// console.log(ariy.join(' - '));


// // 4. Method push() = buat nambah element array dari belakang ===========================
// ariy.push('niko','alfin');
// console.log(ariy.join(' - '));

// // 5. Method pop() = buat menghapus element array dr belakang ============================
// ariy.push('niko','alfin')
// ariy.pop();
// ariy.pop();
// ariy.pop();
// console.log(ariy.join(' - '));

// // 6. Method unshift() = buat menambah element dr depan ===================================
// ariy.unshift('saya lagi');
// console.log(ariy.join(' - '));

// // 7. Method shift() = buat menghapus element dari depan ==================================
// ariy.shift();
// ariy.shift();
// console.log(ariy.join(' - '));




// // 8. Method splice() = utk menambah/menghapus array yg berada dimanapun =============================
// // penjelasan splice = splice(pilih indexs ke brp utk memulai,ingin hapus brp element,tambah element);

// let tu=['niko','alfin','setya','wan'];
// // menambah 2 element yg dimulai dr indexs ke-2 tanpa menghapus dengan kt kasih 0 di parameter ke-2 pd method splice trsbt
// tu.splice(2,0,'lagi','eneh');
// console.log(tu.join(' - '));
// // hasilnya = niko - alfin - lagi - eneh - setya - wan

// // menghapus 2 element yg dimulai dr indexs ke-1 lalu dihapus 2 element
// tu.splice(1,2);
// console.log(tu.join(' - '));
// // hasilnya = niko - eneh - setya - wan


// // 9. Method slice() = mengiris sebuah array utk dijadikan array baru ===================================
// // penjelasan slice = slice(awal,akhir) 

// let you=['supra','vario','scopy','beat','cbr','crf'];
// let var2 = you.slice(1,3);
// console.log(var2.join(' - '));
// // hasilnya utk array var2 = vario - scopy
// // dia hanya mengiris utk ditaruh di array baru yaitu var2
// // apabila kt panggil lagi array yg asli maka dibawah ini
// console.log(you.join(' - '));
// // hasilnya akan utuh = supra - vario - scopy - beat - cbr - crf

// // NB :pada parameter diatas slice(1,3) disini yg diambil adalah indexs 1 dan 2 utk indexs 3 tidak diambil.apabila jk kt ingin ambil maka kita ganti 3 menjadi 4 [slice(1,4)] maka indes=xs yg diambil adalah 1,2,dan 3



// // 10. Method forEach() = method untuk perulangan pada array ================================
// let mobil=['avanza','xenia','fortuner','pajero'];
// mobil.forEach(function(m){
//     console.log(m);
// })
// // jika ingin dengan indexnya juga kt tambah parameter k(bebas nama parameternya)
// mobil.forEach(function(n, k){
// console.log((k+1)+' nama mobilnya adalah '+n);
// })


// // 11. Method Map() = method utk perulangan array juga, namun perbedaannya Map bisa direturn/dikembalikan sedangkan forEach tidak bisa. ====================================

// let ang=[1,2,3,4,5,6,7,8,9];
// let ar =ang.map(function(s){
//     return s*2;
// })
// console.log(ar);

// // jika kita gunakan forEach maka akan error
// let ari =ang.forEach(function(s){
//     return s*2;
// })
// console.log(ari);


// // 12. Method filter() = mencari nilai pd array dan mengembalikannya menjadi bentuk array lagi ========================
// let juk=[2,4,3,2,6,7,9,60,45,5,8];
// let has=juk.filter(function(f){
//     return f==4;
// // jk ad,dia akan menghasilkan array yg isinya  4 dan jika tdk ad dia akan menghasilkan array kosong
// })
// console.log(has);

// let has2=juk.filter(function(f){
//     return f>5;
// // jk ad,dia akan menghasilkan array yg isinya >5 dan jika tdk ad dia akan menghasilkan array kosong
// })
// console.log(has2);


// // 13. Method find() = mencari nilai pada array tp hanya bs mengembalikan satu nilai saja ==============================
// let juk=[2,4,3,2,6,7,9,60,45,5,8];
// let has=juk.find(function(f){
//     return f==4;
// // dia tidak akan error karena yg ditanya hanya satu angka saja
// })
// console.log(has);

// let has2=juk.find(function(f){
//     return f>5;
// // dia tidak error tp menghasilkan satu angka saja yaitu 6
// })
// console.log(has2);













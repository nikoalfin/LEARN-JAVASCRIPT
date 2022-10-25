// PENULISAN ARROW FUNCTION
// 1. jk isinya satu baris dan parameternya hanya satu ===============================
let tam=nm=>`hallo nama saya = ${nm}`

console.log(tam('niko alfin setyawan'));

// hasil = hallo nama saya = niko alfin setyawan


// 2. jk parameter 2 dan isinya tetap satu baris ===================================
let sam=(nm,waktu)=>`selamat ${waktu} kamu ${nm}`

console.log(sam('niko','malam'));


// 3. jk tidak ada parameternya =================================
let fus=()=>console.log('tidak ada parameternya');

fus();


// NB = JIKA BARIS LEBIH DARI 1 BARIS MAKA HARUS KITA KASIH KURUNG KURAWAL



// 4. CONTOH KASUS =================================
// buat berapa byk huruf pada nilai array
let nama=['niko','alfin','setyawan']

//1--------- 
let jmlhhuruf=nama.map((nm)=>{
    return nm.length;
})
console.log(jmlhhuruf);
// hasil = [4, 5, 8]]


// 2. buat bentuk object --------
let buatobj=nama.map(nm=>({nama:nm,pannjang:nm.length}));
console.log(buatobj);
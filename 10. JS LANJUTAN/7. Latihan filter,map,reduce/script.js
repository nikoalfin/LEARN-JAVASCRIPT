// let angka=[-1,8,9,1,4,-5,-4,3,2,9];

// // masukan angka >= 3
// console.log(angka.filter((a)=> a>=3).sort());



// 
// latihan soal ==================================================
// seleksi semua element yang ada nama atribut data-duration -----------
const lanjut=document.querySelectorAll('[data-duration]');
console.log(lanjut);

// seleksi element yg contenya ada tulisan JAVASCRIPT LANJUTAN -----------
let ray=Array.from(lanjut).filter(y=>y.textContent.includes('JAVASCRIPT LANJUTAN'));
console.log(ray);


// ambil isi dari atribut date-duration---------
let durasi=ray.map(e=>e.dataset.duration)
console.log(durasi);


let der=durasi.map(po=>{
    // ubah "11:18"=>[11,18] ---------
    let ru=po.split(':').map(Number);

    // jumlahkan menit & detik menjadi detik
    return (ru[0]*60+ru[1])
});
console.log(der);


// jumlahkan semua detik dr array ke 0 sampai terakhir ---------
let totaldetik=der.reduce((r,m)=>r+m,0);
console.log(totaldetik);


// ubah detik ke jam
// math.floor berfungsi membulatkan 2.3333 menjadi 2
let jam=Math.floor(totaldetik/3600);
console.log(jam);


// hitung sisa dari perhitungan jam diatas(33333)
totaldetik=totaldetik-jam*3600;
console.log(totaldetik);

// cari menit
let menit=Math.floor(totaldetik/60);
console.log(menit);


// hitung sisa dr perhitungan menit diatas menjadi detik
let detik=totaldetik-menit*60;
console.log(detik);






// isi jawaban jumlah video
document.querySelector('.jumlah-video').innerHTML=ray.length +' video';
document.querySelector('.total-durasi').innerHTML=`${jam} jam ${menit} menit ${detik} detik`;


const tgltujuan=new Date('Oct 02, 2022 10:45:00').getTime();

let x=setInterval(() => {
const tglini=new Date().getTime();
let selisih=tgltujuan-tglini;

let hari =Math.floor(selisih / (1000 * 60 * 60 * 24));
let jam =Math.floor(selisih % (1000 * 60 * 60 * 24)/(1000*60*60));
let menit =Math.floor(selisih % (1000 * 60 * 60)/(1000*60));
let detik =Math.floor(selisih % (1000 * 60)/1000);

// console.log(tgltujuan);
// console.log(tglini);
// console.log(selisih);
// console.log(hari);
// console.log(jam);
// console.log(menit);
// console.log(detik);
// console.log('');
// let hus;

   

document.querySelector('.tampil').innerHTML= 'waktu acara kurang dari '+hari+' hari '+jam+' jam '+menit+' menit '+detik+' detik';

// buat ngeberhentiin jk hari sudah sesuai dengan hari tujuan
    if(selisih==0) {
        clearInterval(x);
        document.querySelector('.tampil').innerHTML='waktu habis;'
    }
}, 1000)
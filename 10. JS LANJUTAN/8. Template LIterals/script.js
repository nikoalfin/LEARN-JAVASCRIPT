// 1. multiline string ====================================
console.log
(`ini adalah 1 
ini adalah 2
ini adalah 3`);



// 2. emmeded expresion ==================================
let nama='niko';
let umur=19;
console.log(`saya adalah ${nama} dan umur saya ${umur} tahun`);

let a=10;
let b=30;
console.log(`angka 10 + 30 x 2 adalah ${a+b*2}`);
console.log(`${(a%2==0)?'genap' : 'ganjil'}`);

// console.log(`${alert('hallo gesss')}`)




// 3. HTML fragments ====================================
// contoh 1 -----------------------------
const el=`
<div>niko</div> 
<p>alfin</p>
<p>setyawan</p>
`; 
console.log(el);
document.body.innerHTML=el;

document.write();
// contoh 2 looping ----------------------
let mhs=[
    {
        nama:'niko',
        umur:19
    },
    {
        nama:'alfin',
        umur:16
    },
    {
        nama:'setya',
        umur:17
    }
]

const lu=`<div class="judul">
<ul>
${mhs.map(w=>`
<li>${w.nama}</li>
<li>${w.umur}</li>
`).join(' ')}
</ul>
</div>`;

document.body.innerHTML=lu;




// CONTOH 3 kondisi -----------------------------
let lagu={
    penyanyi: 'ariel',
    judul:'separuh aku',
    feat:'niko as'
}

let tes=`
<div class="tes">

<p>${lagu.penyanyi}</p>
<p>${lagu.judul}${lagu.feat? ` (feat ${lagu.feat})` : ' '}</p>

</div>
`;
//no 76 dibaca : jk di dalam lagu ada object feat maka isi dan jk tidak ada maka kosong;

document.body.innerHTML=tes;




// CONTOH 4 NESTED (HTML fragments bersarang) --------------------

let daftar={
    nama:'niko',
    prodi:'teknik informatika',
    matkul:[
        'orkom',
        'web dasar',
        'java',
        'web lanjut',
        'mtk diskrit'
    ]
}

// buat function perulangan matkul
function teslagi(kui){        
       return `
       <ol>
        ${kui.map(e=>`<li>${e}</li>`).join(' ')}
       </ol>
       `; 
}

let yus=`
    <p>nama = ${daftar.nama}</p>
    <p>prodi = ${daftar.prodi}</p>
    ${teslagi(daftar.matkul)}
`;

document.body.innerHTML=yus;

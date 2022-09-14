// // 1. OBJECT INTRO =====================================================================
// let mhs={
//     nama : 'niko',
//     umur : 18,
//     nilai : [80,90,90,89,87,86,97],
// //variable didlm object dinamakan Property

//     alamat : {
//         jalan :'jln abc',
//         desa : 'clebung',
//         kec:'bubulan'
//     },
// // object jg bisa ditaruh didlm object

//     semua :function(){
//         console.log(this.nama+' berumur '+this.umur+' tahun memiliki nilai '+this.nilai[3]+' bertempat tinggal di '+this.alamat);
//     }
// // function didlm object dinamakan method
// }

// // cara manggilnya
// console.log(mhs.nama);
// console.log(mhs.umur);
// console.log(mhs.nilai);
// console.log(mhs.nilai[3]);
// console.log(mhs.alamat);
// console.log(mhs.alamat.desa);
// console.log(mhs.semua());




// 2. MEMBUAT OBJECT =============================================================================

// A. OBJECT LITERAL >>>>>>>>>>>>>>>>>>>>>
let siswa={
    nama: 'alfin',
    kelas : 2,
    nis : '21335342',
    alamat:{
        jln: 'jl abcds',
        desa : 'maor',
        kec : 'bubulan'
    }
}

let siswa2={
    nama: 'setya',
    kelas : 4,
    nis : '21335342',
    alamat:{
        jln: 'jl defgh',
        desa : 'clebung',
        kec : 'temayang'
    }
}

// NB : jika menggunakan object literal,apabila ingin menambah data yang baru maka kt harus membuat obejct baru lagi. walaupun semisal yg dirubah hanya nama sj maka kt tetap harus membuat object lagi

// B. FUNGSI DECLARATION  >>>>>>>>>>>>>>>>>>>>>>>>
function mahasiswa(nm,nis,almt,nil,jrsn){
    let mhs={};
// buat object kosong

    mhs.nama=nm;
    mhs.nis=nis;
    mhs.alamat=almt;
    mhs.nilai=nil;
    mhs.jurusan=jrsn;
//inputkan data

    return mhs;
// kembalikan hasilnya
}

console.log(mahasiswa('alfin',32423,'maor',[89,90,96,87],'teknik informatika'));
console.log(mahasiswa('awan',354634,'clebung',[79,80,98,97],'teknik informatika'));

// NB : apabila kt ingin menambah/mengganti data baru, kt tidak usah membuat object baru lagi cukup menggunakan 1 fungsi diatas.

// C. CONSTRUCTOR >>>>>>>>>>>>>>>>>>>>>>>>>>>
function Mahasiswa(nm,kls,umur){
    // let this={}; kt anggap this adlh object

    this.nama = nm;
    this.kelas = kls;
    this.umur = umur;

    // return this; kt anggap return ada

// jk menggunakan construktor kt tdk perlu membuat object baru dan mengembalikan nilai(return),kt hanya membuat property saja
}
// disaat memanggil object,kt harus menulis new. jk tdk ad program akan undifind. karena ini CONSTRUKCTOR 
let mhs3=new Mahasiswa('setya','3 smp',15);
let mhs4=new Mahasiswa('sasa','2 sma',17);
console.log(mhs3);
console.log(mhs4);
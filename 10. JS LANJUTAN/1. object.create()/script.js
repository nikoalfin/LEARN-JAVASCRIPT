let methodmahasiswa={
    main:function(jam){
        this.energi += jam;
        console.log(`hallo niko energimu bertambah jadi ${this.energi} oke yaaa!!!!`)
    }
}



// // 1.) MEMANGGIL OBJECT LUAR DENGAN CARA MEMANGGIL LEWAT VALUE ==============================================
// function Mahasiswa(nm,stamina){
//     let mahasiswa={};
//     mahasiswa.nama=nm;
//     mahasiswa.energi=stamina;

//     mahasiswa.main=methodmahasiswa.main;
// // seperti ini adalah memanggil object dari luar lewat value, namun cara ini kurang efisien

//     return mahasiswa;
// }




// 2.) MEMANGGIL OBJECT LUAR DENGAN CARA MENGGUNAKAN object.create() ==============================================
function Mahasiswa(nm,stamina){
    let mahasiswa=Object.create(methodmahasiswa);
// seperti ini adalah memanggil object dari luar lewat method object.create();

    mahasiswa.nama=nm;
    mahasiswa.energi=stamina;

    return mahasiswa;
}

// panggil untuk object
let niko=Mahasiswa(10,10);
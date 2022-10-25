// 1.) method prototype ========================================================================
// MEMBUAT KEY DAN VALUE BARU DILUAR OBJECT TANPA MEMBUAT OBJECT BARU
function karyawan(nm,umr,gj,lj){
    this.nama=nm;
    this.umur=umr;
    this.gaji=gj;
}

// menambahkan method diluar object tanpa harus membuat object lagi menggunakan prototype ini,jika dibutuhkan maka method ini akan fungsi dan jika tidak maka method ini tidak berfungsi
karyawan.prototype.status='lajang';
karyawan.prototype.main=function(jm){
    this.gaji -=jm*1000;
    return this.gaji;
}
karyawan.prototype.makan=function(jm){
    this.gaji -=jm*500;
    return this.gaji;
}
karyawan.prototype.frelance=function(jm){
    this.gaji +=jm*2000;
    return `gajimu bertambah jadi ${this.gaji}`;
}

// buat nama object
let huda=new karyawan('huda',30,5000);






// SEBENARNYA PENULISAN PROTOTYPE DIATAS ADALAH PENULISAN ASLI YG ADA DIBALIK LAYAR NAMUN BYK PROGRAMER MENULISNYA SEPERTI DIBAWAH INI ==============================================


class pns{
    constructor(nm,gj,power){
        this.nama=nm;
        this.gaji=gj;
        this.energi=power;
    }
    main=function(jm){
        this.gaji -=jm*1000;
        return this.gaji;
    }
    makan=function(jm){
        this.energi +=jm*2;
        return this.energi;
    }
    frelance=function(jm){
        this.gaji +=jm*2000;
        return `gajimu bertambah jadi ${this.gaji}`;
    }
}

// buat nama object
let niko=new pns('niko',4000,5);


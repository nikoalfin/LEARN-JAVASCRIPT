// Function deklaration
// Kt bs memanggil function sebelum atau sesudah function

tambah(3,2);

function tambah(a,b){
    let hasil=a+b;
    console.log(a+ ' + '+b+' = '+hasil);
}

tambah(4,5);




// Function Expression
// kt hanya bs memanggil setelah function. jk kt memanggil sebelum function maka akan error

// tampil(5,6);
// apabila kt tulis disini  makan akan error

// dan cara penulisannya pun jg berbeda yaitu dgn membuat variable dulu baru function yg td usah ad namanya
let tampil=function(s,d){
    let hasil=s*d
    console.log(s+ ' x '+d+' = '+hasil);
}

tampil(3,6);
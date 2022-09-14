let jmlhangkot=10,hasil=1,operasi=5;

// // 1. Menggunakan 2 perulangan
// while(hasil<=operasi){
//     console.log('angkot no '+hasil+' beroperasi dengan baik');
//     hasil++;   
// }
// for(let i=hasil;i<=jmlhangkot;i++){
//     console.log('angkot no '+i+' tidak beroperasi');
//   }


// // 2. Menggunakan 1 perulangan dgn didalamnya ada kondisi
// for(hasil;hasil<=jmlhangkot;hasil++){
// if(hasil<=operasi){
//     console.log('angkot no '+hasil+' beroperasi dengan baik');
// }
// else{ 
//     console.log('angkot no '+hasil+' tidak beroperasi');
// }
// }


// 3. Latiha else if dengan angkot no 8 sedang lembur
for(hasil;hasil<=jmlhangkot;hasil++){
    if(hasil<=operasi != hasil==5){
        console.log('angkot no '+hasil+' beroperasi dengan baik');
    }
    else if(hasil==8 || hasil==10 || hasil==5){
        console.log('angkot no '+hasil+' sedang lembur');
    }
    else{ 
        console.log('angkot no '+hasil+' tidak beroperasi');
    }
}
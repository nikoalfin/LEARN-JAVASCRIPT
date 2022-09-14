// let jawab=true;
// while(jawab){
// let makan=prompt('PILIH MAKANAN SEHAT / TIDAK SEHAT \n NASGOR,BAKSO,MIE AYAM,BABI GULING,SOFT DRINK');

// switch(makan){
//     case 'NASGOR':
//         alert('MAKANAN ANDA SEHAT');
//     break
//     case 'BAKSO':
//         alert('MAKANAN ANDA SEHAT');
//     break
//     case 'MIE AYAM':
//         alert('MAKANAN ANDA SEHAT');
//     break
//     case 'BABI GULING':
//         alert('MAKANAN ANDA TIDAK SEHAT');
//     break
//     case 'SOFT DRINK':
//         alert('MAKANAN ANDA TIDAK SEHAT');
//     break
//     default :
//     alert('PILIHAN ANDA TIDAKA ADA DI MENU');
//     break
// }

// jawab=confirm('lagi ??');
// }

// NB : break berfungsi jk semisal ia memilih nasgor dan langsung di break otomatis dia akan keluar dr switch
// Dan kode diatas masih bs disederhanakan lg

let hasil=true;
while(hasil){
let makan=prompt('PILIH MAKANAN SEHAT / TIDAK SEHAT \n NASGOR,BAKSO,MIE AYAM,BABI GULING,SOFT DRINK');

switch(makan){
    case 'NASGOR':
    case 'BAKSO':
    case 'MIE AYAM':
        alert('MAKANAN ANDA SEHAT');
    break
    case 'BABI GULING':
    case 'SOFT DRINK':
        alert('MAKANAN ANDA TIDAK SEHAT');
    break
    default :
    alert('PILIHAN ANDA TIDAKA ADA DI MENU');
    break
}

hasil=confirm('lagi ??');
}
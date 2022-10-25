
// KETERANGAN = ${} dibaca expresion ???/////?????????????????????????????????????????????????????????????????????//

// tagged template literals
const nama='niko';
const umur=19;


// // 1. =====================================================
// function coba(wo){
//     return wo;
// }

// let has=coba`nama saya ${nama} umur saya ${umur} tahun`;
// console.log(has);

// // hasil = ['nama saya ', ' umur saya ', ' tahun']
// // dia akan terpecah jd 3 karena dipisah oleh ${nama} & ${umur}; 





// // 2. ==================================================
// function coba(wo,...yu){
// // ...yu = berfungsi membaca expresion walaupun expresion (${}) ada tambahan lagi
//     return yu;
// }

// let has=coba`nama saya ${nama} umur saya ${umur} tahun`;
// console.log(has);
// // hasil = ['niko', 19];





// // 3. gabungkan wo dan ...yu ===============================================
// function coba(wo,...yu){
// // cara panjang >>>>>>>>>>
//     let result=``;
//     wo.forEach((fu,i) => {
//        result += `${fu}${yu[i] || ''}`;  
//     });
//     return result 
    
// // cara pendek >>>>>>>>
//     // return wo.reduce((w,r,i)=> `${w}${r}${yu[i] || ''}` ,'');
//     }
    
//     let has=coba`nama saya ${nama} umur saya ${umur} tahun`;
//     console.log(has);




// 4. penggunaan sederhana tagged template literals ===============================
function lagi(wo,...yu){
    return wo.reduce((w,r,i)=> `${w}${r}<span class="edit">${yu[i] || ''}</span>` ,'');
// kasih span diantara ${} utk kasih bg ditulisan trsbt yg style dari css yg ada di html
}
        
let has=lagi`nama saya ${nama} umur saya ${umur} tahun`;
console.log(has);

document.body.innerHTML=has;
    
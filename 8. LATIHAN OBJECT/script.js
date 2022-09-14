// COBA 1 ????????????????????????????????????????????????????????????

// // membuat object
// function pelanggan(sopir,trayek,namap,kas){
// this.namasopir=sopir;
// this.trayek=trayek;
// this.penumpang=namap;
// this.bayar=kas;

// this.naik=function(namapen){  
//     if(this.penumpang.length==0){
//         this.penumpang.push(namapen);
//         return this.penumpang; 
//     }
//     // includes() methods = berfungsi mendeteksi semua isi array
//     else if(this.penumpang.includes(namapen)){
//         console.log('penumpang sudah ada dalam angkot');
//         return this.penumpang; 
//     }
//     for(g in this.penumpang){
//         if(this.penumpang[g] == undefined){
//             this.penumpang[g]=namapen;
//             return this.penumpang; 
//         } 
//         else if(g ==this.penumpang.length-1){
//             this.penumpang.push(namapen);
//             return this.penumpang; 
//         }       
//     }   
// }

// this.turun=function(nm,byr){
//     if(this.penumpang.length==0){
//         console.log('angkot masih kosong');
//         return this.penumpang;
//     }
//     for(y in this.penumpang){
//         if(this.penumpang[y]==nm && byr!=0){
//             this.penumpang[y]=undefined;
//             this.bayar +=byr;
//             return this.penumpang;
//         }
//         else if(byr==0){
//             console.log('penumpang belum bayar');
//             return this.penumpang; 
//         }   
//         // else{
//         //     console.log('maaf penumpang tidak ada dalam angkot');
//         //     return this.penumpang
//         // }     
//     }
//     console.log('maaf penumpang tidak ada dalam angkot');
    
// }
      
    
// }

// let angkot1=new pelanggan('niko','malang-bjn',['niko','alfin','setya'],0);






// COBA 2 ????????????????????????????????????????????????????????????

function angkot(nama,trayek,nmpenumpang,byr){
this.sopir=nama;
this.trayek=trayek;
this.penumpang=nmpenumpang;
this.hasil=byr;

this.naik=function(nmp){
    if(this.penumpang.length==0){
        this.penumpang.push(nmp);
        return this.penumpang;
    }
    else if(this.penumpang.includes(nmp)){
        console.log('penumpang sudah ada dalam angkot');
        return this.penumpang;
    }
    for(f in this.penumpang){
        if(this.penumpang[f]==undefined){
            this.penumpang[f]=nmp;
            return this.penumpang;
        }
        else if(f ==this.penumpang.length-1){
            this.penumpang.push(nmp);
            return this.penumpang;
        }
    }
}

this.turun=function(nama,sum){
    if(this.penumpang.length==0){
        console.log('angkot masih kosong');
        return this.penumpang;
    }
    for(r in this.penumpang){
        if(this.penumpang[r]==nama && sum!=0){
            this.penumpang[r]=undefined;
            this.hasil +=sum;
            return this.penumpang;
        }
        else if(sum==0){
            console.log('penumpang belum bayar');
            return this.penumpang;
        }
    }
    console.log('penumpang tidak ada dalam angkot');
}
}

let angkotlagi=new angkot('niko','clebung-maor',['niko','alfin','setya'],0); 
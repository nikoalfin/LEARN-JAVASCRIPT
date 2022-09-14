let penumpang=[];
let tambah=function(nama,penumpang){
    if(penumpang.length==0){
     penumpang.push(nama);
     return penumpang ;
    }
     else {
        for(let i=0;i<penumpang.length;i++){
            if(penumpang[i]==undefined){
                penumpang[i]=nama;
                return penumpang;
            }
            else if(penumpang[i]==nama){
                console.log('maaf penumpang sudah ada didalam');
                return penumpang;
            }
            else if(i==penumpang.length-1){
                penumpang.push(nama);
                return penumpang;
            }
        }
     }
}

let hapus=function(namaturun,penumpang){
    if(penumpang.length==0){
        console.log('maaf angkot masih kosong');
        return penumpang
    }
    else{
        for(let j=0;j<penumpang.length;j++){
            if(penumpang[j]==namaturun){
                penumpang[j]=undefined;
                return penumpang;
            }
            else if(penumpang[j]!=namaturun){
                console.log(namaturun+' tidak ada dalam angkot');
                return penumpang;
            }
        }
    }
}
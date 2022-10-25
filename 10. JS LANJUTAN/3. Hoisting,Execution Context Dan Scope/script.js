// 1. ========================================
// console.log(say()); 
// hasil error jk ditaruh atasnya let hallo

// let hallo = 'hallo gesss';

// console.log(say());
// hasil tidak error karena ditaruh dibawah let hallo


// function say(){
//     return `selamat pagi ${hallo}`;
// } 

// 2. ========================================
// console.log(nama);
// let nama='niko';
// error karena nama tdk terdefinisi


// 3. ========================================
function a(){
    console.log('ini a');
        function b(){
            console.log('ini b');
                function c(){
                    console.log('ini c');
                }
            c();
        }
    b();
}
a();


// HOISTING ADALAH ISTILAH YANG HASILNYA AKAN WINDOW, CONTOH biasanya ada perumpamaan "function ini kena hoisting" artinya hasil dr function tersebut adalah window.

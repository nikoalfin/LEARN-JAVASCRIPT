// 1 ============================================================
function myFunction(a){
    //   a.splice(0,3);
    //   return a;
    
    //   atau bisa jg
    return a.slice(3);
    };
    
    console.log(myFunction([1,2,3,4]));

// myFunction([1,2,3,4])       Expected [4]
// myFunction([5,4,3,2,1,0])   Expected [2,1,0]
// myFunction([99,1,1])        Expected []



// 2. ============================================================
function myFunction(arr){
    return arr.sort();
}

// myFunction(['b', 'c', 'd', 'a'])                Expected ['a', 'b', 'c', 'd']
// myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']) Expected ['a', 'a', 'c', 'd', 'w', 'y', 'z']





// 3. ==============================================================
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n){
    return a.slice(-n);
};

// myFunction([1, 2, 3, 4, 5], 2)          Expected [ 4, 5 ]
// myFunction([1, 2, 3], 6)                Expected [ 1, 2, 3 ]
// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3) Expected [ 6, 7, 8 ]




// 4. ==============================================================
function myFunction(a,b){
    // let hus=a.indexOf(b);
    // if(hus>=0) a.splice(hus,1);
    // return a;

    return a.filter(val => val !== b);
};

console.log(myFunction([1,2,'2',1], 1));

// myFunction([1,2,3], 2)            Expected [1, 3]
// myFunction([1,2,'2'], '2')        Expected [1, 2]
// myFunction([false,'2',1], false)  Expected ['2', 1]
// myFunction([1,2,'2',1], 1)        Expected [2, '2']






// 5. ==============================================================
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a){
    return a.filter(f => f < 0).length;
}


// myFunction([1,-2,2,-4])  Expected 2
// myFunction([0,9,1])      Expected 0
// myFunction([4,-3,2,1,0]) Expected 1





// 6. ==============================================================
function myFunction(arr){
    return arr.sort().reverse();
}


// myFunction([1,3,2])   Expected [3,2,1]
// myFunction([4,2,3,1]) Expected [4,3,2,1]



// 7. ==============================================================
function myFunction(a) {
    return a.reduce((acc, cur) => acc + cur, 0);

    // atau jg bisa gini >>>>>>>>

    // let has=0;
    // for(let i=0;i<a.length;i++) has+=a[i];
    // return has;
 }


// myFunction([10,100,40])     Expected 150
// myFunction([10,100,1000,1]) Expected 1111
// myFunction([-50,0,50,200])  Expected 200





// 8. =============================================================
function myFunction(a){
        let has=0;
        for(let i=0;i<a.length;i++) has+=a[i];
        
        return has/a.length;

    // atau
    // return a.reduce((c,b) => c+b/a.length)
    
};

console.log(myFunction([-50,0,50,200]));


// myFunction([10,100,40])    Expected 50
// myFunction([10,100,1000])  Expected 370
// myFunction([-50,0,50,200]) Expected 50





// 9. ============================================================
function myFunction(arr){
    return new Set(arr).size == 1;
    // function new Set() berfungsi menghasilkan nilai objek yang berisikan nilai-nilai yang bersifat unik, artinya dalam objek tersebut hanya ada satu nilai saja. contoh : 
    // let array= [1,2,3,4,3,2,4,4];
    // let myar=new Set(array);
    // panggil : 
    // console.log(array);
    // console.log(myar);

    // hasil :
    // 1. [1,2,3,4,3,2,4,4]
    // 2. {1,2,3,4} set() tdk akan menampilkan angka yg sm lebih dr satu,inilah yg disebut nilai" yg bersifat unik
};

console.log(myFunction(['10',10,10,10]));

// myFunction([true, true, true, true]) Expected true 
// myFunction(['test', 'test', 'test']) Expected true 
// myFunction([1,1,1,2])                Expected false 
// myFunction(['10',10,10,10])          Expected false 








// 10. ==========================================================
function myFunction(...arr){
    // return arr.reduce((c,b) => c.concat(b));

    // atau

    return arr.flat();
    // flat() : menggabungkan array bersarang, jk tidak tahu ada berapa sarang maka bs ditulis flat(infinity)
};

//  ...arr = namanya operator spread,anggap saja (...) sintaksnya sebagai penghapus yang menghilangkan tanda kurung array. ...[1, 2, 3] menjadi  1, 2, 3

console.log(myFunction([true, true], [1, 2], ['a', 'b']));

// myFunction([1, 2, 3], [4, 5, 6])             Expected [1, 2, 3, 4, 5, 6]
// myFunction(['a', 'b', 'c'], [4, 5, 6])       Expected ['a', 'b', 'c', 4, 5, 6]
// myFunction([true, true], [1, 2], ['a', 'b']) Expected [true, true, 1, 2, 'a', 'b']







// 11. ===========================================================
function myFunction(a,b){
    return a.concat(b).sort((c,d)=>c-d).filter((x, i, j) => j.indexOf(x) == i);
    //cara baca : a digabung b >> mengurutkan angka dr yg terkecil >> menampilkan angka khusus (jika double maka yg ditulis hanya satu); 
    
    // atau
    
    // return [...new Set([...a, ...b])].sort((x, y) => x - y);
    //cara baca >> ...new Set : menampilkan angka khusus (jika double maka yg ditulis hanya satu) >> [...a,...b] : menggabungkan array a & b >> sort : mengurutkan angka dr yg terkecil 
};

console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// myFunction([1, 2, 3], [3, 4, 5])                        Expected [ 1, 2, 3, 4, 5 ]
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])    Expected [ -11, -10, 5, 22, 41,  42, 333]







// 12. ============================================================
function myFunction(a,b){
    return a.filter((d)=> d>b).reduce((c,g)=>c+g);
 // cara baca : menampilkan angka yg lebih besar dari value b >> menambahkan semua value hasil dr method filter tadi
 };
 
 console.log(myFunction([-10, -11, -3, 1, -4], -3));
 
 // myFunction([1, 2, 3, 4, 5, 6, 7], 2)    Expected 25
 // myFunction([-10, -11, -3, 1, -4], -3)   Expected 1
 // myFunction([78, 99, 100, 101, 401], 99) Expected 602







// 13. ==============================================================
function myFunction(arr){

    return arr.reduce((f,g)=> f.length > g.length? f : g);

};

console.log(myFunction(['I', 'need', 'candy']));

// myFunction(['help', 'me'])          Expected 'help'
// myFunction(['I', 'need', 'candy'])  Expected 'candy'







// 14.================================================================
function myFunction(min,max){
    let hus=[];
        for(let i=min;i<=max;i++) hus.push(i);
    return hus;
};

console.log(myFunction(-5, 5));


// myFunction(2, 10) Expected [2, 3, 4, 5, 6, 7, 8, 9, 10]
// myFunction(1, 3)  Expected [1, 2, 3]
// myFunction(-5, 5) Expected [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
// myFunction(2, 7)  Expected [2, 3, 4, 5, 6, 7]







// 15. =============================================================
function myFunction(arr,num){
    return [...(num > 5 ? [num] : [0]), ...arr];
};

console.log(myFunction([1,2,3], 6));


// myFunction([1,2,3], 6)       Expected [6,1,2,3]
// myFunction(['a','b'], 2)     Expected [0,'a','b']
// myFunction([null,false], 11) Expected [11,null,false]







// 16. ============================================================
function myFunction(arr,num){
    return arr.filter((e, i) => i % nth === nth - 1);
 
 //    atau
 // let rest = [...a];
 // let result = [];
 // for (let i = 0; i < a.length; i++) {
 //    if (rest.length < n) break;
 //    result.push(rest[n - 1]);
 //    rest = rest.slice(n);
 // }
 // return result;
 };
 
 console.log(myFunction([7,2,1,6,3,4,5,8,9,10],2));
 
 
 // myFunction([1,2,3,4,5,6,7,8,9,10],3) Expected [3,6,9]
 // myFunction([10,9,8,7,6,5,4,3,2,1],5) Expected [6,1]
 // myFunction([7,2,1,6,3,4,5,8,9,10],2) Expected [2,6,4,8,10]
 








//  17. ==========================================================
// method reduce((nilaiawal,nilai sebelumnya)=>nilaiawal+nilaisebelumnya,0)
// 0 berfungsi = untuk menentukan nilai awal berapa
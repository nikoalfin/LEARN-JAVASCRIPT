// 1. ==============================================================
function myFunction(obj){
return obj['prop-2'];
};

console.log(myFunction({  one: 1,  'prop-2': 2}));


// myFunction({  one: 1,  'prop-2': 2})            Expected 2
// myFunction({  'prop-2': 'two',  prop: 'test'})  Expected 'two'







// 2. =============================================================
function myFunction(obj, key){
    return obj[key];
}

console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));

// myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')  Expected 'Asia'
// myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') Expected 'Sweden'





// 3. =============================================================
function myFunction(a, b){
    return b in a;
};

console.log(myFunction(({a:1,b:2,c:3},'b')));


// myFunction({a:1,b:2,c:3},'b')             Expected true
// myFunction({x:'a',y:'b',z:'c'},'a')       Expected false
// myFunction({x:'a',y:'b',z:undefined},'z') Expected true






// 4. =============================================================
function myFunction(a,b){
    return Boolean(a[b]);
 };
 console.log(myFunction({x:'a',b:'b',z:undefined},'z'));
 
 // myFunction({a:1,b:2,c:3},'b')             Expected true
 // myFunction({x:'a',y:null,z:'c'},'y')      Expected false
 // myFunction({x:'a',b:'b',z:undefined},'z') Expected false






//  5. ===========================================================
function myFunction(a, b){
    return {[a] : b};
}

console.log(myFunction('a','b'));

// myFunction('a','b') Expected {a:'b'}
// myFunction('z','x') Expected {z:'x'}
// myFunction('b','w') Expected {b:'w'}




// 6. ============================================================
function myFunction(a,b){
    let hus={};
    for(d in a,b){
        hus[a[d]]=b[d];
    // hus[a] === hus.a  sama saja

    // atau
    // return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
    }
return hus;
};

console.log(myFunction(['w','x','y','z'],[10,9,5,2]));


// myFunction(['a','b','c'],[1,2,3])         Expected {a:1,b:2,c:3}
// myFunction(['w','x','y','z'],[10,9,5,2])  Expected {w:10,x:9,y:5,z:2}
// myFunction([1,'b'],['a',2])               Expected {1:'a',b:2}





// 7. =============================================================
function myFunction(a){
    return Object.keys(a);
};

console.log(myFunction({a:1,b:2,c:3}));


// myFunction({a:1,b:2,c:3})       Expected ['a','b','c']
// myFunction({j:9,i:2,x:3,z:4})   Expected ['j','i','x','z']
// myFunction({w:15,x:22,y:13})    Expected ['w','x','y']





// 8. =============================================================
function myFunction(a){
    return Object.values(a).reduce((d,f)=>d+f);
    // cara baca = seleksi value pd object trsbt(hasil=[1,2,3]) >>>> lalu tambahkan semua element
};

console.log(myFunction({a:1,b:2,c:3}));

// myFunction({a:1,b:2,c:3})       Expected 6
// myFunction({j:9,i:2,x:3,z:4})   Expected 18
// myFunction({w:15,x:22,y:13})    Expected 50




// 9. ============================================================
function myFunction(obj){
    delete obj.b
    // menghapus keys b
    return obj;

    // atau
    // const { b, ...rest } = obj;
    // return rest;
};

console.log(myFunction({ b: 0, a: 7, d: 8 }));

// myFunction({ a: 1, b: 7, c: 3 })       Expected { a: 1, c: 3 }
// myFunction({ b: 0, a: 7, d: 8 })       Expected { a: 7, d: 8 }
// myFunction({ e: 6, f: 4, b: 5, a: 3 }) Expected { e: 6, f: 4, a: 3 }





// 10. ============================================================
function myFunction(x,y){
    delete Object.assign(y, {d: y.b})['b'];
    // mengganti key 'b' menjadi 'd' di objek 'y'
    return {...x,...y};

    // atau
    // const { b, ...rest } = y;
    // return { ...x, ...rest, d: b };
};

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }) Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }) Expected { a: 5, b: 4, c: 3, e: 2, d: 1}






// 11. ============================================================
function myFunction(a,b){
    let hus=Object.values(a);
    let ju=Object.keys(a);
    let yu={};
    for(i in hus,ju) {
      yu[ju[i]]=hus[i]*b;
    }
    return yu;

    // atau
    // return Object.entries(a).reduce((acc, [key, val]) => {
    //     return { ...acc, [key]: val * b };
    // }, {});
}

console.log(myFunction({j:9,i:2,x:3,z:4},10));

// myFunction({a:1,b:2,c:3},3)      Expected {a:3,b:6,c:9}
// myFunction({j:9,i:2,x:3,z:4},10) Expected {j:90,i:20,x:30,z:40}
// myFunction({w:15,x:22,y:13},6)   Expected {w:90,x:132,y:78}
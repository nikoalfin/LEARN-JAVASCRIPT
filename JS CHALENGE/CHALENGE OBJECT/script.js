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
}

console.log(myFunction(({a:1,b:2,c:3},'b'));


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

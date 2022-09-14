// 1. ===========================================
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function
myFunction(a, b){
return b.split(a).length-1;
}

// myFunction('m', 'how many times does the character occur in this sentence?') Expected 2
// myFunction('h', 'how many times does the character occur in this sentence?') Expected 4
// myFunction('?', 'how many times does the character occur in this sentence?') Expected 1



// 2. ============================================
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a){
return a%2===0;
}

// myFunction(10) Expected true
// myFunction(-4) Expected true
// myFunction(5) Expected false
// myFunction(-111) Expected false




// 3. ==============================================
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b){
return b.length-1==0 ? b.concat('',a) : a.concat('',b);
}

// myFunction('cheese', 'cake')              Expected 'cheesecake'
// myFunction('lips', 's')                   Expected 'slips'
// myFunction('Java', 'script')              Expected 'Javascript'
// myFunction(' think, therefore I am', 'I') Expected 'I think, therefore I am'




// 4. ==============================================
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a){
return  Number(a.toFixed(2));
}

// myFunction(2.12397) Expected 2.12
// myFunction(3.136)   Expected 3.14
// myFunction(1.12397) Expected 1.12
// myFunction(26.1379) Expected 26.14




// 5. ==============================================
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a){

return a.toString().split('').map(Number);

// a=(123456)
// penjelasan = a dirubah ke string dulu ('1','2','3','4','5','6') >>> terus dirubah menjadi bentuk array ['1','2','3','4','5','6'] >>> terus bentuk array dirubah ke array number [1,2,3,4,5,6];
}

// myFunction(10) Expected [1,0]
// myFunction(931) Expected [9,3,1]
// myFunction(193278) Expected [1,9,3,2,7,8]





// 6. ========================================================
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a,b){
    let hus=a.replace('%','');
    return a.replace('%','').charAt(0).toUpperCase()+hus.slice(1).concat('',b.replace('%','').split('').reverse('').join(''));
}

// console.log(myFunction('java', 'tpi%rcs'));
// console.log(myFunction('c%ountry', 'edis'));
// console.log(myFunction('down', 'nw%ot'));





// 7. =========================================================
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str){      
    var result = "";
     for(var i=0;i<str.length;i++){
        var curr = String.fromCharCode(str.charCodeAt(i)+1);
        result +=curr;
     }
     return result;
  } 
  console.log(myFunction('bnchmf'));


//   myFunction('bnchmf')   Expected 'coding'
//   myFunction('bgddrd')   Expected 'cheese'
//   myFunction('sdrshmf')  Expected 'testing'






// 8. =================================================
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b){
  let hus=a.split('');
    for(let i=3;i<=hus.length;i++){
        if(i/3==1) hus.splice(-i,0,b);  
        else if((i+1)%4==0) hus.splice(-i,0,b);
    };
  return hus.join('');
}
console.log(myFunction('1234567','.'));


// myFunction('1234567','.')           Expected '1.234.567'
// myFunction('abcde','$')             Expected 'ab$cde'
// myFunction('zxyzxyzxyzxyzxyz','w')  Expected 'zwxyzwxyzwxyzwxyzwxyz'
// 1.============================================
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// you soluction
function myFunction(a, b){
let has;
if(a<b)has=a/b;
else has=a*b;
return has;
}

// author soluction
function myFunction(a, b) {
    return a < b ? a / b : a * b
  }

// myFunction(10, 100) Expected 0.1
// myFunction(90, 45) Expected 4050
// myFunction(8, 20) Expected 0.4



// 2.=================================================
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b){
return b*a/100;
}

// myFunction(100,50) Expected 50
// myFunction(10,1) Expected 0.1
// myFunction(500,25) Expected 125



// 3.==========================================================
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function myFunction(a, b, c, d, e, f){
return ((a+b-c)*d/e)**f;
}

// myFunction(6,5,4,3,2,1) Expected 10.5
// myFunction(6,2,1,4,2,3) Expected 2744
// myFunction(2,3,6,4,2,3) Expected -8



// 4.=======================================================
function myFunction(a,b){
  if(a%b==0) return a;
  else{
     while(a%b!=0){
      a++;
     } 
     return a;  
  }

// atau kita sederhanakam lagi program ini menjadi =
  // while(a%b!=0) a++;
  // return a;
}
console.log(myFunction(1,23));

// myFunction(1, 23)  Expected 23
// myFunction(23, 23) Expected 23
// myFunction(7, 3)   Expected 9
// myFunction(-5, 7)  Expected 0
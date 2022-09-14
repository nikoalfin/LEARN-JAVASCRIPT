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


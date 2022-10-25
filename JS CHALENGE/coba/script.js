function myFunction(a,b){
 return Math.abs(a.getTime() - b.getTime())/(1000*3600*24);


//  atau
//    const dif = Math.abs(a - b);
//    return dif / 1000 / 60 / 60 / 24
}

// console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')));

// myFunction(new Date('2020-06-11'), new Date('2020-06-01')) Expected 10
// myFunction(new Date('2000-01-01'), new Date('2020-06-01')) Expected 7457


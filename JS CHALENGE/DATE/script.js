// 1. ====================================================
function myFunction(a,b){
    return a.getTime() === b.getTime();
  }
  
  console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
  
  // myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) Expected false
  // myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) Expected true
  // myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) Expected false

  


// 2. ====================================================
function myFunction(a,b){
  let tam=a.getTime() - b.getTime()
  let tu=tam<0?tam*-1:tam;
  return tu/(1000*3600*24);
  
  //atau
  //  return Math.abs(a.getTime() - b.getTime())/(1000*3600*24); 

 
 //  atau
 //    const dif = Math.abs(a - b);
 //    return dif / 1000 / 60 / 60 / 24
 }
 
 // console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')));
 console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')));
 
 // myFunction(new Date('2020-06-11'), new Date('2020-06-01')) Expected 10
 // myFunction(new Date('2000-01-01'), new Date('2020-06-01')) Expected 7457
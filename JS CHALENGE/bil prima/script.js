function prima(a){
    function dua(n){
       let gr = n>=1;
       for(let i=2;i<n;i++){
           if(n%i==0) gr=false;
       }
       return gr;
    }
    while(!dua(a)) a++;
    return a;
}
console.log(prima(14));
   
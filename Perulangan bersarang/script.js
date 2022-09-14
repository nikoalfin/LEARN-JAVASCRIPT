let s='';
for(let i=1;i<=10;i++){
    for(let j=1;j<=i;j++){
        s +=' ';
    }

    for(let j=10;j>=i;j--){
        s +='*';
    }

    for(let j=10;j>i;j--){
        s +='*';
    }
    s +='\n';
}
console.log(s);



let p='';
for(let k=1;k<=10;k++){
    for(let l=1;l<=k;l++){
        p +=' ';
    }

    for(let m=10;m>=k;m--){
        p +='*';
    }

    p +='\n';
}
console.log(p);



let q='';
for(let n=1;n<=10;n++){
    for(let o=1;o<=n;o++){
        q +='*';
    }

    q +='\n';
}
for(let v=1;v<=9;v++){
    for(let u=9;u>=v;u--){
        q +='*';
    }
    q +='\n';
}
console.log(q);
console.log('\n');

let b='';
for(let c=1;c<=5;c++){

    for(let d=5;d>=c;d--){
        b +=' ';
    }
    for(let d=1;d<=c;d++){
        b +='*';
    }
    for(let d=1;d<c;d++){
        b +='*';
    }

    
    b +='\n';
}
console.log(b);



let w='';
for(let y=1;y<=10;y++){

    for(let z=1;z<=5;z++){
        if(y%2==1){
            w +='#';
            w +=' ';
        }
        else{
            w +=' ';
            w +='#';
        }
    }
    w +='\n';
}

console.log(w);


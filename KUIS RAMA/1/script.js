const spin=document.querySelector('.klik');
const hasil=document.querySelector('.hasil');
const img1=document.querySelector('.img1');
const img2=document.querySelector('.img2');
const img3=document.querySelector('.img3');

spin.addEventListener('click',()=>{
// nilai random =========
    let ar=[];
   
    for(let i=0;i<3;i++){
        function angrandom(){
            let random=Math.random();
            if(random<=0.2) return 'semangka';
            if(random>0.2 && random<=0.4) return 'jeruk';
            if(random>0.4 && random<=0.6) return 'bintang';
            if(random>0.6 && random<=0.8) return 'basebal';
            return 'tuju'        
        }
        ar.push(angrandom());
    }
   
// show to html ========
// fungsi putar() ==========
        let i=0
        let awldate=new Date().getTime();
        setInterval(()=>{
            if(new Date().getTime() - awldate > 1000){
                clearInterval;
                return;
            }
            img1.setAttribute('src','img/'+ar[i++]+'.jpg');
            img2.setAttribute('src','img/'+ar[i++]+'.jpg');
            img3.setAttribute('src','img/'+ar[i++]+'.jpg');
            if(i==ar.length) i=0;
        },50)

        
// rules ========
    // 1. rules jika 2 3 sama 
      let jeruk=ar.reduce((r,t)=> r+(t === 'jeruk'),0);
      switch(jeruk){
        case 3:
            hasil.innerHTML= 'x3';
            break;
        case 2:
            hasil.innerHTML= 'Draw'; 
            break;
      }
      
      let semangka=ar.reduce((r,t)=> r+(t === 'semangka'),0)
      switch(semangka){
        case 3:
            hasil.innerHTML= 'x3';
            break;
        case 2:
            hasil.innerHTML= 'Draw'; 
            break;
      }

      let basebal=ar.reduce((r,t)=> r+(t === 'basebal'),0)
      switch(basebal){
        case 3:
            hasil.innerHTML= 'x5';
            break;
        case 2:
            hasil.innerHTML= 'x2'; 
            break;
      }

      let bintang=ar.reduce((r,t)=> r+(t === 'bintang'),0)
      switch(bintang){
        case 3:
            hasil.innerHTML= 'x5';
            break;
        case 2:
            hasil.innerHTML= 'x2';
            break;
      }

      let angka=ar.reduce((r,t)=> r+(t === 'tuju'),0)
      switch(angka){
        case 3:
            hasil.innerHTML= 'x15';
            break;
        case 2:
            hasil.innerHTML= 'x5';
            break;
      }
      
    // rules jika 3 tdk sama 
      if(jeruk==1 && semangka==1 && bintang==1) hasil.innerHTML= 'lose';
      if(jeruk==1 && semangka==1 && basebal==1) hasil.innerHTML= 'lose';
      if(jeruk==1 && semangka==1 && angka==1) hasil.innerHTML= 'lose';
      if(angka==1 && basebal==1 && jeruk==1) hasil.innerHTML= 'lose';
      if(angka==1 && basebal==1 && semangka==1) hasil.innerHTML= 'lose';
      if(bintang==1 && basebal==1 && angka==1) hasil.innerHTML= 'lose';
      if(basebal==1 && bintang==1 && jeruk==1) hasil.innerHTML= 'lose';
      if(bintang==1 && semangka==1 && basebal==1) hasil.innerHTML= 'lose';
      if(bintang==1 && semangka==1 && angka==1) hasil.innerHTML= 'lose';
})



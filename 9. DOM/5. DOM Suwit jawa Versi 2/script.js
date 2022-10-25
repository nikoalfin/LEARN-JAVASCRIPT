function getpilcomputer(){
    let random=Math.random();
    if(random<=0.3) return 'orang';
    else if(random>=0.4 && random<=0.6) return 'semut';
    return 'gajah';
};

function gethasil(random,player){
if(player == random) return 'SERI';

if(player =='gajah' ) return (random=='orang') ? 'MENANG' : 'KALAH';

if(player =='orang' ) return (random=='gajah') ? 'KALAH' : 'MENANG';

if(player =='semut' ) return (random=='gajah') ? 'MENANG' : 'KALAH';
 
return alert('pilihan anda salah');
};






// buat diringkas =======
const pilihan=document.querySelectorAll('li img');
const gamcom=document.querySelector('.img-komputer');
const skorplayer=document.querySelector('.hasilplayer');
const skorcom=document.querySelector('.hasilcomputer');

// array skor =======
let ar=[];
let ur=[];

pilihan.forEach((io)=>{
    io.addEventListener('click',()=>{
        const pilcom=getpilcomputer();
        const pilpemain=io.className;
        const has=gethasil(pilcom,pilpemain);

        putar();
        // mengambil fungsi putar 

        setTimeout(()=>{
            const hasil=document.querySelector('.info').innerHTML=has;

            // menghitung skor =========
            
            if( has == 'MENANG') ar.push('menang');
            skorplayer.innerHTML=ar.length;

            if( has == 'KALAH') ur.push('kalah');
            skorcom.innerHTML=ur.length;

            gamcom.setAttribute('src','img/'+pilcom+'.png');
        },1500)
    //  fungsi setTimeout() diatas = setelah 1,5 detik dia baru muncul 
    })
})


// // fungsi putar
// function putar(){
// const gambar=['gajah','orang','semut']
// let i=0;
// const WaktuMulai=new Date().getTime();
// setInterval(function(){
//     if(new Date().getTime()-WaktuMulai>1000){
//         clearInterval;
//         return
//     }
//     gamcom.setAttribute('src','img/'+gambar[i++]+'.png');
//     if(i == gambar.length) i=0;
// },100)

// }


function putar(){
    let gam=['gajah','semut','orang'];
    let i=0
  let awldate=new Date().getTime();
    setInterval(()=>{
        if(new Date().getTime()- awldate > 1000){
            clearInterval;
            return;
        }
        gamcom.setAttribute('src','img/'+gam[i++]+'.png');
        if(i==gam.length) i=0;
    },100);
}




// // buat dom = versi panjangya, ringkasnya ada dia atas

// const pgajah=document.querySelector('.gajah');
// const porang=document.querySelector('.orang');
// const psemut=document.querySelector('.semut');
// const gamcom=document.querySelector('.img-komputer');

// pgajah.addEventListener('click',()=>{
//     const pilcom=getpilcomputer();
//     const pilpemain=pgajah.className;
//     // classname = buat mengetahui kita klik element yang mana

//     const has=gethasil(pilcom,pilpemain);
//     // console.log('kom = '+pilcom) 
//     // console.log('pemain = '+pilpemain) 
//     // console.log('hasil = '+has) 

//     const hasil=document.querySelector('.info').innerHTML=has;
//     //memasukan hasil ke dalam element div class info

//     gamcom.setAttribute('src','img/'+pilcom+'.png');
//     // memasukan img sesuai pilihan random dari komputer
// })


// porang.addEventListener('click',()=>{
//     const pilcom=getpilcomputer();
//     const pilpemain=porang.className;

//     const has=gethasil(pilcom,pilpemain);
 
//     const hasil=document.querySelector('.info').innerHTML=has;

//     gamcom.setAttribute('src','img/'+pilcom+'.png');
// })


// psemut.addEventListener('click',()=>{
//     const pilcom=getpilcomputer();
//     const pilpemain=psemut.className;

//     const has=gethasil(pilcom,pilpemain);

//     const hasil=document.querySelector('.info').innerHTML=has;

//     gamcom.setAttribute('src','img/'+pilcom+'.png');
// })
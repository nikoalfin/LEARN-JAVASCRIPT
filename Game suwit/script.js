let jawab=true;
while(jawab){
let orang=prompt('Masukan pilihan = gajah / orang / semut');

// bilangan random
let random=Math.random();
if(random<=0.3) random='orang';
else if(random>=0.4 && random<=0.6) random='semut';
else random='gajah';

// rulese
let hasil='';
if(orang == random) hasil='SERI';

else if(orang =='gajah' ) hasil=(random=='orang') ? 'MENANG' : 'KALAH';

else if(orang =='orang' ) hasil=(random=='gajah') ? 'KALAH' : 'MENANG';

else if(orang =='semut' ) hasil=(random=='gajah') ? 'MENANG' : 'KALAH';

else alert('pilihan anda salah');

alert(' komputer memilih = '+random+'\n anda memilih = '+orang+'\n hasilnya anda = '+hasil);

jawab = confirm('lagi??');
}
alert('terima kasih sudah bermain');
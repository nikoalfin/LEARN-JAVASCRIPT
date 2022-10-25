const playerOpt = document.querySelectorAll('.player-option img');
const compOpt = document.querySelector('.option.computer-option img');

playerOpt.forEach((v,i,arr) => {
    v.onclick = async (e) => {
        arr.forEach(e=>{
            e.classList.remove('active');
        })
        e.target.classList.add('active')

        const playerOption = getValue(e);


        // await until acak comp result is resolve 
        const compOption = await acakCompOPT(compOpt);

        setTimeout(() => {
            res.innerHTML = isWin(compOption,playerOption);
        },100)
        
    }
});

const acakCompOPT=  (el) => {
    const options = ['semut','gajah','orang'];
    let index =  Math.floor(Math.random()*3);
    let duration = 1000;
    let speed = 100;
    
    // sto ->  async func
    const m =  setInterval(() => {
        el.setAttribute('src', `./img/${options[index]}.png`);
        if (duration > 0) {
            index == options.length - 1 ? index = 0 : index++;
            console.log("shufle")
            duration -= speed;
        } else if (duration === 0) {
            clearInterval(m);
        }
    }, speed);

    

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(options[index]);
        },duration+100)
    })
}

const getValue = (src) => {
    return src.target.getAttribute('value');
}

const isWin = (compOpt,playerOpt) => {
    if(compOpt === playerOpt) return 'Seri'
    else{
        switch(playerOpt){
            case 'orang':
                return compOpt === 'gajah' ? 'Kalah' : 'Menang';
            case 'semut' :
                return compOpt === 'orang' ? 'Kalah' : 'Menang'; 
            case 'gajah':
                return compOpt === 'orang' ? 'Menang': 'Kalah';
        }
    }
}

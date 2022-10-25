let items = [0, 1, 2, 3, 4]
let emoji = ['🍊', '🍉', '🥎', '⭐', ' 7️⃣ ']
let result = []
let akhir, totalNilai, stopLoop
let reducer = (accumulator, curr) => accumulator + curr;

for(i=0; i<3; i++) {
    result.push(items[Math.floor(Math.random() * items.length)]) 
} 

console.log(`${emoji[result[0]]} ${emoji[result[1]]} ${emoji[result[2]]}`)

for(i=0; i<3; i++) {
    for(j=0; j<3; j++) {

    if(stopLoop) {
        break
    }

        if(i != j) {
            if(result[i] == result[j] && !(result[0] == result[1] && result[0] == result[2])) {
                totalNilai = result[i] + result[j]
                if(totalNilai <= 2) {
                    akhir = 'Draw!'
                } else if(totalNilai > 2 && totalNilai <= 6) {
                    akhir = 'Win X2 Nih!'
                } else {
                    akhir = 'Win X5 Nih!'
                } 
                stopLoop = true
            } else if(result[0] == result[1] && result[0] == result[2]) {
                totalNilai = result.reduce(reducer)
                if(totalNilai <= 3) {
                    akhir = 'Jackpot X3 !'
                } else if(totalNilai <= 12) {
                    akhir = 'Jackpot X5 !'
                } else {
                    akhir = 'FINAL JACKPOT X15 !!!'
                }
                stopLoop = true
            } else {
                akhir = 'Lose!'
            }
        }
    }
}

console.log(akhir)
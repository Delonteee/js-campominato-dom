const startButton = document.getElementById('start-button');
console.log('startButton', startButton, typeof startButton);

const diffSelect = document.getElementById('difficulty');
console.log('diffSelect', diffSelect, typeof diffSelect);

const gridContainer = document.querySelector('.grid-container');
console.log('gridContainer', gridContainer, typeof gridContainer);

let punti = 0;

startButton.addEventListener('click', function() {

    console.log(diffSelect.value);
    const cellNumber = parseInt(diffSelect.value);

    gridContainer.innerHTML = '';

    //genera 16 numeri casuali con numero max = difficolta gioco
    const numeriBombe = [];
    while (numeriBombe.length < 16) {

        let random = numRandom(1, diffSelect.value);

        //non ci devono essere doppioni
        if (!numeriBombe.includes(random)) {
            numeriBombe.push(random);
        }
    }

    console.log('numeriBombe', numeriBombe, typeof numeriBombe);

    for (let i = 1; i <= cellNumber; i++) {
        const cell = document.createElement('div');
        cell.innerHTML =  i ; 
        cell.classList.add('cell');cell.classList.add('cell-' + cellNumber);
   

        cell.addEventListener('click', function(){
            console.log('this', this, typeof this);

            const numeroCella = parseInt(this.innerHTML);
            console.log('numeroCella', numeroCella, typeof numeroCella);

            if(numeriBombe.includes(numeroCella)) {
                this.classList.add('bomb');
            } else {
                this.classList.add('clicked');
                punti++;
            }

            console.log('PUNTEGGIO', punti);
        })

        gridContainer.append(cell);
    }
})

function numRandom(min, max) {
    return Math.floor(Math.random () * (max - min + 1))  + min;
}

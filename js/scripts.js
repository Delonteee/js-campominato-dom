const startButton = document.getElementById('start-button');
console.log('startButton', startButton, typeof startButton);

const diffSelect = document.getElementById('difficulty');
console.log('diffSelect', diffSelect, typeof diffSelect);

const gridContainer = document.querySelector('.grid-container');
console.log('gridContainer', gridContainer, typeof gridContainer);

startButton.addEventListener('click', function() {

    console.log(diffSelect.value);
    const cellNumber = parseInt(diffSelect.value);

    gridContainer.innerHTML = '';

    for (let i = 1; i <= cellNumber; i++) {
        const cell = document.createElement('div');
        cell.innerHTML = '<span>' + i + '</span>'; 
        cell.classList.add('cell');

        cell.classList.add('cell-' + cellNumber);
    /*   
        LA RIGA DI CODICE PRECEDENTE RIASSUME QUESTO IF ELSE
    
        if (cellNumber == 100) {
            cell.classList.add('cell-100');
        } else if (cellNumber == 81) {
            cell.classList.add('cell-81');
        } else if (cellNumber == 49) {
            cell.classList.add('cell-49');
        }
    */

        cell.addEventListener('click', function(){

            console.log('this', this, typeof this);

            cell.classList.add('active');
            console.log(cell.innerText);
        })

        gridContainer.append(cell);
    }
})


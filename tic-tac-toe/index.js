// tic tac toe

const winningPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
// console.log(winningPatterns);

let cells = document.querySelectorAll('.cell');
let reset = document.querySelector('#restart');
reset.addEventListener('click', () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].style.color = 'black';
        cells[i].addEventListener('click', cellClicked);
    }
    game.style.display = 'block';
    status.innerHTML = 'X\'s turn';
}
);





for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}



let turn = 'X';
let status = document.querySelector('#status');
if (status) {
  status.innerHTML = 'X\'s turn';
}
function cellClicked() {
  if (this.innerHTML === '' && turn === 'X') {
    this.innerHTML = 'X';
    turn = 'O';
    this.style.color = 'red';
    status.innerHTML = 'O\'s turn';
    checkWinner('X');
  }
    else if (this.innerHTML === '' && turn === 'O') {
        this.innerHTML = 'O';
        this.style.color = 'red';
        turn = 'X';
        status.innerHTML = 'X\'s turn';
        checkWinner('O');
    }
}

let game = document.querySelector('#game');
const checkWinner = (player) => {
    for (let i = 0; i < winningPatterns.length; i++){
        text1= cells[winningPatterns[i][0]].innerHTML;
        text2= cells[winningPatterns[i][1]].innerHTML;
        text3= cells[winningPatterns[i][2]].innerHTML;
        console.log(text1, text2, text3);
        if (text1 === player && text2 === player && text3 === player) {
            game.style.display = 'none';
            status.innerHTML = player + ' wins';
            for (let i = 0; i < cells.length; i++) {
                cells[i].removeEventListener('click', cellClicked);
            }
        }

        // check for draw

        let draw = true;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].innerHTML === '') {
                draw = false;
            }
        }
        if (draw) {
            status.innerHTML = 'It\'s a draw';
            game.style.display = 'none';
        }
    }
    }

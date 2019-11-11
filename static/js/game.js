setInterval(moveBg, 10);
let y = 0;
function moveBg(){
        let board = document.querySelector('.game_field')
        y--;
        board.style.backgroundPositionY = y + 'px';
}


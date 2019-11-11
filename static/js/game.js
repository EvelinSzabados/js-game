setInterval(moveBg, 10);
let y = 0;
function moveBg(){
        let board = document.querySelector('.main_container')
        y--;
        board.style.backgroundPositionY = y + 'px';
}


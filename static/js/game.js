setInterval(moveBg, 10);
let y = 0;
let meteorY = 0;
function moveBg(){
        let board = document.querySelector('.game_field');
        y--;
        board.style.backgroundPositionY = y + 'px';
}

let MyVar = setInterval(moveMeteor, 6)
function moveMeteor(){
                const meteor = document.getElementById('meteor');
                meteorY++;
                if (meteorY >254){
                        clearInterval(MyVar);
                }
                meteor.style.top = 2 * meteorY + 'px';

}

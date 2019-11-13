setInterval(moveBg, 10);
let y = 0;
let meteorY = 0;
function moveBg(){
<<<<<<< HEAD
        let board = document.querySelector('.game_field');
        y--;
=======
        let board = document.querySelector('.game_field')
        y++;
>>>>>>> master
        board.style.backgroundPositionY = y + 'px';
}

const ship = document.getElementById('ship')
window.addEventListener("keydown", function (event) {
        let left = ship.style.left === '' ? 10 : parseInt(ship.style.left.replace('px', ''), 10)
        console.log(left)
        if (left > 10 && left < 1250  ){
            switch(event.code) {
                case "ArrowLeft":
                        ship.style.left = `${left-35}px`;

                        break;
                case "ArrowRight":
                        ship.style.left = `${left+35}px`;
                        break;
        }
        }else if (left >= 1250){
                ship.style.left = `${left-20}px`
        }else{
                ship.style.left = `${left+20}px`
        }

})

let MyVar = setInterval(moveMeteor, 6)
function moveMeteor(){
                const meteor = document.getElementById('meteor');
                meteorY++;
                if (meteorY >254){
                        clearInterval(MyVar);
                }
                meteor.style.top = 2 * meteorY + 'px';

}

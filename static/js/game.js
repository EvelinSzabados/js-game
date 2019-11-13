setInterval(moveBg, 10);
let y = 0;
let meteorY = 0;
function moveBg(){
        let board = document.querySelector('.game_field');
        y++;
        board.style.backgroundPositionY = y + 'px';
}

const ship = document.getElementById('ship');
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

});

let MyVar = setInterval(moveMeteor, 10);
function moveMeteor(){
                let meteorY = 0;
            const meteor = document.getElementById('meteor');
            meteor.style.display = "block";
            let randomPlace = Math.floor(Math.random() * 1000);
            meteor.style.left = `${randomPlace}px`;

            let MyVar = setInterval(moveMeteor, 15);
                function moveMeteor(){
                meteorY++;
                meteor.style.top = 2 * meteorY + 'px';
                if (meteorY >254){
                    clearInterval(MyVar);
                    meteor.style.left = `${randomPlace}px;`;
                    meteor.style.display = "none";
                    meteor.style.top = "0px";
                }
            }
}

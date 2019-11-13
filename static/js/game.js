function moveBg(){
    let y = 0;
        let board = document.querySelector('.game_field');
        y++;
        board.style.backgroundPositionY = y + 'px';
}

function moveShip(){
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
}

function handleMeteor(){
    let meteorY = 0;
    let MyVar = setInterval(moveMeteor, 6)
        function moveMeteor(){

        const meteor = document.getElementById('meteor');
        meteorY++;
        if (meteorY >254){
            clearInterval(MyVar);
        }
        meteor.style.top = 2 * meteorY + 'px';

        }
}

function handleBullet(){
    const ship = document.getElementById('ship');
    const bullet = document.getElementById('bullet');
    window.addEventListener("keydown", function (event) {
        let top = bullet.style.left === '' ? 590 : parseInt(bullet.style.left.replace('px', ''), 10);
        let shipLeft = ship.style.left === '' ? 10 : parseInt(ship.style.left.replace('px', ''), 10)
        bullet.style.left = `${shipLeft+45}px`
        if (event.code === "KeyX") {
            bullet.style.top = `${top - 45}px`;
        }
    })
}
function main(){
    setInterval(moveBg, 10);
    moveShip()
    handleMeteor()
    handleBullet()
}

main()



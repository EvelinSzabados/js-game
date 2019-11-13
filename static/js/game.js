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

function positionBullet(){

    const bullet = document.getElementById('bullet');
    const ship = document.getElementById('ship');

    window.addEventListener("keydown", function (event){

        let left = ship.style.left === '' ? 10 : parseInt(ship.style.left.replace('px', ''), 10);
        if(event.code === "ArrowLeft" || event.code === "ArrowRight"){
            bullet.style.left = `${left+45}px`;
        }else if (event.code ==="KeyX"){
            let bulletY = 0;
            const bulletTop = bullet.style.top === '' ? 590 : parseInt(bullet.style.top.replace('px', ''), 10);
            const bulletLeft = bullet.style.left === '' ? 53 : parseInt(bullet.style.left.replace('px', ''), 10);
            let shotBullet = setInterval(function(){
                bullet.style.left = `${bulletLeft}px`;
                bullet.style.top = `${bulletTop-bulletY}px`
                bulletY+=5;
                if(bulletY > 550){
                    clearInterval(shotBullet)
                    bullet.style.top = `590px`
                }
            }, 6)
        }

    })

}
function main(){
    setInterval(moveBg, 10);
    moveShip()
    handleMeteor()
    positionBullet()
}

main()



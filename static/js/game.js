let y = 0;
function moveBg(){
    let board = document.querySelector('.game_field');
    y++;
    board.style.backgroundPositionY = y + 'px';
}

function moveShip(){
    const ship = document.getElementById('ship');
    window.addEventListener("keydown", function (event) {
        let left = ship.style.left === '' ? 10 : parseInt(ship.style.left.replace('px', ''), 10);

        if (left > 10 && left < 640  ){
            switch(event.code) {
                case "ArrowLeft":
                        ship.style.left = `${left-40}px`;
                        break;
                case "ArrowRight":
                        ship.style.left = `${left+40}px`;
                        break;
        }
        }else if (left >= 640){
                ship.style.left = `${left-20}px`;
        }else{
                ship.style.left = `${left+20}px`;
        }
    })
}

function handleMeteor(){
    let gameField = document.getElementById('game_field')
    let meteor = document.createElement('IMG');
    meteor.setAttribute('src', "/static/meteor2.png");
    meteor.setAttribute('id', 'meteor');
    gameField.appendChild(meteor);

    let meteorY = 0;
    let meteorX = Math.floor(Math.random() * (700 - 1)) + 1;
    meteor.style.left = `${meteorX}px`;

    let meteorFallInterval = setInterval(function(){
        meteorY++;
        meteor.style.top = meteorY + 'px';
        collisionDetection(meteor)
        if (meteorY > 490){

            meteor.remove();
            clearInterval(meteorFallInterval);
        }
    }, 5);

}
function collisionDetection(){
    const meteor = document.getElementById('meteor');
    const ship = document.getElementById('ship')
    let meteorPlace = meteor.getBoundingClientRect();
    let shipPlace = ship.getBoundingClientRect();
    let offset= meteorPlace.left - shipPlace.left;
    console.log(offset)
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
            const bulletTop = bullet.style.top === '' ? 510 : parseInt(bullet.style.top.replace('px', ''), 10);
            const bulletLeft = bullet.style.left === '' ? 53 : parseInt(bullet.style.left.replace('px', ''), 10);
            let shotBullet = setInterval(function(){
                bullet.style.left = `${bulletLeft}px`;
                bullet.style.top = `${bulletTop-bulletY}px`;
                bulletY+=5;
                if(bulletY > 500){
                    clearInterval(shotBullet);
                    bullet.style.top = `510px`;
                }
            }, 6);
        }
    })
}

function main(){

    setInterval(moveBg, 10);
    moveShip();
    setInterval(handleMeteor, 1100);
    positionBullet();
}

main();



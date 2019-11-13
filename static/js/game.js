let y = 0;
function moveBg(){

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
                        ship.style.left = `${left-40}px`;

                        break;
                case "ArrowRight":
                        ship.style.left = `${left+40}px`;
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
            let meteorY2 = 0;
            let meteorY3 = 0;
            let meteor = document.getElementById('meteor');
            let meteor2 = document.getElementById('meteor2');
            let meteor3 = document.getElementById('meteor3');
            meteor.style.display = "block";
            meteor.style.top = "0px";
            meteor2.style.display = "block";
            meteor2.style.top = "0px";
            meteor3.style.display = "block";
            meteor3.style.top = "0px";
            let randomPlace = Math.floor(Math.random() * 300)
            meteor.style.left = `${randomPlace}px`
            let randomPlace2 = Math.floor(Math.random() * 600) +300
            let randomPlace3 = Math.floor(Math.random() * 700) +400
            if(randomPlace !== randomPlace2 && randomPlace2 !== randomPlace3){
                meteor2.style.left = `${randomPlace2}px`
                meteor3.style.left = `${randomPlace3}px`
            }


            let MyVar = setInterval(moveMeteor, 10)
                function moveMeteor(){

                meteorY++;
                meteor.style.top = 2 * meteorY + 'px';
                if (meteorY > 296){
                    meteor.style.display = "none";
                    clearInterval(MyVar);
                    }

            }
            let secondMeteor = setInterval(function(){
                 meteorY2++;
                 meteor2.style.top = 2 * meteorY2 + 'px';
                 if (meteorY2 > 300){
                     meteor2.style.display = "none";
                    clearInterval(secondMeteor);
                    }
            }, 13)

                let thirdMeteor = setInterval(function(){
                 meteorY3++;
                 meteor3.style.top = 2 * meteorY3 + 'px';
                 if (meteorY3 > 300){
                     meteor3.style.display = "none";
                    clearInterval(thirdMeteor);
                    }
            }, 8)
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
    setInterval(handleMeteor, 4000)
    setInterval(handleMeteor, 8000)
    setInterval(handleMeteor, 12000)
    positionBullet()
}

main()



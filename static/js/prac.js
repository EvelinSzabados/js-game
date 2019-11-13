  let meteorY = 0;
            let meteorY2 = 0;
            let meteorY3 = 0;
            let meteor = document.getElementById('meteor');
            let meteor2 = document.getElementById('meteor2');
            let meteor3 = document.getElementById('meteor3');
            meteor.style.display = "block";
            meteor.style.top = "0px";
            meteor2.style.top = "0px";
            meteor2.style.display = "block";
            meteor3.style.display = "block";
            meteor3.style.top = "0px";
            let randomPlace = Math.floor(Math.random() * (100 - 1)) + 1;
            meteor.style.left = `${randomPlace}px`;
            let randomPlace2 = Math.floor(Math.random() * (400 - 300)) + 300;
            let randomPlace3 = Math.floor(Math.random() * (700 - 550))+ 500;
            if(randomPlace !== randomPlace2 && randomPlace2 !== randomPlace3){
                meteor2.style.left = `${randomPlace2}px`;
                meteor3.style.left = `${randomPlace3}px`;
            }


            let MyVar = setInterval(moveMeteor, 10)
                function moveMeteor(){

                meteorY++;
                meteor.style.top = 2.5 * meteorY + 'px';
                if (meteorY > 200){
                    meteor.style.display = "none";
                    clearInterval(MyVar);
                    }

            }
            let secondMeteor = setInterval(function(){

                 meteorY2++;
                 meteor2.style.top = 2 * meteorY2 + 'px';
                 if (meteorY2 > 200){
                     meteor2.style.display = "none";
                    clearInterval(secondMeteor);
                    }
            }, 13)

                let thirdMeteor = setInterval(function(){
                 meteorY3++;
                 meteor3.style.top = 2 * meteorY3 + 'px';
                 if (meteorY3 > 200){
                     meteor3.style.display = "none";
                    clearInterval(thirdMeteor);
                    }
            }, 10)
            setTimeout(handleMeteor, 2800)

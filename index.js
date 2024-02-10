score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("key code is :  ", e.keyCode)
    if (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 87) {
        pikachu = document.querySelector('.pikachu');
        pikachu.classList.add('animatepikachu');
        setTimeout(() => {
            pikachu.classList.remove('animatepikachu')

        }, 700);
    }

    if (e.keyCode == 39 || e.keyCode == 68) {
        pikachu = document.querySelector('.pikachu');
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
        pikachu.style.left = pikachuX + 112 + "px";

    }

    if (e.keyCode == 37 || e.keyCode == 65) {
        pikachu = document.querySelector('.pikachu');
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
        pikachu.style.left = (pikachuX - 112) + "px";

    }
}

setInterval(() => {
    pikachu = document.querySelector('.pikachu');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
  //  console.log(offsetX, offsetY)
    if (offsetX < 113 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAin');
    }

    else if (offsetX < 145 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration : ',newDur)
        }, 500);

    }
}, 10);


function updatescore(score) {
    scorecont.innerHTML = "Your score: " + score
}
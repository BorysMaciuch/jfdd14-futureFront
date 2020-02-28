console.log("start")

const zombie = document.querySelector('.zombieRun')
const hero = document.querySelector('.heroRun')
const divZombie = document.querySelector('.zombieContainer')
const divHero = document.querySelector('.heroContainer')
const divPenguin = document.querySelector('.penguinContainer')
divZombie.style.left = '500px'

let zombieXPosition = 1200;
let zombie3 = divZombie.getBoundingClientRect();
let hero3 = divHero.getBoundingClientRect();
let zombieX = 500
function rect() {

}
const jump = function () {

    //let hero = document.querySelector("#hero");
    const gravity = 10;
    let metrNaPix = 19.2; //wspolczynik dlugosci obrazu dla 1460



    let speed = 100 * metrNaPix; // 30 meters per second or 108 km/hour -- quite fast ...
    let angle = 90 * Math.PI / 180;  // 30 degree angle, moved to radians.
    let speed_x = speed * Math.cos(angle);
    let speed_y = speed * Math.sin(angle);  // now you have initial direction vector
    let x_coord = 200; //pzycja hero
    let y_coord = 445//dla top 562;




    const fps = 60;
    let time_step = 1.0 / fps;    // every frame...


    setInterval(function () {

        if (y_coord < 446 && x_coord < 1920) {

            x_coord += speed_x * time_step //* metrNaPix;
            y_coord -= speed_y * time_step //* metrNaPix;

            //console.log(x_coord, y_coord, speed_x, speed_y);
            speed_y -= gravity * time_step * metrNaPix * metrNaPix;
            //   let hero = document.querySelector("#hero");
            divHero.style.top = `${y_coord}px`;
            divHero.style.left = `${x_coord}px`;
            //console.log(y_coord, "coord y");
            //console.log(divHero.style.left = `${x_coord}px`, "ball x");
            //console.log(speed_y, "speed y");
            // in one second the speed has changed 9.81m/s

            // Final stage: ball shape, mass and viscosity of air causes a counter force
            // that is proportional to the speed of the object. This is a funny part:
            // just multiply each speed component separately by a factor (< 1.0)
            // (You can calculate the actual factor by noticing that there is a limit for speed
            //  speed == (speed - 9.81 * time_step)*0.99, called _terminal velocity_
            // if you know or guesstimate that, you don't need to remember _rho_,
            // projected Area or any other terms for the counter force.

            speed_x *= 0.99;
            speed_y *= 0.99;

            //   console.log(parseInt(divHero.style.top), "style to divHero")
            //   if( parseInt(divHero.style.top) == 245){
            //       divHero.classList.remove("divHeroFlying")

            //console.log(parseInt(divHero.style.top), "style to divHero")
            if (parseInt(y_coord) > 440) {
                hero.classList.remove("heroFlying")
            }
            zombie3 = divZombie.getBoundingClientRect();
            checkCollision(zombie3, hero3)


            divZombie.style.left =`${zombieX}px`
            zombieX -= 10
            console.log(zombieX)


        }
    }, 1000 / fps);
}



document.addEventListener('keypress', function (e) {
    if (e.key == 'g') {
        console.log(e)
        divZombie.style.left = "250px"
    }
})
const heroheight = divHero.style.left


const checkCollision = (zombie3, hero3) => {
    if (parseInt(zombie3.left) < parseInt(hero3.right) + parseInt(hero3.width) &&
    parseInt(zombie3.left) + parseInt(zombie3.width) > parseInt(hero3.left) &&
      parseInt(zombie3.top) < parseInt(hero3.top) + parseInt(hero3.height) &&
      parseInt(zombie3.top) + parseInt(zombie3.height) > parseInt(hero3.top)){
        console.log('kolacja')}
    else { console.log('nie kolacja') }}

 


//zombie move
function zombieMove() {
    divZombie.style.left = `${zombieXPosition}px`;
    zombieXPosition -= 5;
    if (zombieXPosition < -150) {
      zombieXPosition = 1200;
      divZombie.style.left = `${zombieXPosition}px`;
    }
  }
              
              divZombie.style.left =`${zombieX}px`
              zombieX -= 10
              console.log(zombieX)
              
  
  
  
  const zombieTimeout = randomIntFromInterval(3000, 5000);
  setTimeout(zombieInterval, zombieTimeout);
  
  function zombieInterval() {
    setInterval(zombieMove, 10);
  }
  function randomIntFromInterval(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //zombie move end


// function shot(){
//     const world = document.querySelector(".gameContainer");
//     const bullet = document.createElement('div');
//     world.append(bullet)
//     bullet.classList.add("bullet")
// }


function shot() {
    const world = document.querySelector(".gameContainer");
    const hero = document.querySelector("#hero");
    const background = document.querySelectorAll(".back")
    const bulletDiv = document.createElement('div');
    const heroPos = divHero.getBoundingClientRect();

    world.append(bulletDiv)
    bulletDiv.classList.add("bulletContainerHero");
    bulletDiv.innerHTML = '<div class="bulletHero"></div>';
    bulletDiv.style.top = `${parseInt(heroPos.top) - 23}px`;
    // bulletDiv.style.left = `${parseInt(heroPos.left)}px`;

    // const bullets = [...document.querySelectorAll(".bulletContainerHero")];
    // bullets.forEach(element => {console.log(element.getBoundingClientRect().left, "bullet left");});
    // bullets.forEach(element => {
    //     if(parseInt(element.getBoundingClientRect().left) > 1556) {element.style.display = 'none';
    //     console.log(element, "check display")}
    // });

    if (parseInt(heroPos.top) > 558) {
        hero.classList.add("heroStandingShooting");
        // hero.classList.add("heroDie"); die tryiing
        setTimeout(function () {
            background.forEach(element => { element.classList.add("paused") });
        }, 200);
        setTimeout(function () {
            hero.classList.remove("heroStandingShooting")
            background.forEach(element => { element.classList.remove("paused") });
        }, 1000);
    }
    if (parseInt(heroPos.top) < 560) {
        hero.classList.add("heroFlyingShooting");
        setTimeout(function () { hero.classList.remove("heroFlyingShooting") }, 1000);
    }
    console.log(divHero.getBoundingClientRect());
    console.log(parseInt(heroPos.top), "hero position while shooting");
}


// document.addEventListener('keydown', function (e) {

//         console.log("shoot");
//         let hero = document.querySelector("#hero");
//         let background = document.querySelectorAll(".back")
//         hero.classList.add("heroStandingShooting")
//         shot();
//         background.forEach(element => { element.classList.add("paused")});
//         setTimeout(function(){
//             hero.classList.remove("heroStandingShooting")
//             background.forEach(element => { element.classList.remove("paused")});
//         }, 1000);
//     }
// });

// document.addEventListener('keypress', function(e) {
//     if (e.key == 'g') {
//         console.log(e)
//         zombie.style.left ="50px"
//     }
// })
// jump()

document.addEventListener('keydown', function (e) {
    if (e.key == 'b') {
        const heroPos = divHero.getBoundingClientRect();
        if (parseInt(heroPos.top) > 560) {
            let hero = document.querySelector("#hero");
            // hero.classList.add("heroJump")
            hero.classList.add("heroFlying")
            // setTimeout(function(){ hero.classList.add("heroJump") }, 1000);
            // setTimeout(function(){ hero.classList.add("heroFlying") }, 2000);
            jump();
        }

    }
});

// document.addEventListener('keydown', function (e) {
//     if (e.key == 'm') {
//         console.log("shoot");
//         let hero = document.querySelector("#hero");
//         hero.classList.add("heroFlyingShooting");
//         shot();
//         setTimeout(function () { hero.classList.remove("heroFlyingShooting") }, 1000);
//     }
// });



document.addEventListener('keydown', function (e) {
    if (e.key == 'l') {
        console.log("shoot");
        shot();
    }
});

// COMPONENT USUWAJACY WSZYTKO POZA PLANSZA

// const bullets = [...document.querySelectorAll(".bulletContainerHero")];


// const divsOutOfGameContainer = [...document.querySelectorAll("div")];
// divsOutOfGameContainer.forEach(element => {console.log(element.getBoundingClientRect().left, "bullet left");});
// const removeDivs = divsOutOfGameContainer.forEach(element => {
//     if(parseInt(element.getBoundingClientRect().left) > 1560
//     || parseInt(element.getBoundingClientRect().right) < 364) {element.style.display = 'none';
//     console.log(element, "check display")}
// });






const penguinJump = function () {
    console.log("penguinJump");

    const penguinContainer = document.querySelector(".penguinContainer");

    const gravity = 15;
    let metrNaPix = 19.2;
    let penguinStartX = parseInt(penguinContainer.getBoundingClientRect().left);
    let penguinStartY = parseInt(penguinContainer.getBoundingClientRect().top);
    let x_coord = penguinStartX; //pozycja penguin
    let y_coord = 495 //penguinStartY - 101;//penguinStartY;//445//dla top 562;

    let speed = 110 * metrNaPix; // 30 meters per second or 108 km/hour -- quite fast ...
    let angle = 100 * Math.PI / 180;  // 30 degree angle, moved to radians.
    let speed_x = speed * Math.cos(angle);
    let speed_y = speed * Math.sin(angle);  // now you have initial direction vector


    const fps = 60;
    let time_step = 1.0 / fps;    // every frame...


    setInterval(function () {
        // console.log(penguinStartY - 101,"ping - 101")
        // console.log(penguinStartY - 100, "pingwin Y przed if")


        // if (y_coord < penguinStartY-100 && x_coord > 350)
        if (y_coord < 496 && x_coord > 350){
            console.log(penguinStartY, "pingwin Y")
            x_coord -= speed_x * time_step //* metrNaPix;
            y_coord -= speed_y * time_step //* metrNaPix;

            //console.log(x_coord, y_coord, speed_x, speed_y);
            speed_y -= gravity * time_step * metrNaPix * metrNaPix;
            //   let hero = document.querySelector("#hero");
            penguinContainer.style.top = `${y_coord}px`;
            penguinContainer.style.left = `${x_coord}px`;


            speed_x *= 0.99;
            speed_y *= 0.99;
        }
    }, 1000 / fps);
}







function shotPenguin() {

    console.log("shot penguin");
    const world = document.querySelector(".gameContainer");
    const hero = document.querySelector("#penguin");
    const gameContainer = document.querySelector(".gameContainer")
    const containerLeft = gameContainer.getBoundingClientRect();
    const bulletDiv = document.createElement('div');
    const heroPos = divPenguin.getBoundingClientRect();

    world.append(bulletDiv)
    bulletDiv.classList.add("bulletContainerPenguin");
    bulletDiv.innerHTML = '<div class="bulletPenguin"></div>';
    bulletDiv.style.top = `${parseInt(heroPos.top)-50}px`;
    // bulletDiv.style.left = `${parseInt(heroPos.left)-480}px`;
    bulletDiv.style.left = `${parseInt(heroPos.left) - containerLeft.left - 130}px`;
    //130px od gameContainer.left
    console.log(bulletDiv.style.left, "bullet style left")
    // if (parseInt(heroPos.top) > 558) {
    //     hero.classList.add("heroStandingShooting");
    //     // hero.classList.add("heroDie"); die tryiing
    //     setTimeout(function () {
    //         background.forEach(element => { element.classList.add("paused") });
    //     }, 200);
    //     setTimeout(function () {
    //         hero.classList.remove("heroStandingShooting")
    //         background.forEach(element => { element.classList.remove("paused") });
    //     }, 1000);
    // }
    // if (parseInt(heroPos.top) < 560) {
    //     hero.classList.add("heroFlyingShooting");
    //     setTimeout(function () { hero.classList.remove("heroFlyingShooting") }, 1000);
    // }
    console.log(divHero.getBoundingClientRect());
    console.log(parseInt(heroPos.top), "penguin TOP position while shooting");
    console.log(parseInt(heroPos.left), "penguin LEFT position while shooting");
}


document.addEventListener('keydown', function (e) {
    if (e.key == 'p') {
        penguinJump();
        shotPenguin();
    }
});
// document.addEventListener('keydown', function (e) {
//     if (e.key == 'l') {
//         console.log("shoot");
//         let hero = document.querySelector("#hero");
//         let background = document.querySelectorAll(".back")
//         hero.classList.add("heroStandingShooting")
//         shot();
//         background.forEach(element => { element.classList.add("paused")});
//         setTimeout(function(){
//             hero.classList.remove("heroStandingShooting")
//             background.forEach(element => { element.classList.remove("paused")});
//         }, 1000);
//     }
// });

//     setInterval(function(){
//         console.log("2 interwal");
//         let divHero = document.querySelector("#divHero");
//         console.log(divHero.style.top, "style to divHero")
//         if( divHero.style.top == "245.055px"){
//             divHero.classList.remove("heroFlying")
//         }

// }, 100);

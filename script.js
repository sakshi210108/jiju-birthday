/* =========================================
   HAPPY BIRTHDAY JIJU WEBSITE
   MAIN JAVASCRIPT
========================================= */



// ================================
// ELEMENT REFERENCES
// ================================


const bootScreen =
document.getElementById("bootScreen");


const birthdayApp =
document.getElementById("birthdayApp");


const music =
document.getElementById("birthdayMusic");


const playBtn =
document.getElementById("playMusic");


const pauseBtn =
document.getElementById("pauseMusic");


const terminalText =
document.getElementById("terminalText");


const asciiArt =
document.getElementById("asciiArt");



const giftBox =
document.getElementById("giftBox");


const openGiftBtn =
document.getElementById("openGift");


const giftMessage =
document.getElementById("giftMessage");





// ================================
// WINDOWS BOOT SCREEN
// ================================


window.addEventListener(
"load",
()=>{


    setTimeout(()=>{


        bootScreen.style.opacity="0";


        bootScreen.style.transition=
        "1s";


        setTimeout(()=>{


            bootScreen.style.display=
            "none";


            birthdayApp.style.display=
            "block";


            startExperience();


        },1000);



    },3500);



});






// ================================
// MUSIC CONTROLS
// ================================



playBtn.onclick=()=>{


    music.play();


};



pauseBtn.onclick=()=>{


    music.pause();


};






// ================================
// LOAD ART.TXT
// ================================



fetch("art.txt")

.then(response=>response.text())

.then(data=>{


    asciiArt.textContent=data;


})

.catch(()=>{


    asciiArt.textContent=
    "🎂 HAPPY BIRTHDAY JIJU 🎂";


});







// ================================
// PYBIRTHDAYWISH TERMINAL
// ================================



const terminalLines=[


"Initializing PyBirthdayWish v3.0...",


"Loading birthday modules...",


"Connecting to happiness server...",


"Generating unlimited smiles...",


"Launching JIJU Birthday Celebration...",


"System Ready ✔"


];





let terminalIndex=0;


let charIndex=0;


function runTerminal(){



if(terminalIndex < terminalLines.length){


    if(charIndex < terminalLines[terminalIndex].length){


        terminalText.innerHTML +=
        terminalLines[terminalIndex][charIndex];


        charIndex++;


        setTimeout(
        runTerminal,
        20
        );


    }


    else{


        terminalText.innerHTML+="<br>";


        terminalIndex++;


        charIndex=0;


        setTimeout(
        runTerminal,
        200
        );


    }


}


}





function startExperience(){


    runTerminal();


}



/* =========================================
   GALAXY BACKGROUND ENGINE
========================================= */


const galaxyCanvas =
document.getElementById("galaxyCanvas");


const galaxyCtx =
galaxyCanvas.getContext("2d");



let galaxyStars=[];



function resizeGalaxy(){


    galaxyCanvas.width=
    window.innerWidth;


    galaxyCanvas.height=
    window.innerHeight;


}



window.addEventListener(
"resize",
resizeGalaxy
);



resizeGalaxy();






// CREATE STARS

function createGalaxyStars(){


    galaxyStars=[];


    for(let i=0;i<300;i++){


        galaxyStars.push({


            x:
            Math.random()
            *
            galaxyCanvas.width,


            y:
            Math.random()
            *
            galaxyCanvas.height,


            size:
            Math.random()*2+0.5,


            opacity:
            Math.random(),


            speed:
            Math.random()*0.02+0.005


        });



    }


}




createGalaxyStars();






// DRAW GALAXY


function animateGalaxy(){



galaxyCtx.clearRect(

0,

0,

galaxyCanvas.width,

galaxyCanvas.height

);





// dark space


let gradient=
galaxyCtx.createRadialGradient(

galaxyCanvas.width/2,

galaxyCanvas.height/2,

50,

galaxyCanvas.width/2,

galaxyCanvas.height/2,

galaxyCanvas.width

);



gradient.addColorStop(
0,
"#24104f"
);



gradient.addColorStop(
0.5,
"#080020"
);



gradient.addColorStop(
1,
"#000000"
);



galaxyCtx.fillStyle=
gradient;


galaxyCtx.fillRect(

0,

0,

galaxyCanvas.width,

galaxyCanvas.height

);






// stars


galaxyStars.forEach(star=>{


    star.opacity += star.speed;


    if(star.opacity>1 ||
       star.opacity<0.2){


        star.speed*=-1;


    }





    galaxyCtx.beginPath();


    galaxyCtx.arc(

    star.x,

    star.y,

    star.size,

    0,

    Math.PI*2

    );



    galaxyCtx.fillStyle=

    `rgba(255,255,255,${star.opacity})`;



    galaxyCtx.fill();



});




requestAnimationFrame(
animateGalaxy
);


}





animateGalaxy();








/* =========================================
   SHOOTING STARS
========================================= */


const shootingContainer=
document.getElementById(
"shootingStars"
);



function createShootingStar(){



const star=
document.createElement(
"div"
);



star.className=
"shooting-star";



star.style.left=
Math.random()*100+"vw";



star.style.top=
Math.random()*40+"vh";



shootingContainer.appendChild(
star
);



setTimeout(()=>{


    star.remove();


},2000);



}





setInterval(

createShootingStar,

2500

);







/* =========================================
   SHOOTING STAR STYLE CREATION
========================================= */


const shootingStyle=
document.createElement(
"style"
);



shootingStyle.innerHTML=`

.shooting-star{


position:fixed;

width:3px;

height:120px;

background:

linear-gradient(

white,

transparent

);


transform:

rotate(-45deg);


animation:

shoot 1.8s linear;


z-index:-1;


}


@keyframes shoot{


from{


opacity:1;

transform:

translate(0,0)

rotate(-45deg);


}


to{


opacity:0;


transform:

translate(-300px,300px)

rotate(-45deg);


}


}

`;



document.head.appendChild(
shootingStyle
);
/* =========================================
   GIFT OPENING SYSTEM
========================================= */


openGiftBtn.addEventListener(
"click",
()=>{


    giftBox.classList.add(
        "open"
    );


    giftMessage.classList.add(
        "show"
    );


    openGiftBtn.innerHTML=
    "🎉 Surprise Opened!";


    startCelebration();


});






// ================================
// FIREWORK CANVAS
// ================================


const fireworkCanvas =
document.getElementById(
"fireworkCanvas"
);


const fireCtx =
fireworkCanvas.getContext(
"2d"
);



function resizeFirework(){


    fireworkCanvas.width=
    window.innerWidth;


    fireworkCanvas.height=
    window.innerHeight;


}


window.addEventListener(
"resize",
resizeFirework
);


resizeFirework();





let fireworks=[];





class Firework{


constructor(){


this.x=
Math.random()
*
fireworkCanvas.width;


this.y=
fireworkCanvas.height;



this.targetY=
Math.random()
*
fireworkCanvas.height
*
0.5;


this.speed=
5;


this.exploded=false;


this.particles=[];


}




update(){



if(!this.exploded){


this.y-=this.speed;



if(this.y<=this.targetY){


this.explode();


}



}



else{


this.particles.forEach(
particle=>particle.update()
);


this.particles=
this.particles.filter(
particle=>particle.life>0
);


}



}




draw(){



if(!this.exploded){


fireCtx.beginPath();


fireCtx.arc(

this.x,

this.y,

3,

0,

Math.PI*2

);



fireCtx.fillStyle=
"white";


fireCtx.fill();



}


else{


this.particles.forEach(
particle=>particle.draw()
);


}



}





explode(){



this.exploded=true;



for(
let i=0;
i<80;
i++
){


this.particles.push(

new Particle(

this.x,

this.y

)

);



}



}



}







class Particle{


constructor(x,y){


this.x=x;

this.y=y;


this.angle=
Math.random()
*
Math.PI
*
2;


this.speed=
Math.random()*6+2;


this.velocityX=
Math.cos(this.angle)
*
this.speed;



this.velocityY=
Math.sin(this.angle)
*
this.speed;



this.life=100;



}




update(){


this.x+=this.velocityX;


this.y+=this.velocityY;


this.velocityY+=0.05;


this.life--;


}





draw(){


fireCtx.beginPath();



fireCtx.arc(

this.x,

this.y,

2,

0,

Math.PI*2

);



fireCtx.fillStyle=

`rgba(255,200,50,${this.life/100})`;



fireCtx.fill();


}



}






function animateFireworks(){



fireCtx.clearRect(

0,

0,

fireworkCanvas.width,

fireworkCanvas.height

);



fireworks.forEach(
firework=>{


firework.update();


firework.draw();



});



fireworks=
fireworks.filter(
firework=>

firework.particles.length>0

||
!firework.exploded

);



requestAnimationFrame(
animateFireworks
);



}




animateFireworks();






function launchFirework(){



fireworks.push(
new Firework()
);



}







function startCelebration(){



// launch multiple fireworks


for(
let i=0;
i<15;
i++
){


setTimeout(

launchFirework,

i*250

);


}



}
/* =========================================
   BALLOON SYSTEM
========================================= */


const balloonContainer =
document.getElementById(
"balloonContainer"
);



function createBalloon(){


const balloon =
document.createElement(
"div"
);



balloon.className=
"balloon";



balloon.style.left=
Math.random()*100+"%";



balloon.style.background=

`hsl(
${Math.random()*360},
80%,
60%
)`;



balloon.style.animationDuration=

(5+Math.random()*5)+"s";



balloonContainer.appendChild(
balloon
);



setTimeout(()=>{


balloon.remove();


},10000);



}





function startBalloons(){


setInterval(

createBalloon,

500

);


}








/* =========================================
   CONFETTI SYSTEM
========================================= */


const confettiContainer =
document.getElementById(
"confettiContainer"
);




function createConfetti(){


const confetti =
document.createElement(
"div"
);



confetti.className=
"confetti";



confetti.style.left=
Math.random()*100+"%";



confetti.style.background=

`hsl(
${Math.random()*360},
90%,
60%
)`;



confetti.style.animationDuration=

(3+Math.random()*4)+"s";



confettiContainer.appendChild(
confetti
);



setTimeout(()=>{


confetti.remove();


},7000);



}







function startConfetti(){


for(
let i=0;
i<150;
i++
){


setTimeout(

createConfetti,

i*15

);


}


}








/* =========================================
   FLOATING HEART SYSTEM
========================================= */


const heartContainer =
document.getElementById(
"heartContainer"
);




function createHeart(){


const heart =
document.createElement(
"div"
);



heart.className=
"heart";



heart.innerHTML=
"❤️";



heart.style.left=
Math.random()*100+"%";



heart.style.animationDuration=

(4+Math.random()*5)+"s";



heart.style.fontSize=

(20+Math.random()*30)+"px";



heartContainer.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},9000);



}






function startHearts(){


setInterval(

createHeart,

700

);


}







/* =========================================
   START ALL CELEBRATION EFFECTS
========================================= */


function startCelebrationEffects(){


startBalloons();


startConfetti();


startHearts();


}








// Connect effects with gift opening


openGiftBtn.addEventListener(
"click",
()=>{


startCelebrationEffects();


},
{
once:true
}

);








/* =========================================
   SCREENSHOT BUTTON
========================================= */


const screenshotBtn =
document.getElementById(
"screenshotBtn"
);




screenshotBtn.addEventListener(
"click",
()=>{


html2canvas(
document.body
)
.then(canvas=>{


const link =
document.createElement(
"a"
);


link.download=
"JIJU-Birthday-Moment.png";



link.href=
canvas.toDataURL();



link.click();



});



});/* =========================================
   ADVANCED MUSIC HANDLING
========================================= */


document.addEventListener(
"click",
()=>{


    if(
        music.paused &&
        birthdayApp.style.display==="block"
    ){

        music.play()
        .catch(()=>{});

    }


},
{
once:true
}

);






/* =========================================
   EXTRA GALAXY SPARKLES
========================================= */


function createSparkle(){


const sparkle =
document.createElement(
"div"
);



sparkle.innerHTML="✨";



sparkle.style.position="fixed";

sparkle.style.left=
Math.random()*100+"vw";


sparkle.style.top=
Math.random()*100+"vh";


sparkle.style.fontSize=
(10+Math.random()*20)+"px";


sparkle.style.opacity=
Math.random();


sparkle.style.pointerEvents=
"none";


sparkle.style.animation=
"sparkleFade 2s linear";



document.body.appendChild(
sparkle
);



setTimeout(()=>{


sparkle.remove();


},2000);



}





setInterval(

createSparkle,

800

);







const sparkleStyle=
document.createElement(
"style"
);


sparkleStyle.innerHTML=`

@keyframes sparkleFade{


0%{


transform:scale(0);


opacity:0;


}


50%{


opacity:1;


}


100%{


transform:scale(2);


opacity:0;


}


}

`;



document.head.appendChild(
sparkleStyle
);







/* =========================================
   PERFORMANCE OPTIMIZATION
========================================= */


let isMobile =
window.innerWidth < 600;



if(isMobile){


console.log(
"Mobile mode activated"
);


}




/* =========================================
   DOUBLE CLICK FIREWORKS
========================================= */


document.addEventListener(
"dblclick",
()=>{


for(
let i=0;
i<5;
i++
){


setTimeout(

launchFirework,

i*200

);


}



});






/* =========================================
   FINAL READY MESSAGE
========================================= */


console.log(
`
🎂 HAPPY BIRTHDAY JIJU 🎂

PyBirthdayWish System Loaded Successfully ✔

Galaxy: ONLINE
Fireworks: ONLINE
Gift System: ONLINE
Celebration: READY

`
);

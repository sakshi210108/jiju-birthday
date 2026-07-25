const screen = document.getElementById("screen");
const terminal = document.getElementById("terminal");
const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

const colors = [
    "#00ff00",
    "#00ffff",
    "#ffff00",
    "#ff66ff",
    "#ff4444",
    "#00aaff",
    "#ffffff"
];

// Start everything when the gift is clicked
startBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    terminal.style.display = "block";

    music.play().catch(() => {});

    startTyping();

});

function startTyping(){

    fetch("art.txt")
    .then(response => response.text())
    .then(text => {

        let i = 0;

        function type(){

            let html = "";

            // Increase this number for even faster typing
            for(let j=0;j<500 && i<text.length;j++){

                const color = colors[Math.floor(Math.random()*colors.length)];

                const ch = text[i];

                if(ch === "\n"){
                    html += "<br>";
                }else if(ch === " "){
                    html += "&nbsp;";
                }else{
                    html += `<span style="color:${color}">${ch}</span>`;
                }

                i++;

            }

            screen.insertAdjacentHTML("beforeend", html);

            terminal.scrollTop = terminal.scrollHeight;

            if(i<text.length){

                requestAnimationFrame(type);

            }else{

                fireworks();

            }

        }

        type();

    });

}

// Floating hearts
setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),8000);

},350);

// Fireworks
function fireworks(){

    const emojis=["🎆","🎇","✨","🎉","💥","🎊"];

    setInterval(()=>{

        const fire=document.createElement("div");

        fire.className="fire";

        fire.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        fire.style.left=Math.random()*100+"vw";

        fire.style.top=Math.random()*70+"vh";

        fire.style.fontSize=(30+Math.random()*50)+"px";

        document.body.appendChild(fire);

        setTimeout(()=>fire.remove(),1200);

    },250);

}

const screen=document.getElementById("screen");

const colors=[
"#00ff00",
"#00ffff",
"#ff00ff",
"#ffff00",
"#ff5555",
"#00aaff",
"#ffffff"
];

fetch("art.txt")
.then(r=>r.text())
.then(text=>{

let i=0;

function type(){

if(i<text.length){

const span=document.createElement("span");

span.textContent=text[i];

span.style.color=colors[Math.floor(Math.random()*colors.length)];

screen.appendChild(span);

i++;

screen.scrollTop=screen.scrollHeight;

setTimeout(type,0);

}

}

type();

});

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

},350);

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.innerHTML="✦";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(5+Math.random()*15)+"px";

document.body.appendChild(star);

}

window.onload=()=>{

document.getElementById("music").play().catch(()=>{});

};

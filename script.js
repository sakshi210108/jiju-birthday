const screen = document.getElementById("screen");

const colors = [
    "#00ff00",
    "#00ffff",
    "#ff00ff",
    "#ffff00",
    "#ff5555",
    "#00aaff",
    "#ffffff"
];

// Start music
window.onload = () => {
    const music = document.getElementById("music");
    music.play().catch(() => {});
};

// Load ASCII art
fetch("art.txt")
.then(response => response.text())
.then(text => {

    let i = 0;

    function type() {

        // Type 1000 characters per frame
        let html = "";

        for (let j = 0; j < 1000 && i < text.length; j++) {

            const color = colors[Math.floor(Math.random() * colors.length)];

            html += `<span style="color:${color}">${text[i]}</span>`;

            i++;
        }

        screen.insertAdjacentHTML("beforeend", html);

        screen.scrollTop = screen.scrollHeight;

        if (i < text.length) {
            requestAnimationFrame(type);
        } else {
            startCelebration();
        }
    }

    type();
});

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 300);

// Stars
for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "✦";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize = (5 + Math.random() * 12) + "px";

    document.body.appendChild(star);
}

// Fireworks after typing
function startCelebration() {

    setInterval(() => {

        const fire = document.createElement("div");

        const emoji = ["🎆", "🎇", "✨", "💥", "🎉", "🎊"];

        fire.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];

        fire.style.position = "fixed";

        fire.style.left = Math.random() * 100 + "vw";

        fire.style.top = Math.random() * 80 + "vh";

        fire.style.fontSize = (30 + Math.random() * 40) + "px";

        document.body.appendChild(fire);

        setTimeout(() => {
            fire.remove();
        }, 1200);

    }, 200);
}

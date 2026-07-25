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

fetch("art.txt")
.then(response => response.text())
.then(text => {

    let i = 0;

    function type() {

        // Type 20 characters every frame
        for (let j = 0; j < 20 && i < text.length; j++) {

            const span = document.createElement("span");

            span.textContent = text[i];

            span.style.color = colors[Math.floor(Math.random() * colors.length)];

            screen.appendChild(span);

            i++;
        }

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

    setTimeout(() => heart.remove(), 6000);

}, 400);

// Twinkling Stars
for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "✦";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize = (5 + Math.random() * 15) + "px";

    document.body.appendChild(star);
}

// Celebration after typing
function startCelebration() {

    // Play music
    document.getElementById("music").play().catch(() => {});

    // Fireworks
    setInterval(() => {

        const fire = document.createElement("div");

        const emojis = ["🎆","🎇","✨","💥","🎉"];

        fire.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        fire.style.position = "fixed";

        fire.style.left = Math.random() * 100 + "vw";

        fire.style.top = Math.random() * 70 + "vh";

        fire.style.fontSize = (30 + Math.random() * 40) + "px";

        document.body.appendChild(fire);

        setTimeout(() => fire.remove(), 1200);

    }, 250);
}

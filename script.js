const screen = document.getElementById("screen");

// Play music
window.onload = () => {
    document.getElementById("music").play().catch(() => {});
};

// Load the ASCII art
fetch("art.txt")
.then(response => response.text())
.then(text => {

    // Show the entire ASCII art instantly
    screen.textContent = text;

    // Start celebration immediately
    startCelebration();
});

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);

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

// Fireworks
function startCelebration() {

    setInterval(() => {

        const fire = document.createElement("div");

        const emoji = ["🎆","🎇","✨","💥","🎉","🎊"];

        fire.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];

        fire.style.position = "fixed";
        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 80 + "vh";
        fire.style.fontSize = (30 + Math.random() * 40) + "px";

        document.body.appendChild(fire);

        setTimeout(() => fire.remove(), 1200);

    }, 200);
}

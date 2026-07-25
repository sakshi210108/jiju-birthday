const button = document.getElementById("celebrateBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");
const ascii = document.getElementById("ascii");

const originalText = ascii.textContent;
ascii.textContent = "";

button.addEventListener("click", () => {

    button.style.display = "none";

    message.classList.remove("hidden");

    // Play music (if birthday.mp3 exists)
    music.play().catch(() => {});

    // Typing effect
    let i = 0;

    function type() {
        if (i < originalText.length) {
            ascii.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, 1); // Increase to 5-10 for slower typing
        }
    }

    type();

    // Confetti burst
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // Fireworks for 8 seconds
    const duration = 8000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 60,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 60,
            origin: { x: 1 }
        });

        confetti({
            particleCount: 60,
            spread: 360,
            ticks: 80,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.6
            }
        });

        if (Date.now() > end) {
            clearInterval(interval);
        }

    }, 500);

});

const button = document.getElementById("celebrateBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");
const ascii = document.getElementById("ascii");

const originalText = ascii.textContent;
ascii.textContent = "";

button.addEventListener("click", () => {

    button.style.display = "none";
    message.classList.remove("hidden");

    // Play music
    music.currentTime = 0;
    music.volume = 0.6;

    music.play()
        .then(() => console.log("Music Playing"))
        .catch(err => console.error("Music Error:", err));

    // Typing effect
    let i = 0;

    function type() {
        if (i < originalText.length) {
            ascii.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, 1);
        }
    }

    type();

    // Confetti
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

});

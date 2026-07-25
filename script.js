function openGift() {

    const gift = document.getElementById("gift");
    const message = document.getElementById("message");

    gift.classList.add("open");

    setTimeout(() => {

        message.classList.remove("hidden");
        createConfetti();

    }, 800);

}



function createConfetti() {

    const confettiBox = document.getElementById("confetti");

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 3 + "s";
        confetti.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ",100%,50%)";

        confettiBox.appendChild(confetti);

    }

}


// Try to start music automatically
window.addEventListener("load", () => {

    const music = document.getElementById("birthdaySong");

    music.volume = 0.7;

    music.play().catch(() => {
        console.log("Browser blocked autoplay.");
    });

});

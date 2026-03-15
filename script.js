
const music = document.getElementById("bgMusic");

function startMusic() {
    music.play().catch(() => {});
    document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);

function toggleReason(index) {
    const reasons = document.querySelectorAll(".reasons p");
    reasons[index].classList.toggle("hidden");


}

document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");

    let clickCount = 0;

    noBtn.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    noBtn.addEventListener("click", function() {
        clickCount++;
        if (clickCount === 1) {
            noBtn.textContent = "¿Seguro? 😢";
        } else if (clickCount === 2) {
            noBtn.textContent = "Piensa bien 🥺";
        } else if (clickCount === 3) {
            noBtn.textContent = "No puedes decir no 😈";
        } else {
            noBtn.textContent = "Ok, presiona 'No Yes' 😘";
        }
    });

    yesBtn.addEventListener("click", function() {
        yesBtn.classList.add("heart-animation");

        // Create floating hearts
        for (let i = 0; i < 10; i++) {
            createHeart();
        }

        setTimeout(function() {
            window.location.href = "reasons.html"; // Redirect after animation
        }, 1500);
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);

        // Position heart near the button
        const btnRect = yesBtn.getBoundingClientRect();
        heart.style.left = `${btnRect.left + btnRect.width / 2}px`;
        heart.style.top = `${btnRect.top}px`;

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photo-gallery img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close");
    lightbox.appendChild(closeButton);

    // Open Lightbox
    images.forEach(image => {
        image.addEventListener("click", function () {
            lightboxImage.src = this.src;
            lightbox.classList.add("active");
        });
    });

    // Close Lightbox
    closeButton.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    // Close on Escape Key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }
    });
});

const countDownDate = new Date("2026-06-21T00:00:00").getTime();

let x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Es hora!";
    }
}, 1000);

function showLoveMessage() {
    document.getElementById("heart-message").classList.remove("hidden");
}

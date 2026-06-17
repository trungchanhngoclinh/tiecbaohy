```javascript
// LOADER

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 1200);

});


// OPEN INVITATION

const openBtn = document.getElementById("openInvitation");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    intro.style.display = "none";

    mainContent.style.display = "block";

    music.play().catch(() => {
        console.log("Autoplay blocked");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// MUSIC BUTTON

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

    } else {

        music.pause();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';
    }

});


// COUNTDOWN

const weddingDate =
new Date("2026-07-05T11:00:00");

function updateCountdown() {

    const now = new Date();

    const diff = weddingDate - now;

    if (diff <= 0) {

        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;

        return;
    }

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (diff % (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (diff % (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (diff % (1000 * 60))
            /
            1000
        );

    document.getElementById("days")
        .textContent = days;

    document.getElementById("hours")
        .textContent = hours;

    document.getElementById("minutes")
        .textContent = minutes;

    document.getElementById("seconds")
        .textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);


// LIGHTBOX

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// FLOWERS

const flowersContainer =
document.getElementById("flowers");

function createFlower() {

    const flower =
        document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "🌸";

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        (10 + Math.random() * 25) + "px";

    flower.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    flowersContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 12000);
}

setInterval(createFlower, 350);


// RSVP DEMO

const form =
document.getElementById("rsvpForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Cảm ơn bạn đã xác nhận tham dự ❤️"
    );

    form.reset();

});


// SCROLL ANIMATION

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;

            entry.target.style.transform =
                "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document
.querySelectorAll(
    ".timeline-item, .event-card, .gallery-grid img"
)
.forEach(item => {

    item.style.opacity = 0;

    item.style.transform =
        "translateY(40px)";

    item.style.transition =
        "all .8s ease";

    observer.observe(item);

});


// BACK TO TOP

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.left = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.background = "#ff4d6d";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
```

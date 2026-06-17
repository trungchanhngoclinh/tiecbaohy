const weddingDate = new Date("2026-12-07 08:00:00");

function updateCountdown(){

    const now = new Date();

    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(
        (diff % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (diff % (1000*60*60))
        /(1000*60)
    );

    document.getElementById("countdown").innerHTML =
        `${days} ngày ${hours} giờ ${minutes} phút`;
}

setInterval(updateCountdown,1000);

updateCountdown();

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize =
        (10 + Math.random()*20)+"px";

    heart.style.animationDuration =
        (5 + Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(createHeart,300);

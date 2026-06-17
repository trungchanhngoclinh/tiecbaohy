// Hiệu ứng mở thiệp như cánh cửa
const card = document.getElementById('weddingCard');
const left = card.querySelector('.card-left');
const right = card.querySelector('.card-right');
const inside = card.querySelector('.inside');

card.addEventListener('click', () => {
  left.style.transform = 'rotateY(-180deg)';
  right.style.transform = 'rotateY(180deg)';
  inside.style.opacity = '1';
});

// Hoa rơi
function createFlower() {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = Math.random() * window.innerWidth + 'px';
  flower.style.animationDuration = (3 + Math.random() * 5) + 's';
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 500);

// Nhạc nền
const music = document.getElementById('bg-music');
music.volume = 0.5; // chỉnh âm lượng

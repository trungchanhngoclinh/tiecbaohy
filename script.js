document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const flipBtn = document.querySelector(".flip-btn");
  const form = document.getElementById("weddingForm");
  const namesEl = document.querySelector(".names");
  const dateEl = document.querySelector(".date");
  const locationEl = document.querySelector(".location");

  flipBtn.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bride = document.getElementById("bride").value;
    const groom = document.getElementById("groom").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("locationInput").value;

    namesEl.textContent = `${groom} ❤ ${bride}`;
    dateEl.textContent = `Ngày cưới: ${date}`;
    locationEl.textContent = `Địa điểm: ${location}`;

    // Lật lại mặt trước để xem kết quả
    card.classList.remove("flipped");
  });
});

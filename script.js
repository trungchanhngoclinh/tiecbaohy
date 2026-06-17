document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("weddingForm");
  const namesEl = document.querySelector(".names");
  const dateEl = document.querySelector(".date");
  const locationEl = document.querySelector(".location");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bride = document.getElementById("bride").value;
    const groom = document.getElementById("groom").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("locationInput").value;

    // Cập nhật nội dung thiệp
    namesEl.textContent = `${groom} ❤ ${bride}`;
    dateEl.textContent = `Ngày cưới: ${date}`;
    locationEl.textContent = `Địa điểm: ${location}`;
  });
});

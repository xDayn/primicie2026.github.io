// COUNTDOWN
const targetDate = new Date("2026-06-13T10:30:00");

setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "Slávnosť sa začala 🙏";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `${days} dní • ${hours} hod • ${minutes} min`;
}, 1000);

// MODAL
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openForm");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

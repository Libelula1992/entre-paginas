/*
 * Entre Páginas — Chá da Ludy
 * Configuração: informe abaixo o telefone que receberá as confirmações.
 * Use DDI + DDD + número, apenas dígitos. Ex.: 5511999999999
 */
const WHATSAPP_PHONE = "5511968701548";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rua%20Henry%20Palmer%2C%207B%2C%20Parelheiros%2C%20S%C3%A3o%20Paulo%2C%20SP%2C%2004884-150";
const RSVP_MESSAGE = "Olá! Gostaria de confirmar minha presença no Chá da Ludy, no dia 22 de novembro.";

const coverScreen = document.querySelector("#cover-screen");
const experience = document.querySelector("#experience");
const book = document.querySelector("#book");
const bookHit = document.querySelector("#book-hit");
const openButton = document.querySelector("#open-button");
const restartTop = document.querySelector("#restart-top");
const pagesTrack = document.querySelector("#pages-track");
const pages = [...document.querySelectorAll(".story-page")];
const dots = [...document.querySelectorAll(".page-dot")];
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const pageNumber = document.querySelector("#page-number");
const progressLine = document.querySelector("#progress-line");
const musicToggle = document.querySelector("#music-toggle");
const musicLabel = document.querySelector("#music-label");
const confirmButton = document.querySelector("#confirm-button");
const toast = document.querySelector("#toast");

let currentPage = 0;
let toastTimer;
let musicPlaying = false;
const audioElement = new Audio("assets/audio/cha-da-lud.mp3");
audioElement.loop = true;
audioElement.preload = "none";
audioElement.volume = 0.34;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4600);
}

function openInvitation() {
  if (coverScreen.classList.contains("is-closing")) return;
  book.classList.add("is-opening");
  window.setTimeout(() => book.classList.add("is-open"), 80);
  coverScreen.classList.add("is-closing");
  startMusic();
  window.setTimeout(() => {
    coverScreen.hidden = true;
    experience.hidden = false;
    experience.setAttribute("aria-hidden", "false");
    document.body.classList.add("invitation-open");
    updatePage(0);
  }, 900);
}

function handleBookKey(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
}

function updatePage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  pagesTrack.style.transform = `translateX(-${currentPage * 50}%)`;
  pageNumber.textContent = String(currentPage + 1).padStart(2, "0");
  progressLine.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
  pages.forEach((page, pageIndex) => {
    const active = pageIndex === currentPage;
    page.classList.toggle("is-active", active);
    page.setAttribute("aria-hidden", String(!active));
  });
  dots.forEach((dot, dotIndex) => {
    const active = dotIndex === currentPage;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-selected", String(active));
  });
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
}

function resetExperience() {
  window.clearTimeout(toastTimer);
  coverScreen.hidden = false;
  coverScreen.classList.remove("is-closing");
  experience.hidden = true;
  experience.setAttribute("aria-hidden", "true");
  book.classList.remove("is-open", "is-opening");
  updatePage(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openWhatsApp() {
  if (!WHATSAPP_PHONE.trim()) {
    showToast("O WhatsApp ainda está aguardando o número de confirmação da família. Assim que ele for configurado, este botão abrirá a mensagem automaticamente.");
    return;
  }
  const cleanPhone = WHATSAPP_PHONE.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(RSVP_MESSAGE)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

function startMusic() {
  if (musicPlaying) return;
  audioElement.play().then(() => {
    musicPlaying = true;
    musicToggle.classList.add("is-playing");
    musicToggle.setAttribute("aria-pressed", "true");
    musicToggle.setAttribute("aria-label", "Pausar trilha do Chá da Ludy");
    musicLabel.textContent = "pausar trilha";
  }).catch(() => {
    musicPlaying = false;
    showToast("Toque no controle de música para iniciar a trilha do Chá da Ludy.");
  });
}

function pauseMusic() {
  musicPlaying = false;
  audioElement.pause();
  musicToggle.classList.remove("is-playing");
  musicToggle.setAttribute("aria-pressed", "false");
  musicToggle.setAttribute("aria-label", "Ativar música ambiente");
  musicLabel.textContent = "trilha do chá";
}

bookHit.addEventListener("click", openInvitation);
bookHit.addEventListener("keydown", handleBookKey);
openButton.addEventListener("click", openInvitation);
restartTop.addEventListener("click", resetExperience);
prevButton.addEventListener("click", () => updatePage(currentPage - 1));
nextButton.addEventListener("click", () => updatePage(currentPage + 1));
dots.forEach((dot) => dot.addEventListener("click", () => updatePage(Number(dot.dataset.target))));
confirmButton.addEventListener("click", openWhatsApp);
musicToggle.addEventListener("click", () => (musicPlaying ? pauseMusic() : startMusic()));

// Mantém o link de mapa explícito no DOM mesmo quando o endereço for editado no futuro.
document.querySelector("#maps-button").href = MAPS_URL;
updatePage(0);

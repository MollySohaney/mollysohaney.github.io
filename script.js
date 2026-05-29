const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const currentPage = (() => {
  const file = window.location.pathname.split("/").pop();
  return file && file.length ? file : "index.html";
})();

document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

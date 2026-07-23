document.addEventListener("DOMContentLoaded", () => {
  const basketIcon = document.querySelector(".icon-basket");
  const cartContent = document.querySelector(".cart-content");

  basketIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartContent.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!cartContent.contains(e.target) && !basketIcon.contains(e.target)) {
      cartContent.classList.remove("active");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});

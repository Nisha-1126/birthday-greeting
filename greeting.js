document.addEventListener("DOMContentLoaded", function() {
  const username = localStorage.getItem("username") || "Guest";
  document.getElementById("greetMsg").textContent = `Hello, ${username} 🫣❤️`;

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false
  });

  const nextButtons = document.querySelectorAll(".nextBtn");
  nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      swiper.slideNext();
    });
  });
});

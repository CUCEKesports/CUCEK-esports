
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const message = this.querySelector("textarea").value;

  if (!name || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Thanks, your message has been submitted!");
  this.reset();
});
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
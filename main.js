document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  setTimeout(() => {
    hero.classList.add("show");
  }, 500);
});

AOS.init({
  once: false,
  easing: "ease-out-cubic",
  duration: 1000,
  offset: 100,
});

const floatingImage = document.querySelector(".about-image");
if (floatingImage) {
  let direction = 1;
  setInterval(() => {
    floatingImage.style.transform = `translateY(${
      direction * 5
    }px) scale(1.02)`;
    direction *= -1;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const commonOptions = {
    loop: true,
    speed: 5000,
    slidesPerView: 1,
    spaceBetween: 50,
    allowTouchMove: false,
    freeMode: {
      enabled: true,
      sticky: false,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
    },
  };

  const clientsSwiper = new Swiper(".clients-swiper", {
    ...commonOptions,
  });

  const providersSwiper = new Swiper(".providers-swiper", {
    ...commonOptions,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false,
    },
  });

  const allSwipers = [clientsSwiper, providersSwiper];

  document.querySelectorAll(".swiper").forEach((swiperEl, index) => {
    swiperEl.addEventListener("mouseenter", () => {
      allSwipers[index].autoplay.stop();
    });
    swiperEl.addEventListener("mouseleave", () => {
      allSwipers[index].autoplay.start();
    });
  });
});

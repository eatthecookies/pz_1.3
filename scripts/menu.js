// Получаем элементы
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mainNav = document.querySelector(".header__nav");

// Проверяем наличие элементов
if (menuToggle && mainNav) {
  // Создаем оверлей для меню
  const navOverlay = document.createElement("div");
  navOverlay.className = "header__nav-overlay";
  document.body.appendChild(navOverlay);

  // Функция открытия/закрытия меню
  function toggleMenu() {
    // Переключаем состояния
    menuToggle.classList.toggle("active");
    mainNav.classList.toggle("active");
    navOverlay.classList.toggle("active");

    // Блокируем скролл при открытом меню
    document.body.style.overflow = mainNav.classList.contains("active")
      ? "hidden"
      : "";
  }

  // Обработчики событий
  menuToggle.addEventListener("click", toggleMenu);
  if (menuClose) {
    menuClose.addEventListener("click", toggleMenu);
  }
  navOverlay.addEventListener("click", toggleMenu);

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll(".header__navigation-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });

  // Закрытие меню при нажатии Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Закрытие меню при изменении размера окна (если перешли на десктоп)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && mainNav.classList.contains("active")) {
      toggleMenu();
    }
  });
}

// Кнопка "Наверх"
const scrollTopButton = document.getElementById("scrollTop");

if (scrollTopButton) {
  // Показываем кнопку после скролла
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopButton.classList.add("visible");
    } else {
      scrollTopButton.classList.remove("visible");
    }
  });

  // Прокрутка к началу страницы
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

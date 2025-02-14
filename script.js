// Контент для страниц (русский и английский)
const translations = {
  ru: {
    home: {
      title: "Добро пожаловать!",
      description: "Это домашняя страница Николая Баркалова.",
      menu: {
        home: "Главная",
        portfolio: "Портфолио",
        blog: "Блог",
        projects: "Проекты",
        contacts: "Контакты",
      },
    },
    blog: {
      title: "Блог",
      description: "Здесь вы найдете мои последние статьи.",
      menu: {
        home: "Главная",
        portfolio: "Портфолио",
        blog: "Блог",
        projects: "Проекты",
        contacts: "Контакты",
      },
    },
    portfolio: {
      title: "Портфолио",
      description: "Мои проекты и работы.",
      menu: {
        home: "Главная",
        portfolio: "Портфолио",
        blog: "Блог",
        projects: "Проекты",
        contacts: "Контакты",
      },
    },
    projects: {
      title: "Проекты",
      description: "Здесь представлены мои проекты.",
      menu: {
        home: "Главная",
        portfolio: "Портфолио",
        blog: "Блог",
        projects: "Проекты",
        contacts: "Контакты",
      },
    },
    contacts: {
      title: "Контакты",
      description: "Свяжитесь со мной.",
      menu: {
        home: "Главная",
        portfolio: "Портфолио",
        blog: "Блог",
        projects: "Проекты",
        contacts: "Контакты",
      },
    },
  },
  en: {
    home: {
      title: "Welcome!",
      description: "This is the home page of Nikolay Barkalov.",
      menu: {
        home: "Home",
        portfolio: "Portfolio",
        blog: "Blog",
        projects: "Projects",
        contacts: "Contacts",
      },
    },
    blog: {
      title: "Blog",
      description: "Here you can find my latest articles.",
      menu: {
        home: "Home",
        portfolio: "Portfolio",
        blog: "Blog",
        projects: "Projects",
        contacts: "Contacts",
      },
    },
    portfolio: {
      title: "Portfolio",
      description: "Check out my projects and work.",
      menu: {
        home: "Home",
        portfolio: "Portfolio",
        blog: "Blog",
        projects: "Projects",
        contacts: "Contacts",
      },
    },
    projects: {
      title: "Projects",
      description: "Here are my projects.",
      menu: {
        home: "Home",
        portfolio: "Portfolio",
        blog: "Blog",
        projects: "Projects",
        contacts: "Contacts",
      },
    },
    contacts: {
      title: "Contacts",
      description: "Feel free to reach out to me.",
      menu: {
        home: "Home",
        portfolio: "Portfolio",
        blog: "Blog",
        projects: "Projects",
        contacts: "Contacts",
      },
    },
  },
};

// Текущий язык и страница
let currentLanguage = "ru";
let currentPage = "home";

// Элементы DOM
const pageContent = document.getElementById("page-content");
const pwd = document.querySelector(".pwd");
const sidebarItems = document.querySelectorAll(".sidebar li");
const languageSelect = document.getElementById("language-select");
const terminalInput = document.getElementById("terminal-input");
const terminalHint = document.getElementById("terminal-hint");
const themeSelect = document.getElementById("theme-select");
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");
const menuTexts = document.querySelectorAll(".menu-text");
const githubStatsImg = document.getElementById("github-stats-img");

// Функция для обновления контента на странице
function updateContent() {
  const translation = translations[currentLanguage][currentPage];
  if (!translation) return;

  // Обновляем заголовок и описание страницы
  pageContent.innerHTML = `
    <h1>${translation.title}</h1>
    <p>${translation.description}</p>
  `;

  // Обновляем текст в меню
  menuTexts.forEach((menuText, index) => {
    menuText.textContent = translation.menu[Object.keys(translation.menu)[index]];
  });

  // Обновляем pwd
  pwd.textContent = `~/${currentPage}`;
}

// Обработчик для sidebar
sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    currentPage = item.getAttribute("data-page");
    updateContent();
  });
});

// Обработчик для выбора языка
languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  updateContent();
});

// Обработчик для терминала
terminalInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const command = terminalInput.value.trim();
    terminalInput.value = "";
    if (command === "clear") {
      pageContent.innerHTML = "";
      terminalHint.style.opacity = "0";
    } else if (command === "help") {
      pageContent.innerHTML = `
        <p>Available commands:</p>
        <ul>
          <li>clear - Clear the terminal</li>
          <li>help - Show this help message</li>
        </ul>
      `;
      terminalHint.style.opacity = "0";
    } else {
      terminalHint.textContent = `Command not found: ${command}`;
      terminalHint.style.opacity = "1";
      setTimeout(() => {
        terminalHint.style.opacity = "0";
      }, 3000);
    }
  }
});

// Обработчик для смены темы
themeSelect.addEventListener("change", () => {
  const selectedTheme = themeSelect.value;
  document.body.className = selectedTheme;
});

// Обработчик для включения/выключения музыки
musicToggle.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggle.classList.remove("fa-volume-mute");
    musicToggle.classList.add("fa-music");
  } else {
    backgroundMusic.pause();
    musicToggle.classList.remove("fa-music");
    musicToggle.classList.add("fa-volume-mute");
  }
});

// Воспроизведение музыки после первого взаимодействия
document.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
}, { once: true });

// Инициализация
updateContent();

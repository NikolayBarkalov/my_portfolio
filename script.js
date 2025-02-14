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

// Элементы для динамического контента
const introText = document.getElementById("intro-text");
const testedTitle = document.getElementById("tested-title");
const testedList = document.getElementById("tested-list");
const skillsTitle = document.getElementById("skills-title");
const skillsList = document.getElementById("skills-list");
const readTitle = document.getElementById("read-title");
const readList = document.getElementById("read-list");

// Функция для загрузки данных из JSON
async function loadData() {
  try {
    const response = await fetch('data/data.json'); // Путь к JSON-файлу
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    return null;
  }
}

// Функция для обновления контента на странице
function updateContent(data) {
  if (!data) return;

  // Обновляем текст в левой-верхней секции
  if (introText) {
    introText.innerHTML = data.intro; // Используем innerHTML для вставки HTML
  }

  // Обновляем "Что тестировал"
  if (testedTitle && testedList) {
    testedTitle.textContent = data.tested.title;
    testedList.innerHTML = data.tested.items.map(item => `<li>${item}</li>`).join('');
  }

  // Обновляем "Навыки и технологии"
  if (skillsTitle && skillsList) {
    skillsTitle.textContent = data.skills.title;
    skillsList.innerHTML = data.skills.items.map(item => `<li>${item}</li>`).join('');
  }

  // Обновляем "Что прочитал"
  if (readTitle && readList) {
    readTitle.textContent = data.read.title;
    readList.innerHTML = data.read.items.map(item => `<li>${item}</li>`).join('');
  }
}

// Обновление темы GitHub Stats
function updateGitHubStatsTheme() {
  const theme = document.body.className;
  const themeMap = {
    "gruvbox-dark-hard": "gruvbox",
    "gruvbox-light-hard": "gruvbox_light",
    "monokai": "monokai",
    "solarized-dark": "solarized-dark",
    "solarized-light": "solarized-light",
    "dracula": "dracula",
    "nord": "nord",
    "one-dark": "onedark",
  };
  const themeName = themeMap[theme] || "gruvbox";
  githubStatsImg.src = `https://github-readme-stats.vercel.app/api?username=NikolayBarkalov&show_icons=true&theme=${themeName}`;
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
  updateGitHubStatsTheme();
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
async function init() {
  const data = await loadData();
  updateContent(data);
}

// Запуск
init();
// script.js
const translations = {
  ru: {
      home: {
          intro: "Николай, 28 лет, в <span class='highlight'>поиске работы</span>, в меру упитанный мужчина, обладатель сокровенных знаний, закрыл ящик Пандоры, забрал душу у Шанг Тсунга, прыгал из самолета без парашюта, горел и танул, делал сам себе искусственное дыхание, выиграл в шахматы, используя только пешки, а так же смог выжить в <u>гос-учреждении</u>.",
          tested: {
              title: "Что тестировал:",
              items: [
                  "Веб-приложения",
                  "Мобильные приложения",
                  "API",
                  "Базы данных"
              ]
          },
          skills: {
              title: "Навыки и технологии",
              items: [
                  "Автоматизация тестирования (Selenium, Appium)",
                  "Ручное тестирование",
                  "SQL",
                  "Git",
                  "Postman"
              ]
          },
          read: {
              title: "Что прочитал:",
              items: [
                  "«Совершенный код» Стив Макконнелл",
                  "«Чистая архитектура» Роберт Мартин",
                  "«Тестирование Дот Ком» Роман Савин"
              ]
          }
      },
      portfolio: {
          intro: "Контент для портфолио на русском языке.",
          tested: {
              title: "Что тестировал (портфолио):",
              items: [
                  "Проект 1",
                  "Проект 2"
              ]
          },
          skills: {
              title: "Навыки (портфолио):",
              items: [
                  "Навык 1",
                  "Навык 2"
              ]
          },
          read: {
              title: "Что прочитал (портфолио):",
              items: [
                  "Книга 1",
                  "Книга 2"
              ]
          }
      },
      blog: {
          intro: "Контент для блога на русском языке.",
          tested: {
              title: "Что тестировал (блог):",
              items: [
                  "Статья 1",
                  "Статья 2"
              ]
          },
          skills: {
              title: "Навыки (блог):",
              items: [
                  "Навык 3",
                  "Навык 4"
              ]
          },
          read: {
              title: "Что прочитал (блог):",
              items: [
                  "Книга 3",
                  "Книга 4"
              ]
          }
      },
      projects: {
          intro: "Контент для проектов на русском языке.",
          tested: {
              title: "Что тестировал (проекты):",
              items: [
                  "Проект A",
                  "Проект B"
              ]
          },
          skills: {
              title: "Навыки (проекты):",
              items: [
                  "Навык 5",
                  "Навык 6"
              ]
          },
          read: {
              title: "Что прочитал (проекты):",
              items: [
                  "Книга 5",
                  "Книга 6"
              ]
          }
      },
      contacts: {
          intro: "Контактная информация на русском языке.",
          tested: {
              title: "Что тестировал (контакты):",
              items: [
                  "Информация 1",
                  "Информация 2"
              ]
          },
          skills: {
              title: "Навыки (контакты):",
              items: [
                  "Навык 7",
                  "Навык 8"
              ]
          },
          read: {
              title: "Что прочитал (контакты):",
              items: [
                  "Книга 7",
                  "Книга 8"
              ]
          }
      }
  },
  en: {
      home: {
          intro: "Nikolay, 28 years old, looking for a job...",
          tested: {
              title: "What I tested:",
              items: [
                  "Web applications",
                  "Mobile applications",
                  "API",
                  "Databases"
              ]
          },
          skills: {
              title: "Skills and technologies",
              items: [
                  "Test automation (Selenium, Appium)",
                  "Manual testing",
                  "SQL",
                  "Git",
                  "Postman"
              ]
          },
          read: {
              title: "What I read:",
              items: [
                  "«Code Complete» Steve McConnell",
                  "«Clean Architecture» Robert Martin",
                  "«Testing Dot Com» Roman Savin"
              ]
          }
      },
      portfolio: {
          intro: "Portfolio content in English.",
          tested: {
              title: "What I tested (portfolio):",
              items: [
                  "Project 1",
                  "Project 2"
              ]
          },
          skills: {
              title: "Skills (portfolio):",
              items: [
                  "Skill 1",
                  "Skill 2"
              ]
          },
          read: {
              title: "What I read (portfolio):",
              items: [
                  "Book 1",
                  "Book 2"
              ]
          }
      },
      blog: {
          intro: "Blog content in English.",
          tested: {
              title: "What I tested (blog):",
              items: [
                  "Article 1",
                  "Article 2"
              ]
          },
          skills: {
              title: "Skills (blog):",
              items: [
                  "Skill 3",
                  "Skill 4"
              ]
          },
          read: {
              title: "What I read (blog):",
              items: [
                  "Book 3",
                  "Book 4"
              ]
          }
      },
      projects: {
          intro: "Projects content in English.",
          tested: {
              title: "What I tested (projects):",
              items: [
                  "Project A",
                  "Project B"
              ]
          },
          skills: {
              title: "Skills (projects):",
              items: [
                  "Skill 5",
                  "Skill 6"
              ]
          },
          read: {
              title: "What I read (projects):",
              items: [
                  "Book 5",
                  "Book 6"
              ]
          }
      },
      contacts: {
          intro: "Contact information in English.",
          tested: {
              title: "What I tested (contacts):",
              items: [
                  "Information 1",
                  "Information 2"
              ]
          },
          skills: {
              title: "Skills (contacts):",
              items: [
                  "Skill 7",
                  "Skill 8"
              ]
          },
          read: {
              title: "What I read (contacts):",
              items: [
                  "Book 7",
                  "Book 8"
              ]
          }
      }
  }
};

let currentLanguage = "ru";
let currentPage = "home";

const pageContent = document.getElementById("page-content");
const pwd = document.querySelector(".pwd");
const sidebarItems = document.querySelectorAll(".sidebar li");
const languageSelect = document.getElementById("language-select");
const terminalInput = document.getElementById("terminal-input");
const terminalHint = document.getElementById("terminal-hint");
const themeSelect = document.getElementById("theme-select");
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");

const introText = document.getElementById("intro-text");
const testedTitle = document.getElementById("tested-title");
const testedList = document.getElementById("tested-list");
const skillsTitle = document.getElementById("skills-title");
const skillsList = document.getElementById("skills-list");
const readTitle = document.getElementById("read-title");
const readList = document.getElementById("read-list");

function updateContent() {
  const langData = translations[currentLanguage][currentPage];

  introText.innerHTML = langData.intro;
  testedTitle.textContent = langData.tested.title;
  testedList.innerHTML = langData.tested.items.map(item => `<li>${item}</li>`).join('');
  skillsTitle.textContent = langData.skills.title;
  skillsList.innerHTML = langData.skills.items.map(item => `<li>${item}</li>`).join('');
  readTitle.textContent = langData.read.title;
  readList.innerHTML = langData.read.items.map(item => `<li>${item}</li>`).join('');
}

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
      currentPage = item.getAttribute("data-page");
      updateContent();
  });
});

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  updateContent();
});

themeSelect.addEventListener("change", () => {
  const theme = themeSelect.value;
  document.body.className = theme; // Устанавливаем класс напрямую
});

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

document.addEventListener("click", () => {
  if (backgroundMusic.paused) {
      backgroundMusic.play();
  }
}, { once: true });

updateContent();

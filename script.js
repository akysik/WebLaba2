// ===== Налаштування =====
const VARIANT = 6; // номер варіанта (порядковий номер у журналі групи)


// ===== 1. Інформація про ОС та браузер → localStorage → футер =====
function saveSystemInfo() {
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language,
        languages: navigator.languages.join(', '),
        cookiesEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        cpuCores: navigator.hardwareConcurrency,
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    // localStorage зберігає лише рядки, тому перетворюємо значення через String()
    Object.entries(info).forEach(([key, value]) => {
        localStorage.setItem(key, String(value));
    });
}

function showStorage() {
    const lines = [];

    // Перебираємо всі ключі, які є у localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        lines.push(`${key}: ${localStorage.getItem(key)}`);
    }

    document.getElementById('storage-info').textContent = lines.join('\n');
}


// ===== 2. Відгуки роботодавців з JSONPlaceholder =====
async function loadReviews() {
    const list = document.getElementById('reviews-list');

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const comments = await response.json();
        list.textContent = '';

        // Виводимо коментарі у тому порядку, в якому їх повернув сервер
        comments.forEach((comment) => {
            const card = document.createElement('article');
            card.className = 'review';

            const title = document.createElement('h3');
            title.textContent = comment.name;

            const email = document.createElement('small');
            email.textContent = comment.email;

            const body = document.createElement('p');
            body.textContent = comment.body;

            card.append(title, email, body);
            list.append(card);
        });
    } catch (error) {
        list.textContent = `Не вдалося завантажити відгуки: ${error.message}`;
    }
}


// ===== 3. Модальне вікно зворотного зв'язку через 1 хвилину =====
const modal = document.getElementById('modal');

// Якщо користувач уже закрив вікно в цій сесії — не показуємо його знову
if (!sessionStorage.getItem('feedbackClosed')) {
    setTimeout(() => {
        modal.hidden = false;
    }, 60000); // 60 000 мс = 1 хвилина
}

document.getElementById('modal-close').addEventListener('click', () => {
    modal.hidden = true;
    sessionStorage.setItem('feedbackClosed', 'true');
});


// ===== 4. Денна / нічна тема =====
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    themeToggle.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

// Автоматично: денна тема з 07:00 до 21:00, нічна — в інший час
const hour = new Date().getHours();
let currentTheme = hour >= 7 && hour < 21 ? 'light' : 'dark';
applyTheme(currentTheme);

// Ручне перемикання кнопкою
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
});


// ===== Запуск =====
saveSystemInfo();
showStorage();
loadReviews();

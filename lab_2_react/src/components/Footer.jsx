import { useEffect, useState } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState({});

    // Виконується один раз після монтування компонента
    useEffect(() => {
        // 1. Зчитуємо дані про систему та браузер
        localStorage.setItem('userAgent', navigator.userAgent);
        localStorage.setItem('platform', navigator.platform);
        localStorage.setItem('language', navigator.language);

        // 2. Отримуємо збережені дані з localStorage
        setSystemInfo({
            userAgent: localStorage.getItem('userAgent'),
            platform: localStorage.getItem('platform'),
            language: localStorage.getItem('language'),
        });
    }, []);

    return (
        <footer className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mt-5 text-center border-t-4 border-blue-600">
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                &copy; 2026 Артур Зінчук Вікторович.
                Резюме створено в рамках
                лабораторної роботи №4.
            </p>

            <h3 className="mt-4 mb-2 font-bold text-blue-900 dark:text-blue-200">
                Інформація про систему (localStorage)
            </h3>

            <ul className="text-left text-xs text-gray-600 dark:text-gray-300 break-all space-y-1">
                {Object.entries(systemInfo).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;

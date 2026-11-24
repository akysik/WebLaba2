
function Header({ theme, onToggleTheme }) {
    return (
        <header className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-5">
            <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200 text-center mb-6">
                Артур Зінчук Вікторович
            </h1>

            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                Студент | Cybersecurity and Information Protection
            </p>

            <address className="not-italic text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-6 space-y-2">
                    <li>Місто: Львів, Україна</li>
                    <li>
                        Email:{" "}
                        <a
                            href="mailto:artur.zinchuk.kb.2025@lpnu.ua"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:underline break-all"
                        >
                            artur.zinchuk.kb.2025@lpnu.ua
                        </a>
                    </li>
                </ul>
            </address>

            {/* Кнопка ручного перемикання теми */}
            <button
                type="button"
                onClick={onToggleTheme}
                className="mt-5 block mx-auto rounded-full border-2 border-blue-600 px-5 py-2 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900"
            >
                {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
            </button>
        </header>
    );
}

export default Header;

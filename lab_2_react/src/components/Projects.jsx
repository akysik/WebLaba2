
function Projects() {
    return (
        <section
            id="projects"
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-5 border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-5 pb-2 border-b-2 border-blue-600">
                Projects &amp; Experience
            </h2>

            <div className="space-y-6">
                <article className="pb-5 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                        Навчальні проєкти з програмування
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Розробка програм на Python для вирішення
                        алгоритмічних та математичних задач.
                        Використання Git для контролю версій
                        і збереження результатів роботи.
                    </p>
                </article>

                <article className="pb-5 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                        Основи комп'ютерних мереж
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Вивчення принципів роботи комп'ютерних
                        мереж, налаштування мережевого обладнання
                        та основ мережевої безпеки.
                    </p>
                </article>

                <article>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                        Веброзробка
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Створення вебсторінок за допомогою HTML5.
                        Вивчення структури вебдокументів,
                        семантичних тегів та основ React.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Projects;

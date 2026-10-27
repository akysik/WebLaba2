
function About() {
    return (
        <section
            id="about"
            className="bg-white p-6 rounded-xl shadow-sm mb-5 border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-2xl font-bold text-blue-600 mb-5 pb-2 border-b-2 border-blue-600">
                About Me
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
                Мене цікавить сфера інформаційних технологій,
                особливо принципи роботи комп'ютерних систем,
                мереж та способи захисту інформації.
                Під час навчання я поступово освоюю
                програмування, роботу з мережевими технологіями
                та основи кібербезпеки.
            </p>

            <p className="text-gray-700 leading-relaxed">
                Найбільше мені подобаються практичні завдання,
                де можна самостійно розібратися в роботі
                певної технології, знайти причину проблеми
                та спосіб її вирішення.
                У майбутньому планую поглиблювати знання
                в галузі кібербезпеки
                та системного адміністрування.
            </p>
        </section>
    );
}

export default About;

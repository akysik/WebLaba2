
function Education() {
    return (
        <section
            id="education"
            className="bg-white p-6 rounded-xl shadow-sm mb-5 border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-2xl font-bold text-blue-600 mb-5 pb-2 border-b-2 border-blue-600">
                Education
            </h2>

            <article>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                    НУ «Львівська політехніка»
                </h3>

                <p className="text-gray-700 leading-relaxed mb-3">
                    Спеціальність: Cybersecurity and Information Protection
                </p>

                <p className="text-gray-700 leading-relaxed mb-3">
                    Освітній рівень: Бакалавр
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Період навчання:{" "}
                    <time dateTime="2025">2025</time>
                    {" – Present"}
                </p>
            </article>
        </section>
    );
}

export default Education;


function Languages() {
    return (
        <section
            id="languages"
            className="bg-white p-6 rounded-xl shadow-sm mb-5 border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-2xl font-bold text-blue-600 mb-5 pb-2 border-b-2 border-blue-600">
                Languages
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>
                    <strong>Українська</strong> — рідна
                </li>

                <li>
                    <strong>Англійська</strong> — Intermediate (B1)
                </li>
            </ul>
        </section>
    );
}

export default Languages;

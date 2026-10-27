
function Header() {
    return (
        <header className="bg-white p-6 rounded-xl shadow-sm mb-5">
            <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">
                Артур Зінчук Вікторович
            </h1>

            <p className="text-lg italic text-gray-700 mb-4">
                Студент | Cybersecurity and Information Protection
            </p>

            <address className="not-italic text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                    <li>Місто: Львів, Україна</li>
                    <li>
                        Email:{" "}
                        <a
                            href="mailto:artur.zinchuk.kb.2025@lpnu.ua"
                            className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                        >
                            artur.zinchuk.kb.2025@lpnu.ua
                        </a>
                    </li>
                </ul>
            </address>
        </header>
    );
}

export default Header;

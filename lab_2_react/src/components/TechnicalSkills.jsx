
function TechnicalSkills() {
    return (
        <section
            id="technical-skills"
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-5 border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-5 pb-2 border-b-2 border-blue-600">
                Technical Skills
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                    Programming:
                    <strong> Python, HTML5, основи SQL.</strong>
                </li>

                <li>
                    Version Control:
                    <strong> Git, GitHub.</strong>
                </li>

                <li>
                    Development Tools:
                    <strong> Visual Studio Code, PyCharm.</strong>
                </li>

                <li>
                    Operating Systems:
                    <strong> Windows, Linux.</strong>
                </li>

                <li>
                    Networking:
                    <strong> Основи TCP/IP, DNS, HTTP.</strong>
                </li>

                <li>
                    Cybersecurity:
                    <strong>
                        {" Основи інформаційної безпеки, "}
                        захист даних та мереж.
                    </strong>
                </li>

                <li>
                    Office &amp; Productivity:
                    <strong>
                        {" Microsoft Office, Google Workspace."}
                    </strong>
                </li>
            </ul>
        </section>
    );
}

export default TechnicalSkills;

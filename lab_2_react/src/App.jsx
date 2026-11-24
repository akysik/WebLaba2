import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичний вибір теми при першому завантаженні:
    // 07:00–21:00 — денна (light), в інший час — нічна (dark)
    useEffect(() => {
        const hour = new Date().getHours();
        setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
    }, []);

    // Ручне перемикання кнопкою в шапці
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div
            className={`min-h-screen bg-gray-100 dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors ${
                theme === 'dark' ? 'dark' : ''
            }`}
        >
            <div className="max-w-4xl mx-auto">
                <Header theme={theme} onToggleTheme={toggleTheme} />

                <main>
                    <About />
                    <Education />
                    <TechnicalSkills />
                    <Projects />
                    <SoftSkills />
                    <Languages />
                    <Reviews />
                </main>

                <Footer />
            </div>

            <ContactForm />
        </div>
    );
}

export default App;

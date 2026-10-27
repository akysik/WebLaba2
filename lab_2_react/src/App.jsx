
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Header />

                <main>
                    <About />
                    <Education />
                    <TechnicalSkills />
                    <Projects />
                    <SoftSkills />
                    <Languages />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default App;

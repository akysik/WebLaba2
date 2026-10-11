
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
        <div>
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
    );
}

export default App;

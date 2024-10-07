import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import About from "./sections/About";
import Cursor from "./components/Cursor";
import Footer from "./sections/Footer";
import "./App.scss";

function App() {
    const [isDesktop, setIsDesktop] = useState(true);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            setTheme(currentTheme);
        }
    }, []);

    return (
        <div className="darkmode" id={`${theme}`}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main>
                <Hero />
                <Works />
                <About />
            </main>
            <Footer />
        </div>
    );
}

export default App;

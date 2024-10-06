import { useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import Cursor from './components/Cursor';
import Stack from './sections/Stack'
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
      {/* <Cursor isDesktop={isDesktop} /> */}
          <main>














     
          </main>
    </div>
  )
}

export default App

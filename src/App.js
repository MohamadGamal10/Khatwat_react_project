import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes , Route} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 300
    })
  }, []);
  return (
    <div className="App">
    <ScrollToTop />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    </Routes>
    </div>
  );
}

export default App;

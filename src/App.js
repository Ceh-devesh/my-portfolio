import Header from "./components/Header";
import Home from "./components/Home";
import Skill from './components/Skill.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {

  
  return (
    <>
    <Header />
    <Home/>
    <About/>
    <Skill/>
    <Contact/>
    <Toaster/>
    <Footer/>
    
    
    </>
  );
}

export default App;




import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import Home from "./components/home/Home.jsx";
import About from"./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
// import Services from './components/services/Services.jsx';
import Qualifications from './components/qualifications/Qualifications';
import Work from './components/work/Work';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className='main'>
           <Home/>
           <About/>
           <Skills/>
           {/* <Services/> */}
           <Qualifications/>
           <Work/>
           {/* <Testimonials/> */}
           <Contact/>
        </main>
        <Footer/>
        <ScrollUp/>
    </div>
  );
}

export default App;

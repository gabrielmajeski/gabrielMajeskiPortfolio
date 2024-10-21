import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/about/About';
import Projects from './Components/projects/Projects';
import Footer from './Components/Footer';
import Contact from './Components/contact/Contact';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

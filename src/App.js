import './App.css';
import { useRef } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  const pageRefs = useRef({});
  return (
    <div className='App'>
      <Nav pageRefs={pageRefs} />
      <Hero />
      <About pageRefs={pageRefs} />
      <Projects pageRefs={pageRefs} />
      <Contact pageRefs={pageRefs} />
      <Footer />
    </div>
  );
};

export default App;

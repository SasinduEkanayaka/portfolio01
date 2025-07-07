import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Journey from './components/Journey';
import Cursor from './components/Cursor';
import { themeContext } from './Context';
import { useContext } from 'react';
function App() {
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black':'',
      color : darkMode? 'white': ''
    }}>
      <Cursor />
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Journey />
        <Work />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;

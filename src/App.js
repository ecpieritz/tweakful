import './scss/main.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/tweakful/' element={<Home />} />
          <Route path='/tweakful/about' element={<About />} />
          <Route path='/tweakful/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

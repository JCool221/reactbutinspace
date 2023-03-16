import './App.css';
import Starfield from './components/starfield/starfield';
import NavBar from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import BreathingShapes from './components/BreathingShapes/BreathingShapes';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './components/contactMe/ContactMe';
import YouLost from './components/youLost/YouLost';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className='body'>

      <Starfield />
      <NavBar />
      <div className='app-container'>
        <Routes>
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/BreathingShapes' element={<BreathingShapes />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Contact' element={<ContactMe />} />
          <Route path='/' element={<AboutMe />} />
          <Route path='*' element={<YouLost />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;

import './App.css';
import Starfield from './components/starfield/starfield';
import NavBar from './components/navbar';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import BreathingShapes from './components/BreathingShapes/BreathingShapes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

    <Starfield />
    <NavBar />
    <div className='app-container'>
    <Routes>
      <Route path='/AboutMe' element={<AboutMe/>} />
      <Route path='/Portfolio' element={<Portfolio/>} />
      <Route path='/BreathingShapes' element={<BreathingShapes/>} />

    </Routes>

    </div>
    {/* <BreathingShapes /> */}
    </div>
  );
}

export default App;

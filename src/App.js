import { useState } from 'react';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import logo  from './intain_logo.png';
import './App.css';
import { Muitable } from './components/muitable';

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='App'>
      <header>
      <img src={logo} alt="Logo" className="logo" onClick={() => setShowNav(!showNav)} />
      </header>
      {showNav && <Navbar />}
      <div className='container'>
      <p className='deal'>
        Deal Creation
      </p>
      <div className='oval'>
      <p className='tranche'>
        Add Tranche
      </p>
      </div>
      </div>
      <Muitable/>
    </div>
  );
}

export default App;
import { useState } from 'react';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import logo  from './intain_logo.png';
import './App.css';
import { Muitable } from './components/muitable';
import AddTrancheModal from './components/AddTrancheModal';
import { Button } from '@mui/material';
import MOCK_DATA from './components/MOCK_DATA.json';
import axios from 'axios';

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [mockData, setMockData] = useState([]);


  const addNewEntry = (newEntry) => {
    setMockData([...mockData, newEntry]);

    localStorage.setItem('mockData', JSON.stringify([...mockData, newEntry]));
  };

  const handleAddTrancheClick = () => {
    setOpenModal(true);
  };

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
      <Button onClick={() => setOpenModal(true)}>Add Tranche</Button>
      </div>
      </div>
      <Muitable data={mockData} addNewEntry={addNewEntry}/>
      <AddTrancheModal open={openModal} handleClose={() => setOpenModal(false)} addNewEntry={addNewEntry} />
    </div>
  );
}

export default App;
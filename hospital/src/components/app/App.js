import React from 'react';
import './App.css';
import doctorsPhoto from './doctors.jpg';


function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="LeftContent">КНП "Мостиська міська лікарня"</div>
        <div className="RightContent">м.Мостиська, вул. Я.Мудрого, 111</div>
        <div className="OrangePart">+380912345678</div>
      </header>
      <div className="GridContainer">
        <div className="Photo"><img src={doctorsPhoto} alt="Doctors" /></div>
        <div className="Buttons">
          <button>Записатись на прийом</button>
          <button>Інструкція запису</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CarItem from './component/CarItem';
import carData from './component/carData';
import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the score
  const [score, setScore] = useState(0);
  const [perClick, setPerClick] = useState(1)
  const [totalPoints, setTotalPoints] = useState(0)

  // Function to handle the button click
  const handleClick = () => {
    setScore(score + 1);
    setTotalPoints(totalPoints + perClick);
  };
  

const carList = carData.map((car, index ) => { return <CarItem myCar={car} key={index} />;});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Maker</h1>
        <p>Score: {score}</p>
        <button onClick={handleClick}>Click me!</button>
        <h3>Points: {totalPoints}</h3>
        <img className="Image-Width" scr={carData} />
        <div>{carList}</div>
      </header>
    </div>
  );
}

export default App;


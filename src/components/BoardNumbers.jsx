import React from 'react'
import { useState, useEffect } from 'react'
import s from './styles/beggining.module.css'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const BoardNumbers = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleClick = (number) => {
    if (selectedNumbers.length < 4) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
  };

  const correctKey = () => {
    if (
      selectedNumbers.length === 4 &&
      selectedNumbers[0] === '1' &&
      selectedNumbers[1] === '2' &&
      selectedNumbers[2] === '3' &&
      selectedNumbers[3] === '4'
    ) {
      alert('¡Código correcto!');
    }
  };

  return (
    <div className={s.board}>
      <section>
        <div>
          <input type="text" value={selectedNumbers.join("")} disabled />
        </div>
      </section>
      <div className={s.game}>
        {numbers.map((number, index) => (
          <button onClick={() => handleClick(number)} key={number} className="">
            {number}
          </button>
        ))}
        <button onClick={handleClear}>Limpiar</button>
        <button onClick={correctKey}>Probar</button>
      </div>
    </div>
  );
};

export default BoardNumbers;
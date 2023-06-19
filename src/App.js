import './App.css';
import logoImage from './images/freeCodeCamp-logo2.png'
import Logo from './components/logo'
import Button from './components/button';
import Screen from './components/screen';
import BotonClear from './components/clearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = value => {
    setInput(input + value)
  };
  const calcularResultado = () => {
    if (input) {
        setInput(parseFloat(evaluate(input).toFixed(10)))
    } else {
      alert('Por favor inserta alguna operación')
    }
  };
  return (
    <div className="App">
      <div className='logo-container'>
        <Logo
        logo={logoImage}
        alt='freeCodeCamp logo picture'
        width='300px'
        />
      </div>
      <div className='container-calculator'>
        <div className='fila'>
          <Screen
            input={input}
          />
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={calcularResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

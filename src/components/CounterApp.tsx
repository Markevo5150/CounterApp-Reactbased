import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CounterApp.css';

export const CounterApp = ({ value }) => {
  const [ counter, setCounter ] = useState (0);
  const add1 = () => {
    setCounter (counter + 1)
    console.log('Counter Added');
  }

  const less1 = () => {
    setCounter (counter - 1)
    console.log('Counter Less')
  }

  const reset = () => {
    setCounter (value)
  }

  return (
    <>
      <div className='counter-app'>
        <h1 className='app-title'>CounterApp</h1>
        <h2 className='counter-display'>{ counter }</h2>
        <div className='button-section'>
          <button className='add-button' onClick={ add1 }>  +1  </button>
          <button className='less-button' onClick={ less1 }> -1 </button>
          <button className='reset-button' onClick={ reset }> reset </button>
        </div>
      </div>
    </>
    );
}

CounterApp.proptypes = {
    value: PropTypes.number.isRequired
}
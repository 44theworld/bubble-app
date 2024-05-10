// App.js
import React, { useState, useEffect } from 'react';
import MovingComponent from './MovingComponent';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [inputTextList, setInputTextList] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddText = () => {
    if (inputText) {
      setInputTextList([...inputTextList, inputText]);
      setInputText('');
    }
  };

  return (
    <div className='container'>
      <div className='textArea'> 
      {inputTextList.map((text, index) => <MovingComponent key={index} inputText={text} />)}
      </div>
      <div className='inputArea'>
        <input type='text' value={inputText} onChange={handleInputChange} />
        <button onClick={handleAddText}>生成</button>
      </div>
    </div>
  );
};

export default App;
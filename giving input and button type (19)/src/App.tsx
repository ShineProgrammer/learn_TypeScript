import { log } from 'console';
import React, { useState } from 'react';
import Article from './component/Article';
import { stringify } from 'querystring';
import Button from './component/button/Button';





function App() {

  const handleclick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
    
  }

  const handlechange = (event : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    console.log(event.target.value);

  }

  

  return (
    <div className="App">
      <button onClick={handleclick}>Click</button>

      <input type="text" onChange={handlechange} />
    </div>

    

  );
}

export default App;

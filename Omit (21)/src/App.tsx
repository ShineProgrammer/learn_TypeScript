import { log } from 'console';
import React, { useState } from 'react';
import Article from './component/Article';
import { stringify } from 'querystring';
import Button from './component/button/Button';

type User1 = {
  name: string;
  age: number
}


type User2 = Omit<User1, "age">

// الان 
//age رو حذف کرد


function App() {

  return (
    <div className="App">
      wd
    </div>
  );
}

export default App;

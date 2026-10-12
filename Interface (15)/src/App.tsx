import { log } from 'console';
import React, { useState } from 'react';
import Article from './component/Article';
import { stringify } from 'querystring';





function App() {

  const [state, setState] = useState<string>("Sepehr")

  

  return (
    <div className="App">
      <Article value={state} onchange={setState}/>
    </div>
  );
}

export default App;

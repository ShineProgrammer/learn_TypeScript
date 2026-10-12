import { log } from 'console';
import React, { useState } from 'react';
import Article from './component/Article';


type State = {
  name: string;
  age: number
}


function App() {

  const [state, setState] = useState<State | null>(null)

  return (
    <div className="App">
      <Article  />

      {
        state?.name
      }
    </div>
  );
}

export default App;
